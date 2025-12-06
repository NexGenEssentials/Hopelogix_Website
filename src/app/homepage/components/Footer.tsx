'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface FooterProps {}

const Footer = ({}: FooterProps) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentYear, setCurrentYear] = useState('2025');

  useEffect(() => {
    setIsHydrated(true);
    setCurrentYear(new Date().getFullYear().toString());
  }, []);

  const footerLinks = {
    solutions: [
      { label: 'Custom Software Development', href: '/custom-solutions' },
      { label: 'Digital Transformation', href: '/custom-solutions' },
      { label: 'API Integration', href: '/custom-solutions' },
      { label: 'Low-Code Platforms', href: '/custom-solutions' },
    ],
    company: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Resources', href: '/resources' },
      { label: 'Contact', href: '/contact' },
    ],
    resources: [
      { label: 'Blog', href: '/resources' },
      { label: 'Whitepapers', href: '/resources' },
      { label: 'Webinars', href: '/resources' },
      { label: 'Documentation', href: '/resources' },
    ],
    legal: [
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' },
      { label: 'Security', href: '/security' },
      { label: 'Compliance', href: '/compliance' },
    ],
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: 'LinkIcon', href: '#' },
    { name: 'Twitter', icon: 'LinkIcon', href: '#' },
    { name: 'GitHub', icon: 'LinkIcon', href: '#' },
    { name: 'YouTube', icon: 'LinkIcon', href: '#' },
  ];

  if (!isHydrated) {
    return (
      <footer className="bg-surface border-t border-border">
        <div className="max-w-7xl mx-auto px-6 lg:px-12 py-12">
          <div className="text-center text-muted-foreground">
            <p>&copy; {currentYear} HopeLogix. All rights reserved.</p>
          </div>
        </div>
      </footer>
    );
  }

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        {/* Main Footer Content */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-6 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/homepage" className="flex items-center space-x-3 mb-6 group">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                className="transition-smooth group-hover:scale-105"
              >
                <rect width="40" height="40" rx="8" fill="url(#footer-logo-gradient)" />
                <path
                  d="M12 28V12H18C20.2091 12 22 13.7909 22 16C22 18.2091 20.2091 20 18 20H15M15 20V28M15 20H22L28 28"
                  stroke="white"
                  strokeWidth="2.5"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
                <defs>
                  <linearGradient
                    id="footer-logo-gradient"
                    x1="0"
                    y1="0"
                    x2="40"
                    y2="40"
                    gradientUnits="userSpaceOnUse"
                  >
                    <stop stopColor="#0066cc" />
                    <stop offset="1" stopColor="#00d4ff" />
                  </linearGradient>
                </defs>
              </svg>
              <span className="text-xl font-headline font-bold text-foreground">
                HopeLogix
              </span>
            </Link>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              Empowering Tomorrow's Vision Today. Your strategic technology partner for sustainable growth and digital transformation.
            </p>
            <div className="flex items-center space-x-4">
              {socialLinks.map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  className="p-2 bg-muted/20 rounded-lg hover:bg-secondary/20 transition-smooth group"
                  aria-label={social.name}
                >
                  <Icon
                    name={social.icon as any}
                    size={20}
                    variant="outline"
                    className="text-muted-foreground group-hover:text-secondary"
                  />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Solutions</h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-secondary transition-smooth text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Company</h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-secondary transition-smooth text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Resources */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Resources</h3>
            <ul className="space-y-3">
              {footerLinks.resources.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-secondary transition-smooth text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-foreground font-semibold mb-4">Legal</h3>
            <ul className="space-y-3">
              {footerLinks.legal.map((link, index) => (
                <li key={index}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-secondary transition-smooth text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Trust Badges */}
        <div className="border-t border-border pt-8 mb-8">
          <div className="flex flex-wrap items-center justify-center gap-6">
            {['SOC 2 Type II', 'ISO 27001', 'GDPR Compliant', 'AWS Partner', 'Microsoft Gold'].map((badge, index) => (
              <div
                key={index}
                className="flex items-center space-x-2 px-4 py-2 bg-muted/10 rounded-lg"
              >
                <Icon name="ShieldCheckIcon" size={16} variant="solid" className="text-success" />
                <span className="text-xs text-muted-foreground font-medium">{badge}</span>
              </div>
            ))}
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-border pt-8">
          <div className="flex flex-col md:flex-row items-center justify-between gap-4">
            <p className="text-sm text-muted-foreground">
              &copy; {currentYear} HopeLogix. All rights reserved.
            </p>
            <div className="flex items-center space-x-6">
              <Link href="/privacy" className="text-sm text-muted-foreground hover:text-secondary transition-smooth">
                Privacy Policy
              </Link>
              <Link href="/terms" className="text-sm text-muted-foreground hover:text-secondary transition-smooth">
                Terms of Service
              </Link>
              <Link href="/contact" className="text-sm text-muted-foreground hover:text-secondary transition-smooth">
                Contact Us
              </Link>
            </div>  
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;