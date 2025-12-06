import React from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface SolutionCardProps {
  icon: string;
  title: string;
  description: string;
  features: string[];
  image: string;
  imageAlt: string;
  isReversed?: boolean;
}

const SolutionCard: React.FC<SolutionCardProps> = ({
  icon,
  title,
  description,
  features,
  image,
  imageAlt,
  isReversed = false,
}) => {
  return (
    <div
      className={`grid grid-cols-1 lg:grid-cols-2 gap-12 items-center ${
        isReversed ? 'lg:flex-row-reverse' : ''
      }`}
    >
      {/* Content */}
      <div className={`${isReversed ? 'lg:order-2' : ''}`}>
        <div className="flex items-center space-x-4 mb-6">
          <div className="w-16 h-16 bg-gradient-primary rounded-xl flex items-center justify-center shadow-glow-blue">
            <Icon name={icon as any} size={32} variant="outline" className="text-primary-foreground" />
          </div>
          <h3 className="text-3xl font-headline font-bold text-foreground">
            {title}
          </h3>
        </div>

        <p className="text-lg text-muted-foreground mb-8 leading-relaxed">
          {description}
        </p>

        <ul className="space-y-4">
          {features.map((feature, index) => (
            <li key={index} className="flex items-start space-x-3">
              <Icon
                name="CheckCircleIcon"
                size={24}
                variant="solid"
                className="text-secondary flex-shrink-0 mt-0.5"
              />
              <span className="text-foreground">{feature}</span>
            </li>
          ))}
        </ul>
      </div>

      {/* Image */}
      <div className={`${isReversed ? 'lg:order-1' : ''}`}>
        <div className="relative rounded-2xl overflow-hidden shadow-elevation group">
          <div className="aspect-[4/3] relative">
            <AppImage
              src={image}
              alt={imageAlt}
              className="w-full h-full object-cover transition-smooth group-hover:scale-105"
            />
          </div>
          <div className="absolute inset-0 bg-gradient-to-t from-background/80 to-transparent opacity-0 group-hover:opacity-100 transition-smooth" />
        </div>
      </div>
    </div>
  );
};

export default SolutionCard;