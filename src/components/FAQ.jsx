import { useState } from 'react';
import Reveal from '../components/Reveal.jsx';
import { FAQS } from '../data/home.js';

// Accordion FAQ section. Each item toggles open/closed independently
// and fades in as you scroll.
export default function FAQ() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggle = (index) =>
    setOpenIndex((current) => (current === index ? null : index));

  return (
    <section className="section" id="faq">
      <div className="container">
        <Reveal>
          <div className="section-head">
            <span className="eyebrow">FAQ</span>
            <h2>Questions, answered.</h2>
          </div>
        </Reveal>
        <div className="faq">
          {FAQS.map((item, index) => (
            <Reveal key={item.question} delay={index * 70}>
              <div className={`faq-item${openIndex === index ? ' open' : ''}`}>
                <button className="faq-q" onClick={() => toggle(index)}>
                  {item.question}
                  <span className="plus">＋</span>
                </button>
                <div className="faq-a">{item.answer}</div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
