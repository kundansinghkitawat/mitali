import React from 'react';

const newsList = [
  {
    title: 'Solar Panel for Businesses: 2026 Depreciation Tax Guide India',
    desc: 'Accelerated Depreciation on Solar Panels for Businesses in India. Learn how installing a solar rooftop system slashes income tax and delivers fast ROI.',
    img: '/images/DJI_0095-1-scaled-rdp3md5swqhr61xuep5h5v9xws7u4bfvi02xxvmh7c.webp',
    url: 'https://wa.me/?text=Hi!%20I%20want%20to%20read%20about%20Solar%20Depreciation%20Tax%20Guide.'
  },
  {
    title: 'PM Surya Ghar Yojana Ending? 2026 Subsidy Facts Explained Now',
    desc: 'Homeowners searching for rooftop solar in 2026 are encountering key questions regarding subsidy step eligibility and online registration rules.',
    img: '/images/DJI_0122-1-scaled-rdp3md5swqhr61xuep5h5v9xws7u4bfvi02xxvmh7c (1).webp',
    url: 'https://wa.me/?text=Hi!%20I%20want%20to%20know%20about%20PM%20Surya%20Ghar%20Subsidy%20Facts.'
  },
  {
    title: 'What Is a Solar Power Purchase Agreement (PPA)? A Simple Guide',
    desc: 'A Power Purchase Agreement (PPA) offers Indian businesses and commercial complexes a hassle-free way to switch to zero-investment solar power.',
    img: '/images/Why-Is-India-Promoting-Solar-Rooftop-System-Adoption.jpg',
    url: 'https://wa.me/?text=Hi!%20Tell%20me%20more%20about%20Solar%20PPA%20Agreements.'
  },
  {
    title: 'TOPCon vs Mono PERC: Choosing the Best Solar Panels for Home',
    desc: 'Compare cell efficiency, temperature coefficient, and degradation rates between TOPCon and Mono PERC panel technologies for maximum generation.',
    img: '/images/OIP.webp',
    url: 'https://wa.me/?text=Hi!%20Help%20me%20choose%20TOPCon%20vs%20Mono%20PERC%20panels.'
  }
];

const NewsSection = () => {
  return (
    <section className="row content_news bg_change_green classView" id="news">
      <article className="row">
        <h2 className="row">Blog & Insights</h2>
        <div className="row content_action">
          <h3>
            Explore expert guides, subsidy facts, and industry news{' '}
            <span>shaping the future of residential and commercial solar in India.</span>
          </h3>
          <div className="row content_button">
            <a href="https://wa.me/?text=Hi!%20I%20want%20to%20read%20all%20solar%20articles." className="button" target="_blank" rel="noopener noreferrer">
              <div className="text">
                <span>View All Articles</span>
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

        {/* News Grid */}
        <ul className="row content_last_news">
          {newsList.map((item, idx) => (
            <li key={idx}>
              <a href={item.url} className="row" target="_blank" rel="noopener noreferrer">
                <picture className="row content_thumb">
                  <img src={item.img} alt={item.title} title={item.title} />
                </picture>
                <div className="row content_information">
                  <div className="row content_text">
                    <h4 className="row">{item.title}</h4>
                    <p className="row">{item.desc}</p>
                  </div>
                  <div className="row content_button">
                    <div className="button">
                      <span>Read Article</span>
                    </div>
                  </div>
                </div>
              </a>
            </li>
          ))}
        </ul>
      </article>
    </section>
  );
};

export default NewsSection;
