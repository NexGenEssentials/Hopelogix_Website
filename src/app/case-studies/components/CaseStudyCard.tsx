import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import Icon from '@/components/ui/AppIcon';

interface CaseStudyCardProps {
  id: string;
  title: string;
  client: string;
  industry: string;
  image: string;
  alt: string;
  challenge: string;
  solution: string;
  results: {
    metric: string;
    value: string;
    icon: string;
  }[];
  tags: string[];
}

export default function CaseStudyCard({ 
  id, 
  title, 
  client, 
  industry, 
  image, 
  alt, 
  challenge, 
  solution, 
  results, 
  tags 
}: CaseStudyCardProps) {
  return (
    <div className="group bg-surface rounded-xl overflow-hidden border border-border hover:border-secondary/50 transition-smooth hover:shadow-glow-blue">
      <div className="relative h-64 overflow-hidden">
        <AppImage
          src={image}
          alt={alt}
          className="w-full h-full object-cover transition-smooth group-hover:scale-105"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-surface via-surface/50 to-transparent" />
        <div className="absolute top-4 right-4 px-3 py-1.5 bg-accent/90 backdrop-blur-sm rounded-full text-xs font-semibold text-secondary">
          {industry}
        </div>
      </div>

      <div className="p-6 space-y-4">
        <div>
          <h3 className="text-xl font-headline font-bold text-foreground mb-2 group-hover:text-secondary transition-smooth">
            {title}
          </h3>
          <p className="text-sm text-muted-foreground font-semibold">{client}</p>
        </div>

        <div className="space-y-3">
          <div>
            <h4 className="text-xs font-semibold text-secondary uppercase tracking-wider mb-1">Challenge</h4>
            <p className="text-sm text-muted-foreground line-clamp-2">{challenge}</p>
          </div>
          <div>
            <h4 className="text-xs font-semibold text-secondary uppercase tracking-wider mb-1">Solution</h4>
            <p className="text-sm text-muted-foreground line-clamp-2">{solution}</p>
          </div>
        </div>

        <div className="grid grid-cols-3 gap-3 py-4 border-t border-border">
          {results.map((result, index) => (
            <div key={index} className="text-center">
              <div className="flex justify-center mb-1">
                <Icon name={result.icon as any} size={20} variant="solid" className="text-secondary" />
              </div>
              <div className="text-lg font-bold text-foreground">{result.value}</div>
              <div className="text-xs text-muted-foreground">{result.metric}</div>
            </div>
          ))}
        </div>

        <div className="flex flex-wrap gap-2 pt-2">
          {tags.map((tag, index) => (
            <span
              key={index}
              className="px-2.5 py-1 bg-muted/50 text-xs font-medium text-muted-foreground rounded-md"
            >
              {tag}
            </span>
          ))}
        </div>

        <Link
          href={`/case-studies/${id}`}
          className="inline-flex items-center space-x-2 text-sm font-semibold text-secondary hover:text-secondary/80 transition-smooth group/link"
        >
          <span>Read Full Case Study</span>
          <Icon 
            name="ArrowRightIcon" 
            size={16} 
            variant="outline" 
            className="transition-smooth group-hover/link:translate-x-1" 
          />
        </Link>
      </div>
    </div>
  );
}