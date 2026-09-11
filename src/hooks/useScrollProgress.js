import { useEffect, useState } from 'react';

// Returns 0→1 progress of a tall section scrolling through the viewport.
// Designed for sticky "scene" sections: 0 = section top reaches viewport top,
// 1 = section bottom reaches viewport bottom. rAF-throttled.
const clamp01 = (v) => Math.min(1, Math.max(0, v));

export default function useScrollProgress(ref) {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    let frame = null;

    const update = () => {
      frame = null;
      const el = ref.current;
      if (!el) return;
      const rect = el.getBoundingClientRect();
      const scrollable = rect.height - window.innerHeight;
      setProgress(scrollable > 0 ? clamp01(-rect.top / scrollable) : 0);
    };

    const onScroll = () => {
      if (frame === null) frame = requestAnimationFrame(update);
    };

    update();
    window.addEventListener('scroll', onScroll, { passive: true });
    window.addEventListener('resize', onScroll);

    return () => {
      if (frame !== null) cancelAnimationFrame(frame);
      window.removeEventListener('scroll', onScroll);
      window.removeEventListener('resize', onScroll);
    };
  }, [ref]);

  return progress;
}
