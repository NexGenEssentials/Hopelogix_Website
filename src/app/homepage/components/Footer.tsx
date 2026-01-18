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
    ],
    company: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Resources', href: '/custom-solutions' },
      { label: 'Contact', href: '/contact' },
    ],
    resources: [
      { label: 'Whitepapers', href: '/custom-solutions' },
      { label: 'Documentation', href: '/custom-solutions' },
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
              <img
                src="/assets/images/image_Dark.png"
                alt="HopeLogix Logo"
                width={56}
                height={56}
                className="rounded-lg shadow-glow-blue transition-smooth group-hover:scale-105"
                style={{ objectFit: 'contain', background: 'transparent' }}
              />
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