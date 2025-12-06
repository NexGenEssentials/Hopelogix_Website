import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import CustomSolutionsInteractive from './components/CustomSolutionsInteractive';

export const metadata: Metadata = {
  title: 'Custom Solutions - HopeLogix',
  description:
    'Explore our comprehensive suite of custom software development, low-code platforms, digital transformation consulting, legacy system modernization, and API integration services designed to accelerate your business growth.',
};

export default function CustomSolutionsPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <CustomSolutionsInteractive />
    </main>
  );
}