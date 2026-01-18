import Icon from '@/components/ui/AppIcon';

interface Stat {
  label: string;
  value: string;
  icon: string;
  trend?: string;
}

interface StatsOverviewProps {
  stats: Stat[];
}

export default function StatsOverview({ stats }: StatsOverviewProps) {
  return (
    <div className="grid grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => (
        <div
          key={index}
          className="bg-surface rounded-xl border border-border p-6 text-center hover:border-secondary/50 transition-smooth group"
        >
          <div className="inline-flex items-center justify-center w-14 h-14 bg-gradient-primary rounded-full mb-4 group-hover:scale-110 transition-smooth">
            <Icon name={stat.icon as any} size={28} variant="solid" className="text-primary-foreground" />
          </div>
          <div className="text-3xl font-bold text-foreground mb-2">{stat.value}</div>
          <div className="text-sm text-muted-foreground mb-2">{stat.label}</div>
          {stat.trend && (
            <div className="inline-flex items-center space-x-1 text-xs font-semibold text-secondary">
              <Icon name="ArrowTrendingUpIcon" size={14} variant="solid" />
              <span>{stat.trend}</span>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}

// Explore detailed transformation stories showcasing how HopeLogix delivers measurable results through custom web, mobile, USSD, integrations, and digital transformation solutions for businesses across industries.