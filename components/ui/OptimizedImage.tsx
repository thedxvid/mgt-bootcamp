import React from 'react';

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  objectFit?: 'cover' | 'contain' | 'fill' | 'none' | 'scale-down';
}

/**
 * OptimizedImage component for cross-browser compatibility
 * Features:
 * - Lazy loading for below-the-fold images
 * - WebP support with fallback
 * - fetchPriority for LCP images
 * - Proper aspect ratio with width/height
 */
export const OptimizedImage: React.FC<OptimizedImageProps> = ({
  src,
  alt,
  className = '',
  width,
  height,
  priority = false,
  objectFit = 'cover',
}) => {
  const [isLoaded, setIsLoaded] = React.useState(priority); // Skip fade-in for priority images
  const [hasError, setHasError] = React.useState(false);

  const handleLoad = () => {
    setIsLoaded(true);
  };

  const handleError = () => {
    setHasError(true);
    console.error(`Failed to load image: ${src}`);
  };

  const imageStyle: React.CSSProperties = {
    objectFit,
    transition: priority ? 'none' : 'opacity 0.3s ease-in-out',
    opacity: isLoaded ? 1 : 0,
  };

  // Generate WebP src if original is JPG/PNG
  const webpSrc = src.replace(/\.(jpe?g|png)$/i, '.webp');
  const hasWebp = webpSrc !== src;

  return (
    <div className={`relative overflow-hidden ${className}`} style={{ width, height }}>
      {!isLoaded && !hasError && (
        <div className="absolute inset-0 bg-neutral-800 animate-pulse" />
      )}

      {hasError ? (
        <div className="absolute inset-0 flex items-center justify-center bg-neutral-800 text-neutral-400">
          <span className="text-sm">Failed to load image</span>
        </div>
      ) : hasWebp ? (
        <picture>
          <source srcSet={webpSrc} type="image/webp" />
          <img
            src={src}
            alt={alt}
            loading={priority ? 'eager' : 'lazy'}
            decoding={priority ? 'sync' : 'async'}
            fetchPriority={priority ? 'high' : 'auto'}
            onLoad={handleLoad}
            onError={handleError}
            style={imageStyle}
            className="w-full h-full"
            {...(width && { width })}
            {...(height && { height })}
          />
        </picture>
      ) : (
        <img
          src={src}
          alt={alt}
          loading={priority ? 'eager' : 'lazy'}
          decoding={priority ? 'sync' : 'async'}
          fetchPriority={priority ? 'high' : 'auto'}
          onLoad={handleLoad}
          onError={handleError}
          style={imageStyle}
          className="w-full h-full"
          {...(width && { width })}
          {...(height && { height })}
        />
      )}
    </div>
  );
};

export default OptimizedImage;
