import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface Office {
  id: string;
  name: string;
  address: string;
  city: string;
  state: string;
  zip: string;
  country: string;
  phone: string;
  email: string;
  hours: string;
  lat: number;
  lng: number;
}

const OfficeLocations: React.FC = () => {
  const offices: Office[] = [
    {
      id: '1',
      name: 'Headquarters',
      address: '123 Innovation Drive',
      city: 'Tech Valley',
      state: 'CA',
      zip: '94025',
      country: 'United States',
      phone: '+1 (555) 123-4567',
      email: 'hq@paradigmtech.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM PST',
      lat: 37.4419,
      lng: -122.1430
    },
    {
      id: '2',
      name: 'East Coast Office',
      address: '456 Enterprise Boulevard',
      city: 'New York',
      state: 'NY',
      zip: '10001',
      country: 'United States',
      phone: '+1 (555) 987-6543',
      email: 'nyc@paradigmtech.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM EST',
      lat: 40.7589,
      lng: -73.9851
    },
    {
      id: '3',
      name: 'European Hub',
      address: '789 Digital Street',
      city: 'London',
      state: '',
      zip: 'EC1A 1BB',
      country: 'United Kingdom',
      phone: '+44 20 1234 5678',
      email: 'london@paradigmtech.com',
      hours: 'Mon-Fri: 9:00 AM - 6:00 PM GMT',
      lat: 51.5074,
      lng: -0.1278
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-12">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-headline font-bold text-foreground mb-4">
            Our <span className="text-gradient-primary">Global Presence</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            With offices across major tech hubs, we're positioned to serve clients worldwide with local expertise and global reach.
          </p>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {offices.map((office) => (
            <div
              key={office.id}
              className="bg-card border border-border rounded-xl overflow-hidden transition-smooth hover:border-secondary hover:shadow-glow-blue"
            >
              {/* Map */}
              <div className="h-48 bg-muted relative overflow-hidden">
                <iframe
                  width="100%"
                  height="100%"
                  loading="lazy"
                  title={office.name}
                  referrerPolicy="no-referrer-when-downgrade"
                  src={`https://www.google.com/maps?q=${office.lat},${office.lng}&z=14&output=embed`}
                  className="absolute inset-0"
                />
              </div>

              {/* Office Details */}
              <div className="p-6">
                <h3 className="text-xl font-headline font-bold text-foreground mb-4">
                  {office.name}
                </h3>

                <div className="space-y-3">
                  <div className="flex items-start gap-3">
                    <Icon name="MapPinIcon" size={20} variant="solid" className="text-secondary flex-shrink-0 mt-0.5" />
                    <div className="text-sm text-muted-foreground">
                      <p>{office.address}</p>
                      <p>{office.city}, {office.state} {office.zip}</p>
                      <p>{office.country}</p>
                    </div>
                  </div>

                  <div className="flex items-center gap-3">
                    <Icon name="PhoneIcon" size={20} variant="solid" className="text-secondary flex-shrink-0" />
                    <a
                      href={`tel:${office.phone}`}
                      className="text-sm text-muted-foreground hover:text-secondary transition-smooth"
                    >
                      {office.phone}
                    </a>
                  </div>

                  <div className="flex items-center gap-3">
                    <Icon name="EnvelopeIcon" size={20} variant="solid" className="text-secondary flex-shrink-0" />
                    <a
                      href={`mailto:${office.email}`}
                      className="text-sm text-muted-foreground hover:text-secondary transition-smooth"
                    >
                      {office.email}
                    </a>
                  </div>

                  <div className="flex items-start gap-3">
                    <Icon name="ClockIcon" size={20} variant="solid" className="text-secondary flex-shrink-0 mt-0.5" />
                    <p className="text-sm text-muted-foreground">{office.hours}</p>
                  </div>
                </div>

                <button className="w-full mt-6 px-4 py-3 border border-border text-foreground font-semibold rounded-lg transition-smooth hover:bg-muted hover:border-secondary flex items-center justify-center gap-2">
                  <Icon name="MapIcon" size={20} variant="outline" />
                  Get Directions
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OfficeLocations;