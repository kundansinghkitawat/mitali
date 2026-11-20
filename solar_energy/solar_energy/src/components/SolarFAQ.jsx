import React, { useState } from 'react';

const faqItems = [
  {
    q: 'What is a residential solar rooftop system?',
    a: 'A residential solar rooftop system consists of solar panels installed on the roof of your home that convert sunlight into electricity. It helps reduce your electricity bills and reliance on the grid by generating clean, renewable energy directly from the sun.'
  },
  {
    q: 'How much can I save by installing a solar rooftop system at home?',
    a: 'Homeowners typically save 70% to 90% on their monthly electricity bills. A 3 kW to 5 kW solar system generates approximately 360–750 units per month, achieving complete payback within 3 to 4 years while providing free electricity for 25+ years.'
  },
  {
    q: 'Is my rooftop suitable for installing solar panels?',
    a: 'Most shadow-free concrete roofs, tin sheds, or tile roofs with south-facing or unshaded exposure are suitable. Our engineering team conducts a complimentary structural and shadow feasibility assessment to determine optimal panel placement.'
  },
  {
    q: 'How much space is required for installing solar panels?',
    a: 'Generally, you need approximately 80 to 100 square feet of shadow-free rooftop area per 1 kW of solar capacity. For a standard 3 kW residential system, around 250–300 sq. ft. of clear space is required.'
  },
  {
    q: 'Do I need to change my electrical setup to install a solar rooftop system?',
    a: 'No major internal wiring changes are required. Our team installs a solar bi-directional net meter and connects the solar inverter directly into your existing main electrical distribution panel.'
  },
  {
    q: 'Are there any government subsidies for residential solar installations?',
    a: 'Yes! Under the PM Surya Ghar Muft Bijli Yojana, eligible residential homeowners receive direct financial subsidies: ₹30,000 for 1 kW, ₹60,000 for 2 kW, and up to ₹78,000 for 3 kW and higher systems. AV Coating handles all subsidy portal filings on your behalf.'
  }
];

const SolarFAQ = () => {
  const [openIndex, setOpenIndex] = useState(-1);

  const toggleFaq = (idx) => {
    setOpenIndex(openIndex === idx ? -1 : idx);
  };

  return (
    <section className="row content_news bg_change_green classView" id="faq" style={{ padding: '90px 0 120px', position: 'relative', zIndex: 5, background: 'var(--green)', marginBottom: 0 }}>
      <article className="row" style={{ padding: '0 70px', width: '100%', boxSizing: 'border-box' }}>
        {/* Title */}
        <h2
          className="row"
          style={{
            color: 'var(--yellow)',
            fontSize: 'clamp(2.5rem, 4vw, 3.5rem)',
            fontFamily: '"IBM Plex Serif", serif',
            fontStyle: 'italic',
            marginBottom: '12px',
            lineHeight: 1.15
          }}
        >
          Frequently Asked Questions
        </h2>
        <p
          className="row"
          style={{
            color: 'var(--white)',
            fontSize: '1.15rem',
            fontWeight: 300,
            marginBottom: '45px',
            maxWidth: '900px'
          }}
        >
          Got questions about home solar rooftop installation, subsidies, or net metering? We’ve got answers.
        </p>

        {/* Full-width FAQ Accordion Container */}
        <div className="row" style={{ width: '100%' }}>
          {faqItems.map((item, idx) => {
            const isOpen = openIndex === idx;
            return (
              <div
                key={idx}
                style={{
                  width: '100%',
                  background: '#F1F4F2',
                  borderRadius: '14px',
                  marginBottom: '16px',
                  boxShadow: '0 2px 8px rgba(0, 0, 0, 0.04)',
                  overflow: 'hidden',
                  transition: 'all 0.3s cubic-bezier(0.25, 0.1, 0.1, 1)'
                }}
              >
                <button
                  onClick={() => toggleFaq(idx)}
                  style={{
                    width: '100%',
                    textAlign: 'left',
                    background: 'none',
                    border: 'none',
                    padding: '20px 28px',
                    fontSize: '1.15rem',
                    fontWeight: 600,
                    color: '#1A3837',
                    display: 'flex',
                    justifyContent: 'space-between',
                    alignItems: 'center',
                    cursor: 'pointer',
                    outline: 'none'
                  }}
                >
                  <span style={{ paddingRight: '20px' }}>{item.q}</span>
                  <svg
                    width="22"
                    height="22"
                    viewBox="0 0 24 24"
                    fill="none"
                    stroke="#1A3837"
                    strokeWidth="2.5"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    style={{
                      flexShrink: 0,
                      transition: 'transform 0.3s ease',
                      transform: isOpen ? 'rotate(180deg)' : 'rotate(0deg)'
                    }}
                  >
                    <polyline points="6 9 12 15 18 9"></polyline>
                  </svg>
                </button>

                {isOpen && (
                  <div
                    style={{
                      padding: '0 28px 24px',
                      fontSize: '1.05rem',
                      color: '#2D4B4A',
                      lineHeight: 1.65,
                      fontWeight: 400,
                      borderTop: '1px solid rgba(26, 56, 55, 0.08)',
                      marginTop: '4px',
                      paddingTop: '16px'
                    }}
                  >
                    {item.a}
                  </div>
                )}
              </div>
            );
          })}
        </div>
      </article>
    </section>
  );
};

export default SolarFAQ;
