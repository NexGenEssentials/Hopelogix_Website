import React from 'react';

interface SolutionHeroProps {
  title: string;
  description: string;
  stats: Array<{
    value: string;
    label: string;
  }>;
}

const SolutionHero: React.FC<SolutionHeroProps> = ({ title, description, stats }) => {
  return (
    <section className="relative pt-32 pb-20 px-6 lg:px-12 overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-background via-accent to-background opacity-50" />
      
      {/* Content */}
      <div className="relative max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h1 className="text-5xl lg:text-6xl font-headline font-bold text-foreground mb-6">
            {title}
          </h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="bg-surface/50 backdrop-blur-sm border border-border rounded-xl p-6 text-center transition-smooth hover:border-secondary hover:shadow-glow-blue"
            >
              <div className="text-4xl font-bold text-gradient-primary mb-2">
                {stat.value}
              </div>
              <div className="text-sm text-muted-foreground uppercase tracking-wide">
                {stat.label}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SolutionHero;