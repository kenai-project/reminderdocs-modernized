import { useState } from 'react';
import { Link } from 'react-router-dom';
import { AuthHero, useFormFields, AuthNote } from '../components/auth.jsx';
import Reveal from '../components/Reveal.jsx';

// Registration page. Front-end only for now — wire the submit handler to your
// backend / Supabase auth when the API is available.
export default function Register() {
  const [error, setError] = useState('');
  const [success, setSuccess] = useState(false);
  const [fields, handleChange] = useFormFields({
    name: '',
    email: '',
    phone: '',
    password: '',
    confirm: '',
  });

  const handleSubmit = (event) => {
    event.preventDefault();
    setError('');
    setSuccess(false);

    if (fields.password !== fields.confirm) {
      setError('Passwords do not match.');
      return;
    }
    // TODO: replace with a real registration call.
    setError('Registration backend is not connected yet. Please try again later.');
  };

  return (
    <>
      <AuthHero
        eyebrow="Get started"
        title="Create your ReminderDocs account."
        subtitle="Add your vehicles once and let us remember the renewals."
      />
      <Reveal>
        <div className="form-wrap">
          <form onSubmit={handleSubmit}>
          <div className="form-grid">
            <div className="field full">
              <label htmlFor="register-name">Full name</label>
              <input
                id="register-name"
                name="name"
                placeholder="Your name"
                value={fields.name}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field full">
              <label htmlFor="register-email">Email</label>
              <input
                id="register-email"
                type="email"
                name="email"
                placeholder="you@example.com"
                value={fields.email}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field full">
              <label htmlFor="register-phone">Phone (WhatsApp)</label>
              <input
                id="register-phone"
                type="tel"
                name="phone"
                placeholder="+91 98453 24689"
                value={fields.phone}
                onChange={handleChange}
              />
            </div>
            <div className="field full">
              <label htmlFor="register-password">Password</label>
              <input
                id="register-password"
                type="password"
                name="password"
                placeholder="Create a password"
                value={fields.password}
                onChange={handleChange}
                required
              />
            </div>
            <div className="field full">
              <label htmlFor="register-confirm">Confirm password</label>
              <input
                id="register-confirm"
                type="password"
                name="confirm"
                placeholder="Repeat your password"
                value={fields.confirm}
                onChange={handleChange}
                required
              />
            </div>
            {error && (
              <div className="field full">
                <div className="form-status error">{error}</div>
              </div>
            )}
            {success && (
              <div className="field full">
                <div className="form-status success">Account created! Check your inbox to verify your email.</div>
              </div>
            )}
            <div className="field full">
              <button className="btn btn-primary" type="submit">Create account →</button>
            </div>
          </div>
        </form>
        <AuthNote>
          Already have an account? <Link to="/login">Log in</Link>
        </AuthNote>
        </div>
      </Reveal>
    </>
  );
}
