import { Link } from 'react-router-dom';
import { FOOTER_COLUMNS, BRAND } from '../data/site.js';

// Dark site footer with link columns and copyright (year auto-set).
export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer-grid">
        <div className="footer-brand">
          <div className="brand">
            <span className="logo">R</span>
            <span>{BRAND}</span>
          </div>
          <p>Never miss a vehicle document renewal. Smart reminders for Indian vehicle owners.</p>
        </div>
        {FOOTER_COLUMNS.map((column) => (
          <div key={column.heading}>
            <h4>{column.heading}</h4>
            {column.links.map((link) => (
              <Link key={link.label} to={link.to}>{link.label}</Link>
            ))}
          </div>
        ))}
      </div>
      <div className="container copyright">
        {`© ${new Date().getFullYear()} ${BRAND}. All rights reserved.`}
      </div>
    </footer>
  );
}
