
import Icon from '@/components/ui/AppIcon';

interface Award {
  title: string;
  organization: string;
  year: string;
  description: string;
  icon: string;
}

interface AwardsSectionProps {
  title: string;
  subtitle: string;
  awards: Award[];
}

export default function AwardsSection({ title, subtitle, awards }: AwardsSectionProps) {
  return (
    <section className="py-20 px-6 lg:px-12 bg-surface">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            {subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">
            {title}
          </h2>
        </div>

        {/* Awards Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {awards.map((award, index) => (
            <div
              key={index}
              className="bg-background rounded-xl p-8 border border-border hover:border-secondary transition-smooth group"
            >
              <div className="flex items-start gap-4 mb-4">
                <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0 group-hover:scale-110 transition-smooth">
                  <Icon name={award.icon as any} size={24} variant="outline" className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-headline font-bold text-foreground mb-1">
                    {award.title}
                  </h3>
                  <p className="text-secondary text-sm font-semibold">
                    {award.organization}
                  </p>
                </div>
              </div>
              <p className="text-muted-foreground text-sm leading-relaxed mb-3">
                {award.description}
              </p>
              <div className="text-xs text-muted-foreground">
                {award.year}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}