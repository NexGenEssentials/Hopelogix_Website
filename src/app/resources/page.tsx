import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ResourcesInteractive from './components/ResourcesInteractive';

export const metadata: Metadata = {
  title: 'Resources - HopeLogix',
  description: 'Explore our comprehensive knowledge hub featuring whitepapers, webinars, case studies, and expert insights on digital transformation, low-code development, and enterprise solutions.',
};

export default function ResourcesPage() {
  return (
    <>
      <Header />
      <ResourcesInteractive />
    </>
  );
}