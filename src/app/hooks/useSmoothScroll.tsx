import { useCallback } from 'react';

const useSmoothScroll = (offset: number = 0) => {
  const smoothScroll = useCallback((targetId: string) => {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        const yOffset = offset;
        const yPosition = targetElement.getBoundingClientRect().top + window.pageYOffset + yOffset;
        window.scrollTo({ top: yPosition, behavior: 'smooth' });
      }
  }, [offset]);

  return smoothScroll;
};

export default useSmoothScroll;
