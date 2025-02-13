import React, { useState } from "react";
import { ImageOff } from "lucide-react";

interface ImageWithFallbackProps
  extends React.ImgHTMLAttributes<HTMLImageElement> {
  fallbackSrc?: string;
}

const ImageWithFallback = ({
  src,
  alt,
  fallbackSrc = "https://images.unsplash.com/photo-1560415755-bd80d06eda60?auto=format&fit=crop&q=80",
  className,
  ...props
}: ImageWithFallbackProps) => {
  const [error, setError] = useState(false);

  const handleError = () => {
    if (!error) {
      setError(true);
    }
  };

  if (error) {
    return (
      <div
        className={`flex items-center justify-center bg-muted ${className}`}
        {...props}
      >
        <ImageOff className="h-8 w-8 text-muted-foreground" />
      </div>
    );
  }

  return (
    <img
      src={error ? fallbackSrc : src}
      alt={alt}
      onError={handleError}
      className={className}
      {...props}
    />
  );
};

export default ImageWithFallback;
