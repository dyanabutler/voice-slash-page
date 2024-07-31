"use client"
import { useState, useEffect } from 'react';

const useImageLoader = (srcs: string[]) => {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    let isMounted = true;
    const imagePromises = srcs.map((src) => {
      return new Promise<void>((resolve) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve();
        img.onerror = () => resolve(); // Consider an image loaded even if there's an error
      });
    });

    Promise.all(imagePromises).then(() => {
      if (isMounted) {
        setLoaded(true);
      }
    });

    return () => {
      isMounted = false;
    };
  }, [srcs]);

  return loaded;
};

export default useImageLoader;
