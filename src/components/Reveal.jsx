import useReveal from '../hooks/useReveal.js';

// Scroll-reveal wrapper: fades/slides content in when it enters the viewport.
// `delay` (ms) staggers grouped items, e.g. cards in a grid.
export default function Reveal({ children, delay = 0, as: Tag = 'div', className = '', ...rest }) {
  const ref = useReveal();

  return (
    <Tag
      ref={ref}
      className={`reveal${className ? ` ${className}` : ''}`}
      style={delay ? { transitionDelay: `${delay}ms` } : undefined}
      {...rest}
    >
      {children}
    </Tag>
  );
}
