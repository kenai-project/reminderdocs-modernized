import useParallax from '../hooks/useParallax.js';

// Parallax wrapper: children drift vertically at a different speed than the
// page while scrolling. Positive `speed` = deeper (slower), negative = closer (faster).
// Keep Reveal and Parallax on separate elements so their transforms don't conflict.
export default function Parallax({ speed = 0.1, children, className = '', ...rest }) {
  const ref = useParallax(speed);

  return (
    <div ref={ref} className={`parallax${className ? ` ${className}` : ''}`} {...rest}>
      {children}
    </div>
  );
}
