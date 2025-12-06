'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ArchitectureLayer {
  id: string;
  name: string;
  description: string;
  components: string[];
  icon: string;
}

interface ArchitectureVisualizationProps {
  layers: ArchitectureLayer[];
}

const ArchitectureVisualization: React.FC<ArchitectureVisualizationProps> = ({ layers }) => {
  const [selectedLayer, setSelectedLayer] = useState<string | null>(null);

  return (
    <section className="py-20 px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold text-foreground mb-4">
            Software Architecture Overview
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Explore our modular architecture designed for scalability, security, and seamless integration
          </p>
        </div>

        {/* Architecture Layers */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {layers.map((layer, index) => (
            <div
              key={layer.id}
              className={`relative bg-surface border-2 rounded-xl p-6 cursor-pointer transition-smooth ${
                selectedLayer === layer.id
                  ? 'border-secondary shadow-glow-blue scale-105'
                  : 'border-border hover:border-secondary/50'
              }`}
              onClick={() => setSelectedLayer(selectedLayer === layer.id ? null : layer.id)}
            >
              {/* Layer Number */}
              <div className="absolute -top-3 -left-3 w-8 h-8 bg-gradient-primary rounded-full flex items-center justify-center text-primary-foreground font-bold text-sm">
                {index + 1}
              </div>

              {/* Icon */}
              <div className="flex justify-center mb-4">
                <div className="w-16 h-16 bg-accent rounded-xl flex items-center justify-center">
                  <Icon name={layer.icon as any} size={32} variant="outline" className="text-secondary" />
                </div>
              </div>

              {/* Layer Name */}
              <h3 className="text-xl font-headline font-bold text-foreground text-center mb-2">
                {layer.name}
              </h3>

              {/* Description */}
              <p className="text-sm text-muted-foreground text-center mb-4">
                {layer.description}
              </p>

              {/* Expand Indicator */}
              <div className="flex justify-center">
                <Icon
                  name={selectedLayer === layer.id ? 'ChevronUpIcon' : 'ChevronDownIcon'}
                  size={20}
                  variant="outline"
                  className="text-secondary"
                />
              </div>

              {/* Expanded Components */}
              {selectedLayer === layer.id && (
                <div className="mt-4 pt-4 border-t border-border">
                  <p className="text-xs font-semibold text-foreground mb-2 uppercase tracking-wide">
                    Key Components:
                  </p>
                  <ul className="space-y-2">
                    {layer.components.map((component, idx) => (
                      <li key={idx} className="flex items-start space-x-2">
                        <Icon
                          name="CheckCircleIcon"
                          size={16}
                          variant="solid"
                          className="text-secondary flex-shrink-0 mt-0.5"
                        />
                        <span className="text-sm text-muted-foreground">{component}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Connection Lines Visualization */}
        <div className="mt-12 text-center">
          <p className="text-sm text-muted-foreground italic">
            Click on any layer to explore its components and integration points
          </p>
        </div>
      </div>
    </section>
  );
};

export default ArchitectureVisualization;