import Icon from '@/components/ui/AppIcon';

interface Value {
  icon: string;
  title: string;
  description: string;
}

interface ValuesSectionProps {
  title: string;
  subtitle: string;
  values: Value[];
}

export default function ValuesSection({ title, subtitle, values }: ValuesSectionProps) {
  return (
    <section className="py-20 px-6 lg:px-12">
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

        {/* Values Grid */}
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-surface rounded-xl p-8 border border-border hover:border-secondary transition-smooth group"
            >
              <div className="w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center mb-6 group-hover:scale-110 transition-smooth">
                <Icon name={value.icon as any} size={28} variant="outline" className="text-white" />
              </div>
              <h3 className="text-xl font-headline font-bold text-foreground mb-3">
                {value.title}
              </h3>
              <p className="text-muted-foreground leading-relaxed">
                {value.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}