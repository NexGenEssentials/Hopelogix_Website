import React from 'react';
import Icon from '@/components/ui/AppIcon';

interface TimelinePhase {
  phase: string;
  duration: string;
  title: string;
  description: string;
  deliverables: string[];
  icon: string;
}

interface TransformationTimelineProps {
  phases: TimelinePhase[];
}

const TransformationTimeline: React.FC<TransformationTimelineProps> = ({ phases }) => {
  return (
    <section className="py-20 px-6 lg:px-12 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold text-foreground mb-4">
            Implementation Timeline
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Our proven methodology ensures smooth transformation from discovery to deployment
          </p>
        </div>

        {/* Timeline */}
        <div className="relative">
          {/* Vertical Line */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 w-1 h-full bg-gradient-to-b from-primary via-secondary to-primary opacity-30" />

          {/* Timeline Items */}
          <div className="space-y-12">
            {phases.map((phase, index) => (
              <div
                key={index}
                className={`relative flex flex-col lg:flex-row items-center ${
                  index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'
                }`}
              >
                {/* Content */}
                <div className={`w-full lg:w-5/12 ${index % 2 === 0 ? 'lg:pr-12' : 'lg:pl-12'}`}>
                  <div className="bg-surface border border-border rounded-xl p-6 transition-smooth hover:border-secondary hover:shadow-glow-blue">
                    <div className="flex items-center space-x-3 mb-4">
                      <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center">
                        <Icon name={phase.icon as any} size={24} variant="outline" className="text-primary-foreground" />
                      </div>
                      <div>
                        <div className="text-sm font-semibold text-secondary uppercase tracking-wide">
                          {phase.phase}
                        </div>
                        <div className="text-xs text-muted-foreground">{phase.duration}</div>
                      </div>
                    </div>

                    <h3 className="text-2xl font-headline font-bold text-foreground mb-3">
                      {phase.title}
                    </h3>

                    <p className="text-muted-foreground mb-4">{phase.description}</p>

                    <div>
                      <p className="text-sm font-semibold text-foreground mb-2 uppercase tracking-wide">
                        Key Deliverables:
                      </p>
                      <ul className="space-y-2">
                        {phase.deliverables.map((deliverable, idx) => (
                          <li key={idx} className="flex items-start space-x-2">
                            <Icon
                              name="CheckCircleIcon"
                              size={16}
                              variant="solid"
                              className="text-secondary flex-shrink-0 mt-0.5"
                            />
                            <span className="text-sm text-muted-foreground">{deliverable}</span>
                          </li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </div>

                {/* Center Circle */}
                <div className="hidden lg:flex absolute left-1/2 transform -translate-x-1/2 w-16 h-16 bg-gradient-primary rounded-full items-center justify-center shadow-glow-blue z-10">
                  <span className="text-2xl font-bold text-primary-foreground">{index + 1}</span>
                </div>

                {/* Spacer */}
                <div className="hidden lg:block w-5/12" />
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default TransformationTimeline;