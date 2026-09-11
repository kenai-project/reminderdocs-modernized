import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthHero, useFormFields, AuthNote } from '../components/auth.jsx';
import Reveal from '../components/Reveal.jsx';

// Login page. Front-end only for now — wire the submit handler to your
// backend / Supabase auth when the API is available.
export default function Login() {
  const [error, setError] = useState('');
  const [fields, handleChange, setFields] = useFormFields({ email: '', password: '' });

  const handleSubmit = (event) => {
    event.preventDefault();
    if (!fields.email || !fields.password) {
      setError('Please enter your email and password.');
      return;
    }
    // TODO: replace with a real authentication call.
    setError('Authentication backend is not connected yet. Please try again later.');
  };

  const handleDemoFill = () => {
    setFields({ email: 'demo@reminderdocs.com', password: 'demopassword' });
    setError('');
  };

  return (
    <>
      <AuthHero
        eyebrow="Welcome back"
        title="Log in to ReminderDocs."
        subtitle="Access your vehicles, documents and reminders."
      />
      <Reveal>
        <div className="form-wrap">
          <form onSubmit={handleSubmit}>
            <div className="form-grid">
              <div className="field full">
                <label htmlFor="login-email">Email</label>
                <input
                  id="login-email"
                  type="email"
                  name="email"
                  placeholder="you@example.com"
                  value={fields.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="field full">
                <label htmlFor="login-password">Password</label>
                <input
                  id="login-password"
                  type="password"
                  name="password"
                  placeholder="Your password"
                  value={fields.password}
                  onChange={handleChange}
                  required
                />
              </div>
              {error && (
                <div className="field full">
                  <div className="form-status error">{error}</div>
                </div>
              )}
              <div className="field full">
                <button className="btn btn-primary" type="submit">Log in →</button>
              </div>
              <div className="field full">
                <button className="btn btn-ghost" type="button" onClick={handleDemoFill}>
                  Fill demo credentials
                </button>
              </div>
            </div>
          </form>
          <AuthNote>
            New to ReminderDocs? <Link to="/register">Create an account</Link>
          </AuthNote>
        </div>
      </Reveal>
    </>
  );
}
