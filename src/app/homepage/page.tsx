import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import HeroSection from './components/HeroSection';
import SolutionsPreview from './components/SolutionsPreview';
import TestimonialCarousel from './components/TestimonialCarousel';
import CTASection from './components/CTASection';
import Footer from './components/Footer';

export const metadata: Metadata = {
  title: 'Homepage - HopeLogix',
  description: 'Empowering Tomorrow\'s Vision Today. Transform your business with intelligent low-code solutions, custom software development, and digital transformation services from HopeLogix.',
};

export default function HomePage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <HeroSection />
      <SolutionsPreview />
      <TestimonialCarousel />
      <CTASection />
      <Footer />
    </main>
  );
}