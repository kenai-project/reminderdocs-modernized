import { Link } from 'react-router-dom';
import Reveal from '../components/Reveal.jsx';
import { PLANS } from '../data/content.js';

// Pricing page with three plan cards.
export default function Pricing() {
  return (
    <>
      <section className="page-hero">
        <div className="container">
          <Reveal>
            <span className="eyebrow">Pricing</span>
          </Reveal>
          <Reveal delay={90}>
            <h1>Simple plans for simpler renewals.</h1>
          </Reveal>
          <Reveal delay={180}>
            <p>
              Choose the ReminderDocs experience that fits how you manage your vehicles. Final plan
              limits and payment options can be connected to your existing checkout.
            </p>
          </Reveal>
        </div>
      </section>
      <section className="section">
        <div className="container">
          <div className="price-grid">
            {PLANS.map((plan, index) => (
              <Reveal key={plan.name} delay={index * 110}>
                <div className={`price${plan.featured ? ' featured' : ''}`}>
                  {plan.featured && <span className="tag">POPULAR</span>}
                  <h3>{plan.name}</h3>
                  <p className="price-note">{plan.note}</p>
                  <ul>
                    {plan.features.map((feature) => (
                      <li key={feature}>{feature}</li>
                    ))}
                  </ul>
                  <Link className={`btn ${plan.featured ? 'btn-primary' : 'btn-ghost'}`} to={plan.cta.to}>
                    {plan.cta.label}
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
          <Reveal delay={200}>
            <p className="pricing-note">
              Plan pricing, limits and payment integration should be connected to the existing
              ReminderDocs billing configuration before production release.
            </p>
          </Reveal>
        </div>
      </section>
    </>
  );
}
