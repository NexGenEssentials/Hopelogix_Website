'use client';

import { useState, useEffect, useCallback } from 'react';
import ResourceCard from './ResourceCard';
import FilterBar, { FilterState } from './FilterBar';
import FeaturedWebinar from './FeaturedWebinar';
import NewsletterSignup from './NewsletterSignup';

interface Resource {
  id: number;
  title: string;
  description: string;
  type: string;
  image: string;
  alt: string;
  date: string;
  readTime: string;
  category: string;
  downloadUrl?: string;
}

interface Webinar {
  id: number;
  title: string;
  description: string;
  speaker: string;
  speakerTitle: string;
  date: string;
  time: string;
  duration: string;
  image: string;
  alt: string;
  registrationUrl: string;
}

const mockResources: Resource[] = [
{
  id: 1,
  title: "The Complete Guide to Digital Transformation in 2025",
  description: "Explore comprehensive strategies for successful digital transformation, including roadmaps, best practices, and real-world implementation frameworks for enterprise organizations.",
  type: "Whitepaper",
  image: "https://images.unsplash.com/photo-1571677246347-5040036b95cc",
  alt: "Business analytics dashboard displaying colorful charts and graphs on laptop screen with blue ambient lighting",
  date: "Nov 28, 2025",
  readTime: "15 min read",
  category: "Digital Transformation",
  downloadUrl: "/downloads/digital-transformation-guide.pdf"
},
{
  id: 2,
  title: "Low-Code Development: Accelerating Enterprise Innovation",
  description: "Discover how low-code platforms are revolutionizing software development, enabling faster time-to-market and empowering citizen developers across organizations.",
  type: "Webinar",
  image: "https://images.unsplash.com/photo-1652939617330-e5b59457c496",
  alt: "Professional developer working on dual monitors showing code and application interface in modern office",
  date: "Nov 25, 2025",
  readTime: "45 min watch",
  category: "Low-Code Development"
},
{
  id: 3,
  title: "API Integration Best Practices for Modern Applications",
  description: "Learn proven strategies for seamless API integration, including security considerations, performance optimization, and scalability patterns for enterprise systems.",
  type: "Blog",
  image: "https://images.unsplash.com/photo-1618403460836-026d83bbacfd",
  alt: "Close-up of programming code on dark screen with blue syntax highlighting and API endpoints visible",
  date: "Nov 22, 2025",
  readTime: "8 min read",
  category: "API Integration"
},
{
  id: 4,
  title: "Cloud Migration Success: A Fortune 500 Case Study",
  description: "Detailed analysis of a successful cloud migration project, including challenges overcome, cost savings achieved, and lessons learned from enterprise-scale transformation.",
  type: "Case Study",
  image: "https://images.unsplash.com/photo-1733295928625-439a9692ba63",
  alt: "Global network visualization with interconnected nodes and data streams on digital world map with blue glow",
  date: "Nov 20, 2025",
  readTime: "12 min read",
  category: "Cloud Solutions",
  downloadUrl: "/downloads/cloud-migration-case-study.pdf"
},
{
  id: 5,
  title: "Security-First Development in the Age of Cyber Threats",
  description: "Comprehensive guide to implementing security best practices throughout the development lifecycle, from design to deployment and ongoing maintenance.",
  type: "Whitepaper",
  image: "https://images.unsplash.com/photo-1654588827084-b6f27735ba7d",
  alt: "Digital security concept with padlock icon and binary code on dark blue background with circuit patterns",
  date: "Nov 18, 2025",
  readTime: "20 min read",
  category: "Security",
  downloadUrl: "/downloads/security-development-guide.pdf"
},
{
  id: 6,
  title: "Building Scalable Microservices Architecture",
  description: "Expert insights on designing and implementing microservices architecture that scales with your business, including containerization and orchestration strategies.",
  type: "Blog",
  image: "https://images.unsplash.com/photo-1733295928625-439a9692ba63",
  alt: "Abstract visualization of interconnected microservices nodes with data flow lines on dark background",
  date: "Nov 15, 2025",
  readTime: "10 min read",
  category: "Cloud Solutions"
},
{
  id: 7,
  title: "The ROI of Low-Code: Measuring Business Impact",
  description: "Data-driven analysis of low-code platform ROI, including productivity gains, cost savings, and accelerated time-to-market metrics from real implementations.",
  type: "Whitepaper",
  image: "https://images.unsplash.com/photo-1660063093662-1f76f500f0ff",
  alt: "Financial growth chart with upward trending arrow and business metrics on tablet screen with blue tones",
  date: "Nov 12, 2025",
  readTime: "18 min read",
  category: "Low-Code Development",
  downloadUrl: "/downloads/low-code-roi-analysis.pdf"
},
{
  id: 8,
  title: "Legacy System Modernization: A Step-by-Step Approach",
  description: "Practical framework for modernizing legacy systems without disrupting business operations, including risk mitigation and phased migration strategies.",
  type: "Case Study",
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1876c9952-1764622316198.png",
  alt: "Modern laptop displaying system architecture diagram with legacy and new system integration on screen",
  date: "Nov 10, 2025",
  readTime: "14 min read",
  category: "Digital Transformation",
  downloadUrl: "/downloads/legacy-modernization-case.pdf"
},
{
  id: 9,
  title: "AI-Powered Development: The Future is Now",
  description: "Explore how artificial intelligence is transforming software development, from code generation to automated testing and intelligent deployment strategies.",
  type: "Webinar",
  image: "https://images.unsplash.com/photo-1719650592946-55163c4994cb",
  alt: "Futuristic AI interface with neural network visualization and glowing blue nodes on dark background",
  date: "Nov 8, 2025",
  readTime: "50 min watch",
  category: "Digital Transformation"
}];


const featuredWebinar: Webinar = {
  id: 1,
  title: "Mastering Low-Code: From Concept to Production",
  description: "Join our expert panel as they share proven strategies for implementing low-code solutions that scale. Learn from real-world success stories and get your questions answered live.",
  speaker: "Dr. Sarah Mitchell",
  speakerTitle: "Chief Technology Officer, HopeLogix",
  date: "December 15, 2025",
  time: "2:00 PM EST",
  duration: "60 minutes",
  image: "https://images.unsplash.com/photo-1638957835514-224c57ffe617",
  alt: "Professional woman presenting to audience in modern conference room with large screen showing technical diagrams",
  registrationUrl: "/webinar-registration"
};

export default function ResourcesInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [filteredResources, setFilteredResources] = useState<Resource[]>(mockResources);
  const [currentFilters, setCurrentFilters] = useState<FilterState>({
    search: '',
    type: 'all',
    category: 'all',
    sortBy: 'newest'
  });

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleFilterChange = useCallback((filters: FilterState) => {
    setCurrentFilters(filters);

    let filtered = [...mockResources];

    // Search filter
    if (filters.search) {
      const searchLower = filters.search.toLowerCase();
      filtered = filtered.filter(
        (resource) =>
        resource.title.toLowerCase().includes(searchLower) ||
        resource.description.toLowerCase().includes(searchLower) ||
        resource.category.toLowerCase().includes(searchLower)
      );
    }

    // Type filter
    if (filters.type !== 'all') {
      filtered = filtered.filter((resource) => resource.type === filters.type);
    }

    // Category filter
    if (filters.category !== 'all') {
      filtered = filtered.filter((resource) => resource.category === filters.category);
    }

    // Sort
    filtered.sort((a, b) => {
      switch (filters.sortBy) {
        case 'newest':
          return new Date(b.date).getTime() - new Date(a.date).getTime();
        case 'oldest':
          return new Date(a.date).getTime() - new Date(b.date).getTime();
        case 'title':
          return a.title.localeCompare(b.title);
        case 'popular':
          return b.id - a.id;
        default:
          return 0;
      }
    });

    setFilteredResources(filtered);
  }, []);

  const handleDownload = (id: number) => {
    const resource = mockResources.find((r) => r.id === id);
    if (resource) {
      alert(`Downloading: ${resource.title}`);
    }
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background pt-32 pb-20">
        <div className="container mx-auto px-6 lg:px-12">
          <div className="animate-pulse space-y-8">
            <div className="h-12 bg-muted/30 rounded w-1/3" />
            <div className="h-6 bg-muted/30 rounded w-2/3" />
            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[1, 2, 3, 4, 5, 6].map((i) =>
              <div key={i} className="h-96 bg-muted/30 rounded-xl" />
              )}
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background pt-32 pb-20">
      <div className="container mx-auto px-6 lg:px-12">
        {/* Hero Section */}
        <div className="text-center mb-16">
          <h1 className="text-4xl lg:text-6xl font-headline font-bold text-foreground mb-6">
            Knowledge Hub
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Explore our comprehensive library of resources designed to empower your digital
            transformation journey with expert insights and proven strategies.
          </p>
        </div>

        {/* Featured Webinar */}
        <FeaturedWebinar webinar={featuredWebinar} />

        {/* Filter Bar */}
        <FilterBar onFilterChange={handleFilterChange} totalResults={filteredResources.length} />

        {/* Resources Grid */}
        {filteredResources.length > 0 ?
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
            {filteredResources.map((resource) =>
          <ResourceCard key={resource.id} resource={resource} onDownload={handleDownload} />
          )}
          </div> :

        <div className="text-center py-20">
            <div className="inline-flex items-center justify-center w-20 h-20 bg-muted/30 rounded-full mb-6">
              <svg
              className="w-10 h-10 text-muted-foreground"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor">

                <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M9.172 16.172a4 4 0 015.656 0M9 10h.01M15 10h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />

              </svg>
            </div>
            <h3 className="text-2xl font-semibold text-foreground mb-2">No resources found</h3>
            <p className="text-muted-foreground">
              Try adjusting your filters or search terms to find what you're looking for.
            </p>
          </div>
        }

        {/* Newsletter Signup */}
        <NewsletterSignup />
      </div>
    </div>);

}