'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface TeamMemberProps {
  name: string;
  role: string;
  bio: string;
  expertise: string[];
  image: string;
  alt: string;
  linkedin?: string;
}

export default function TeamMember({ name, role, bio, expertise, image, alt, linkedin }: TeamMemberProps) {
  const [isExpanded, setIsExpanded] = useState(false);

  return (
    <div className="bg-surface rounded-xl overflow-hidden border border-border hover:border-secondary transition-smooth group">
      {/* Image */}
      <div className="relative h-80 overflow-hidden">
        <AppImage
          src={image}
          alt={alt}
          fill
          className="object-cover group-hover:scale-105 transition-smooth-long"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-background via-transparent to-transparent opacity-60" />
      </div>

      {/* Content */}
      <div className="p-6">
        <h3 className="text-xl font-headline font-bold text-foreground mb-1">
          {name}
        </h3>
        <p className="text-secondary font-semibold text-sm mb-4">
          {role}
        </p>

        <p className="text-muted-foreground text-sm leading-relaxed mb-4">
          {bio}
        </p>

        {/* Expertise Tags */}
        <div className="flex flex-wrap gap-2 mb-4">
          {expertise.slice(0, isExpanded ? expertise.length : 3).map((skill, index) => (
            <span
              key={index}
              className="px-3 py-1 bg-muted rounded-full text-xs text-muted-foreground"
            >
              {skill}
            </span>
          ))}
        </div>

        {/* Expand/Collapse Button */}
        {expertise.length > 3 && (
          <button
            onClick={() => setIsExpanded(!isExpanded)}
            className="text-secondary text-sm font-semibold hover:text-primary transition-smooth flex items-center gap-1"
          >
            {isExpanded ? 'Show Less' : `+${expertise.length - 3} More`}
            <Icon
              name={isExpanded ? 'ChevronUpIcon' : 'ChevronDownIcon'}
              size={16}
              variant="outline"
            />
          </button>
        )}

        {/* LinkedIn Link */}
        {linkedin && (
          <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-flex items-center gap-2 text-sm text-muted-foreground hover:text-secondary transition-smooth"
          >
            <Icon name="LinkIcon" size={16} variant="outline" />
            LinkedIn Profile
          </a>
        )}
      </div>
    </div>
  );
}