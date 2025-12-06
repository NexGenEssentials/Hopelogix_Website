'use client';

import { useState, useEffect } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface VideoTestimonialProps {
  id: string;
  title: string;
  client: string;
  position: string;
  company: string;
  thumbnail: string;
  alt: string;
  videoUrl: string;
  duration: string;
  quote: string;
}

export default function VideoTestimonial({
  id,
  title,
  client,
  position,
  company,
  thumbnail,
  alt,
  videoUrl,
  duration,
  quote,
}: VideoTestimonialProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [isPlaying, setIsPlaying] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const handlePlay = () => {
    setIsPlaying(true);
  };

  if (!isHydrated) {
    return (
      <div className="bg-surface rounded-xl border border-border overflow-hidden">
        <div className="animate-pulse">
          <div className="h-64 bg-muted/50" />
          <div className="p-6 space-y-3">
            <div className="h-6 bg-muted/50 rounded w-3/4" />
            <div className="h-4 bg-muted/50 rounded w-1/2" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface rounded-xl border border-border overflow-hidden hover:border-secondary/50 transition-smooth group">
      <div className="relative h-64 overflow-hidden">
        {!isPlaying ? (
          <>
            <AppImage
              src={thumbnail}
              alt={alt}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-surface/90 via-surface/50 to-transparent" />
            <button
              onClick={handlePlay}
              className="absolute inset-0 flex items-center justify-center group/play"
              aria-label={`Play video testimonial from ${client}`}
            >
              <div className="w-20 h-20 bg-secondary/90 backdrop-blur-sm rounded-full flex items-center justify-center transition-smooth group-hover/play:scale-110 group-hover/play:bg-secondary">
                <Icon name="PlayIcon" size={32} variant="solid" className="text-primary-foreground ml-1" />
              </div>
            </button>
            <div className="absolute bottom-4 right-4 px-3 py-1.5 bg-surface/90 backdrop-blur-sm rounded-full text-xs font-semibold text-foreground">
              {duration}
            </div>
          </>
        ) : (
          <div className="w-full h-full bg-surface flex items-center justify-center">
            <div className="text-center space-y-4">
              <Icon name="VideoCameraIcon" size={48} variant="outline" className="text-secondary mx-auto" />
              <p className="text-muted-foreground">Video player would load here</p>
              <p className="text-xs text-muted-foreground">{videoUrl}</p>
            </div>
          </div>
        )}
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h4 className="text-lg font-headline font-bold text-foreground mb-2 group-hover:text-secondary transition-smooth">
            {title}
          </h4>
          <p className="text-sm text-muted-foreground">
            <span className="font-semibold text-foreground">{client}</span>
            <br />
            {position}, {company}
          </p>
        </div>

        <blockquote className="text-sm text-muted-foreground italic border-l-2 border-secondary pl-4">
          "{quote}"
        </blockquote>
      </div>
    </div>
  );
}