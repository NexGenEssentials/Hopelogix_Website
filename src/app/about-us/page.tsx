import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import AboutUsInteractive from './components/AboutUsInteractive';

export const metadata: Metadata = {
  title: 'About Us - HopeLogix',
  description: 'Learn about HopeLogix\'s mission to empower tomorrow\'s vision today. Meet our leadership team, explore our core values, and discover our journey of transforming complex business challenges into elegant, scalable solutions.',
};

export default function AboutUsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <div className="pt-20">
        <AboutUsInteractive />
      </div>
    </main>
  );
}