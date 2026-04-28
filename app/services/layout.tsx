import { CustomCursor } from '../components/primitives';
import { SiteHeader } from '../components/SiteHeader';
import { Footer } from '../components/Footer';

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <CustomCursor />
      <SiteHeader />
      <main>{children}</main>
      <Footer />
    </>
  );
}
