'use client';

import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface Testimonial {
  id: number;
  quote: string;
  author: string;
  role: string;
  company: string;
  image: string;
  alt: string;
  logo: string;
  logoAlt: string;
}

interface TestimonialCarouselProps {}

const TestimonialCarousel = ({}: TestimonialCarouselProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (!isHydrated) return;

    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(interval);
  }, [isHydrated]);

  const testimonials: Testimonial[] = [
  {
    id: 1,
    quote: "Paradigm transformed our legacy systems into a modern, scalable platform in just 4 months. The ROI exceeded our projections by 40%. Their low-code approach didn't compromise on quality - we got enterprise-grade solutions with startup speed.",
    author: 'Sarah Mitchell',
    role: 'Chief Technology Officer',
    company: 'Global Financial Services Inc.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18d07eb19-1763299289544.png",
    alt: 'Professional woman with blonde hair in navy blazer smiling confidently in modern office',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1e5c695d5-1764622318290.png",
    logoAlt: 'Global Financial Services company logo with blue geometric design'
  },
  {
    id: 2,
    quote: "Working with Paradigm was a game-changer for our digital transformation journey. Their team understood our complex requirements and delivered solutions that seamlessly integrated with our existing infrastructure. The partnership approach made all the difference.",
    author: 'Michael Chen',
    role: 'VP of Digital Innovation',
    company: 'TechCorp Industries',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_10ddd37f7-1763301351016.png",
    alt: 'Asian businessman in gray suit with confident smile in corporate setting',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1d7cb56d5-1764622317481.png",
    logoAlt: 'TechCorp Industries logo with modern tech-inspired design'
  },
  {
    id: 3,
    quote: "The speed and quality of delivery from Paradigm exceeded all expectations. They took our ambitious vision and turned it into reality while maintaining constant communication and transparency. Our operational efficiency improved by 60% within the first quarter.",
    author: 'Jennifer Rodriguez',
    role: 'Chief Operating Officer',
    company: 'Innovation Dynamics LLC',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_18d4825d1-1763293841178.png",
    alt: 'Hispanic professional woman with dark hair in burgundy blazer in bright office space',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_14ae5c0e2-1764622317376.png",
    logoAlt: 'Innovation Dynamics company logo with dynamic arrow design'
  }];


  const handlePrevious = () => {
    setCurrentIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev + 1) % testimonials.length);
  };

  if (!isHydrated) {
    return (
      <section className="py-20 bg-background">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">
              Trusted by Industry Leaders
            </h2>
          </div>
          <div className="max-w-4xl mx-auto">
            <div className="p-8 bg-surface rounded-xl border border-border">
              <p className="text-xl text-muted-foreground italic mb-6">
                {testimonials[0].quote}
              </p>
              <div className="flex items-center space-x-4">
                <div className="w-16 h-16 rounded-full bg-muted" />
                <div>
                  <div className="font-semibold text-foreground">{testimonials[0].author}</div>
                  <div className="text-sm text-muted-foreground">{testimonials[0].role}</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>);

  }

  return (
    <section className="py-20 bg-background relative overflow-hidden">
      {/* Background Decoration */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(0,102,204,0.05),transparent_70%)]" />

      <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12">
        {/* Section Header */}
        <div className="text-center mb-16">
          <div className="inline-flex items-center space-x-2 px-4 py-2 bg-secondary/10 rounded-full mb-6">
            <Icon name="ChatBubbleLeftRightIcon" size={20} variant="solid" className="text-secondary" />
            <span className="text-sm font-semibold text-secondary">Client Success Stories</span>
          </div>
          <h2 className="text-4xl md:text-5xl font-headline font-bold text-foreground mb-4">
            Trusted by Industry Leaders
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Hear from executives who transformed their businesses with Paradigm
          </p>
        </div>

        {/* Carousel */}
        <div className="max-w-5xl mx-auto">
          <div className="relative">
            {/* Main Testimonial Card */}
            <div className="bg-surface rounded-2xl border border-border p-8 md:p-12 shadow-elevation transition-smooth">
              {/* Quote Icon */}
              <div className="mb-6">
                <Icon name="ChatBubbleBottomCenterTextIcon" size={48} variant="solid" className="text-secondary/20" />
              </div>

              {/* Quote */}
              <blockquote className="text-xl md:text-2xl text-foreground leading-relaxed mb-8 italic">
                "{testimonials[currentIndex].quote}"
              </blockquote>

              {/* Author Info */}
              <div className="flex flex-col md:flex-row items-start md:items-center justify-between gap-6">
                <div className="flex items-center space-x-4">
                  <div className="relative w-16 h-16 rounded-full overflow-hidden ring-2 ring-secondary/20">
                    <AppImage
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].alt}
                      className="w-full h-full object-cover" />

                  </div>
                  <div>
                    <div className="font-semibold text-foreground text-lg">
                      {testimonials[currentIndex].author}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {testimonials[currentIndex].role}
                    </div>
                    <div className="text-sm text-secondary font-medium">
                      {testimonials[currentIndex].company}
                    </div>
                  </div>
                </div>

                {/* Company Logo */}
                <div className="w-32 h-12 relative opacity-60 hover:opacity-100 transition-smooth">
                  <AppImage
                    src={testimonials[currentIndex].logo}
                    alt={testimonials[currentIndex].logoAlt}
                    className="w-full h-full object-contain" />

                </div>
              </div>
            </div>

            {/* Navigation Buttons */}
            <div className="flex items-center justify-center space-x-4 mt-8">
              <button
                onClick={handlePrevious}
                className="p-3 bg-surface border border-border rounded-full hover:bg-muted hover:border-secondary transition-smooth"
                aria-label="Previous testimonial">

                <Icon name="ChevronLeftIcon" size={24} variant="outline" className="text-foreground" />
              </button>

              {/* Dots Indicator */}
              <div className="flex items-center space-x-2">
                {testimonials.map((_, index) =>
                <button
                  key={index}
                  onClick={() => setCurrentIndex(index)}
                  className={`transition-smooth ${
                  index === currentIndex ?
                  'w-8 h-2 bg-secondary rounded-full' : 'w-2 h-2 bg-muted rounded-full hover:bg-secondary/50'}`
                  }
                  aria-label={`Go to testimonial ${index + 1}`} />

                )}
              </div>

              <button
                onClick={handleNext}
                className="p-3 bg-surface border border-border rounded-full hover:bg-muted hover:border-secondary transition-smooth"
                aria-label="Next testimonial">

                <Icon name="ChevronRightIcon" size={24} variant="outline" className="text-foreground" />
              </button>
            </div>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="mt-16 text-center">
          <p className="text-sm text-muted-foreground mb-6">Recognized Excellence</p>
          <div className="flex flex-wrap items-center justify-center gap-8">
            {['SOC 2 Certified', 'ISO 27001', 'AWS Partner', 'Microsoft Gold'].map((badge, index) =>
            <div
              key={index}
              className="px-6 py-3 bg-surface/50 border border-border rounded-lg text-muted-foreground font-semibold text-sm hover:border-secondary transition-smooth">

                {badge}
              </div>
            )}
          </div>
        </div>
      </div>
    </section>);

};

export default TestimonialCarousel;