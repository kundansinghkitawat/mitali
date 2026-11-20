import React, { useEffect } from 'react';
import { NavbarHide, NavbarNormal } from './components/Navbar';
import HeroSlider from './components/HeroSlider';
import ProjectDotReveal from './components/ProjectDotReveal';
import StepsVideo from './components/StepsVideo';
import JourneyMilestones from './components/JourneyMilestones';
import SolarSpecsTable from './components/SolarSpecsTable';
import AboutUs from './components/AboutUs';
import SolarMarquee from './components/SolarMarquee';
import IDSection from './components/IDSection';
import BioTokensBanner from './components/BioTokensBanner';
import NewsSection from './components/NewsSection';
import SolarFAQ from './components/SolarFAQ';
import Footer, { FooterSpace } from './components/Footer';

import { initAnimations } from './js/script';

function App() {
  useEffect(() => {
    initAnimations();
  }, []);

  return (
    <>
      {/* Sticky floating navigation bar */}
      <NavbarHide />

      {/* GSAP ScrollSmoother Outer Wrapper */}
      <div id="smooth-wrapper">
        <main id="smooth-content" data-appname="home" className="home" data-navigation="home">
          <NavbarNormal />
          <HeroSlider />
          <ProjectDotReveal />
          <StepsVideo />
          <JourneyMilestones />
          <SolarSpecsTable />
          <IDSection />
          <AboutUs />
          <SolarMarquee />
          <BioTokensBanner />
          <NewsSection />
          <SolarFAQ />
          <Footer />
        </main>
      </div>
    </>
  );
}

export default App;
