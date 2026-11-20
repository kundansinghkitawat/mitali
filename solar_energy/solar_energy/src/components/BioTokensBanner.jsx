import React from 'react';

const BioTokensBanner = () => {
  return (
    <section className="row content_banner classView" id="subsidy">
      <article className="row">
        <div className="row banner">
          <div className="content_information">
            <div className="row content_text">
              <h2 className="row">
                PM Surya Ghar Yojana: <span>Rooftop Solar Subsidy 2026</span>
              </h2>
              <p className="row">
                Unlock Clean Energy Savings: Go Solar with AV Coating. Under the PM Surya Ghar Muft Bijli Yojana, eligible residential homeowners can claim up to ₹78,000 in direct government subsidies and enjoy up to 300 units of free electricity every month. AV Coating manages 100% of your GEDA and DISCOM application processing.
              </p>
            </div>
            <div className="row content_button">
              <a
                href="https://wa.me/?text=Hello!%20I%20want%20to%20claim%20my%20PM%20Surya%20Ghar%20solar%20subsidy."
                target="_blank"
                rel="noopener noreferrer"
                className="button"
              >
                <div className="text">
                  <span>Claim Subsidy Now</span>
                </div>
                <div className="arrow">
                  <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                    <path d="M9.69538 10.1L0.6875 1.09167" />
                    <path d="M9.69469 1.0917V10.0998L0.839785 10.1001" />
                  </svg>
                </div>
              </a>
            </div>
          </div>
          <figure>
            <video
              crossOrigin="anonymous"
              loop
              preload="metadata"
              autoPlay
              muted
              playsInline
              id="video_background"
              className="row black"
            >
              <source src="/videos/solar_video1.mp4" type="video/mp4" />
            </video>
          </figure>
        </div>
      </article>
    </section>
  );
};

export default BioTokensBanner;
