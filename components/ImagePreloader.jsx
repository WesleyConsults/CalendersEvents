'use client';

import { useEffect } from 'react';

export default function ImagePreloader({ images = [] }) {
  useEffect(() => {
    const uniqueImages = [...new Set(images)].filter(Boolean);

    const preloadImages = () => {
      uniqueImages.forEach((src) => {
        const image = new window.Image();
        image.decoding = 'async';
        image.src = src;
      });
    };

    if ('requestIdleCallback' in window) {
      const idleId = window.requestIdleCallback(preloadImages, { timeout: 2500 });
      return () => window.cancelIdleCallback(idleId);
    }

    const timeoutId = window.setTimeout(preloadImages, 1200);
    return () => window.clearTimeout(timeoutId);
  }, [images]);

  return null;
}
