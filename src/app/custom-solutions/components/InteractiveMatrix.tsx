'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FilterOption {
  id: string;
  label: string;
}

interface Solution {
  id: string;
  name: string;
  industries: string[];
  companySizes: string[];
  requirements: string[];
  description: string;
}

interface InteractiveMatrixProps {
  industries: FilterOption[];
  companySizes: FilterOption[];
  requirements: FilterOption[];
  solutions: Solution[];
}

const InteractiveMatrix: React.FC<InteractiveMatrixProps> = ({
  industries,
  companySizes,
  requirements,
  solutions,
}) => {
  const [selectedIndustry, setSelectedIndustry] = useState<string>('all');
  const [selectedSize, setSelectedSize] = useState<string>('all');
  const [selectedRequirement, setSelectedRequirement] = useState<string>('all');

  const filteredSolutions = solutions.filter((solution) => {
    const industryMatch =
      selectedIndustry === 'all' || solution.industries.includes(selectedIndustry);
    const sizeMatch =
      selectedSize === 'all' || solution.companySizes.includes(selectedSize);
    const requirementMatch =
      selectedRequirement === 'all' || solution.requirements.includes(selectedRequirement);

    return industryMatch && sizeMatch && requirementMatch;
  });

  const resetFilters = () => {
    setSelectedIndustry('all');
    setSelectedSize('all');
    setSelectedRequirement('all');
  };

  return (
    <section className="py-20 px-6 lg:px-12 bg-surface/30">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold text-foreground mb-4">
            Find Your Perfect Solution
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Filter by industry, company size, and technical requirements to discover the ideal solution for your business
          </p>
        </div>

        {/* Filter Controls */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-12">
          {/* Industry Filter */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-3">
              Industry
            </label>
            <select
              value={selectedIndustry}
              onChange={(e) => setSelectedIndustry(e.target.value)}
              className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition-smooth"
            >
              <option value="all">All Industries</option>
              {industries.map((industry) => (
                <option key={industry.id} value={industry.id}>
                  {industry.label}
                </option>
              ))}
            </select>
          </div>

          {/* Company Size Filter */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-3">
              Company Size
            </label>
            <select
              value={selectedSize}
              onChange={(e) => setSelectedSize(e.target.value)}
              className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition-smooth"
            >
              <option value="all">All Sizes</option>
              {companySizes.map((size) => (
                <option key={size.id} value={size.id}>
                  {size.label}
                </option>
              ))}
            </select>
          </div>

          {/* Technical Requirements Filter */}
          <div>
            <label className="block text-sm font-semibold text-foreground mb-3">
              Technical Requirements
            </label>
            <select
              value={selectedRequirement}
              onChange={(e) => setSelectedRequirement(e.target.value)}
              className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition-smooth"
            >
              <option value="all">All Requirements</option>
              {requirements.map((req) => (
                <option key={req.id} value={req.id}>
                  {req.label}
                </option>
              ))}
            </select>
          </div>
        </div>

        {/* Reset Button */}
        {(selectedIndustry !== 'all' ||
          selectedSize !== 'all' ||
          selectedRequirement !== 'all') && (
          <div className="flex justify-center mb-8">
            <button
              onClick={resetFilters}
              className="flex items-center space-x-2 px-6 py-2 bg-muted/50 text-foreground rounded-lg hover:bg-muted transition-smooth"
            >
              <Icon name="XMarkIcon" size={20} variant="outline" />
              <span>Reset Filters</span>
            </button>
          </div>
        )}

        {/* Results */}
        <div className="space-y-6">
          {filteredSolutions.length > 0 ? (
            filteredSolutions.map((solution) => (
              <div
                key={solution.id}
                className="bg-surface border border-border rounded-xl p-6 transition-smooth hover:border-secondary hover:shadow-glow-blue"
              >
                <h3 className="text-2xl font-headline font-bold text-foreground mb-3">
                  {solution.name}
                </h3>
                <p className="text-muted-foreground mb-4">{solution.description}</p>
                <div className="flex flex-wrap gap-2">
                  {solution.industries.map((ind) => (
                    <span
                      key={ind}
                      className="px-3 py-1 bg-primary/10 text-primary text-sm rounded-full"
                    >
                      {industries.find((i) => i.id === ind)?.label}
                    </span>
                  ))}
                  {solution.companySizes.map((size) => (
                    <span
                      key={size}
                      className="px-3 py-1 bg-secondary/10 text-secondary text-sm rounded-full"
                    >
                      {companySizes.find((s) => s.id === size)?.label}
                    </span>
                  ))}
                </div>
              </div>
            ))
          ) : (
            <div className="text-center py-12">
              <Icon
                name="FunnelIcon"
                size={48}
                variant="outline"
                className="text-muted-foreground mx-auto mb-4"
              />
              <p className="text-lg text-muted-foreground">
                No solutions match your current filters. Try adjusting your criteria.
              </p>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default InteractiveMatrix;