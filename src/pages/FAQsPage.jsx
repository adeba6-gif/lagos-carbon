import { useState } from 'react';
import { useContext } from 'react';
import { PageContext } from '../context/PageContext';
import { Footer } from '../components/Footer';

export const FAQsPage = () => {
  const { showPage } = useContext(PageContext);
  const [openIndex, setOpenIndex] = useState(null);

  const faqs = [
    {
      question: 'What is an environmental credit?',
      answer:
        'A tradable certificate representing verified environmental benefits such as renewable energy generation or emissions reduction. Environmental credits allow buyers to substantiate sustainability claims and offset their carbon or energy footprint.',
    },
    {
      question: 'What is an I-REC?',
      answer:
        'An International Renewable Energy Certificate (I-REC) represents 1 MWh of renewable electricity generated and consumed. I-RECs are used by companies to report lower Scope 2 emissions under the GHG Protocol and are accepted by CDP and RE100 initiatives.',
    },
    {
      question: 'Do I need an existing project to apply?',
      answer:
        'No. Both existing and planned projects can be assessed. Lagos Carbon can support you from the feasibility and design stage through to monitoring, verification, and credit issuance.',
    },
    {
      question: 'How long does onboarding take?',
      answer:
        'An initial assessment can typically be completed within a few days of submission. Full onboarding, including PDD design and methodology selection, depends on the complexity and readiness of the project. Our team will provide a clear timeline at the outset.',
    },
    {
      question: 'What are the costs?',
      answer:
        "Pricing is based on project size and scope. Early-stage estimates are provided during the initial assessment at no cost. Lagos Carbon's fee structure is designed to ensure projects remain economically viable with meaningful net revenue to the project developer.",
    },
    {
      question: 'Who buys the credits?',
      answer:
        'Credits are sold to international buyers including: international corporates with net zero and sustainability commitments; institutional investors seeking impact investments; and governments in some cases under Article 6 frameworks (subject to Letters of Authorisation from Nigeria\'s National Climate Change Commission).',
    },
    {
      question: 'What is the Lagos Standard?',
      answer:
        'The Lagos Standard is the governance framework developed by Lagos Carbon to ensure all credits are credible, traceable, and internationally recognised. It incorporates global methodology alignment, robust MRV protocols, data integrity mechanisms, and oversight structures co-developed with Lagos State institutions including LASEPA.',
    },
    {
      question: 'Can I-RECs and carbon credits be issued on the same project?',
      answer:
        'This requires careful structuring. I-RECs and carbon credits both derive value from the same underlying generation event, so concurrent issuance requires the cancellation of one instrument to avoid double counting. Our team will advise on the optimal credit strategy for your specific project.',
    },
  ];

  const toggleFaq = (index) => {
    setOpenIndex(openIndex === index ? null : index);
  };

  return (
    <>
      <div className="page-header">
        <div className="container">
          <h1>Frequently Asked Questions</h1>
          <p>Everything you need to know about Lagos Carbon and environmental credits.</p>
        </div>
      </div>

      <section style={{ background: 'var(--bg)' }}>
        <div className="container">
          <div className="faq-list">
            {faqs.map((faq, index) => (
              <div key={index} className={`faq-item ${openIndex === index ? 'open' : ''}`}>
                <button className="faq-q" onClick={() => toggleFaq(index)}>
                  {faq.question}
                </button>
                <div className="faq-a">{faq.answer}</div>
              </div>
            ))}
          </div>

          <div style={{ marginTop: '3.5rem', padding: '2rem', background: 'var(--green-light)', borderRadius: '10px', border: '1px solid var(--border)' }}>
            <p style={{ fontSize: '0.95rem', marginBottom: '1rem', color: 'var(--text)' }}>
              Have a question not covered here? Our team is happy to help.
            </p>
            <a className="btn-primary" onClick={() => showPage('contact')}>
              Get in Touch
            </a>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};
