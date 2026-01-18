'use client';

import { useState, useEffect } from 'react';
import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navigationItems = [
    { label: 'Home', href: '/homepage' },
    { label: 'Custom Solutions', href: '/custom-solutions' },
    { label: 'Case Studies', href: '/case-studies' },
    { label: 'About Us', href: '/about-us' },
    // { label: 'Resources', href: '/resources' },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-smooth ${
        isScrolled
          ? 'bg-surface/95 backdrop-blur-md shadow-elevation'
          : 'bg-transparent'
      }`}
    >
      <div className="w-full">
        <div className="flex items-center justify-between h-20 px-6 lg:px-12">
          {/* Logo */}
          <Link
            href="/homepage"
            className="flex items-center space-x-3 group transition-smooth hover:opacity-80"
          >
            <div className="relative">
              <img
                src="/assets/images/image_Dark.png"
                alt="HopeLogix Logo"
                width={56}
                height={56}
                className="rounded-lg shadow-glow-blue transition-smooth group-hover:scale-105"
                style={{ objectFit: 'contain', background: 'transparent' }}
              />
              <div className="absolute inset-0 bg-secondary/20 rounded-lg blur-xl opacity-0 group-hover:opacity-100 transition-smooth" />
            </div>
            <span className="text-xl font-headline font-bold text-foreground">
              HopeLogix
            </span>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center space-x-1">
            {navigationItems?.map((item) => (
              <Link
                key={item?.href}
                href={item?.href}
                className="relative px-4 py-2 text-sm font-medium text-muted-foreground hover:text-foreground transition-smooth group"
              >
                {item?.label}
                <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-gradient-primary group-hover:w-full transition-all duration-300" />
              </Link>
            ))}
          </nav>

          {/* CTA & Mobile Menu Button */}
          <div className="flex items-center space-x-4">
            <Link
              href="/contact"
              className="hidden lg:inline-flex items-center px-6 py-2.5 bg-gradient-primary text-primary-foreground font-semibold rounded-lg transition-smooth hover:shadow-glow-blue hover:scale-105"
            >
              Contact Us
            </Link>

            {/* Mobile Menu Button */}
            <button
              onClick={toggleMobileMenu}
              className="lg:hidden p-2 text-foreground hover:text-secondary transition-smooth"
              aria-label="Toggle mobile menu"
            >
              <Icon
                name={isMobileMenuOpen ? 'XMarkIcon' : 'Bars3Icon'}
                size={28}
                variant="outline"
              />
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className="lg:hidden bg-surface/98 backdrop-blur-md border-t border-border">
            <nav className="flex flex-col px-6 py-4 space-y-1">
              {navigationItems?.map((item) => (
                <Link
                  key={item?.href}
                  href={item?.href}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className="px-4 py-3 text-base font-medium text-muted-foreground hover:text-foreground hover:bg-muted/50 rounded-lg transition-smooth"
                >
                  {item?.label}
                </Link>
              ))}
              <Link
                href="/contact"
                onClick={() => setIsMobileMenuOpen(false)}
                className="mt-4 px-4 py-3 bg-gradient-primary text-primary-foreground font-semibold text-center rounded-lg transition-smooth hover:shadow-glow-blue"
              >
                Contact Us
              </Link>
            </nav>
          </div>
        )}
      </div>
    </header>
  );
};

export default Header;