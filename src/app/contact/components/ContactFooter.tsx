import React from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const ContactFooter: React.FC = () => {
  const currentYear = new Date().getFullYear();

  const footerLinks = {
    solutions: [
      { label: 'Custom Software', href: '/custom-solutions' },
      { label: 'Low-Code Platforms', href: '/custom-solutions' },
      { label: 'Digital Transformation', href: '/custom-solutions' },
      { label: 'Legacy Modernization', href: '/custom-solutions' }
    ],
    company: [
      { label: 'About Us', href: '/about-us' },
      { label: 'Case Studies', href: '/case-studies' },
      { label: 'Resources', href: '/resources' },
      { label: 'Careers', href: '/about-us' }
    ],
    support: [
      { label: 'Contact Us', href: '/contact' },
      { label: 'Documentation', href: '/resources' },
      { label: 'Privacy Policy', href: '/privacy' },
      { label: 'Terms of Service', href: '/terms' }
    ]
  };

  const socialLinks = [
    { name: 'LinkedIn', icon: 'LinkIcon', href: '#' },
    { name: 'Twitter', icon: 'AtSymbolIcon', href: '#' },
    { name: 'GitHub', icon: 'CodeBracketIcon', href: '#' }
  ];

  return (
    <footer className="bg-surface border-t border-border">
      <div className="max-w-7xl mx-auto px-6 lg:px-12 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 mb-12">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <Link href="/homepage" className="flex items-center space-x-3 mb-6">
              <svg
                width="40"
                height="40"
                viewBox="0 0 40 40"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
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
              Empowering tomorrow's vision today through innovative low-code solutions and strategic technology partnerships.
            </p>
            <div className="flex items-center gap-4">
              {socialLinks.map((social) => (
                <a
                  key={social.name}
                  href={social.href}
                  className="w-10 h-10 bg-muted rounded-lg flex items-center justify-center transition-smooth hover:bg-secondary hover:scale-110"
                  aria-label={social.name}
                >
                  <Icon name={social.icon as any} size={20} variant="outline" className="text-foreground" />
                </a>
              ))}
            </div>
          </div>

          {/* Solutions Column */}
          <div>
            <h3 className="text-sm font-headline font-bold text-foreground uppercase tracking-wider mb-4">
              Solutions
            </h3>
            <ul className="space-y-3">
              {footerLinks.solutions.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-secondary transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company Column */}
          <div>
            <h3 className="text-sm font-headline font-bold text-foreground uppercase tracking-wider mb-4">
              Company
            </h3>
            <ul className="space-y-3">
              {footerLinks.company.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-secondary transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Support Column */}
          <div>
            <h3 className="text-sm font-headline font-bold text-foreground uppercase tracking-wider mb-4">
              Support
            </h3>
            <ul className="space-y-3">
              {footerLinks.support.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground hover:text-secondary transition-smooth"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-sm text-muted-foreground">
            &copy; {currentYear} HopeLogix. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <div className="flex items-center gap-2">
              <Icon name="ShieldCheckIcon" size={16} variant="solid" className="text-success" />
              <span className="text-xs text-muted-foreground">SOC 2 Certified</span>
            </div>
            <div className="flex items-center gap-2">
              <Icon name="LockClosedIcon" size={16} variant="solid" className="text-secondary" />
              <span className="text-xs text-muted-foreground">SSL Secured</span>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default ContactFooter;