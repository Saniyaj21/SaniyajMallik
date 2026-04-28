'use client';

import { CustomCursor } from './components/primitives';
import { SiteHeader } from './components/SiteHeader';
import { HeroEditorial } from './components/Hero';
import { ProblemSolution } from './components/ProblemSolution';
import { Capabilities } from './components/Capabilities';
import { FeaturedWork } from './components/FeaturedWork';
import { Testimonials } from './components/Testimonials';
import { Process } from './components/Process';
import { FAQ } from './components/FAQ';
import { About } from './components/About';
import { Contact } from './components/Contact';
import { Footer } from './components/Footer';

export default function Home() {
  return (
    <>
      <CustomCursor />
      <SiteHeader />
      <main>
        <HeroEditorial />
        <ProblemSolution />
        <Capabilities />
        <FeaturedWork />
        <Testimonials />
        <Process />
        <FAQ />
        <About />
        <Contact />
      </main>
      <Footer />
    </>
  );
}
