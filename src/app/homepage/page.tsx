import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import SolutionsPreview from './components/SolutionsPreview';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Homepage - HopeLogix',
  description: "Empowering Tomorrow's Vision Today. Transform your business with advanced technology solutions from HopeLogix: web and mobile app development, USSD, integrations, and digital transformation services.",
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <SolutionsPreview />
      {/* <section>
        {/* Trusted by Industry Leaders */}
        {/* <TestimonialCarousel /> */}
      {/* </section> */}
      {/* <section>
        {/* Client Success Stories */}
        {/* <CaseStudiesPreview /> */}
      {/* </section> */}
      <CTASection />
      <Footer />
    </main>
  );
}