import React from 'react';

const IndianFlagSvg = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="23" height="23" viewBox="0 0 225 225" style={{ borderRadius: '50%', overflow: 'hidden' }}>
    <rect width="225" height="75" y="0" fill="#FF9933" />
    <rect width="225" height="75" y="75" fill="#FFFFFF" />
    <rect width="225" height="75" y="150" fill="#138808" />
    <g transform="translate(112.5, 112.5)">
      <circle r="30" fill="none" stroke="#000080" strokeWidth="3" />
      {[...Array(24)].map((_, i) => (
        <line
          key={i}
          x1="0"
          y1="0"
          x2="0"
          y2="-30"
          stroke="#000080"
          strokeWidth="2"
          transform={`rotate(${i * 15})`}
        />
      ))}
    </g>
  </svg>
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

export const NavbarHide = () => {
  return (
    <nav className="row content_navigation hide_navigation" id="menu">
      {/* Logo */}
      <a href="/">
        <figure className="logo">
          <img src="/images/compneylogo.png" alt="AV Coating" title="AV Coating"/>
        </figure>
      </a>
      {/* Menu Links */}
      <ul className="content_links">
        <li><a href="#project" onClick={(e) => handleNavClick(e, 'project')} className="link_sections" data-section="project">Overview</a></li>
        <li><a href="#steps" onClick={(e) => handleNavClick(e, 'steps')} className="link_sections" data-section="steps">Services</a></li>
        <li><a href="#journey" onClick={(e) => handleNavClick(e, 'journey')} className="link_sections" data-section="journey">Journey</a></li>
        <li><a href="#specs" onClick={(e) => handleNavClick(e, 'specs')} className="link_sections" data-section="specs">Specs</a></li>
        <li><a href="#why-solar" onClick={(e) => handleNavClick(e, 'why-solar')} className="link_sections" data-section="why-solar">Why AV Coating</a></li>
        <li><a href="#aboutus" onClick={(e) => handleNavClick(e, 'aboutus')} className="link_sections" data-section="aboutus">About Us</a></li>
        <li><a href="#news" onClick={(e) => handleNavClick(e, 'news')} className="link_sections" data-section="news">Articles</a></li>
        <li><a href="#faq" onClick={(e) => handleNavClick(e, 'faq')} className="link_sections" data-section="faq">FAQs</a></li>
      </ul>

      <ul className="content_actions">
        <li>
          <a href="#" className="button_lang" title="India">
            <IndianFlagSvg />
          </a>
        </li>
        <li>
          <a href="tel:9586722221" className="button">
            <div className="text"><span>Call 95867-22221</span></div>
            <div className="arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M9.69538 10.1L0.6875 1.09167"/>
                <path d="M9.69469 1.0917V10.0998L0.839785 10.1001"/>
              </svg>
            </div>
          </a>
        </li>
      </ul>
      <div className="content_burger">
        <a href="javascript:void(0)" className="btn_burger hidden_btn"></a>
      </div>
    </nav>
  );
};

export const NavbarNormal = () => {
  return (
    <nav className="row content_navigation normal_navigation">
      <a href="/">
        <figure className="logo">
          <img src="/images/compneylogo.png" alt="AV Coating" title="AV Coating"/>
        </figure>
      </a>
      <ul className="content_links">
        <li><a href="#project" onClick={(e) => handleNavClick(e, 'project')} className="link_sections" data-section="project">Overview</a></li>
        <li><a href="#steps" onClick={(e) => handleNavClick(e, 'steps')} className="link_sections" data-section="steps">Services</a></li>
        <li><a href="#journey" onClick={(e) => handleNavClick(e, 'journey')} className="link_sections" data-section="journey">Journey</a></li>
        <li><a href="#specs" onClick={(e) => handleNavClick(e, 'specs')} className="link_sections" data-section="specs">Specs</a></li>
        <li><a href="#why-solar" onClick={(e) => handleNavClick(e, 'why-solar')} className="link_sections" data-section="why-solar">Why AV Coating</a></li>
        <li><a href="#aboutus" onClick={(e) => handleNavClick(e, 'aboutus')} className="link_sections" data-section="aboutus">About Us</a></li>
        <li><a href="#news" onClick={(e) => handleNavClick(e, 'news')} className="link_sections" data-section="news">Articles</a></li>
        <li><a href="#faq" onClick={(e) => handleNavClick(e, 'faq')} className="link_sections" data-section="faq">FAQs</a></li>
      </ul>
      <ul className="content_actions">
        <li>
          <a href="javascript:void(0)" className="button_lang" title="India">
            <IndianFlagSvg />
          </a>
        </li>
        <li>
          <a href="tel:9586722221" className="button">
            <div className="text"><span>Call 95867-22221</span></div>
            <div className="arrow">
              <svg xmlns="http://www.w3.org/2000/svg" width="11" height="11" viewBox="0 0 11 11" fill="none">
                <path d="M9.69538 10.1L0.6875 1.09167"/>
                <path d="M9.69469 1.0917V10.0998L0.839785 10.1001"/>
              </svg>
            </div>
          </a>
        </li>
      </ul>
      <div className="content_burger">
        <a href="javascript:void(0)" className="btn_burger normal_btn"></a>
      </div>
    </nav>
  );
};

const Navbar = () => {
  return (
    <>
      <NavbarHide />
      <NavbarNormal />
    </>
  );
};

export default Navbar;
