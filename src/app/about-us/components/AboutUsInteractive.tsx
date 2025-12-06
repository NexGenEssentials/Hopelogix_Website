'use client';

import { useState, useEffect } from 'react';
import HeroSection from './HeroSection';
import StorySection from './StorySection';
import ValuesSection from './ValuesSection';
import TeamMember from './TeamMember';
import TimelineSection from './TimelineSection';
import AwardsSection from './AwardsSection';
import CertificationsSection from './CertificationsSection';
import CareersSection from './CareersSection';
import CTASection from './CTASection';

interface TeamMemberData {
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  image: string;
  alt: string;
  linkedin?: string;
}

export default function AboutUsInteractive() {
  const [isHydrated, setIsHydrated] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  // Hero Data
  const heroData = {
    title: "Empowering Tomorrow\'s Vision Today",
    subtitle: "About HopeLogix",
    description: "We are a team of innovators, strategists, and technologists dedicated to transforming complex business challenges into elegant, scalable solutions that drive sustainable growth."
  };

  // Story Data
  const storyData = {
    title: "Our Story",
    content: [
    "Founded in 2018, HopeLogix emerged from a simple yet powerful vision: to bridge the gap between enterprise ambition and rapid digital transformation. Our founders, seasoned technology leaders with decades of combined experience, recognized that traditional software development was too slow, too expensive, and too rigid for the modern business landscape.",
    "We pioneered a new approach—combining the speed and flexibility of low-code platforms with the sophistication and customization of traditional development. This hybrid methodology allows us to deliver enterprise-grade solutions in weeks, not months, while maintaining the quality and scalability that large organizations demand.",
    "Today, we serve mid-to-enterprise companies across North America, helping them achieve competitive advantages through tailored software solutions. Our track record speaks for itself: 98% client satisfaction, 40% average reduction in time-to-market, and countless digital transformations that have redefined what's possible."],

    stats: [
    { value: "500+", label: "Projects Delivered" },
    { value: "98%", label: "Client Satisfaction" },
    { value: "150+", label: "Enterprise Clients" }]

  };

  // Values Data
  const valuesData = {
    title: "Our Core Values",
    subtitle: "What Drives Us",
    values: [
    {
      icon: "LightBulbIcon",
      title: "Innovation",
      description: "We constantly push boundaries, exploring cutting-edge technologies and methodologies to deliver solutions that give our clients a competitive edge."
    },
    {
      icon: "ShieldCheckIcon",
      title: "Reliability",
      description: "Our clients trust us with their most critical business systems. We deliver enterprise-grade quality, security, and support that exceeds expectations."
    },
    {
      icon: "UserGroupIcon",
      title: "Partnership",
      description: "We don't just build software—we build lasting relationships. Your success is our success, and we're committed to your long-term growth."
    },
    {
      icon: "RocketLaunchIcon",
      title: "Excellence",
      description: "We maintain the highest standards in everything we do, from code quality to client communication, ensuring exceptional results every time."
    }]

  };

  // Team Data
  const teamData: TeamMemberData[] = [
  {
    name: "Sarah Mitchell",
    role: "Chief Executive Officer",
    bio: "Visionary leader with 20+ years in enterprise technology. Former VP at Fortune 500 tech company, driving digital transformation initiatives.",
    expertise: ["Digital Strategy", "Enterprise Architecture", "Business Transformation", "Executive Leadership", "M&A Integration"],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1ffde516e-1763293580273.png",
    alt: "Professional woman with shoulder-length brown hair in navy blazer smiling confidently in modern office setting",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Marcus Chen",
    role: "Chief Technology Officer",
    bio: "Technology innovator specializing in low-code platforms and cloud architecture. Published author and frequent conference speaker.",
    expertise: ["Low-Code Development", "Cloud Architecture", "API Design", "DevOps", "Technical Innovation"],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1e8963640-1763296514949.png",
    alt: "Asian man with glasses in white shirt working on laptop in bright modern workspace",
    linkedin: "https://linkedin.com"
  },
  {
    name: "Jennifer Rodriguez",
    role: "VP of Client Success",
    bio: "Client advocate with proven track record in building long-term partnerships. Expert in change management and digital adoption.",
    expertise: ["Client Relations", "Change Management", "Training & Adoption", "Account Growth", "Customer Success"],
    image: "https://img.rocket.new/generatedImages/rocket_gen_img_1c0f48e8d-1763295027844.png",
    alt: "Hispanic woman with long dark hair in professional attire smiling warmly in corporate office environment",
    linkedin: "https://linkedin.com"
  },
  {
    name: "David Thompson",
    role: "Head of Engineering",
    bio: "Engineering leader passionate about building high-performing teams. Former principal engineer at leading SaaS companies.",
    expertise: ["Team Leadership", "Software Architecture", "Agile Methodologies", "Code Quality", "Technical Mentorship"],
    image: "https://images.unsplash.com/photo-1614598381266-2854851dbce6",
    alt: "Caucasian man with short beard in casual business attire working at standing desk with dual monitors",
    linkedin: "https://linkedin.com"
  }];


  // Timeline Data
  const timelineData = {
    title: "Our Journey",
    subtitle: "Key Milestones",
    milestones: [
    {
      year: "2018",
      title: "Company Founded",
      description: "HopeLogix established with a mission to revolutionize enterprise software development through innovative low-code solutions.",
      icon: "RocketLaunchIcon"
    },
    {
      year: "2019",
      title: "First Enterprise Client",
      description: "Secured partnership with Fortune 1000 company, delivering custom CRM solution that reduced operational costs by 35%.",
      icon: "BuildingOfficeIcon"
    },
    {
      year: "2020",
      title: "Platform Innovation",
      description: "Launched proprietary hybrid development framework combining low-code speed with custom code flexibility.",
      icon: "CpuChipIcon"
    },
    {
      year: "2021",
      title: "National Expansion",
      description: "Opened offices in three major cities, expanding team to 50+ professionals and serving clients across North America.",
      icon: "MapIcon"
    },
    {
      year: "2022",
      title: "Industry Recognition",
      description: "Named 'Top Low-Code Solutions Provider' by Tech Innovation Awards. Achieved SOC 2 Type II certification.",
      icon: "TrophyIcon"
    },
    {
      year: "2023",
      title: "100+ Enterprise Clients",
      description: "Reached milestone of serving over 100 enterprise clients with 98% satisfaction rate and 85% retention.",
      icon: "ChartBarIcon"
    },
    {
      year: "2024",
      title: "AI Integration Launch",
      description: "Introduced AI-powered development tools, reducing project timelines by additional 25% while maintaining quality.",
      icon: "SparklesIcon"
    }]

  };

  // Awards Data
  const awardsData = {
    title: "Recognition & Awards",
    subtitle: "Industry Excellence",
    awards: [
    {
      title: "Top Low-Code Solutions Provider",
      organization: "Tech Innovation Awards",
      year: "2024",
      description: "Recognized for excellence in delivering enterprise-grade low-code solutions with exceptional client outcomes.",
      icon: "TrophyIcon"
    },
    {
      title: "Best Digital Transformation Partner",
      organization: "Enterprise Tech Magazine",
      year: "2023",
      description: "Awarded for outstanding contributions to enterprise digital transformation initiatives across multiple industries.",
      icon: "StarIcon"
    },
    {
      title: "Customer Success Excellence",
      organization: "B2B Service Awards",
      year: "2023",
      description: "Honored for maintaining 98% client satisfaction rate and industry-leading retention metrics.",
      icon: "HeartIcon"
    },
    {
      title: "Innovation in Software Development",
      organization: "National Technology Council",
      year: "2022",
      description: "Recognized for pioneering hybrid development methodology combining low-code and custom development.",
      icon: "LightBulbIcon"
    },
    {
      title: "Fast-Growing Tech Company",
      organization: "Business Growth Index",
      year: "2022",
      description: "Listed among top 100 fastest-growing technology companies with 300% year-over-year growth.",
      icon: "ChartBarIcon"
    },
    {
      title: "Best Workplace Culture",
      organization: "Tech Talent Awards",
      year: "2024",
      description: "Celebrated for creating inclusive, innovative workplace environment with exceptional employee satisfaction.",
      icon: "UserGroupIcon"
    }]

  };

  // Certifications Data
  const certificationsData = {
    title: "Certifications & Compliance",
    subtitle: "Trust & Security",
    certifications: [
    {
      name: "SOC 2 Type II",
      issuer: "AICPA",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_11a4b09b6-1764622317369.png",
      alt: "SOC 2 Type II compliance certification badge with blue shield and checkmark symbol",
      verificationUrl: "https://example.com/verify"
    },
    {
      name: "ISO 27001",
      issuer: "ISO",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1cc30d2d9-1764622317083.png",
      alt: "ISO 27001 information security management certification logo with globe and lock icon",
      verificationUrl: "https://example.com/verify"
    },
    {
      name: "AWS Partner",
      issuer: "Amazon Web Services",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_167f7143a-1764622317329.png",
      alt: "AWS Advanced Consulting Partner badge with orange and white cloud logo",
      verificationUrl: "https://example.com/verify"
    },
    {
      name: "Microsoft Gold Partner",
      issuer: "Microsoft",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_17e773a80-1764622317676.png",
      alt: "Microsoft Gold Partner certification emblem with four-color square logo",
      verificationUrl: "https://example.com/verify"
    },
    {
      name: "GDPR Compliant",
      issuer: "EU Commission",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_18efe7105-1764622317364.png",
      alt: "GDPR compliance badge with EU stars and data protection shield symbol",
      verificationUrl: "https://example.com/verify"
    },
    {
      name: "PCI DSS",
      issuer: "PCI Security Standards",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1f412b470-1764622316255.png",
      alt: "PCI DSS payment card industry security certification logo with lock and card icons",
      verificationUrl: "https://example.com/verify"
    },
    {
      name: "HIPAA Compliant",
      issuer: "HHS",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_1868ced8c-1764622320217.png",
      alt: "HIPAA healthcare compliance certification badge with medical cross and shield",
      verificationUrl: "https://example.com/verify"
    },
    {
      name: "Agile Certified",
      issuer: "Scrum Alliance",
      logo: "https://img.rocket.new/generatedImages/rocket_gen_img_17505e166-1764622317390.png",
      alt: "Certified Scrum Master badge with agile methodology circular arrows logo",
      verificationUrl: "https://example.com/verify"
    }]

  };

  // Careers Data
  const careersData = {
    title: "Join Our Team",
    subtitle: "Careers at Paradigm",
    description: "We're always looking for talented individuals who share our passion for innovation and excellence. Join a team that values creativity, collaboration, and continuous growth.",
    benefits: [
    "Competitive salary with performance bonuses and equity options",
    "Comprehensive health, dental, and vision insurance for you and your family",
    "Flexible work arrangements including remote and hybrid options",
    "Professional development budget for courses, conferences, and certifications",
    "Generous PTO policy with paid holidays and sabbatical opportunities",
    "Modern office spaces with latest technology and collaborative environments",
    "Team building events, social activities, and wellness programs"],

    openings: [
    {
      title: "Senior Full-Stack Developer",
      department: "Engineering",
      location: "Remote / Hybrid",
      type: "Full-Time"
    },
    {
      title: "Solutions Architect",
      department: "Technical",
      location: "New York, NY",
      type: "Full-Time"
    },
    {
      title: "Client Success Manager",
      department: "Client Services",
      location: "San Francisco, CA",
      type: "Full-Time"
    },
    {
      title: "UX/UI Designer",
      department: "Design",
      location: "Remote",
      type: "Full-Time"
    }]

  };

  // CTA Data
  const ctaData = {
    title: "Ready to Transform Your Business?",
    description: "Let\'s discuss how HopeLogix can help you achieve your digital transformation goals with our innovative low-code solutions.",
    primaryCTA: {
      text: "Schedule Consultation",
      href: "/contact"
    },
    secondaryCTA: {
      text: "Call Us Today",
      href: "/contact"
    }
  };

  if (!isHydrated) {
    return (
      <div className="min-h-screen bg-background">
        <div className="animate-pulse">
          <div className="h-[60vh] bg-surface" />
          <div className="py-20 px-6">
            <div className="max-w-7xl mx-auto space-y-8">
              <div className="h-8 bg-surface rounded w-1/3 mx-auto" />
              <div className="h-4 bg-surface rounded w-2/3 mx-auto" />
            </div>
          </div>
        </div>
      </div>);

  }

  return (
    <div className="min-h-screen bg-background">
      <HeroSection {...heroData} />
      <StorySection {...storyData} />
      <ValuesSection {...valuesData} />
      
      {/* Team Section */}
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-16">
            <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
              Leadership Team
            </p>
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">
              Meet Our Experts
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {teamData.map((member, index) =>
            <TeamMember key={index} {...member} />
            )}
          </div>
        </div>
      </section>

      <TimelineSection {...timelineData} />
      <AwardsSection {...awardsData} />
      <CertificationsSection {...certificationsData} />
      <CareersSection {...careersData} />
      <CTASection {...ctaData} />
    </div>);

}