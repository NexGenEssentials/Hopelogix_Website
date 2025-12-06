'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FAQ {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const FAQSection: React.FC = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [openId, setOpenId] = useState<string | null>(null);
  const [activeCategory, setActiveCategory] = useState<string>('all');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const faqs: FAQ[] = [
    {
      id: '1',
      question: 'What is your typical project timeline?',
      answer: 'Project timelines vary based on complexity and scope. Simple applications can be delivered in 1-3 months, while enterprise solutions typically take 3-6 months. We provide detailed timelines during the discovery phase and maintain transparent communication throughout development.',
      category: 'general'
    },
    {
      id: '2',
      question: 'Do you offer ongoing support after project completion?',
      answer: 'Yes, we provide comprehensive post-launch support including maintenance, updates, bug fixes, and feature enhancements. We offer flexible support packages tailored to your needs, from basic monitoring to full managed services.',
      category: 'general'
    },
    {
      id: '3',
      question: 'What industries do you specialize in?',
      answer: 'We have extensive experience across Financial Services, Healthcare, Retail & E-commerce, Manufacturing, Technology, Education, and Government sectors. Our team adapts to industry-specific requirements and compliance standards.',
      category: 'general'
    },
    {
      id: '4',
      question: 'How do you ensure project security and data privacy?',
      answer: 'We implement enterprise-grade security measures including encryption, secure authentication, regular security audits, and compliance with industry standards (SOC 2, GDPR, HIPAA where applicable). All team members sign NDAs and follow strict data handling protocols.',
      category: 'technical'
    },
    {
      id: '5',
      question: 'Can you integrate with our existing systems?',
      answer: 'Absolutely. We specialize in API integration and legacy system modernization. Our team has experience integrating with various platforms, databases, and third-party services while ensuring seamless data flow and system compatibility.',
      category: 'technical'
    },
    {
      id: '6',
      question: 'What is your pricing model?',
      answer: 'We offer flexible pricing models including fixed-price projects, time and materials, and retainer-based engagements. Pricing depends on project scope, complexity, and timeline. We provide detailed proposals with transparent cost breakdowns after the initial consultation.',
      category: 'pricing'
    },
    {
      id: '7',
      question: 'Do you require upfront payment?',
      answer: 'We typically structure payments in milestones aligned with project phases. A deposit is required to begin work, with subsequent payments tied to deliverable completion. Specific payment terms are outlined in the project agreement.',
      category: 'pricing'
    },
    {
      id: '8',
      question: 'What happens if we need to change project requirements?',
      answer: 'We understand that requirements evolve. Our agile methodology accommodates changes through a formal change request process. We assess the impact on timeline and budget, provide updated estimates, and proceed with your approval.',
      category: 'process'
    }
  ];

  const categories = [
    { value: 'all', label: 'All Questions' },
    { value: 'general', label: 'General' },
    { value: 'technical', label: 'Technical' },
    { value: 'pricing', label: 'Pricing' },
    { value: 'process', label: 'Process' }
  ];

  const filteredFaqs = activeCategory === 'all' 
    ? faqs 
    : faqs.filter(faq => faq.category === activeCategory);

  const toggleFaq = (id: string) => {
    setOpenId(openId === id ? null : id);
  };

  if (!isHydrated) {
    return (
      <section className="py-20 px-6 lg:px-12 bg-surface/50">
        <div className="max-w-4xl mx-auto">
          <div className="animate-pulse space-y-4">
            <div className="h-8 bg-muted rounded w-1/2 mx-auto"></div>
            <div className="h-4 bg-muted rounded w-2/3 mx-auto"></div>
            <div className="space-y-3 mt-8">
              {[1, 2, 3].map((i) => (
                <div key={i} className="h-16 bg-muted rounded"></div>
              ))}
            </div>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section className="py-20 px-6 lg:px-12 bg-surface/50">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-headline font-bold text-foreground mb-4">
            Frequently Asked <span className="text-gradient-primary">Questions</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Find answers to common questions about our services, process, and partnerships.
          </p>
        </div>

        {/* Category Filter */}
        <div className="flex flex-wrap justify-center gap-3 mb-12">
          {categories.map((category) => (
            <button
              key={category.value}
              onClick={() => setActiveCategory(category.value)}
              className={`px-6 py-2 rounded-full font-medium transition-smooth ${
                activeCategory === category.value
                  ? 'bg-gradient-primary text-primary-foreground'
                  : 'bg-muted text-muted-foreground hover:bg-muted/80'
              }`}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* FAQ List */}
        <div className="space-y-4">
          {filteredFaqs.map((faq) => (
            <div
              key={faq.id}
              className="bg-card border border-border rounded-xl overflow-hidden transition-smooth hover:border-secondary"
            >
              <button
                onClick={() => toggleFaq(faq.id)}
                className="w-full px-6 py-5 flex items-center justify-between text-left transition-smooth hover:bg-muted/50"
              >
                <span className="text-lg font-semibold text-foreground pr-4">
                  {faq.question}
                </span>
                <Icon
                  name="ChevronDownIcon"
                  size={24}
                  variant="outline"
                  className={`text-secondary flex-shrink-0 transition-transform ${
                    openId === faq.id ? 'rotate-180' : ''
                  }`}
                />
              </button>
              
              {openId === faq.id && (
                <div className="px-6 pb-5 text-muted-foreground leading-relaxed">
                  {faq.answer}
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Still Have Questions CTA */}
        <div className="mt-12 text-center p-8 bg-card border border-border rounded-xl">
          <h3 className="text-2xl font-headline font-bold text-foreground mb-3">
            Still Have Questions?
          </h3>
          <p className="text-muted-foreground mb-6">
            Our team is here to help. Reach out and we'll get back to you within 24 hours.
          </p>
          <a
            href="#contact-form"
            className="inline-flex items-center gap-2 px-8 py-3 bg-gradient-primary text-primary-foreground font-semibold rounded-lg transition-smooth hover:shadow-glow-blue hover:scale-105"
          >
            <Icon name="ChatBubbleLeftRightIcon" size={20} variant="outline" />
            Contact Support
          </a>
        </div>
      </div>
    </section>
  );
};

export default FAQSection;