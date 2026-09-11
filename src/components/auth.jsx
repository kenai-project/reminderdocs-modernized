import { useState } from 'react';
import { Link } from 'react-router-dom';

// Shared hero for the auth pages.
export function AuthHero({ eyebrow, title, subtitle }) {
  return (
    <section className="auth-hero">
      <div className="container">
        <span className="eyebrow">{eyebrow}</span>
        <h1>{title}</h1>
        <p>{subtitle}</p>
      </div>
    </section>
  );
}

// Controlled-field hook shared by auth forms.
export function useFormFields(initialValues) {
  const [values, setValues] = useState(initialValues);
  const handleChange = (event) => {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  };
  return [values, handleChange, setValues];
}

export function AuthNote({ children }) {
  return <p className="auth-note">{children}</p>;
}

export function CrossLink({ to, children }) {
  return <Link to={to}>{children}</Link>;
}
