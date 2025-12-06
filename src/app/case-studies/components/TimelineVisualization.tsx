'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface TimelinePhase {
  phase: string;
  duration: string;
  activities: string[];
  icon: string;
  status: 'completed' | 'in-progress' | 'upcoming';
}

interface TimelineVisualizationProps {
  phases: TimelinePhase[];
  projectTitle: string;
}

export default function TimelineVisualization({ phases, projectTitle }: TimelineVisualizationProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [activePhase, setActivePhase] = useState(0);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <div className="bg-surface rounded-xl border border-border p-8">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-muted/50 rounded w-1/2" />
          <div className="space-y-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="h-24 bg-muted/50 rounded" />
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface rounded-xl border border-border p-8 space-y-6">
      <div className="text-center space-y-2">
        <h3 className="text-2xl font-headline font-bold text-foreground">{projectTitle}</h3>
        <p className="text-muted-foreground">Project Timeline & Milestones</p>
      </div>

      <div className="relative">
        {/* Timeline Line */}
        <div className="absolute left-8 top-0 bottom-0 w-0.5 bg-border md:left-1/2 md:-translate-x-1/2" />

        {/* Timeline Phases */}
        <div className="space-y-8">
          {phases.map((phase, index) => (
            <div
              key={index}
              className={`relative ${index % 2 === 0 ? 'md:pr-1/2' : 'md:pl-1/2 md:text-right'}`}
            >
              {/* Timeline Node */}
              <div className="absolute left-8 w-4 h-4 bg-surface border-2 border-secondary rounded-full -translate-x-1/2 md:left-1/2">
                <div className={`absolute inset-0 rounded-full ${phase.status === 'completed' ? 'bg-secondary' : phase.status === 'in-progress' ? 'bg-secondary/50 animate-pulse' : 'bg-muted'}`} />
              </div>

              {/* Phase Content */}
              <div
                className={`ml-16 md:ml-0 ${index % 2 === 0 ? 'md:mr-12' : 'md:ml-12'} cursor-pointer`}
                onClick={() => setActivePhase(index)}
              >
                <div className={`bg-muted/30 rounded-xl p-6 border-2 transition-smooth ${activePhase === index ? 'border-secondary shadow-glow-blue' : 'border-transparent hover:border-secondary/50'}`}>
                  <div className="flex items-start space-x-4">
                    <div className={`flex-shrink-0 w-12 h-12 rounded-lg flex items-center justify-center ${phase.status === 'completed' ? 'bg-secondary/20' : phase.status === 'in-progress' ? 'bg-secondary/10' : 'bg-muted/50'}`}>
                      <Icon
                        name={phase.icon as any}
                        size={24}
                        variant={phase.status === 'completed' ? 'solid' : 'outline'}
                        className={phase.status === 'completed' ? 'text-secondary' : 'text-muted-foreground'}
                      />
                    </div>
                    <div className="flex-1 space-y-2">
                      <div className="flex items-center justify-between">
                        <h4 className="text-lg font-headline font-bold text-foreground">{phase.phase}</h4>
                        <span className="text-sm font-semibold text-secondary">{phase.duration}</span>
                      </div>
                      {activePhase === index && (
                        <ul className="space-y-1.5 text-sm text-muted-foreground">
                          {phase.activities.map((activity, actIndex) => (
                            <li key={actIndex} className="flex items-start space-x-2">
                              <Icon name="CheckCircleIcon" size={16} variant="solid" className="text-secondary mt-0.5 flex-shrink-0" />
                              <span>{activity}</span>
                            </li>
                          ))}
                        </ul>
                      )}
                      <div className="flex items-center space-x-2">
                        <span className={`px-2.5 py-1 rounded-full text-xs font-semibold ${phase.status === 'completed' ? 'bg-secondary/20 text-secondary' : phase.status === 'in-progress' ? 'bg-warning/20 text-warning' : 'bg-muted text-muted-foreground'}`}>
                          {phase.status === 'completed' ? 'Completed' : phase.status === 'in-progress' ? 'In Progress' : 'Upcoming'}
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}