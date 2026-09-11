import { Link } from 'react-router-dom';

// 404 fallback page.
export default function NotFound() {
  return (
    <section className="page-hero">
      <div className="container">
        <span className="eyebrow">404</span>
        <h1>Page not found.</h1>
        <p>The page you're looking for doesn't exist or has moved.</p>
        <div className="hero-actions" style={{ justifyContent: 'center' }}>
          <Link className="btn btn-primary" to="/">Back to home</Link>
        </div>
      </div>
    </section>
  );
}
