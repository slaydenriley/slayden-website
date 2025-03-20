import React from 'react';
import Hero from '../../components/hero/Hero';
import About from '../../components/about/About';
// import Work from '../../components/work/Work';
import Contact from '../../components/contact/Contact';
import './Home.scss';

const Home: React.FC = () => {
  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      const headerHeight = 64;
      const padding = 24;
      const elementPosition = section.getBoundingClientRect().top + window.scrollY;
      window.scrollTo({
        top: elementPosition - headerHeight - padding,
        behavior: "smooth"
      });
    }
  };

  return (
    <div className="home-container">
      <Hero onSectionClick={scrollToSection} />
      <About />
      {/* <Work /> */}
      <Contact />
    </div>
  );
};

export default Home;
