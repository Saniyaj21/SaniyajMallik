import { notFound } from 'next/navigation';
import type { Metadata } from 'next';
import { SERVICES } from '../data';
import { ServicePage } from '../../components/ServicePage';

export function generateStaticParams() {
  return SERVICES.map(s => ({ slug: s.slug }));
}

export async function generateMetadata(
  { params }: { params: Promise<{ slug: string }> }
): Promise<Metadata> {
  const { slug } = await params;
  const service = SERVICES.find(s => s.slug === slug);
  if (!service) return {};
  return {
    title: `${service.name.replace('\n', ' ')} · Saniyaj Mallik`,
  };
}

export default async function ServicePageRoute(
  { params }: { params: Promise<{ slug: string }> }
) {
  const { slug } = await params;
  const service = SERVICES.find(s => s.slug === slug);
  if (!service) notFound();
  return <ServicePage {...service} />;
}
