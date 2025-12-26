import React, { useEffect, useState } from 'react';
import Header from '../components/Header';
import WrityHero from '../components/wriety/WrityHero';
import WrityFeatures from '../components/wriety/WrityFeatures';
import WrityFitsIntoWork from '../components/wriety/WrityFitsIntoWork';
import WrityCTA from '../components/wriety/WrityCTA';
import Footer from '../components/Footer';

export default function WrityPage() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <div className="wriety-page">
      <Header scrolled={scrolled} isWrityPage={true} />
      <WrityHero />
      <WrityFeatures />
      <WrityFitsIntoWork />
      <WrityCTA />
      <Footer />
    </div>
  );
}
