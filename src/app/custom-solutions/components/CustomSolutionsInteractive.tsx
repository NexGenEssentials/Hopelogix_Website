'use client';

import React from 'react';
import SolutionHero from './SolutionHero';
import SolutionCard from './SolutionCard';
import InteractiveMatrix from './InteractiveMatrix';
import ArchitectureVisualization from './ArchitectureVisualization';
import TransformationTimeline from './TransformationTimeline';
import IntegrationChecker from './IntegrationChecker';
import ROICalculator from './ROICalculator';
import TestimonialSection from './TestimonialSection';
import CTASection from './CTASection';

const CustomSolutionsInteractive: React.FC = () => {
  // Hero Stats
  const heroStats = [
  { value: '70%', label: 'Faster Development' },
  { value: '50+', label: 'Enterprise Clients' },
  { value: '98%', label: 'Client Satisfaction' }];


  // Solutions Data
  const solutions = [
  {
    icon: 'CodeBracketIcon',
    title: 'Custom Software Development',
    description:
    'Tailored applications built from the ground up to match your exact business requirements, workflows, and strategic objectives. Our expert developers create scalable, secure solutions that grow with your organization.',
    features: [
    'Full-stack development with modern frameworks',
    'Microservices architecture for scalability',
    'Cloud-native deployment strategies',
    'Continuous integration and delivery pipelines',
    'Comprehensive testing and quality assurance'],

    image: "https://images.unsplash.com/photo-1662638600507-0846616ec508",
    imageAlt:
    'Software developer working on multiple monitors displaying code and application interfaces in modern office with blue ambient lighting'
  },
  {
    icon: 'BoltIcon',
    title: 'Low-Code Platform Solutions',
    description:
    'Accelerate your digital transformation with enterprise-grade low-code platforms that empower both developers and business users to create sophisticated applications in a fraction of traditional development time.',
    features: [
    'Visual development environment with drag-and-drop',
    'Pre-built components and templates library',
    'Seamless API integration capabilities',
    'Role-based access control and governance',
    'Rapid prototyping and iteration cycles'],

    image: "https://images.unsplash.com/photo-1504868584819-f8e8b4b6d7e3",
    imageAlt:
    'Business analytics dashboard displaying colorful charts and graphs on laptop screen with blue accent lighting in professional workspace',
    isReversed: true
  },
  {
    icon: 'ArrowPathIcon',
    title: 'Digital Transformation Consulting',
    description:
    'Strategic guidance to modernize your technology stack, optimize processes, and create a roadmap for sustainable digital innovation that aligns with your business goals and market opportunities.',
    features: [
    'Technology assessment and gap analysis',
    'Digital strategy development and roadmapping',
    'Change management and training programs',
    'Process optimization and automation',
    'Performance metrics and KPI tracking'],

    image: "https://images.unsplash.com/photo-1716703435453-a7733d600d68",
    imageAlt:
    'Business consultant presenting digital transformation strategy on large screen to executive team in modern conference room'
  },
  {
    icon: 'ArrowsRightLeftIcon',
    title: 'Legacy System Modernization',
    description:
    'Transform outdated systems into modern, efficient platforms without disrupting operations. We ensure smooth migration, data integrity, and enhanced functionality while preserving critical business logic.',
    features: [
    'Comprehensive system audit and analysis',
    'Phased migration with minimal downtime',
    'Data migration and validation protocols',
    'Legacy code refactoring and optimization',
    'Parallel system operation during transition'],

    image: "https://img.rocket.new/generatedImages/rocket_gen_img_103a2a4fa-1764622329417.png",
    imageAlt:
    'IT infrastructure showing transition from old server systems to modern cloud architecture with network diagrams on screens',
    isReversed: true
  },
  {
    icon: 'LinkIcon',
    title: 'API Integration Services',
    description:
    'Connect disparate systems and create a unified digital ecosystem. Our integration experts design and implement robust API solutions that enable seamless data flow across your entire technology landscape.',
    features: [
    'RESTful and GraphQL API development',
    'Third-party service integration',
    'Real-time data synchronization',
    'API security and authentication protocols',
    'Comprehensive documentation and support'],

    image: "https://img.rocket.new/generatedImages/rocket_gen_img_169a2e242-1764622328206.png",
    imageAlt:
    'Network diagram showing interconnected systems and APIs with data flow visualization on multiple monitors in tech workspace'
  }];


  // Interactive Matrix Data
  const industries = [
  { id: 'finance', label: 'Financial Services' },
  { id: 'healthcare', label: 'Healthcare' },
  { id: 'retail', label: 'Retail & E-commerce' },
  { id: 'manufacturing', label: 'Manufacturing' },
  { id: 'technology', label: 'Technology' }];


  const companySizes = [
  { id: 'small', label: 'Small (50-200 employees)' },
  { id: 'medium', label: 'Medium (200-1000 employees)' },
  { id: 'large', label: 'Large (1000+ employees)' }];


  const requirements = [
  { id: 'cloud', label: 'Cloud Migration' },
  { id: 'automation', label: 'Process Automation' },
  { id: 'analytics', label: 'Data Analytics' },
  { id: 'mobile', label: 'Mobile Solutions' },
  { id: 'security', label: 'Enhanced Security' }];


  const matrixSolutions = [
  {
    id: '1',
    name: 'Enterprise Resource Planning Suite',
    industries: ['finance', 'manufacturing', 'retail'],
    companySizes: ['medium', 'large'],
    requirements: ['cloud', 'automation', 'analytics'],
    description:
    'Comprehensive ERP solution integrating finance, operations, and supply chain management'
  },
  {
    id: '2',
    name: 'Customer Engagement Platform',
    industries: ['retail', 'technology', 'healthcare'],
    companySizes: ['small', 'medium', 'large'],
    requirements: ['mobile', 'analytics', 'automation'],
    description:
    'Omnichannel customer experience platform with AI-powered personalization'
  },
  {
    id: '3',
    name: 'Healthcare Management System',
    industries: ['healthcare'],
    companySizes: ['medium', 'large'],
    requirements: ['security', 'cloud', 'mobile'],
    description:
    'HIPAA-compliant patient management and electronic health records system'
  },
  {
    id: '4',
    name: 'Financial Analytics Dashboard',
    industries: ['finance', 'technology'],
    companySizes: ['small', 'medium', 'large'],
    requirements: ['analytics', 'security', 'cloud'],
    description: 'Real-time financial reporting and predictive analytics platform'
  }];


  // Architecture Layers
  const architectureLayers = [
  {
    id: 'presentation',
    name: 'Presentation Layer',
    description: 'User interface and experience components',
    icon: 'DevicePhoneMobileIcon',
    components: [
    'Responsive web applications',
    'Native mobile apps (iOS/Android)',
    'Progressive web apps (PWA)',
    'Admin dashboards']

  },
  {
    id: 'application',
    name: 'Application Layer',
    description: 'Business logic and processing',
    icon: 'CpuChipIcon',
    components: [
    'Microservices architecture',
    'API gateway and routing',
    'Business rule engines',
    'Workflow automation']

  },
  {
    id: 'data',
    name: 'Data Layer',
    description: 'Storage and data management',
    icon: 'CircleStackIcon',
    components: [
    'Relational databases (PostgreSQL, MySQL)',
    'NoSQL databases (MongoDB, Redis)',
    'Data warehousing solutions',
    'Caching mechanisms']

  },
  {
    id: 'integration',
    name: 'Integration Layer',
    description: 'External system connectivity',
    icon: 'ArrowsRightLeftIcon',
    components: [
    'RESTful APIs',
    'GraphQL endpoints',
    'Message queues (RabbitMQ, Kafka)',
    'Third-party integrations']

  }];


  // Timeline Phases
  const timelinePhases = [
  {
    phase: 'Phase 1',
    duration: '2-3 weeks',
    title: 'Discovery & Planning',
    description:
    'Comprehensive analysis of your business requirements, technical landscape, and strategic objectives to create a detailed project roadmap.',
    deliverables: [
    'Requirements documentation',
    'Technical architecture design',
    'Project timeline and milestones',
    'Resource allocation plan'],

    icon: 'MagnifyingGlassIcon'
  },
  {
    phase: 'Phase 2',
    duration: '4-8 weeks',
    title: 'Design & Prototyping',
    description:
    'Creation of user experience designs, system architecture, and interactive prototypes for stakeholder validation and feedback.',
    deliverables: [
    'UI/UX design mockups',
    'Interactive prototypes',
    'Database schema design',
    'API specifications'],

    icon: 'PencilSquareIcon'
  },
  {
    phase: 'Phase 3',
    duration: '8-16 weeks',
    title: 'Development & Testing',
    description:
    'Agile development sprints with continuous integration, automated testing, and regular stakeholder reviews to ensure quality and alignment.',
    deliverables: [
    'Functional application modules',
    'Automated test suites',
    'Integration with existing systems',
    'Performance optimization'],

    icon: 'CodeBracketIcon'
  },
  {
    phase: 'Phase 4',
    duration: '2-4 weeks',
    title: 'Deployment & Training',
    description:
    'Smooth production deployment with comprehensive user training, documentation, and ongoing support to ensure successful adoption.',
    deliverables: [
    'Production deployment',
    'User training sessions',
    'Technical documentation',
    'Support and maintenance plan'],

    icon: 'RocketLaunchIcon'
  }];


  // Integration Systems
  const integrationSystems = [
  {
    id: '1',
    name: 'Salesforce',
    category: 'CRM',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1d3743441-1764622316189.png",
    logoAlt: 'Salesforce CRM platform logo on white background',
    compatible: true,
    integrationTime: '2-3 weeks'
  },
  {
    id: '2',
    name: 'SAP',
    category: 'ERP',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_172844369-1764622317494.png",
    logoAlt: 'SAP enterprise resource planning system logo',
    compatible: true,
    integrationTime: '4-6 weeks'
  },
  {
    id: '3',
    name: 'Microsoft Dynamics',
    category: 'ERP',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_19c9b66d2-1764622315921.png",
    logoAlt: 'Microsoft Dynamics business applications logo',
    compatible: true,
    integrationTime: '3-4 weeks'
  },
  {
    id: '4',
    name: 'HubSpot',
    category: 'Marketing',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1a9668c27-1764622316354.png",
    logoAlt: 'HubSpot marketing automation platform logo',
    compatible: true,
    integrationTime: '1-2 weeks'
  },
  {
    id: '5',
    name: 'Stripe',
    category: 'Payment',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1e8e5bb40-1764622315777.png",
    logoAlt: 'Stripe payment processing platform logo',
    compatible: true,
    integrationTime: '1 week'
  },
  {
    id: '6',
    name: 'AWS',
    category: 'Cloud',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1cebe2a0d-1764622316069.png",
    logoAlt: 'Amazon Web Services cloud platform logo',
    compatible: true,
    integrationTime: '2-3 weeks'
  },
  {
    id: '7',
    name: 'Google Cloud',
    category: 'Cloud',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_10961b3d6-1764622316358.png",
    logoAlt: 'Google Cloud Platform logo on white background',
    compatible: true,
    integrationTime: '2-3 weeks'
  },
  {
    id: '8',
    name: 'Slack',
    category: 'Communication',
    logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1bf56ba6f-1764622317320.png",
    logoAlt: 'Slack team communication platform logo',
    compatible: true,
    integrationTime: '1 week'
  }];


  const integrationCategories = [
  'CRM',
  'ERP',
  'Marketing',
  'Payment',
  'Cloud',
  'Communication'];


  // ROI Calculator Defaults
  const roiDefaults = {
    employees: 100,
    avgSalary: 75000,
    hoursPerWeek: 10,
    efficiencyGain: 40
  };

  // Testimonials
  const testimonials = [
  {
    id: '1',
    quote:
    'Paradigm transformed our legacy systems into a modern, cloud-based platform that increased our operational efficiency by 60%. Their expertise and dedication were exceptional.',
    author: 'Sarah Mitchell',
    role: 'CTO',
    company: 'FinTech Solutions Inc.',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c0007e95-1763295050768.png",
    imageAlt:
    'Professional woman with short brown hair in navy blazer smiling confidently in modern office setting',
    solution: 'Legacy Modernization'
  },
  {
    id: '2',
    quote:
    'The low-code platform they implemented allowed our business teams to create applications independently, reducing our development backlog by 70% and accelerating time-to-market.',
    author: 'Michael Chen',
    role: 'VP of Digital Innovation',
    company: 'RetailMax Corporation',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b4891e07-1763295537017.png",
    imageAlt:
    'Asian businessman in gray suit with glasses looking professional in corporate office environment',
    solution: 'Low-Code Platform'
  },
  {
    id: '3',
    quote:
    'Their API integration services seamlessly connected our disparate systems, creating a unified data ecosystem that improved decision-making across all departments.',
    author: 'Jennifer Rodriguez',
    role: 'Director of IT',
    company: 'HealthCare Partners',
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1970ad89d-1763296763905.png",
    imageAlt:
    'Hispanic woman with long dark hair in white blouse smiling warmly in healthcare facility setting',
    solution: 'API Integration'
  }];


  return (
    <>
      <SolutionHero
        title="Custom Solutions for Every Challenge"
        description="Transform your business with tailored software solutions built on cutting-edge low-code platforms. From custom development to legacy modernization, we deliver enterprise-grade applications that drive measurable results."
        stats={heroStats} />


      {/* Solutions Overview */}
      <section className="py-20 px-6 lg:px-12 bg-background">
        <div className="max-w-7xl mx-auto space-y-32">
          {solutions.map((solution, index) =>
          <SolutionCard key={index} {...solution} />
          )}
        </div>
      </section>

      <InteractiveMatrix
        industries={industries}
        companySizes={companySizes}
        requirements={requirements}
        solutions={matrixSolutions} />


      <ArchitectureVisualization layers={architectureLayers} />

      <TransformationTimeline phases={timelinePhases} />

      <IntegrationChecker systems={integrationSystems} categories={integrationCategories} />

      <ROICalculator defaultValues={roiDefaults} />

      <TestimonialSection testimonials={testimonials} />

      <CTASection />
    </>);

};

export default CustomSolutionsInteractive;