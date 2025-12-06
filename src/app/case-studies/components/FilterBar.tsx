'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FilterBarProps {
  onFilterChange: (filters: FilterState) => void;
}

interface FilterState {
  industry: string;
  solution: string;
  companySize: string;
  searchQuery: string;
}

export default function FilterBar({ onFilterChange }: FilterBarProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    industry: 'all',
    solution: 'all',
    companySize: 'all',
    searchQuery: '',
  });
  const [isFilterOpen, setIsFilterOpen] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      onFilterChange(filters);
    }
  }, [filters, isHydrated, onFilterChange]);

  const industries = [
    { value: 'all', label: 'All Industries' },
    { value: 'healthcare', label: 'Healthcare' },
    { value: 'finance', label: 'Finance' },
    { value: 'retail', label: 'Retail' },
    { value: 'manufacturing', label: 'Manufacturing' },
    { value: 'technology', label: 'Technology' },
  ];

  const solutions = [
    { value: 'all', label: 'All Solutions' },
    { value: 'custom-development', label: 'Custom Development' },
    { value: 'low-code', label: 'Low-Code Platform' },
    { value: 'legacy-modernization', label: 'Legacy Modernization' },
    { value: 'api-integration', label: 'API Integration' },
    { value: 'digital-transformation', label: 'Digital Transformation' },
  ];

  const companySizes = [
    { value: 'all', label: 'All Company Sizes' },
    { value: 'small', label: 'Small (50-200)' },
    { value: 'medium', label: 'Medium (200-1000)' },
    { value: 'large', label: 'Large (1000+)' },
  ];

  const handleFilterChange = (key: keyof FilterState, value: string) => {
    setFilters(prev => ({ ...prev, [key]: value }));
  };

  const handleReset = () => {
    setFilters({
      industry: 'all',
      solution: 'all',
      companySize: 'all',
      searchQuery: '',
    });
  };

  if (!isHydrated) {
    return (
      <div className="bg-surface rounded-xl border border-border p-6">
        <div className="animate-pulse space-y-4">
          <div className="h-10 bg-muted/50 rounded-lg" />
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
            <div className="h-10 bg-muted/50 rounded-lg" />
            <div className="h-10 bg-muted/50 rounded-lg" />
            <div className="h-10 bg-muted/50 rounded-lg" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface rounded-xl border border-border p-6 space-y-4">
      {/* Search Bar */}
      <div className="relative">
        <Icon
          name="MagnifyingGlassIcon"
          size={20}
          variant="outline"
          className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
        />
        <input
          type="text"
          placeholder="Search case studies..."
          value={filters.searchQuery}
          onChange={(e) => handleFilterChange('searchQuery', e.target.value)}
          className="w-full pl-12 pr-4 py-3 bg-muted/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-smooth"
        />
      </div>

      {/* Mobile Filter Toggle */}
      <button
        onClick={() => setIsFilterOpen(!isFilterOpen)}
        className="md:hidden w-full flex items-center justify-between px-4 py-3 bg-muted/50 border border-border rounded-lg text-foreground hover:bg-muted transition-smooth"
      >
        <span className="font-semibold">Filters</span>
        <Icon
          name={isFilterOpen ? 'ChevronUpIcon' : 'ChevronDownIcon'}
          size={20}
          variant="outline"
        />
      </button>

      {/* Filter Options */}
      <div className={`grid grid-cols-1 md:grid-cols-3 gap-4 ${isFilterOpen ? 'block' : 'hidden md:grid'}`}>
        <select
          value={filters.industry}
          onChange={(e) => handleFilterChange('industry', e.target.value)}
          className="px-4 py-3 bg-muted/50 border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-smooth"
        >
          {industries.map((industry) => (
            <option key={industry.value} value={industry.value}>
              {industry.label}
            </option>
          ))}
        </select>

        <select
          value={filters.solution}
          onChange={(e) => handleFilterChange('solution', e.target.value)}
          className="px-4 py-3 bg-muted/50 border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-smooth"
        >
          {solutions.map((solution) => (
            <option key={solution.value} value={solution.value}>
              {solution.label}
            </option>
          ))}
        </select>

        <select
          value={filters.companySize}
          onChange={(e) => handleFilterChange('companySize', e.target.value)}
          className="px-4 py-3 bg-muted/50 border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-smooth"
        >
          {companySizes.map((size) => (
            <option key={size.value} value={size.value}>
              {size.label}
            </option>
          ))}
        </select>
      </div>

      {/* Active Filters & Reset */}
      {(filters.industry !== 'all' || filters.solution !== 'all' || filters.companySize !== 'all' || filters.searchQuery) && (
        <div className="flex items-center justify-between pt-2 border-t border-border">
          <div className="flex flex-wrap gap-2">
            {filters.industry !== 'all' && (
              <span className="px-3 py-1 bg-secondary/20 text-secondary text-xs font-semibold rounded-full">
                {industries.find(i => i.value === filters.industry)?.label}
              </span>
            )}
            {filters.solution !== 'all' && (
              <span className="px-3 py-1 bg-secondary/20 text-secondary text-xs font-semibold rounded-full">
                {solutions.find(s => s.value === filters.solution)?.label}
              </span>
            )}
            {filters.companySize !== 'all' && (
              <span className="px-3 py-1 bg-secondary/20 text-secondary text-xs font-semibold rounded-full">
                {companySizes.find(c => c.value === filters.companySize)?.label}
              </span>
            )}
          </div>
          <button
            onClick={handleReset}
            className="text-sm font-semibold text-muted-foreground hover:text-secondary transition-smooth"
          >
            Reset All
          </button>
        </div>
      )}
    </div>
  );
}