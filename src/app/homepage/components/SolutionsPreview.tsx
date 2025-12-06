'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface Solution {
  id: number;
  title: string;
  description: string;
  icon: string;
  benefits: string[];
  roi: string;
  href: string;
}

interface SolutionsPreviewProps {}

const SolutionsPreview = ({}: SolutionsPreviewProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [hoveredCard, setHoveredCard] = useState<number | null>(null);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const solutions: Solution[] = [
    {
      id: 1,
      title: 'Custom Software Development',
      description: 'Tailored solutions built to your exact specifications using cutting-edge low-code platforms for rapid delivery without compromising quality.',
      icon: 'CodeBracketIcon',
      benefits: ['50% Faster Time-to-Market', 'Enterprise-Grade Security', 'Scalable Architecture'],
      roi: '3.5x Average ROI',
      href: '/custom-solutions',
    },
    {
      id: 2,
      title: 'Digital Transformation',
      description: 'Comprehensive modernization strategies that transform legacy systems into agile, cloud-native solutions driving competitive advantage.',
      icon: 'RocketLaunchIcon',
      benefits: ['Legacy System Modernization', 'Cloud Migration', 'Process Automation'],
      roi: '40% Cost Reduction',
      href: '/custom-solutions',
    },
    {
      id: 3,
      title: 'API Integration Services',
      description: 'Seamless connectivity between your existing systems and new platforms, creating unified data ecosystems for better decision-making.',
      icon: 'CircleStackIcon',
      benefits: ['Real-Time Data Sync', 'Third-Party Integrations', 'Microservices Architecture'],
      roi: '60% Efficiency Gain',
      href: '/custom-solutions',
    },
    {
      id: 4,
      title: 'Low-Code Platforms',
      description: 'Empower your teams with intuitive development platforms that accelerate innovation while maintaining enterprise standards.',
      icon: 'BoltIcon',
      benefits: ['Rapid Prototyping', 'Citizen Development', 'Reduced Technical Debt'],
      roi: '70% Dev Time Saved',
      href: '/custom-solutions',
    },
  ];

  if (!isHydrated) {
    return (
      <section className="py-20 bg-surface">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">
              Solutions That Drive Results
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              Comprehensive technology solutions designed for enterprise success
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {solutions.map((solution) => (
              <div key={solution.id} className="p-8 bg-background rounded-xl border border-border">
                <h3 className="text-2xl font-headline font-bold text-foreground mb-3">
                  {solution.title}
                </h3>
                <p className="text-muted-foreground">{solution.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 bg-surface">
      <div className="max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-secondary/10 rounded-full mb-6">
            <Icon name="SparklesIcon" size={20} variant="solid" className="text-secondary" />
            <span className="text-sm font-semibold text-secondary">Our Solutions</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">
            Solutions That Drive Results
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Comprehensive technology solutions designed for enterprise success and sustainable growth
          </p>
        </div>

        {/* Solutions Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {solutions.map((solution) => (
            <div
              key={solution.id}
              onMouseEnter={() => setHoveredCard(solution.id)}
              onMouseLeave={() => setHoveredCard(null)}
              className={`group relative p-8 bg-background rounded-xl border transition-smooth cursor-pointer ${
                hoveredCard === solution.id
                  ? 'border-secondary shadow-glow-blue scale-[1.02]'
                  : 'border-border hover:border-secondary/50'
              }`}
            >
              {/* Icon */}
              <div className={`inline-flex p-4 rounded-lg mb-6 transition-smooth ${
                hoveredCard === solution.id ? 'bg-secondary/20' : 'bg-muted/20'
              }`}>
                <Icon
                  name={solution.icon as any}
                  size={40}
                  variant={hoveredCard === solution.id ? 'solid' : 'outline'}
                  className={hoveredCard === solution.id ? 'text-secondary' : 'text-muted-foreground'}
                />
              </div>

              {/* Content */}
              <h3 className="text-2xl font-headline font-bold text-foreground mb-3">
                {solution.title}
              </h3>
              <p className="text-muted-foreground mb-6 leading-relaxed">
                {solution.description}
              </p>

              {/* Benefits */}
              <div className="space-y-2 mb-6">
                {solution.benefits.map((benefit, index) => (
                  <div key={index} className="flex items-center space-x-2">
                    <Icon name="CheckCircleIcon" size={16} variant="solid" className="text-success flex-shrink-0" />
                    <span className="text-sm text-muted-foreground">{benefit}</span>
                  </div>
                ))}
              </div>

              {/* ROI Badge */}
              <div className="flex items-center justify-between">
                <div className="px-4 py-2 bg-success/10 rounded-lg">
                  <span className="text-sm font-semibold text-success">{solution.roi}</span>
                </div>
                <Link
                  href={solution.href}
                  className="flex items-center space-x-2 text-secondary font-semibold group-hover:translate-x-2 transition-smooth"
                >
                  <span>Learn More</span>
                  <Icon name="ArrowRightIcon" size={20} variant="outline" />
                </Link>
              </div>

              {/* Hover Glow Effect */}
              {hoveredCard === solution.id && (
                <div className="absolute inset-0 bg-secondary/5 rounded-xl pointer-events-none" />
              )}
            </div>
          ))}
        </div>

        {/* CTA */}
        <div className="text-center">
          <Link
            href="/custom-solutions"
            className="inline-flex items-center space-x-2 px-8 py-4 bg-gradient-to-r from-primary to-secondary text-primary-foreground font-semibold rounded-lg transition-smooth hover:shadow-glow-blue-strong hover:scale-105"
          >
            <span>View All Solutions</span>
            <Icon name="ArrowRightIcon" size={20} variant="outline" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default SolutionsPreview;