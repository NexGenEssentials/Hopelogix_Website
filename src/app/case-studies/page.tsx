import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import CaseStudiesInteractive from './components/CaseStudiesInteractive';

export const metadata: Metadata = {
  title: 'Case Studies - HopeLogix',
  description: 'Explore detailed transformation stories showcasing how HopeLogix delivers measurable results through custom low-code solutions across healthcare, finance, retail, and manufacturing industries.',
};

export default function CaseStudiesPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-32 pb-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center space-y-6 mb-16">
            <div className="inline-flex items-center px-4 py-2 bg-secondary/10 border border-secondary/30 rounded-full text-secondary font-semibold text-sm mb-4">
              <span>Success Stories</span>
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-foreground leading-tight">
              Transforming Vision into
              <span className="block text-gradient-primary">Measurable Results</span>
            </h1>
            <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto">
              Discover how leading organizations across industries have accelerated their digital transformation and achieved unprecedented growth with HopeLogix's innovative solutions
            </p>
          </div>

          <CaseStudiesInteractive />
        </div>
      </section>
    </main>
  );
}