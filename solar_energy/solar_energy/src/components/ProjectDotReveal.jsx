import React from 'react';

const ProjectDotReveal = () => {
  return (
    <section className="row content_dot classView">
      <article className="row content_text">
        <div className="text">
          <p className="text_reveal bg_change classView" id="project">
            Switch to <span className="words word01">Home Solar Rooftop</span> with AV Coating.{' '}
            Power your home <span className="words word02">efficiently & sustainably</span> with top-tier{' '}
            <span className="words word03">solar systems.</span> Trusted by{' '}
            <span className="words word04">10,000+ happy customers</span> across Gujarat and India.
          </p>
        </div>
        {/* Circle scaled by GSAP */}
        <div className="circle" id="circle"></div>
      </article>
    </section>
  );
};

export default ProjectDotReveal;
