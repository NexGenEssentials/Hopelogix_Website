import AppImage from '@/components/ui/AppImage';

interface HeroSectionProps {
  title: string;
  subtitle: string;
  description: string;
}

export default function HeroSection({ title, subtitle, description }: HeroSectionProps) {
  return (
    <section className="relative min-h-[60vh] flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <AppImage
          src="https://images.unsplash.com/photo-1519389950473-47ba0277781c"
          alt="Diverse team of professionals collaborating around modern conference table with laptops and digital displays in bright office space"
          fill
          className="object-cover"
          priority />

        {/* Much stronger overlay for maximum text contrast */}
        <div className="absolute inset-0 bg-black/80" />
      </div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 lg:px-12 py-20">
        <div className="max-w-4xl mx-auto text-center">
          <p className="text-secondary font-semibold text-sm uppercase tracking-wider mb-4">
            {subtitle}
          </p>
          <h1 className="text-4xl md:text-5xl lg:text-6xl font-headline font-bold text-foreground mb-6">
            {title}
          </h1>
          <p className="text-lg md:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            {description}
          </p>
        </div>
      </div>
    </section>);

}