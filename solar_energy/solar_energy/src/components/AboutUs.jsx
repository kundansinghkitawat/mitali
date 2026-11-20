import React from 'react';

const teamMembers = [
  {
    name: 'Rajesh Patel',
    position: 'Founder & Managing Director',
    desc: 'Pioneered solar rooftop engineering across Gujarat with over 15+ years of renewable energy leadership. Passionate about empowering 10,000+ Indian households with clean, affordable power.',
    img: 'https://landopp.uy/themes/web/img/about01.png',
    email: 'mailto:contact@solarace.in',
    linkedin: 'https://www.linkedin.com/'
  },
  {
    name: 'Amit Shah',
    position: 'Head of Solar Engineering',
    desc: 'Master of TOPCon & Mono PERC rooftop system design, grid synchronization, and inverter engineering. Overseen over 1000+ kW of seamless solar installations.',
    img: 'https://landopp.uy/themes/web/img/about02.png',
    email: 'mailto:engineering@solarace.in',
    linkedin: 'https://www.linkedin.com/'
  },
  {
    name: 'Priya Sharma',
    position: 'Chief Operations Officer',
    desc: 'Expert in GEDA certifications, Surya Gujarat schemes, and end-to-end net metering approvals, ensuring 100% hassle-free subsidy claims for our customers.',
    img: 'https://landopp.uy/themes/web/img/about03.png',
    email: 'mailto:ops@solarace.in',
    linkedin: 'https://www.linkedin.com/'
  },
  {
    name: 'Suresh Mehta',
    position: 'Technical O&M Director',
    desc: 'Leads our 40+ member technical team, overseeing 24/7 solar monitoring, preventive cleaning schedules, and rapid fault resolution for long-term system life.',
    img: 'https://landopp.uy/themes/web/img/about04.png',
    email: 'mailto:support@solarace.in',
    linkedin: 'https://www.linkedin.com/'
  }
];

const AboutUs = () => {
  return (
    <section className="row content_about classView bg_change_white" id="aboutus">
      <article className="row">
        {/* Icon */}
        <figure className="row content_icon">
          <svg xmlns="http://www.w3.org/2000/svg" width="49" height="46" viewBox="0 0 49 46" fill="none">
            <path d="M7.73191 18.5999C9.5225 18.5999 11.2398 19.3211 12.5059 20.6048C13.7721 21.8886 14.4834 23.6297 14.4834 25.4452V32.2906H7.73191C5.94131 32.2906 4.22407 31.5694 2.95793 30.2856C1.69179 29.0019 0.980469 27.2607 0.980469 25.4452C0.980469 24.5463 1.1551 23.6561 1.49439 22.8256C1.83368 21.9951 2.331 21.2405 2.95793 20.6048C3.58486 19.9692 4.32913 19.4649 5.14825 19.1209C5.96737 18.7769 6.8453 18.5999 7.73191 18.5999Z" fill="#E6FC77" fillOpacity="0.3"/>
            <path d="M21.2349 45.9814C19.4443 45.9814 17.727 45.2602 16.4609 43.9765C15.1948 42.6927 14.4834 40.9516 14.4834 39.1361L14.4834 32.2907H21.2349C23.0255 32.2907 24.7427 33.0119 26.0089 34.2957C27.275 35.5794 27.9863 37.3206 27.9863 39.1361C27.9863 40.9516 27.275 42.6927 26.0089 43.9765C24.7427 45.9814 23.0255 45.9814 21.2349 45.9814Z" fill="#E6FC77" fillOpacity="0.3"/>
            <path d="M11.1069 2.3418C12.8975 2.3418 14.6148 3.063 15.8809 4.34676C17.1471 5.63052 17.8584 7.37166 17.8584 9.18717V16.0325H11.1069C9.31631 16.0325 7.59907 15.3113 6.33293 14.0276C5.06679 12.7438 4.35547 11.0027 4.35547 9.18717C4.35547 8.28822 4.5301 7.39808 4.86939 6.56756C5.20868 5.73704 5.706 4.98241 6.33293 4.34676C6.95986 3.71111 7.70413 3.20688 8.52325 2.86287C9.34237 2.51886 10.2203 2.3418 11.1069 2.3418Z" fill="#E6FC77" fillOpacity="0.5"/>
            <path d="M24.6099 29.7236C22.8193 29.7236 21.102 29.0024 19.8359 27.7187C18.5698 26.4349 17.8584 24.6938 17.8584 22.8783V16.0329H24.6099C26.4005 16.0329 28.1177 16.7541 29.3839 18.0378C30.65 19.3216 31.3613 21.0628 31.3613 22.8783C31.3613 24.6938 30.65 26.4349 29.3839 27.7187C28.1177 29.0024 26.4005 29.7236 24.6099 29.7236Z" fill="white" fillOpacity="0.62"/>
            <path d="M24.6108 16.033C26.4014 16.033 28.1187 16.7542 29.3848 18.0379C30.6509 19.3217 31.3623 21.0628 31.3623 22.8783V29.7237H24.6108C22.8202 29.7237 21.103 29.0025 19.8368 27.7187C18.5707 26.435 17.8594 24.6938 17.8594 22.8783C17.8594 21.0628 18.5707 19.3217 19.8368 18.0379C21.103 16.7542 22.8202 16.033 24.6108 16.033Z" fill="#E6FC77" fillOpacity="0.5"/>
            <path d="M38.1138 43.4146C36.3232 43.4146 34.6059 42.6933 33.3398 41.4096C32.0737 40.1258 31.3624 38.3847 31.3624 36.5692V29.7238H38.1138C39.9044 29.7238 41.6216 30.445 42.8878 31.7288C44.1539 33.0125 44.8652 34.7537 44.8652 36.5692C44.8652 38.3847 44.1539 40.1258 42.8878 41.4096C41.6216 42.6933 39.9044 43.4146 38.1138 43.4146Z" fill="#E6FC77" fillOpacity="0.5"/>
            <path d="M27.9858 0.630859C29.7764 0.630859 31.4937 1.35207 32.7598 2.63582C34.0259 3.91958 34.7373 5.66073 34.7373 7.47623V14.3216H27.9858C26.1952 14.3216 24.478 13.6004 23.2118 12.3166C21.9457 11.0329 21.2344 9.29174 21.2344 7.47623C21.2344 5.66073 21.9457 3.91958 23.2118 2.63582C24.478 1.35207 26.1952 0.630859 27.9858 0.630859Z" fill="#E6FC77"/>
            <path d="M41.4888 28.0122C39.6982 28.0122 37.9809 27.291 36.7148 26.0072C35.4487 24.7235 34.7374 22.9823 34.7374 21.1668V14.3215L41.4888 14.3215C43.2794 14.3215 44.9966 15.0427 46.2628 16.3264C47.5289 17.6102 48.2402 19.3513 48.2402 21.1668C48.2402 22.9823 47.5289 24.7235 46.2628 26.0072C44.9966 27.291 43.2794 28.0122 41.4888 28.0122Z" fill="#E6FC77"/>
          </svg>
        </figure>

        {/* Heading */}
        <h2 className="row">The Team Behind <span className="row">AV Coating</span></h2>

        {/* People List */}
        <ul className="row content_people">
          {teamMembers.map((member, idx) => (
            <li className="item" key={idx}>
              <div className="row content_information">
                <figure className="row">
                  <img src={member.img} alt={member.name} title={member.name}/>
                </figure>
                <div className="row content_data">
                  <h3 className="row name">{member.name}</h3>
                  <h4 className="row position">{member.position}</h4>
                  <p className="row">{member.desc}</p>
                  <ul className="row content_links">
                    <li><a href={member.email}>Contact</a></li>
                    <li><a href={member.linkedin} target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                  </ul>
                </div>
              </div>
            </li>
          ))}
        </ul>

        {/* More Info */}
        <div className="row content_more_information classView">
          <div className="empty"></div>
          <div className="empty"></div>
          <div className="content_information">
            <h3 className="row"><span>A Little More</span> About AV Coating</h3>
            <h4 className="row">We chose to embrace the mission of empowering homes and businesses with clean, affordable, and self-sustaining rooftop solar power.</h4>
            <p className="row">From our humble beginnings with 2 visionaries in Ahmedabad to becoming one of the Top 5 Solar Rooftop Companies in Gujarat, AV Coating has deployed 5000+ home solar systems and 1000+ kW installed capacity. We deliver Tier-1 TOPCon and Mono PERC solar technology backed by end-to-end GEDA and Surya Gujarat government subsidy support for a brighter, zero-emission India.</p>
          </div>
        </div>
      </article>
    </section>
  );
};

export default AboutUs;
