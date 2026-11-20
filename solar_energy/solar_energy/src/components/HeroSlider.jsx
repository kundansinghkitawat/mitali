import React, { useEffect } from 'react';

const sliderData = [
  {
    title: <> Powering a cleaner future<br /> <span>with solar energy</span></>,
    desc: 'Our mission is to accelerate the transition to clean energy, delivering reliable solar solutions that create a brighter future for businesses, communities, and the planet.',
    link: 'https://wa.me/?text=Hello!%20I%20would%20like%20to%20get%20a%20free%20solar%20estimate.',
    video: '/videos/solar_video2.mp4'
  },
  {
    title: <>Building a brighter tomorrow<br /> <span>through clean energy</span></>,
    desc: 'We provide innovative solar solutions designed to reduce costs, improve energy independence, and create lasting value for businesses, communities, and the environment.',
    link: 'https://wa.me/?text=Hello!%20I%20would%20like%20to%20get%20a%20free%20solar%20estimate.',
    video: '/videos/solar_video1.mp4'
  },
  {
    title: <>Turning sunlight into<br /> <span>a smarter future</span></>,
    desc: 'We harness the power of the sun to deliver efficient energy solutions that support sustainable growth and help create a cleaner, more resilient world for everyone.',
    link: 'https://wa.me/?text=Hello!%20I%20would%20like%20to%20get%20a%20free%20solar%20estimate.',
    video: '/videos/solar_video3.mp4'
  },
  {
    title: <>Clean energy for<br /> <span>a changing world</span></>,
    desc: 'Our solar technologies help businesses and communities move toward reliable renewable power while reducing their environmental impact and building a sustainable future.',
    link: 'https://wa.me/?text=Hello!%20I%20would%20like%20to%20get%20a%20free%20solar%20estimate.',
    video: '/videos/solar_video2.mp4'
  },
  {
    title: <>The power of tomorrow<br /> <span>starts with the sun</span></>,
    desc: 'We make solar energy simple, accessible, and dependable, helping our customers take control of their energy while contributing to a cleaner and more sustainable planet.',
    link: 'https://wa.me/?text=Hello!%20I%20would%20like%20to%20get%20a%20free%20solar%20estimate.',
    video: '/videos/solar_video1.mp4'
  }
];

const HeroSlider = () => {
  useEffect(() => {
    const timer = setTimeout(() => {
      if (window.$ && window.$.fn.slick) {
        const $slider = window.$('.slider');
        if ($slider.length && !$slider.hasClass('slick-initialized')) {
          $slider.slick({
            fade: true,
            speed: 500,
            autoplay: true,
            autoplaySpeed: 5000,
            pauseOnFocus: false,
            pauseOnHover: false,
            dots: true,
            arrows: false
          });
        }
      }
    }, 500);

    return () => clearTimeout(timer);
  }, []);

  return (
    <header className="row content_hero">
      {/* Scroll CTA */}
      <div className="content_scroll">
        <div className="mouse_illustration">
          <div className="scroller"></div>
        </div>
        <p>Scroll to start<br /> the experience</p>
      </div>

      {/* Slider Container */}
      <article className="row content_slider">
        <div className="row slider" data-speed="0.5">
          {sliderData.map((item, idx) => (
            <div className="row item" key={idx}>
              <div className="row content" data-speed="0.8">
                <h3 className="row" data-speed="0.85">{item.title}</h3>
                <h4 className="row" data-speed="0.9">{item.desc}</h4>
                <div className="row content_buttons" data-speed="0.95">
                  <a href={item.link} className="button" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '8px' }}>
                    <div className="text">
                      <span>Get Free Estimates</span>
                    </div>
                    <figure className="arrow" style={{ background: 'var(--green)', width: '48px', height: '48px', borderRadius: '50%', display: 'inline-flex', alignItems: 'center', justifyContent: 'center', margin: 0, flexShrink: 0 }}>
                      <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 24 24" fill="#25D366">
                        <path d="M.057 24l1.687-6.163c-1.041-1.804-1.588-3.849-1.587-5.946.003-6.556 5.338-11.891 11.893-11.891 3.181.001 6.167 1.24 8.413 3.488 2.245 2.248 3.481 5.236 3.48 8.414-.003 6.557-5.338 11.892-11.893 11.892-1.99-.001-3.951-.5-5.688-1.448l-6.305 1.654zm6.597-3.807c1.676.995 3.276 1.591 5.392 1.592 5.448 0 9.886-4.434 9.889-9.885.002-5.462-4.415-9.89-9.881-9.892-5.452 0-9.887 4.434-9.889 9.884-.001 2.225.651 3.891 1.746 5.634l-1.15 4.2 4.303-1.129z" />
                      </svg>
                    </figure>
                  </a>
                </div>
              </div>
              <picture className="row">
                <video
                  crossOrigin="anonymous"
                  loop
                  preload="auto"
                  autoPlay
                  muted
                  playsInline
                  id="video_background"
                  className="row black"
                >
                  <source src={item.video} type="video/mp4" />
                </video>
              </picture>
            </div>
          ))}
        </div>
      </article>
    </header>
  );
};

export default HeroSlider;
