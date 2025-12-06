import Link from 'next/link';
import Icon from '@/components/ui/AppIcon';

interface JobOpening {
  title: string;
  department: string;
  location: string;
  type: string;
}

interface CareersSectionProps {
  title: string;
  subtitle: string;
  description: string;
  benefits: string[];
  openings: JobOpening[];
}

export default function CareersSection({ title, subtitle, description, benefits, openings }: CareersSectionProps) {
  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        {/* Section Header */}
        <div className="text-center mb-16">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            {subtitle}
          </p>
          <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-6">
            {title}
          </h2>
          <p className="text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Benefits */}
          <div className="bg-surface rounded-xl p-8 border border-border">
            <h3 className="text-2xl font-headline font-bold text-foreground mb-6">
              Why Join Paradigm?
            </h3>
            <div className="space-y-4">
              {benefits.map((benefit, index) => (
                <div key={index} className="flex items-start gap-3">
                  <Icon name="CheckCircleIcon" size={24} variant="solid" className="text-secondary flex-shrink-0 mt-0.5" />
                  <p className="text-muted-foreground">
                    {benefit}
                  </p>
                </div>
              ))}
            </div>
          </div>

          {/* Current Openings */}
          <div>
            <h3 className="text-2xl font-headline font-bold text-foreground mb-6">
              Current Openings
            </h3>
            <div className="space-y-4">
              {openings.map((job, index) => (
                <div
                  key={index}
                  className="bg-surface rounded-xl p-6 border border-border hover:border-secondary transition-smooth group"
                >
                  <h4 className="text-lg font-headline font-bold text-foreground mb-2 group-hover:text-secondary transition-smooth">
                    {job.title}
                  </h4>
                  <div className="flex flex-wrap gap-3 text-sm text-muted-foreground mb-4">
                    <span className="flex items-center gap-1">
                      <Icon name="BriefcaseIcon" size={16} variant="outline" />
                      {job.department}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="MapPinIcon" size={16} variant="outline" />
                      {job.location}
                    </span>
                    <span className="flex items-center gap-1">
                      <Icon name="ClockIcon" size={16} variant="outline" />
                      {job.type}
                    </span>
                  </div>
                  <Link
                    href="/contact"
                    className="inline-flex items-center gap-2 text-secondary hover:text-primary transition-smooth text-sm font-semibold"
                  >
                    Apply Now
                    <Icon name="ArrowRightIcon" size={16} variant="outline" />
                  </Link>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}