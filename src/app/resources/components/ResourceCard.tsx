'use client';

import { useState } from 'react';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface ResourceCardProps {
  resource: {
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
  };
  onDownload?: (id: number) => void;
}

export default function ResourceCard({ resource, onDownload }: ResourceCardProps) {
  const [isHovered, setIsHovered] = useState(false);

  const getTypeIcon = (type: string) => {
    switch (type) {
      case 'Whitepaper':
        return 'DocumentTextIcon';
      case 'Webinar':
        return 'VideoCameraIcon';
      case 'Blog':
        return 'NewspaperIcon';
      case 'Case Study':
        return 'ChartBarIcon';
      default:
        return 'DocumentIcon';
    }
  };

  const getTypeColor = (type: string) => {
    switch (type) {
      case 'Whitepaper':
        return 'bg-blue-500/10 text-blue-400';
      case 'Webinar':
        return 'bg-cyan-500/10 text-cyan-400';
      case 'Blog':
        return 'bg-purple-500/10 text-purple-400';
      case 'Case Study':
        return 'bg-green-500/10 text-green-400';
      default:
        return 'bg-gray-500/10 text-gray-400';
    }
  };

  return (
    <div
      className="group bg-surface rounded-xl overflow-hidden border border-border hover:border-secondary/50 transition-smooth cursor-pointer"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      <div className="relative h-48 overflow-hidden">
        <AppImage
          src={resource.image}
          alt={resource.alt}
          className={`w-full h-full object-cover transition-smooth ${
            isHovered ? 'scale-110' : 'scale-100'
          }`}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent" />
        <div className="absolute top-4 left-4">
          <span
            className={`inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold ${getTypeColor(
              resource.type
            )}`}
          >
            <Icon name={getTypeIcon(resource.type)} size={14} className="mr-1.5" />
            {resource.type}
          </span>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center text-xs text-muted-foreground mb-3 space-x-4">
          <span className="flex items-center">
            <Icon name="CalendarIcon" size={14} className="mr-1.5" />
            {resource.date}
          </span>
          <span className="flex items-center">
            <Icon name="ClockIcon" size={14} className="mr-1.5" />
            {resource.readTime}
          </span>
        </div>

        <h3 className="text-lg font-semibold text-foreground mb-2 group-hover:text-secondary transition-smooth line-clamp-2">
          {resource.title}
        </h3>

        <p className="text-sm text-muted-foreground mb-4 line-clamp-3">
          {resource.description}
        </p>

        <div className="flex items-center justify-between">
          <span className="text-xs text-muted-foreground px-3 py-1 bg-muted/30 rounded-full">
            {resource.category}
          </span>

          {resource.downloadUrl && (
            <button
              onClick={() => onDownload?.(resource.id)}
              className="flex items-center text-sm font-semibold text-secondary hover:text-secondary/80 transition-smooth"
            >
              <Icon name="ArrowDownTrayIcon" size={16} className="mr-1.5" />
              Download
            </button>
          )}
        </div>
      </div>
    </div>
  );
}