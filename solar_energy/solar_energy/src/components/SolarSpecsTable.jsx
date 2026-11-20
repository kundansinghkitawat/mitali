import React from 'react';

const specsData = [
  { label: 'Best For', val: 'Independent homes, villas, bungalows & eligible residential societies' },
  { label: 'Typical System Size', val: '2 kW to 10 kW+ depending on household electricity consumption' },
  { label: 'Generation', val: 'Approximately 120–150 units per month per kW under suitable conditions' },
  { label: 'Payback Period', val: 'Commonly around 3–5 years depending on tariff, subsidy and system cost' },
  { label: 'System Life', val: '25+ years with periodic cleaning and preventive maintenance' },
  { label: 'Rooftop Requirement', val: 'Approximately 80–100 sq. ft. per kW depending on panel technology & layout' },
  { label: 'Subsidy', val: 'Eligible residential consumers qualify under PM Surya Ghar Muft Bijli Yojana (Up to ₹78,000)' },
  { label: 'Net Metering', val: 'Available subject to state regulations and the local DISCOM connection process' },
  { label: 'Maintenance', val: 'Low — regular cleaning, inverter monitoring and occasional inspection' },
  { label: 'Best Panel Types', val: 'TOPCon and Mono PERC are widely used for high-efficiency residential systems' },
];

const SolarSpecsTable = () => {
  return (
    <section className="row content_about classView bg_change_white" id="specs" style={{ padding: '120px 0' }}>
      <article className="row" style={{ padding: '0 75px' }}>
        <h2 className="row" style={{ color: 'var(--yellow)', fontSize: '3.25rem', fontFamily: '"IBM Plex Serif", serif', fontStyle: 'italic', marginBottom: '10px' }}>
          Residential Solar Rooftop At a Glance
        </h2>
        <p className="row" style={{ color: '#FFFFFF', fontSize: '1.25rem', fontWeight: 300, marginBottom: '40px', maxWidth: '900px' }}>
          Compare system size, generation, savings, subsidy eligibility and common home solar specifications before installing rooftop solar for your house.
        </p>

        {/* Table Container */}
        <div className="row" style={{
          background: '#FFFFFF',
          borderRadius: '24px',
          padding: '40px',
          boxShadow: '0 20px 40px rgba(0,0,0,0.06)',
          border: '1px solid #E5E7EB',
          overflowX: 'auto'
        }}>
          <table style={{ width: '100%', borderCollapse: 'collapse', color: 'var(--green)' }}>
            <thead>
              <tr style={{ borderBottom: '2px solid var(--yellow)', textAlign: 'left' }}>
                <th style={{ padding: '16px 20px', fontSize: '1.15rem', fontWeight: 600, width: '30%', color: 'var(--green)' }}>Specification Parameter</th>
                <th style={{ padding: '16px 20px', fontSize: '1.15rem', fontWeight: 600, width: '70%', color: 'var(--green)' }}>System Details & Guidance</th>
              </tr>
            </thead>
            <tbody>
              {specsData.map((item, idx) => (
                <tr key={idx} style={{
                  borderBottom: idx === specsData.length - 1 ? 'none' : '1px solid #F3F4F6',
                  backgroundColor: idx % 2 === 0 ? '#FAFAFA' : '#FFFFFF'
                }}>
                  <td style={{ padding: '18px 20px', fontWeight: 500, fontSize: '1rem', color: 'var(--green)' }}>{item.label}</td>
                  <td style={{ padding: '18px 20px', fontWeight: 300, fontSize: '1rem', color: 'var(--dark-gray)', lineHeight: 1.5 }}>{item.val}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>

        <div style={{ marginTop: '30px', padding: '25px 30px', background: 'var(--yellow)', borderRadius: '16px' }}>
          <p className="solar_tip_text" style={{ margin: 0, fontSize: '1.05rem', fontWeight: 500, lineHeight: 1.5, color: '#1A3837' }}>
            💡 <strong>Expert Solar Tip:</strong> The ideal home solar system should be sized against your actual monthly electricity consumption, usable rooftop area and daytime load — not simply the maximum capacity that can fit on your roof.
          </p>
        </div>
      </article>
    </section>
  );
};

export default SolarSpecsTable;
