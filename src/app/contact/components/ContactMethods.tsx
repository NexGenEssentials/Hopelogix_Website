import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface ContactMethod {
  id: string;
  icon: string;
  title: string;
  description: string;
  value: string;
  action: string;
  available: string;
}

const ContactMethods: React.FC = () => {
  const contactMethods: ContactMethod[] = [
    {
      id: '1',
      icon: 'PhoneIcon',
      title: 'Phone Support',
      description: 'Speak directly with our solution architects',
      value: '+1 (555) 123-4567',
      action: 'Call Now',
      available: 'Mon-Fri, 9AM-6PM EST'
    },
    {
      id: '2',
      icon: 'EnvelopeIcon',
      title: 'Email Us',
      description: 'Get detailed responses within 24 hours',
      value: 'solutions@paradigmtech.com',
      action: 'Send Email',
      available: 'Response within 24 hours'
    },
    {
      id: '3',
      icon: 'ChatBubbleLeftRightIcon',
      title: 'Live Chat',
      description: 'Instant support from our team',
      value: 'Start a conversation',
      action: 'Chat Now',
      available: 'Available 24/7'
    },
    {
      id: '4',
      icon: 'MapPinIcon',
      title: 'Visit Our Office',
      description: 'Schedule an in-person consultation',
      value: '123 Innovation Drive, Tech Valley, CA 94025',
      action: 'Get Directions',
      available: 'By appointment only'
    }
  ];

  return (
    <section className="py-20 px-6 lg:px-12 bg-surface/50">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-16">
          <h2 className="text-4xl lg:text-5xl font-headline font-bold text-foreground mb-4">
            Multiple Ways to <span className="text-gradient-primary">Connect</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Choose the communication method that works best for you. Our team is ready to assist with your inquiries.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {contactMethods.map((method) => (
            <div
              key={method.id}
              className="group bg-card border border-border rounded-xl p-8 transition-smooth hover:border-secondary hover:shadow-glow-blue"
            >
              <div className="flex items-start gap-6">
                <div className="flex-shrink-0 w-14 h-14 bg-gradient-primary rounded-lg flex items-center justify-center">
                  <Icon name={method.icon as any} size={28} variant="outline" className="text-primary-foreground" />
                </div>
                
                <div className="flex-1">
                  <h3 className="text-xl font-headline font-bold text-foreground mb-2">
                    {method.title}
                  </h3>
                  <p className="text-sm text-muted-foreground mb-4">
                    {method.description}
                  </p>
                  <p className="text-base text-foreground font-medium mb-2">
                    {method.value}
                  </p>
                  <p className="text-xs text-muted-foreground mb-4">
                    {method.available}
                  </p>
                  <button className="inline-flex items-center gap-2 text-secondary font-semibold transition-smooth hover:gap-3">
                    {method.action}
                    <Icon name="ArrowRightIcon" size={16} variant="outline" />
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ContactMethods;