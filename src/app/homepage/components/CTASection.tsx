'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface CTASectionProps {}

const CTASection = ({}: CTASectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const conversions = [
    {
      title: 'Schedule a Consultation',
      description: 'Discuss your digital transformation goals with our experts',
      icon: 'CalendarDaysIcon',
      href: '/contact',
      primary: true,
    },
    {
      title: 'Download Resources',
      description: 'Access whitepapers, case studies, and industry insights',
      icon: 'DocumentArrowDownIcon',
      href: '/resources',
      primary: false,
    },
    {
      title: 'Request a Demo',
      description: 'See our low-code platform capabilities in action',
      icon: 'PlayCircleIcon',
      href: '/contact',
      primary: false,
    },
  ];

  if (!isHydrated) {
    return (
      <section className="py-20 bg-gradient-to-br from-accent via-surface to-accent">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 text-center">
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground mb-8">
            Let's discuss how HopeLogix can accelerate your digital journey
          </p>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-gradient-to-br from-accent via-surface to-accent relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,212,255,0.1),transparent_50%)]" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,102,204,0.1),transparent_50%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Main CTA */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-secondary/10 rounded-full mb-6">
            <Icon name="RocketLaunchIcon" size={20} variant="solid" className="text-secondary" />
            <span className="text-sm font-semibold text-secondary">Get Started Today</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-6">
            Ready to Transform Your Business?
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto mb-8">
            Let's discuss how Paradigm can accelerate your digital journey and deliver measurable results
          </p>
          <Link
            href="/contact"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-lg transition-smooth hover:shadow-glow-blue-strong hover:scale-105"
          >
            <span>Schedule Free Consultation</span>
            <Icon name="ArrowRightIcon" size={20} variant="outline" />
          </Link>
        </div>

        {/* Conversion Options */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-6xl mx-auto">
          {conversions.map((conversion, index) => (
            <Link
              key={index}
              href={conversion.href}
              className={`group p-8 rounded-xl border transition-smooth ${
                conversion.primary
                  ? 'bg-gradient-to-br from-primary/10 to-secondary/10 border-secondary hover:shadow-glow-blue'
                  : 'bg-surface/50 backdrop-blur-sm border-border hover:border-secondary/50'
              }`}
            >
              <div className={`inline-flex p-4 rounded-lg mb-4 transition-smooth ${
                conversion.primary ? 'bg-secondary/20' : 'bg-muted/20 group-hover:bg-secondary/20'
              }`}>
                <Icon
                  name={conversion.icon as any}
                  size={32}
                  variant="outline"
                  className={conversion.primary ? 'text-secondary' : 'text-muted-foreground group-hover:text-secondary'}
                />
              </div>
              <h3 className="text-xl font-headline font-bold text-foreground mb-2">
                {conversion.title}
              </h3>
              <p className="text-muted-foreground mb-4">
                {conversion.description}
              </p>
              <div className="flex items-center space-x-2 text-secondary font-semibold group-hover:translate-x-2 transition-smooth">
                <span>Learn More</span>
                <Icon name="ArrowRightIcon" size={16} variant="outline" />
              </div>
            </Link>
          ))}
        </div>

        {/* Newsletter Signup */}
        <div className="mt-16 max-w-2xl mx-auto text-center">
          <h3 className="text-2xl font-headline font-bold text-foreground mb-4">
            Stay Updated with Industry Insights
          </h3>
          <p className="text-muted-foreground mb-6">
            Subscribe to receive the latest trends, best practices, and success stories
          </p>
          <div className="flex flex-col sm:flex-row gap-4 max-w-md mx-auto">
            <input
              type="email"
              placeholder="Enter your email"
              className="flex-1 px-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary"
            />
            <button className="px-6 py-3 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-lg transition-smooth hover:shadow-glow-blue hover:scale-105 whitespace-nowrap">
              Subscribe
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;