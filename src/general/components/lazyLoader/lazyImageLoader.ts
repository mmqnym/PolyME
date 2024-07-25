export function createImageLoader() {
  const cache = new Map<string, Promise<void>>();

  function loadImage(src: string): Promise<void> {
    if (!cache.has(src)) {
      const promise = new Promise<void>((resolve, reject) => {
        const img = new Image();
        img.src = src;
        img.onload = () => resolve();
        img.onerror = reject;
      });
      cache.set(src, promise);
    }
    return cache.get(src)!;
  }

  return { loadImage };
}

export const imageLoader = createImageLoader();
