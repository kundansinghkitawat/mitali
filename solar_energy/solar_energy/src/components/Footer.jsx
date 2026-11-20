import React from 'react';

export const FooterSpace = () => (
  <section className="row content_footer_space"></section>
);

const handleNavClick = (e, sectionId) => {
  e.preventDefault();
  let targetEl = document.getElementById(sectionId);
  if (!targetEl && sectionId === 'steps') {
    targetEl = document.querySelector('.content_steps_video');
  }
  if (!targetEl) {
    targetEl = document.querySelector('.' + sectionId);
  }

  if (targetEl) {
    const topPos = targetEl.getBoundingClientRect().top + window.pageYOffset - 60;
    window.scrollTo({
      top: topPos,
      behavior: 'smooth'
    });
  }
};

const Footer = () => {
  return (
    <div className="footer_reveal_wrapper">
      <footer className="row">
        <article className="row">
          <h2 className="row">
            <div className="row content"><span>Building</span> a</div>
            <div className="row content">Smarter <span>Solar</span> Future</div>
          </h2>

          <div className="row content_navigation_footer">
            <figure className="logo_footer">
              <h2 style={{ color: '#1A3837', fontSize: '2rem', margin: 0, fontWeight: 700 }}>AV COATING</h2>
            </figure>

            <div className="content_links">
              <ul className="content_site_map">
                <li className="row"><h3 className="row">Quick Links</h3></li>
                <li className="row"><a href="#project" onClick={(e) => handleNavClick(e, 'project')} className="link_sections_footer" data-section="project">Rooftop System</a></li>
                <li className="row"><a href="#steps" onClick={(e) => handleNavClick(e, 'steps')} className="link_sections_footer" data-section="steps">Services</a></li>
                <li className="row"><a href="#journey" onClick={(e) => handleNavClick(e, 'journey')} className="link_sections_footer" data-section="journey">Our Journey</a></li>
                <li className="row"><a href="#specs" onClick={(e) => handleNavClick(e, 'specs')} className="link_sections_footer" data-section="specs">At a Glance</a></li>
              </ul>
              <ul className="content_site_map">
                <li className="row"><h3 className="row">Explore</h3></li>
                <li className="row"><a href="#aboutus" onClick={(e) => handleNavClick(e, 'aboutus')} className="link_sections_footer" data-section="aboutus">About Us</a></li>
                <li className="row"><a href="#news" onClick={(e) => handleNavClick(e, 'news')} className="link_sections_footer" data-section="news">Solar Blog</a></li>
                <li className="row"><a href="#faq" onClick={(e) => handleNavClick(e, 'faq')} className="link_sections_footer" data-section="faq">FAQs</a></li>
              </ul>
              <ul className="content_social">
                <li className="row"><h3 className="row">Connect</h3></li>
                <li className="row"><a href="https://www.linkedin.com" target="_blank" rel="noopener noreferrer">LinkedIn</a></li>
                <li className="row"><a href="https://www.instagram.com" target="_blank" rel="noopener noreferrer">Instagram</a></li>
                <li className="row"><a href="https://x.com" target="_blank" rel="noopener noreferrer">X (Twitter)</a></li>
                <li className="row"><a href="https://wa.me/?text=Hello!%20I%20want%20to%20connect%20with%20Solar%20Ace." target="_blank" rel="noopener noreferrer">WhatsApp</a></li>
              </ul>
            </div>

            <div className="content_contactus">
              <a href="tel:9586722221" target="_blank" rel="noopener noreferrer" className="row content_information">
                <h3 className="row" style={{ color: '#FFFFFF', opacity: 1, textShadow: '0 2px 10px rgba(0,0,0,0.6)' }}>Have Questions?<br /> Call Us 95867-22221</h3>
                <figure className="bg_icon">
                  <svg xmlns="http://www.w3.org/2000/svg" width="31" height="30" viewBox="0 0 31 30" fill="none">
                    <path d="M4.91432 11.9712C6.0483 11.9712 7.13584 12.4279 7.93768 13.2409C8.73952 14.0539 9.18998 15.1566 9.18998 16.3063V20.6415H4.91432C3.78035 20.6415 2.69283 20.1847 1.89099 19.3717C1.08915 18.5587 0.638672 17.4561 0.638672 16.3063C0.638672 15.737 0.749264 15.1733 0.964136 14.6473C1.17901 14.1214 1.49395 13.6435 1.89099 13.2409C2.28802 12.8384 2.75936 12.519 3.2781 12.3012C3.79685 12.0833 4.35284 11.9712 4.91432 11.9712Z" fill="white" />
                    <path d="M13.4646 29.312C12.3306 29.312 11.2431 28.8553 10.4412 28.0423C9.6394 27.2293 9.18893 26.1266 9.18893 24.9769L9.18893 20.6417H13.4646C14.5986 20.6417 15.6861 21.0985 16.4879 21.9115C17.2898 22.7245 17.7402 23.8271 17.7402 24.9769C17.7402 26.1266 17.2898 27.2293 16.4879 28.0423C15.6861 28.8553 14.5986 29.312 13.4646 29.312Z" fill="white" />
                    <path d="M7.05299 1.67529C8.18697 1.67529 9.27451 2.13203 10.0763 2.94503C10.8782 3.75802 11.3287 4.86068 11.3287 6.01043V10.3456H7.05299C5.91902 10.3456 4.8315 9.88883 4.02966 9.07584C3.22782 8.26284 2.77734 7.16018 2.77734 6.01043C2.77734 5.44113 2.88794 4.87741 3.10281 4.35144C3.31768 3.82548 3.63263 3.34758 4.02966 2.94503C4.42669 2.54247 4.89803 2.22315 5.41678 2.00529C5.93552 1.78742 6.49151 1.67529 7.05299 1.67529Z" fill="white" />
                    <path d="M15.6033 19.0161C14.4693 19.0161 13.3817 18.5594 12.5799 17.7464C11.7781 16.9334 11.3276 15.8307 11.3276 14.681L11.3276 10.3458L15.6033 10.3458C16.7372 10.3458 17.8248 10.8026 18.5764 11.6156C19.4284 12.4286 19.8789 13.5312 19.8789 14.681C19.8789 15.8307 19.4284 16.9334 18.6266 17.7464C17.8248 18.5594 16.7372 19.0161 15.6033 19.0161Z" fill="white" />
                    <path d="M15.6038 10.3462C16.7377 10.3462 17.8253 10.8029 18.6271 11.6159C19.429 12.4289 19.8794 13.5316 19.8794 14.6813V19.0165H15.6038C14.4698 19.0165 13.3823 18.5597 12.5804 17.7467C11.7786 16.9337 11.3281 15.8311 11.3281 14.6813C11.3281 13.5316 11.7786 12.4289 12.5804 11.6159C13.3823 10.8029 14.4698 10.3462 15.6038 10.3462Z" fill="white" />
                    <path d="M24.156 27.6865C23.022 27.6865 21.9345 27.2298 21.1326 26.4168C20.3308 25.6038 19.8803 24.5011 19.8803 23.3514V19.0162H24.156C25.29 19.0162 26.3775 19.473 27.1793 20.286C27.9812 21.099 28.4316 22.2016 28.4316 23.3514C28.4316 24.5011 27.9812 25.6038 27.1793 26.4168C26.3775 27.2298 25.29 27.6865 24.156 27.6865Z" fill="white" />
                    <path d="M17.7424 0.591797C18.8764 0.591797 19.964 1.04853 20.7658 1.86153C21.5676 2.67453 22.0181 3.77718 22.0181 4.92693V9.26207H17.7424C16.6085 9.26207 15.5209 8.80534 14.7191 7.99234C13.9173 7.17934 13.4668 6.07668 13.4668 4.92693C13.4668 3.77718 13.9173 2.67453 14.7191 1.86153C15.5209 1.04853 16.6085 0.591797 17.7424 0.591797Z" fill="white" />
                    <path d="M26.2927 17.9326C25.1587 17.9326 24.0712 17.4759 23.2694 16.6629C22.4675 15.8499 22.0171 14.7472 22.0171 13.5975V9.26234L26.2927 9.26234C27.4267 9.26234 28.5142 9.71908 29.3161 10.5321C30.1179 11.3451 30.5684 12.4477 30.5684 13.5975C30.5684 14.7472 30.1179 15.8499 29.3161 16.6629C28.5142 17.4759 27.4267 17.9326 26.2927 17.9326Z" fill="white" />
                  </svg>
                </figure>
                <div className="row content_cta">
                  <figure className="row arrow">
                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 14 14" fill="none">
                      <path d="M12.6919 1.39746L1.66797 12.4219" strokeWidth="2" />
                      <path d="M12.6921 12.4218V1.39772L1.8554 1.39733" strokeWidth="2" />
                    </svg>
                  </figure>
                  <span className="row text">Call 95867-22221</span>
                </div>
              </a>
              <video crossOrigin="anonymous" loop preload="auto" autoPlay muted playsInline id="video_background" className="row">
                <source src="/videos/solar_video2.mp4" type="video/mp4" />
              </video>
            </div>
          </div>

          {/* Marquee Partner Logos */}
          <div className="row content_marquee_logos">
            <div className="marquee">
              <ul className="marquee-content-items">
                <li><span className="partner_label">Official Partners</span></li>
                <li>
                  <div className="partner_logo_item">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
                    <span className="partner_brand">GEDA GUJARAT</span>
                  </div>
                </li>
                <li>
                  <div className="partner_logo_item">
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" /></svg>
                    <span className="partner_brand">SURYA GUJARAT</span>
                  </div>
                </li>
                <li><span className="partner_label">Certified Tech</span></li>
                <li>
                  <div className="partner_logo_item">
                    <span className="partner_brand_bold">WAAREE</span>
                    <span className="partner_sub">SOLAR</span>
                  </div>
                </li>
                <li>
                  <div className="partner_logo_item">
                    <span className="partner_brand_bold">ADANI</span>
                    <span className="partner_sub">SOLAR</span>
                  </div>
                </li>
                <li><span className="partner_label">Approved Subsidy</span></li>
                <li>
                  <div className="partner_logo_item">
                    <span className="partner_brand_bold">TATA POWER</span>
                    <span className="partner_sub">SOLAR</span>
                  </div>
                </li>
                <li>
                  <div className="partner_logo_item">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                    <span className="partner_brand">MNRE INDIA</span>
                  </div>
                </li>
              </ul>
              <ul aria-hidden="true" className="marquee-content-items">
                <li><span className="partner_label">Official Partners</span></li>
                <li>
                  <div className="partner_logo_item">
                    <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><circle cx="12" cy="12" r="5" /><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42" /></svg>
                    <span className="partner_brand">GEDA GUJARAT</span>
                  </div>
                </li>
                <li>
                  <div className="partner_logo_item">
                    <svg width="34" height="34" viewBox="0 0 24 24" fill="currentColor"><path d="M12 3L2 12h3v8h6v-6h2v6h6v-8h3L12 3z" /></svg>
                    <span className="partner_brand">SURYA GUJARAT</span>
                  </div>
                </li>
                <li><span className="partner_label">Certified Tech</span></li>
                <li>
                  <div className="partner_logo_item">
                    <span className="partner_brand_bold">WAAREE</span>
                    <span className="partner_sub">SOLAR</span>
                  </div>
                </li>
                <li>
                  <div className="partner_logo_item">
                    <span className="partner_brand_bold">ADANI</span>
                    <span className="partner_sub">SOLAR</span>
                  </div>
                </li>
                <li><span className="partner_label">Approved Subsidy</span></li>
                <li>
                  <div className="partner_logo_item">
                    <span className="partner_brand_bold">TATA POWER</span>
                    <span className="partner_sub">SOLAR</span>
                  </div>
                </li>
                <li>
                  <div className="partner_logo_item">
                    <svg width="32" height="32" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z" /></svg>
                    <span className="partner_brand">MNRE INDIA</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>

          {/* Copyright */}
          <div className="row content_copy_rights">
            <span>©2026 AV Coating All Rights Reserved.</span>
            <a href="#" target="_blank" rel="noopener noreferrer" className="terms">Terms & Conditions</a>
            <div className="byboron">
              <span>Powered by </span> <a href="https://wa.me/?text=Hi!%20I%20want%20solar%20rooftop%20installation." target="_blank" rel="noopener noreferrer">AV Coating</a>
            </div>
          </div>
        </article>
      </footer>
    </div>
  );
};


export default Footer;

