import React from 'react';

const milestones = [
  { year: '2018', num: 'Milestone 1', tag: 'FOUNDATION', title: 'The Beginning', desc: 'Started with just 2 employees and one bold dream — to make solar energy accessible for every household across Gujarat.', icon: '📜' },
  { year: '2019', num: 'Milestone 2', tag: 'CERTIFICATION', title: 'GEDA Certified', desc: 'Registered in GEDA and Surya Gujarat — unlocking government project eligibility and significantly boosting market credibility.', icon: '⚡' },
  { year: '2020', num: 'Milestone 3', tag: 'SCALE', title: '1000+ kW Installed', desc: 'Crossed 1000+ kW of installed solar capacity across Gujarat — demonstrating scale and reliability that built our reputation.', icon: '🌱' },
  { year: '2021', num: 'Milestone 4', tag: 'RECOGNITION', title: 'Best Green Entrepreneur', desc: 'Awarded by Vyapar Jagat for Best Green Entrepreneur — national recognition for our commitment to sustainable energy.', icon: '🏆' },
  { year: '2022', num: 'Milestone 5', tag: 'GROWTH', title: 'Team of 40+', desc: 'New office and warehouse set up. Team grew to 40+ members — expanding operational capacity to meet surging demand statewide.', icon: '🏗️' },
  { year: '2023', num: 'Milestone 6', tag: 'LANDMARK', title: '5000+ Rooftops', desc: 'Participated in multiple expos and achieved 5000+ home solar rooftop installations — the defining landmark of our growth story.', icon: '☀️' },
  { year: '2024', num: 'Milestone 7', tag: 'RANKING', title: 'Top 5 in Gujarat', desc: 'Officially ranked among the Top 5 solar rooftop companies in Gujarat — a testament to quality, trust and service excellence.', icon: '🥇' },
  { year: '2025', num: 'Milestone 8', tag: 'AWARD', title: 'Energy Excellence Award', desc: 'Received the Solar Quarter Energy Excellence Award — cementing AV Coating as a nationally recognised leader in renewable energy.', icon: '🌟' },
  { year: '2026', num: 'Now', tag: 'TODAY', title: 'Private Limited', desc: 'AV Coating proudly transitions from LLP to Private Limited — marking the bold next chapter in powering India’s clean energy future.', icon: '🚀' },
];

const JourneyMilestones = () => {
  return (
    <section className="row content_news bg_change_green classView" id="journey" style={{ padding: '100px 0' }}>
      <article className="row" style={{ padding: '0 75px' }}>
        <h2 className="row" style={{ color: 'var(--yellow)', fontSize: '3.25rem', fontFamily: '"IBM Plex Serif", serif', fontStyle: 'italic', marginBottom: '10px' }}>
          AV Coating’s Incredible Journey
        </h2>
        <h3 className="row" style={{ color: 'var(--white)', fontSize: '2rem', fontWeight: 300, marginBottom: '50px', maxWidth: '900px' }}>
          From a humble start to powering 10,000+ happy homes across Gujarat & India.
        </h3>

        {/* Milestone Grid */}
        <div className="row" style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(320px, 1fr))', gap: '30px' }}>
          {milestones.map((m, idx) => (
            <div key={idx} className="milestone-card" style={{
              background: 'rgba(255, 255, 255, 0.07)',
              backdropFilter: 'blur(15px)',
              borderRadius: '20px',
              padding: '30px',
              border: '1px solid rgba(255, 255, 255, 0.12)',
              transition: 'transform 0.35s ease, background 0.35s ease',
            }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px' }}>
                <span style={{ fontSize: '2.5rem' }}>{m.icon}</span>
                <span style={{
                  background: 'var(--yellow)',
                  color: 'var(--green)',
                  fontSize: '0.75rem',
                  fontWeight: 600,
                  padding: '4px 12px',
                  borderRadius: '20px',
                  letterSpacing: '1px'
                }}>{m.tag}</span>
              </div>
              <div style={{ fontSize: '0.875rem', color: 'var(--yellow)', fontWeight: 500, marginBottom: '5px' }}>
                {m.year} • {m.num}
              </div>
              <h4 style={{ fontSize: '1.5rem', color: 'var(--white)', fontWeight: 400, marginBottom: '12px' }}>
                {m.title}
              </h4>
              <p style={{ fontSize: '0.95rem', color: 'var(--custom-white)', lineHeight: 1.5, fontWeight: 300 }}>
                {m.desc}
              </p>
            </div>
          ))}
        </div>
      </article>
    </section>
  );
};

export default JourneyMilestones;
