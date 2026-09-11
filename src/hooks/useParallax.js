import { useEffect, useRef } from 'react';

// Moves the referenced element vertically as the page scrolls (parallax).
// `speed` controls depth: positive = moves slower than the page (appears further
// away), negative = moves faster (appears closer). Throttled with requestAnimationFrame
// and disabled when the user prefers reduced motion.
export default function useParallax(speed = 0.1) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return undefined;

    if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
      return undefined;
    }

    let frame = null;

    const update = () => {
      frame = null;
      const rect = el.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const distanceFromCenter = rect.top + rect.height / 2 - viewportCenter;
      const offset = -distanceFromCenter * speed;
      el.style.transform = `translate3d(0, ${offset.toFixed(1)}px, 0)`;
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
      el.style.transform = '';
    };
  }, [speed]);

  return ref;
}
