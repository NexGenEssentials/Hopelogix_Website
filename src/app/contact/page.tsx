import type { Metadata } from 'next';
import Header from '@/components/common/Header';
import ContactInteractive from './components/ContactInteractive';
import ContactFooter from './components/ContactFooter';

export const metadata: Metadata = {
  title: 'Contact Us - HopeLogix',
  description: 'Connect with HopeLogix to discuss your technology needs—web, mobile, USSD, integrations, and digital transformation. Schedule consultations, request demos, or get detailed proposals for custom solutions.',
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-background">
      <Header />
      <ContactInteractive />
      <ContactFooter />
    </main>
  );
}