'use client';

import React, { useRef } from 'react';
import ContactHero from './ContactHero';
import ContactMethods from './ContactMethods';
import ContactFormSection from './ContactFormSection';
import OfficeLocations from './OfficeLocations';
import FAQSection from './FAQSection';

const ContactInteractive: React.FC = () => {
  const formRef = useRef<HTMLDivElement>(null);

  const scrollToForm = () => {
    formRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <ContactHero onScrollToForm={scrollToForm} />
      <ContactMethods />
      <div ref={formRef}>
        <ContactFormSection />
      </div>
      <OfficeLocations />
      <FAQSection />
    </>
  );
};

export default ContactInteractive;