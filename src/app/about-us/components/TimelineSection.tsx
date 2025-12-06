import Icon from '@/components/ui/AppIcon';

interface Milestone {
  year: string;
  title: string;
  description: string;
  icon: string;
}

interface TimelineSectionProps {
  title: string;
  subtitle: string;
  milestones: Milestone[];
}

export default function TimelineSection({ title, subtitle, milestones }: TimelineSectionProps) {
  return (
    <section className="py-20 px-6 lg:px-12 bg-surface">
      <div className="max-w-5xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            {subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground">
            {title}
          </h2>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border hidden md:block" />

          {/* Milestones */}
          <div className="space-y-12">
            {milestones.map((milestone, index) => (
              <div key={index} className="relative flex gap-8 items-start">
                {/* Icon */}
                <div className="relative z-10 w-16 h-16 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                  <Icon name={milestone.icon as any} size={28} variant="outline" className="text-white" />
                </div>

                {/* Content */}
                <div className="flex-1 bg-background rounded-xl p-6 border border-border">
                  <div className="text-secondary font-bold text-sm mb-2">
                    {milestone.year}
                  </div>
                  <h3 className="text-xl font-headline font-bold text-foreground mb-3">
                    {milestone.title}
                  </h3>
                  <p className="text-muted-foreground leading-relaxed">
                    {milestone.description}
                  </p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}