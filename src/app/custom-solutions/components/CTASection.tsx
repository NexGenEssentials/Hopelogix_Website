import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const CTASection: React.FC = () => {
  return (
    <section className="py-20 px-6 lg:px-12 bg-gradient-to-br from-accent via-surface to-accent">
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-4xl lg:text-5xl font-headline font-bold text-foreground mb-6">
          Ready to Transform Your Business?
        </h2>
        <p className="text-xl text-muted-foreground mb-8 leading-relaxed">
          Let&apos;s discuss how our custom solutions can accelerate your digital transformation and drive measurable results
        </p>

        <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
          <Link
            href="/contact"
            className="inline-flex items-center px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-lg transition-smooth hover:shadow-glow-blue hover:scale-105"
          >
            Schedule Consultation
            <Icon name="ArrowRightIcon" size={20} variant="outline" className="ml-2" />
          </Link>

          <Link
            href="/case-studies"
            className="inline-flex items-center px-8 py-4 bg-surface border-2 border-secondary text-foreground font-semibold rounded-lg transition-smooth hover:bg-secondary hover:text-background"
          >
            View Case Studies
            <Icon name="DocumentTextIcon" size={20} variant="outline" className="ml-2" />
          </Link>
        </div>

        {/* Trust Indicators */}
        <div className="mt-12 pt-8 border-t border-border">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-primary mb-1">500+</div>
              <div className="text-sm text-muted-foreground">Projects Delivered</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-primary mb-1">98%</div>
              <div className="text-sm text-muted-foreground">Client Satisfaction</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-primary mb-1">50+</div>
              <div className="text-sm text-muted-foreground">Enterprise Clients</div>
            </div>
            <div className="text-center">
              <div className="text-3xl font-bold text-gradient-primary mb-1">24/7</div>
              <div className="text-sm text-muted-foreground">Support Available</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;