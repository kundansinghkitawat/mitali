import React from 'react';

const IDSection = () => {
  return (
    <section className="row content_iplusd classView" id="why-solar">
      <article className="row">
        {/* Text */}
        <div className="content_text">
          <h3 className="row"><span>Why Choose</span> AV Coating</h3>
          <p className="row">
            Efficiency & Power: Custom home and commercial rooftop solar solutions engineered to meet your everyday energy needs. We deliver high-quality TOPCon and Mono PERC solar panel installations with precision attention to structural integrity, backed by 100% complete GEDA and PM Surya Ghar government subsidy support.
          </p>
          <a
            href="https://wa.me/?text=Hello!%20I%20would%20like%20to%20know%20more%20about%20Solar%20Ace%20rooftop%20solutions."
            className="link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Get Custom Solar Plan
            <svg xmlns="http://www.w3.org/2000/svg" width="11" height="10" viewBox="0 0 11 10" fill="none">
              <path d="M9.67228 0.877441L1.25781 9.2923" stroke="#E6FC77" />
              <path d="M9.67385 9.29228V0.877638L1.40229 0.877343" stroke="#E6FC77" />
            </svg>
          </a>
        </div>

        {/* Images */}
        <div className="content_images">
          <figure data-speed="1.2">
            <img src="/images/DJI_0062-scaled-rdp3md5swqhr61xuep5h5v9xws7u4bfvi02xxvmh7c.webp" alt="AV Coating Installation 1" title="AV Coating Installation 1" />
          </figure>
          <figure data-speed="1.4">
            <img src="/images/DJI_0074-scaled-rdp3mc7ypwggufz7k6quldihbecgwmc55vfgglnvdk.webp" alt="AV Coating Installation 2" title="AV Coating Installation 2" />
          </figure>
        </div>
      </article>
    </section>
  );
};

export default IDSection;
