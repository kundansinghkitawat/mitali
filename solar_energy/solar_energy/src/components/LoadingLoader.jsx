import React, { useEffect } from 'react';

const LoadingLoader = () => {
  useEffect(() => {
    if (window.lottie) {
      const animContainer = document.getElementById('loader_animation');
      if (animContainer && !animContainer.hasChildNodes()) {
        window.lottie.loadAnimation({
          container: animContainer,
          renderer: 'svg',
          loop: false,
          autoplay: true,
          rendererSettings: {
            progressiveLoad: false
          },
          path: 'https://landopp.uy/themes/web/animations/logoanimation.json',
          name: 'myAnimation',
        });
      }
    }
  }, []);

  return (
    <section className="row content_loading">
      {/* Text Logo */}
      <img
        src="https://landopp.uy/themes/web/img/bg_logo_text.svg"
        alt="AV Coating"
        title="AV Coating"
        className="logo_text"
      />
      {/* Lottie Animation */}
      <div className="loader_animation" id="loader_animation"></div>
      <div className="bg"></div>
    </section>
  );
};

export default LoadingLoader;
