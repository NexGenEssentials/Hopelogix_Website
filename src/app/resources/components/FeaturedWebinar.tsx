'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface FeaturedWebinarProps {
  webinar: {
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
  };
}

export default function FeaturedWebinar({ webinar }: FeaturedWebinarProps) {
  const [isRegistering, setIsRegistering] = useState(false);

  const handleRegister = () => {
    setIsRegistering(true);
    setTimeout(() => {
      alert('Registration successful! Check your email for webinar details.');
      setIsRegistering(false);
    }, 1500);
  };

  return (
    <div className="bg-gradient-to-br from-primary/10 via-surface to-accent/10 border border-secondary/30 rounded-2xl overflow-hidden mb-12">
      <div className="grid lg:grid-cols-2 gap-8 p-8 lg:p-12">
        <div className="flex flex-col justify-center">
          <div className="inline-flex items-center px-4 py-2 bg-secondary/20 border border-secondary/50 rounded-full text-secondary text-sm font-semibold mb-6 w-fit">
            <Icon name="VideoCameraIcon" size={16} className="mr-2" />
            Featured Webinar
          </div>

          <h2 className="text-3xl lg:text-4xl font-headline font-bold text-foreground mb-4">
            {webinar.title}
          </h2>

          <p className="text-muted-foreground text-lg mb-6">{webinar.description}</p>

          <div className="space-y-4 mb-8">
            <div className="flex items-center text-foreground">
              <Icon name="UserCircleIcon" size={20} className="mr-3 text-secondary" />
              <div>
                <p className="font-semibold">{webinar.speaker}</p>
                <p className="text-sm text-muted-foreground">{webinar.speakerTitle}</p>
              </div>
            </div>

            <div className="flex items-center text-foreground">
              <Icon name="CalendarDaysIcon" size={20} className="mr-3 text-secondary" />
              <span>{webinar.date}</span>
            </div>

            <div className="flex items-center text-foreground">
              <Icon name="ClockIcon" size={20} className="mr-3 text-secondary" />
              <span>
                {webinar.time} ({webinar.duration})
              </span>
            </div>
          </div>

          <button
            onClick={handleRegister}
            disabled={isRegistering}
            className="inline-flex items-center justify-center px-8 py-4 bg-gradient-primary text-primary-foreground font-semibold rounded-lg hover:shadow-glow-blue hover:scale-105 transition-smooth disabled:opacity-50 disabled:cursor-not-allowed"
          >
            {isRegistering ? (
              <>
                <Icon name="ArrowPathIcon" size={20} className="mr-2 animate-spin" />
                Registering...
              </>
            ) : (
              <>
                <Icon name="CheckCircleIcon" size={20} className="mr-2" />
                Register Now
              </>
            )}
          </button>
        </div>

        <div className="relative h-64 lg:h-full min-h-[300px] rounded-xl overflow-hidden">
          <AppImage
            src={webinar.image}
            alt={webinar.alt}
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-surface/80 via-transparent to-transparent" />
          <div className="absolute bottom-6 left-6 right-6">
            <div className="flex items-center justify-center w-16 h-16 bg-secondary/20 backdrop-blur-md border border-secondary/50 rounded-full">
              <Icon name="PlayIcon" size={32} className="text-secondary ml-1" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}