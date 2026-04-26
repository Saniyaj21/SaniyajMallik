'use client';

import { useState, useEffect } from 'react';
import { CustomCursor } from '../components/primitives';
import { SiteHeader } from '../components/SiteHeader';
import { Footer } from '../components/Footer';

export default function ServicesLayout({ children }: { children: React.ReactNode }) {
  const [theme, setTheme] = useState<'light' | 'dark'>('dark');

  useEffect(() => {
    document.documentElement.setAttribute('data-theme', theme);
  }, [theme]);

  return (
    <>
      <CustomCursor />
      <SiteHeader theme={theme} setTheme={setTheme} />
      <main>{children}</main>
      <Footer />
    </>
  );
}
