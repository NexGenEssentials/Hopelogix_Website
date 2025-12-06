'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function NewsletterSignup() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [email, setEmail] = useState('');
  const [isSubscribing, setIsSubscribing] = useState(false);
  const [isSubscribed, setIsSubscribed] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (!email) return;

    setIsSubscribing(true);
    setTimeout(() => {
      setIsSubscribing(false);
      setIsSubscribed(true);
      setEmail('');
      setTimeout(() => setIsSubscribed(false), 3000);
    }, 1500);
  };

  if (!isHydrated) {
    return (
      <div className="bg-gradient-to-br from-primary/10 via-surface to-secondary/10 border border-border rounded-2xl p-8 lg:p-12">
        <div className="animate-pulse space-y-4">
          <div className="h-8 bg-muted/30 rounded w-3/4" />
          <div className="h-4 bg-muted/30 rounded w-full" />
          <div className="h-12 bg-muted/30 rounded w-full" />
        </div>
      </div>
    );
  }

  return (
    <div className="bg-gradient-to-br from-primary/10 via-surface to-secondary/10 border border-border rounded-2xl p-8 lg:p-12">
      <div className="max-w-2xl mx-auto text-center">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-secondary/20 border border-secondary/50 rounded-full mb-6">
          <Icon name="EnvelopeIcon" size={32} className="text-secondary" />
        </div>

        <h2 className="text-3xl font-headline font-bold text-foreground mb-4">
          Stay Ahead of the Curve
        </h2>

        <p className="text-muted-foreground text-lg mb-8">
          Subscribe to our newsletter for exclusive insights, industry trends, and the latest
          resources delivered directly to your inbox.
        </p>

        {isSubscribed ? (
          <div className="flex items-center justify-center px-6 py-4 bg-success/20 border border-success/50 rounded-lg text-success">
            <Icon name="CheckCircleIcon" size={24} className="mr-3" />
            <span className="font-semibold">Successfully subscribed! Check your email.</span>
          </div>
        ) : (
          <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-4">
            <input
              type="email"
              value={email}
              onChange={(e) => setEmail(e.target.value)}
              placeholder="Enter your email address"
              required
              className="flex-1 px-6 py-4 bg-surface border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary transition-smooth"
            />
            <button
              type="submit"
              disabled={isSubscribing}
              className="px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-lg hover:shadow-glow-blue hover:scale-105 transition-smooth disabled:opacity-50 disabled:cursor-not-allowed whitespace-nowrap"
            >
              {isSubscribing ? (
                <>
                  <Icon name="ArrowPathIcon" size={20} className="inline mr-2 animate-spin" />
                  Subscribing...
                </>
              ) : (
                <>
                  <Icon name="PaperAirplaneIcon" size={20} className="inline mr-2" />
                  Subscribe
                </>
              )}
            </button>
          </form>
        )}

        <p className="text-xs text-muted-foreground mt-4">
          We respect your privacy. Unsubscribe at any time.
        </p>
      </div>
    </div>
  );
}