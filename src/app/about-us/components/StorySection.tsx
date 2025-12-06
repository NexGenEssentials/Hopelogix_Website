import AppImage from '@/components/ui/AppImage';

interface StorySectionProps {
  title: string;
  content: string[];
  stats: Array<{
    value: string;
    label: string;
  }>;
}

export default function StorySection({ title, content, stats }: StorySectionProps) {
  return (
    <section className="py-20 px-6 lg:px-12 bg-surface">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Story Content */}
          <div>
            <h2 className="text-3xl md:text-4xl font-headline font-bold text-foreground mb-6">
              {title}
            </h2>
            <div className="space-y-4">
              {content.map((paragraph, index) =>
              <p key={index} className="text-muted-foreground leading-relaxed">
                  {paragraph}
                </p>
              )}
            </div>

            {/* Stats Grid */}
            <div className="grid grid-cols-3 gap-6 mt-10">
              {stats.map((stat, index) =>
              <div key={index} className="text-center">
                  <div className="text-3xl md:text-4xl font-bold text-gradient-primary mb-2">
                    {stat.value}
                  </div>
                  <div className="text-sm text-muted-foreground">
                    {stat.label}
                  </div>
                </div>
              )}
            </div>
          </div>

          {/* Image */}
          <div className="relative h-[500px] rounded-xl overflow-hidden">
            <AppImage
              src="https://images.unsplash.com/photo-1635114332743-719b5e0702b9"
              alt="Modern technology office workspace with multiple computer monitors displaying code and data analytics on sleek desks"
              fill
              className="object-cover" />

            <div className="absolute inset-0 bg-gradient-to-t from-background/60 to-transparent" />
          </div>
        </div>
      </div>
    </section>);

}