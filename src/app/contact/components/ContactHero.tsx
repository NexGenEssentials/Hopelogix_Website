import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactHeroProps {
  onScrollToForm: () => void;
}

const ContactHero: React.FC<ContactHeroProps> = ({ onScrollToForm }) => {
  return (
    <section className="relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent to-background opacity-50" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_20%,rgba(0,212,255,0.1),transparent_50%)]" />
      
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center max-w-4xl mx-auto">
          {/* Badge */}
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-secondary/10 border border-secondary/20 rounded-full mb-6">
            <Icon name="SparklesIcon" size={20} variant="solid" className="text-secondary" />
            <span className="text-sm font-medium text-secondary">Let's Build Something Extraordinary</span>
          </div>

          {/* Heading */}
          <h1 className="text-5xl lg:text-6xl font-headline font-bold text-foreground mb-6">
            Transform Your Vision Into{' '}
            <span className="text-gradient-primary">Reality</span>
          </h1>

          {/* Description */}
          <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
            Connect with our team of experts to discuss your digital transformation journey. 
            Whether you need a strategic consultation, technical demo, or custom solution proposal, 
            we're here to help you achieve your business goals.
          </p>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <button
              onClick={onScrollToForm}
              className="w-full sm:w-auto px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-lg transition-smooth hover:shadow-glow-blue hover:scale-105 flex items-center justify-center gap-2"
            >
              <Icon name="CalendarIcon" size={20} variant="outline" />
              Schedule Consultation
            </button>
            <button
              onClick={onScrollToForm}
              className="w-full sm:w-auto px-8 py-4 bg-surface border border-border text-foreground font-semibold rounded-lg transition-smooth hover:bg-muted hover:border-secondary"
            >
              Request Demo
            </button>
          </div>

          {/* Trust Indicators */}
          <div className="mt-12 flex flex-wrap items-center justify-center gap-8 text-sm text-muted-foreground">
            <div className="flex items-center gap-2">
              <Icon name="ShieldCheckIcon" size={20} variant="solid" className="text-success" />
              <span>SOC 2 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="ClockIcon" size={20} variant="solid" className="text-secondary" />
              <span>24-Hour Response Time</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="UserGroupIcon" size={20} variant="solid" className="text-primary" />
              <span>500+ Successful Projects</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ContactHero;