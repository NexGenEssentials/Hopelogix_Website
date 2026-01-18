'use client';

import { useState, useEffect, useCallback } from 'react';
import CaseStudyCard from './CaseStudyCard';
import FilterBar from './FilterBar';
import VideoTestimonial from './VideoTestimonial';
import TimelineVisualization from './TimelineVisualization';
import ROICalculator from './ROICalculator';
import StatsOverview from './StatsOverview';
import Icon from '@/components/ui/AppIcon';

interface FilterState {
  industry: string;
  solution: string;
  companySize: string;
  searchQuery: string;
}

interface CaseStudy {
  id: string;
  title: string;
  client: string;
  industry: string;
  image: string;
  alt: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    icon: string;
  }[];
  tags: string[];
  solutionType: string;
  companySize: string;
}

export default function CaseStudiesInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [filteredCaseStudies, setFilteredCaseStudies] = useState<CaseStudy[]>([]);
  const [activeTab, setActiveTab] = useState<'case-studies' | 'testimonials' | 'calculator'>('case-studies');

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const caseStudies: CaseStudy[] = [
  {
    id: 'healthtech-transformation',
    title: 'Digital Patient Portal Revolution',
    client: 'MediCare Health Systems',
    industry: 'healthcare',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e3d82368-1764622326964.png",
    alt: 'Modern hospital interior with digital screens showing patient information and healthcare professionals using tablets',
    challenge: 'Legacy patient management system causing 40% administrative overhead and poor patient satisfaction scores',
    solution: 'Custom patient portal with real-time appointment scheduling, telemedicine integration, and automated billing',
    results: [
    { metric: 'Cost Reduction', value: '45%', icon: 'CurrencyDollarIcon' },
    { metric: 'Time Saved', value: '60%', icon: 'ClockIcon' },
    { metric: 'Patient Satisfaction', value: '92%', icon: 'FaceSmileIcon' }],

    tags: ['Healthcare', 'API Integration', 'Web App'],
    solutionType: 'web-app',
    companySize: 'large'
  },
  {
    id: 'fintech-modernization',
    title: 'Banking Platform Modernization',
    client: 'SecureBank Financial',
    industry: 'finance',
    image: "https://images.unsplash.com/photo-1735469157670-1212e570eadc",
    alt: 'Professional banking office with modern digital displays showing financial data and analytics on large screens',
    challenge: 'Outdated core banking system unable to support mobile-first customer demands and regulatory compliance',
    solution: 'Phased legacy modernization with microservices architecture, real-time fraud detection, and omnichannel experience',
    results: [
    { metric: 'Transaction Speed', value: '10x', icon: 'BoltIcon' },
    { metric: 'Security Score', value: '99.9%', icon: 'ShieldCheckIcon' },
    { metric: 'Mobile Adoption', value: '85%', icon: 'DevicePhoneMobileIcon' }],

    tags: ['Legacy Modernization', 'Finance', 'Security'],
    solutionType: 'legacy-modernization',
    companySize: 'large'
  },
  {
    id: 'retail-ecommerce',
    title: 'Omnichannel Retail Experience',
    client: 'StyleHub Retail Group',
    industry: 'retail',
    image: "https://images.unsplash.com/photo-1711864768464-98c979cb920c",
    alt: 'Modern retail store interior with digital kiosks, interactive displays, and customers using mobile devices for shopping',
    challenge: 'Disconnected online and in-store experiences leading to 30% cart abandonment and inventory inefficiencies',
    solution: 'Unified commerce platform with real-time inventory sync, personalized recommendations, and seamless checkout',
    results: [
    { metric: 'Revenue Growth', value: '67%', icon: 'ChartBarIcon' },
    { metric: 'Cart Abandonment', value: '-42%', icon: 'ShoppingCartIcon' },
    { metric: 'Customer Retention', value: '78%', icon: 'UserGroupIcon' }],

    tags: ['Custom Development', 'Retail', 'E-commerce'],
    solutionType: 'custom-development',
    companySize: 'medium'
  },
  {
    id: 'manufacturing-iot',
    title: 'Smart Factory IoT Integration',
    client: 'PrecisionTech Manufacturing',
    industry: 'manufacturing',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_131e47113-1764622328303.png",
    alt: 'Advanced manufacturing facility with robotic arms, IoT sensors, and workers monitoring digital dashboards showing production metrics',
    challenge: 'Manual production monitoring causing 25% equipment downtime and inability to predict maintenance needs',
    solution: 'IoT-enabled predictive maintenance system with real-time analytics, automated alerts, and supply chain integration',
    results: [
    { metric: 'Downtime Reduction', value: '73%', icon: 'WrenchScrewdriverIcon' },
    { metric: 'Production Efficiency', value: '+58%', icon: 'CogIcon' },
    { metric: 'Cost Savings', value: '$2.4M', icon: 'BanknotesIcon' }],

    tags: ['IoT Integration', 'Manufacturing', 'Predictive Analytics'],
    solutionType: 'api-integration',
    companySize: 'large'
  },
  {
    id: 'saas-platform',
    title: 'Enterprise SaaS Platform Launch',
    client: 'CloudSync Technologies',
    industry: 'technology',
    image: "https://images.unsplash.com/photo-1662638600507-0846616ec508",
    alt: 'Modern tech office with developers working on multiple monitors showing code and cloud infrastructure dashboards',
    challenge: 'Need to launch MVP in 4 months with limited development resources and tight budget constraints',
    solution: 'Rapid development with custom integrations, multi-tenant architecture, and automated deployment pipeline',
    results: [
    { metric: 'Time to Market', value: '3.5mo', icon: 'RocketLaunchIcon' },
    { metric: 'Development Cost', value: '-55%', icon: 'CurrencyDollarIcon' },
    { metric: 'User Growth', value: '10K+', icon: 'UsersIcon' }],

    tags: ['SaaS', 'MVP Development', 'Web App'],
    solutionType: 'web-app',
    companySize: 'small'
  },
  {
    id: 'logistics-optimization',
    title: 'Supply Chain Digital Transformation',
    client: 'GlobalShip Logistics',
    industry: 'retail',
    image: "https://images.unsplash.com/photo-1678132021968-68cd9d5339ac",
    alt: 'Large warehouse with automated sorting systems, digital tracking displays, and workers using tablets for inventory management',
    challenge: 'Fragmented logistics systems causing delivery delays, poor visibility, and 20% operational inefficiency',
    solution: 'End-to-end supply chain platform with real-time tracking, route optimization, and automated warehouse management',
    results: [
    { metric: 'Delivery Speed', value: '+48%', icon: 'TruckIcon' },
    { metric: 'Operational Cost', value: '-38%', icon: 'CalculatorIcon' },
    { metric: 'Customer Satisfaction', value: '94%', icon: 'StarIcon' }],

    tags: ['Digital Transformation', 'Logistics', 'Automation'],
    solutionType: 'digital-transformation',
    companySize: 'large'
  }];


  const videoTestimonials = [
  {
    id: 'medicare-cto',
    title: 'How We Transformed Patient Care',
    client: 'Dr. Sarah Mitchell',
    position: 'Chief Technology Officer',
    company: 'MediCare Health Systems',
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1e2dba485-1763293328479.png",
    alt: 'Professional woman with short brown hair in white medical coat smiling at camera in modern hospital setting',
    videoUrl: 'https://example.com/testimonials/medicare-cto.mp4',
    duration: '3:45',
    quote: 'HopeLogix didn\'t just build software - they transformed how we deliver healthcare. The patient portal has become the cornerstone of our digital strategy.'
  },
  {
    id: 'securebank-cio',
    title: 'Banking Modernization Success Story',
    client: 'James Rodriguez',
    position: 'Chief Information Officer',
    company: 'SecureBank Financial',
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_1dbc50841-1763296528923.png",
    alt: 'Hispanic businessman in navy suit with confident smile standing in modern glass office building',
    videoUrl: 'https://example.com/testimonials/securebank-cio.mp4',
    duration: '4:12',
    quote: 'The legacy modernization project was completed ahead of schedule and under budget. Our customers now enjoy a seamless banking experience across all channels.'
  },
  {
    id: 'stylehub-vp',
    title: 'Retail Innovation at Scale',
    client: 'Emily Chen',
    position: 'VP of Digital Commerce',
    company: 'StyleHub Retail Group',
    thumbnail: "https://img.rocket.new/generatedImages/rocket_gen_img_10d60e496-1763295319842.png",
    alt: 'Asian woman with long black hair in professional burgundy blazer smiling in modern retail office environment',
    videoUrl: 'https://example.com/testimonials/stylehub-vp.mp4',
    duration: '3:28',
    quote: 'The omnichannel platform has revolutionized our business. We\'ve seen unprecedented growth in both online and in-store sales since implementation.'
  }];


  const timelinePhases = [
  {
    phase: 'Discovery & Planning',
    duration: '2 weeks',
    activities: [
    'Stakeholder interviews and requirements gathering',
    'Technical architecture design and feasibility analysis',
    'Project roadmap and milestone definition',
    'Risk assessment and mitigation planning'],

    icon: 'MagnifyingGlassIcon',
    status: 'completed' as const
  },
  {
    phase: 'Design & Prototyping',
    duration: '3 weeks',
    activities: [
    'User experience design and wireframing',
    'Interactive prototype development',
    'Stakeholder feedback and iteration',
    'Design system creation and documentation'],

    icon: 'PaintBrushIcon',
    status: 'completed' as const
  },
  {
    phase: 'Development & Integration',
    duration: '8 weeks',
    activities: [
    'Core platform development using low-code framework',
    'Custom component and integration development',
    'API integration with existing systems',
    'Automated testing and quality assurance'],

    icon: 'CodeBracketIcon',
    status: 'in-progress' as const
  },
  {
    phase: 'Testing & Deployment',
    duration: '2 weeks',
    activities: [
    'User acceptance testing with key stakeholders',
    'Performance optimization and security hardening',
    'Production deployment and monitoring setup',
    'Training and documentation delivery'],

    icon: 'RocketLaunchIcon',
    status: 'upcoming' as const
  }];


  const overallStats = [
  { label: 'Successful Projects', value: '150+', icon: 'CheckBadgeIcon', trend: '+32% YoY' },
  { label: 'Average Cost Savings', value: '45%', icon: 'CurrencyDollarIcon', trend: 'Industry Leading' },
  { label: 'Client Satisfaction', value: '96%', icon: 'StarIcon', trend: '4.8/5 Rating' },
  { label: 'Time to Market', value: '-60%', icon: 'ClockIcon', trend: 'Faster Delivery' }];


  const handleFilterChange = useCallback((filters: FilterState) => {
    let filtered = [...caseStudies];

    if (filters.industry !== 'all') {
      filtered = filtered.filter((cs) => cs.industry === filters.industry);
    }

    if (filters.solution !== 'all') {
      filtered = filtered.filter((cs) => cs.solutionType === filters.solution);
    }

    if (filters.companySize !== 'all') {
      filtered = filtered.filter((cs) => cs.companySize === filters.companySize);
    }

    if (filters.searchQuery) {
      const query = filters.searchQuery.toLowerCase();
      filtered = filtered.filter((cs) =>
      cs.title.toLowerCase().includes(query) ||
      cs.client.toLowerCase().includes(query) ||
      cs.challenge.toLowerCase().includes(query) ||
      cs.solution.toLowerCase().includes(query) ||
      cs.tags.some((tag) => tag.toLowerCase().includes(query))
      );
    }

    setFilteredCaseStudies(filtered);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      setFilteredCaseStudies(caseStudies);
    }
  }, [isHydrated]);

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background pt-32 pb-20">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <div className="animate-pulse space-y-12">
            <div className="h-32 bg-surface rounded-xl" />
            <div className="h-64 bg-surface rounded-xl" />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) =>
              <div key={i} className="h-96 bg-surface rounded-xl" />
              )}
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="space-y-16">
      {/* Stats Overview */}
      <section>
        <StatsOverview stats={overallStats} />
      </section>

      {/* Tab Navigation */}
      {/* <section>
        <div className="flex items-center justify-center space-x-2 bg-surface rounded-xl border border-border p-2">
          <button
            onClick={() => setActiveTab('case-studies')}
            className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-smooth ${
            activeTab === 'case-studies' ? 'bg-gradient-primary text-primary-foreground shadow-glow-blue' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'}`
            }>

            <span className="flex items-center justify-center space-x-2">
              <Icon name="DocumentTextIcon" size={20} variant={activeTab === 'case-studies' ? 'solid' : 'outline'} />
              <span>Case Studies</span>
            </span>
          </button>
          <button
            onClick={() => setActiveTab('testimonials')}
            className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-smooth ${
            activeTab === 'testimonials' ? 'bg-gradient-primary text-primary-foreground shadow-glow-blue' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'}`
            }>

            <span className="flex items-center justify-center space-x-2">
              <Icon name="VideoCameraIcon" size={20} variant={activeTab === 'testimonials' ? 'solid' : 'outline'} />
              <span>Testimonials</span>
            </span>
          </button>
          <button
            onClick={() => setActiveTab('calculator')}
            className={`flex-1 px-6 py-3 rounded-lg font-semibold transition-smooth ${
            activeTab === 'calculator' ? 'bg-gradient-primary text-primary-foreground shadow-glow-blue' : 'text-muted-foreground hover:text-foreground hover:bg-muted/50'}`
            }>

            <span className="flex items-center justify-center space-x-2">
              <Icon name="CalculatorIcon" size={20} variant={activeTab === 'calculator' ? 'solid' : 'outline'} />
              <span>ROI Calculator</span>
            </span>
          </button>
        </div>
      </section> */}

      {/* Case Studies Tab */}
      {activeTab === 'case-studies' &&
      <>
          {/* <section>
            <FilterBar onFilterChange={handleFilterChange} />
          </section> */}
{/* 
          <section>
            {filteredCaseStudies.length > 0 ?
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                {filteredCaseStudies.map((caseStudy) =>
            <CaseStudyCard key={caseStudy.id} {...caseStudy} />
            )}
              </div> :

          <div className="text-center py-20 bg-surface rounded-xl border border-border">
                <Icon name="FolderOpenIcon" size={64} variant="outline" className="text-muted-foreground mx-auto mb-4" />
                <h3 className="text-xl font-headline font-bold text-foreground mb-2">No Case Studies Found</h3>
                <p className="text-muted-foreground">Try adjusting your filters to see more results</p>
              </div>
          }
          </section> */}

          {/* Timeline Section */}
          <section>
            <div className="text-center space-y-4 mb-12">
              <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">
                Typical Project Timeline
              </h2>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                Our proven methodology ensures efficient delivery without compromising quality
              </p>
            </div>
            <TimelineVisualization phases={timelinePhases} projectTitle="Standard Implementation Process" />
          </section>
        </>
      }

      {/* Testimonials Tab */}
      {/* {activeTab === 'testimonials' &&
      <section>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">
              Client Success Stories
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              Hear directly from the leaders who transformed their businesses with HopeLogix's technology solutions—web, mobile, USSD, integrations, and digital transformation.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {videoTestimonials.map((testimonial) =>
          <VideoTestimonial key={testimonial.id} {...testimonial} />
          )}
          </div>
        </section>
      } */}

      {/* ROI Calculator Tab */}
      {/* {activeTab === 'calculator' &&
      <section>
          <div className="text-center space-y-4 mb-12">
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">
              Calculate Your Potential ROI
            </h2>
            <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
              See how much you could save with HopeLogix's low-code solutions
            </p>
          </div>
          <div className="max-w-2xl mx-auto">
            <ROICalculator />
          </div>
        </section>
      } */}

      {/* CTA Section */}
      <section className="bg-gradient-to-br from-accent via-accent to-surface rounded-2xl border border-border p-12 text-center">
        <div className="max-w-3xl mx-auto space-y-6">
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">
            Ready to Transform Your Business?
          </h2>
          <p className="text-lg text-muted-foreground">
            Join 150+ companies that have accelerated their digital transformation with HopeLogix
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <a
              href="/contact"
              className="inline-flex items-center px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-lg transition-smooth hover:shadow-glow-blue hover:scale-105">

              <span>Schedule a Consultation</span>
              <Icon name="ArrowRightIcon" size={20} variant="outline" className="ml-2" />
            </a>
            <a
              href="/custom-solutions"
              className="inline-flex items-center px-8 py-4 bg-surface border-2 border-secondary text-secondary font-semibold rounded-lg transition-smooth hover:bg-secondary hover:text-primary-foreground">

              <span>Explore Solutions</span>
            </a>
          </div>
        </div>
      </section>
    </div>);

}