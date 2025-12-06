import AppImage from '@/components/ui/AppImage';

interface Certification {
  name: string;
  issuer: string;
  logo: string;
  alt: string;
  verificationUrl?: string;
}

interface CertificationsSectionProps {
  title: string;
  subtitle: string;
  certifications: Certification[];
}

export default function CertificationsSection({ title, subtitle, certifications }: CertificationsSectionProps) {
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

        {/* Certifications Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {certifications.map((cert, index) => (
            <div
              key={index}
              className="bg-surface rounded-xl p-6 border border-border hover:border-secondary transition-smooth group flex flex-col items-center text-center"
            >
              <div className="relative w-24 h-24 mb-4 group-hover:scale-110 transition-smooth">
                <AppImage
                  src={cert.logo}
                  alt={cert.alt}
                  fill
                  className="object-contain"
                />
              </div>
              <h3 className="text-sm font-headline font-bold text-foreground mb-1">
                {cert.name}
              </h3>
              <p className="text-xs text-muted-foreground mb-3">
                {cert.issuer}
              </p>
              {cert.verificationUrl && (
                <a
                  href={cert.verificationUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs text-secondary hover:text-primary transition-smooth"
                >
                  Verify
                </a>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}