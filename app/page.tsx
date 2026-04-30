import dynamic from 'next/dynamic';
import { CustomCursor } from './components/primitives';
import { SiteHeader } from './components/SiteHeader';
import { BuildLaunchScaleHero } from './components/BuildLaunchScaleHero';

const ProblemSolution = dynamic(() => import('./components/ProblemSolution').then(m => ({ default: m.ProblemSolution })));
const Capabilities    = dynamic(() => import('./components/Capabilities').then(m => ({ default: m.Capabilities })));
const FeaturedWork    = dynamic(() => import('./components/FeaturedWork').then(m => ({ default: m.FeaturedWork })));
const Testimonials    = dynamic(() => import('./components/Testimonials').then(m => ({ default: m.Testimonials })));
const Process         = dynamic(() => import('./components/Process').then(m => ({ default: m.Process })));
const FAQ             = dynamic(() => import('./components/FAQ').then(m => ({ default: m.FAQ })));
const About           = dynamic(() => import('./components/About').then(m => ({ default: m.About })));
const Contact         = dynamic(() => import('./components/Contact').then(m => ({ default: m.Contact })));
const Footer          = dynamic(() => import('./components/Footer').then(m => ({ default: m.Footer })));

export default function Home() {
  return (
    <>
      <CustomCursor />
      <SiteHeader />
      <main>
        <BuildLaunchScaleHero />
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
