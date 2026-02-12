/**
 * Meta Conversions API (CAPI) - Utility
 * 
 * Envia eventos server-side para a API de Conversões do Meta.
 * Trabalha em conjunto com o Meta Pixel para deduplicação.
 * 
 * Documentação: https://developers.facebook.com/docs/marketing-api/conversions-api
 */

// Configuração
const META_PIXEL_ID = '1199614378426776';
const META_ACCESS_TOKEN = 'EAACl9lpzrmQBQqaeKavZAjJqdfWszAoQBQIF4b2eC4eXyssS4uZCfRgKffy28SrBI3JaitcHO7c7pPuj3vHyAvHbrNpdLyubxS464xZCGqmoFKZCgUvEOXZCNNfZAnb4bP1GzfZCSRhcvjg5sMJWhmPWAecTLsjhdjYXUxIRD2Hz5Av6CPLb6ednB7ZAl696SLi4FQZDZD';
const META_API_VERSION = 'v21.0';
const META_API_URL = `https://graph.facebook.com/${META_API_VERSION}/${META_PIXEL_ID}/events`;

/**
 * Gera um event_id único para deduplicação entre Pixel e CAPI
 */
export function generateEventId(): string {
    return `${Date.now()}-${Math.random().toString(36).substring(2, 11)}`;
}

/**
 * Faz hash SHA-256 de um valor (para dados do usuário)
 * A Meta exige que dados PII sejam hasheados antes do envio
 */
async function hashValue(value: string): Promise<string> {
    const encoder = new TextEncoder();
    const data = encoder.encode(value.trim().toLowerCase());
    const hashBuffer = await crypto.subtle.digest('SHA-256', data);
    const hashArray = Array.from(new Uint8Array(hashBuffer));
    return hashArray.map(b => b.toString(16).padStart(2, '0')).join('');
}

/**
 * Coleta dados do usuário disponíveis no browser
 */
function getUserData() {
    const fbp = getCookie('_fbp');
    const fbc = getCookie('_fbc') || getFbcFromUrl();

    return {
        client_user_agent: navigator.userAgent,
        ...(fbp && { fbp }),
        ...(fbc && { fbc }),
    };
}

/**
 * Obtém cookie pelo nome
 */
function getCookie(name: string): string | null {
    const match = document.cookie.match(new RegExp('(^| )' + name + '=([^;]+)'));
    return match ? decodeURIComponent(match[2]) : null;
}

/**
 * Gera fbc a partir do parâmetro fbclid na URL
 */
function getFbcFromUrl(): string | null {
    const urlParams = new URLSearchParams(window.location.search);
    const fbclid = urlParams.get('fbclid');
    if (fbclid) {
        return `fb.1.${Date.now()}.${fbclid}`;
    }
    return null;
}

/**
 * Interface para dados customizados do evento
 */
interface CustomData {
    currency?: string;
    value?: number;
    content_name?: string;
    content_category?: string;
    content_ids?: string[];
    content_type?: string;
    num_items?: number;
    [key: string]: unknown;
}

/**
 * Interface para dados do usuário (opcionais, serão hasheados)
 */
interface UserInfo {
    email?: string;
    phone?: string;
    firstName?: string;
    lastName?: string;
    city?: string;
    state?: string;
    zipCode?: string;
    country?: string;
}

/**
 * Envia um evento para a API de Conversões do Meta
 * 
 * @param eventName - Nome do evento (ex: 'PageView', 'InitiateCheckout', 'Purchase')
 * @param eventId - ID único para deduplicação (deve ser o mesmo enviado via Pixel)
 * @param customData - Dados customizados do evento
 * @param userInfo - Informações do usuário (serão hasheadas automaticamente)
 */
export async function sendMetaEvent(
    eventName: string,
    eventId: string,
    customData?: CustomData,
    userInfo?: UserInfo
): Promise<void> {
    try {
        // Coleta dados automáticos do browser
        const userData = getUserData();

        // Adiciona dados hasheados do usuário se fornecidos
        if (userInfo) {
            if (userInfo.email) {
                (userData as Record<string, string>).em = await hashValue(userInfo.email);
            }
            if (userInfo.phone) {
                (userData as Record<string, string>).ph = await hashValue(userInfo.phone);
            }
            if (userInfo.firstName) {
                (userData as Record<string, string>).fn = await hashValue(userInfo.firstName);
            }
            if (userInfo.lastName) {
                (userData as Record<string, string>).ln = await hashValue(userInfo.lastName);
            }
            if (userInfo.city) {
                (userData as Record<string, string>).ct = await hashValue(userInfo.city);
            }
            if (userInfo.state) {
                (userData as Record<string, string>).st = await hashValue(userInfo.state);
            }
            if (userInfo.zipCode) {
                (userData as Record<string, string>).zp = await hashValue(userInfo.zipCode);
            }
            if (userInfo.country) {
                (userData as Record<string, string>).country = await hashValue(userInfo.country);
            }
        }

        // Monta o payload do evento
        const eventData = {
            data: [
                {
                    event_name: eventName,
                    event_time: Math.floor(Date.now() / 1000),
                    event_id: eventId,
                    event_source_url: window.location.href,
                    action_source: 'website',
                    user_data: userData,
                    ...(customData && { custom_data: customData }),
                },
            ],
            // test_event_code: 'TEST12345', // Descomente para testar no Events Manager
        };

        // Envia para a API de Conversões
        const response = await fetch(`${META_API_URL}?access_token=${META_ACCESS_TOKEN}`, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
            },
            body: JSON.stringify(eventData),
        });

        if (!response.ok) {
            const errorData = await response.json();
            console.error('[Meta CAPI] Erro ao enviar evento:', errorData);
        } else {
            const result = await response.json();
            console.log(`[Meta CAPI] Evento "${eventName}" enviado com sucesso:`, result);
        }
    } catch (error) {
        // Silenciosamente falha para não afetar a experiência do usuário
        console.error('[Meta CAPI] Erro:', error);
    }
}

/**
 * Dispara o evento no Pixel (browser) E na CAPI (server) com deduplicação
 * 
 * @param eventName - Nome do evento padrão do Meta
 * @param customData - Dados customizados
 * @param userInfo - Dados do usuário (opcional)
 */
export function trackMetaEvent(
    eventName: string,
    customData?: CustomData,
    userInfo?: UserInfo
): void {
    const eventId = generateEventId();

    // 1. Dispara via Pixel (browser-side)
    if (typeof window !== 'undefined' && (window as unknown as Record<string, unknown>).fbq) {
        const fbq = (window as unknown as Record<string, (...args: unknown[]) => void>).fbq;
        fbq('track', eventName, customData || {}, { eventID: eventId });
        console.log(`[Meta Pixel] Evento "${eventName}" disparado com eventID: ${eventId}`);
    }

    // 2. Dispara via CAPI (server-side)
    sendMetaEvent(eventName, eventId, customData, userInfo);
}

/**
 * Eventos pré-configurados para facilitar o uso
 */
export const MetaEvents = {
    /** Dispara PageView (já disparado automaticamente pelo Pixel, aqui envia via CAPI também) */
    pageView: () => {
        const eventId = generateEventId();
        // O Pixel já dispara PageView automaticamente. Enviamos apenas via CAPI.
        sendMetaEvent('PageView', eventId);
    },

    /** Dispara quando o usuário inicia o checkout */
    initiateCheckout: (contentName: string, value: number, contentId?: string) => {
        trackMetaEvent('InitiateCheckout', {
            content_name: contentName,
            currency: 'BRL',
            value: value,
            content_type: 'product',
            ...(contentId && { content_ids: [contentId] }),
            num_items: 1,
        });
    },

    /** Dispara quando o usuário visualiza conteúdo */
    viewContent: (contentName: string, value?: number) => {
        trackMetaEvent('ViewContent', {
            content_name: contentName,
            ...(value && { currency: 'BRL', value }),
        });
    },

    /** Dispara quando o usuário adiciona ao carrinho */
    addToCart: (contentName: string, value: number) => {
        trackMetaEvent('AddToCart', {
            content_name: contentName,
            currency: 'BRL',
            value: value,
            content_type: 'product',
        });
    },

    /** Dispara Lead (captura de informação do usuário) */
    lead: (contentName?: string) => {
        trackMetaEvent('Lead', {
            ...(contentName && { content_name: contentName }),
        });
    },

    /** Dispara evento de compra completa */
    purchase: (contentName: string, value: number, contentId?: string) => {
        trackMetaEvent('Purchase', {
            content_name: contentName,
            currency: 'BRL',
            value: value,
            content_type: 'product',
            ...(contentId && { content_ids: [contentId] }),
            num_items: 1,
        });
    },
};
