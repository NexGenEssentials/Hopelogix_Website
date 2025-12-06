'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface HeroSectionProps {}

const HeroSection = ({}: HeroSectionProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentMetric, setCurrentMetric] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setCurrentMetric((prev) => (prev + 1) % 3);
    }, 4000);

    return () => clearInterval(interval);
  }, [isHydrated]);

  const metrics = [
    { value: '500+', label: 'Projects Completed', icon: 'CheckCircleIcon' },
    { value: '250+', label: 'Enterprise Clients', icon: 'BuildingOfficeIcon' },
    { value: '3.5x', label: 'Average ROI Delivered', icon: 'ChartBarIcon' },
  ];

  if (!isHydrated) {
    return (
      <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-accent to-background overflow-hidden">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,212,255,0.1),transparent_50%)]" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,102,204,0.1),transparent_50%)]" />
        
        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20 text-center">
          <div className="space-y-8">
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-headline font-bold text-foreground leading-tight">
              Transforming Vision into Reality
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto">
              Where Enterprise Ambition Meets Rapid Innovation
            </p>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="relative min-h-screen flex items-center justify-center bg-gradient-to-br from-background via-accent to-background overflow-hidden">
      {/* Animated Background Effects */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_30%_50%,rgba(0,212,255,0.1),transparent_50%)] animate-pulse" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_50%,rgba(0,102,204,0.1),transparent_50%)] animate-pulse" style={{ animationDelay: '1s' }} />
      
      {/* Floating Particles */}
      <div className="absolute inset-0 overflow-hidden">
        {[...Array(20)].map((_, i) => (
          <div
            key={i}
            className="absolute w-1 h-1 bg-secondary/30 rounded-full animate-pulse"
            style={{
              left: `${Math.random() * 100}%`,
              top: `${Math.random() * 100}%`,
              animationDelay: `${Math.random() * 3}s`,
              animationDuration: `${2 + Math.random() * 3}s`,
            }}
          />
        ))}
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 py-20">
        <div className="text-center space-y-8">
          {/* Main Headline */}
          <div className="space-y-4">
            <h1 className="text-5xl md:text-6xl lg:text-6xl font-headline font-bold text-foreground leading-tight">
        
              Driving Digital Transformation with
              <span className="block mt-2 text-gradient-primary">
               Next-Generation Technology
              </span>
            </h1>
            <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              Where Enterprise Ambition Meets Rapid Innovation. Building Tomorrow's Competitive Advantages Today.
            </p>
          </div>

          {/* CTA Buttons */}
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
            <Link
              href="/contact"
              className="group relative px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-lg transition-smooth hover:shadow-glow-blue-strong hover:scale-105 flex items-center space-x-2"
            >
              <span>Schedule Consultation</span>
              <Icon name="ArrowRightIcon" size={20} variant="outline" className="group-hover:translate-x-1 transition-smooth" />
            </Link>
            <Link
              href="/custom-solutions"
              className="px-8 py-4 bg-surface/50 backdrop-blur-sm text-foreground font-semibold rounded-lg border border-border transition-smooth hover:bg-surface hover:border-secondary hover:shadow-glow-blue flex items-center space-x-2"
            >
              <span>Explore Solutions</span>
              <Icon name="SparklesIcon" size={20} variant="outline" />
            </Link>
          </div>

          {/* Animated Metrics */}
          <div className="pt-12">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto">
              {metrics.map((metric, index) => (
                <div
                  key={index}
                  className={`p-6 bg-surface/30 backdrop-blur-sm rounded-xl border transition-smooth ${
                    currentMetric === index
                      ? 'border-secondary shadow-glow-blue scale-105'
                      : 'border-border hover:border-secondary/50'
                  }`}
                >
                  <div className="flex flex-col items-center space-y-3">
                    <div className={`p-3 rounded-lg transition-smooth ${
                      currentMetric === index ? 'bg-secondary/20' : 'bg-muted/20'
                    }`}>
                      <Icon
                        name={metric.icon as any}
                        size={32}
                        variant={currentMetric === index ? 'solid' : 'outline'}
                        className={currentMetric === index ? 'text-secondary' : 'text-muted-foreground'}
                      />
                    </div>
                    <div className="text-center">
                      <div className="text-4xl font-headline font-bold text-foreground">
                        {metric.value}
                      </div>
                      <div className="text-sm text-muted-foreground mt-1">
                        {metric.label}
                      </div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Trust Indicators */}
          <div className="pt-8">
            <p className="text-sm text-muted-foreground mb-4">Trusted by Industry Leaders</p>
            <div className="flex flex-wrap items-center justify-center gap-8 opacity-60">
              {['Mahali Africa Adventures', 'Maison deluxe', 'GIZ', 'Mo Capital'].map((company, index) => (
                <div key={index} className="text-muted-foreground font-semibold text-lg">
                  {company}
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <Icon name="ChevronDownIcon" size={32} variant="outline" className="text-secondary" />
      </div>
    </section>
  );
};

export default HeroSection;