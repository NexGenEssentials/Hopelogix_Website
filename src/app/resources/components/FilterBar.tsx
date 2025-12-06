'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FilterBarProps {
  onFilterChange: (filters: FilterState) => void;
  totalResults: number;
}

export interface FilterState {
  search: string;
  type: string;
  category: string;
  sortBy: string;
}

export default function FilterBar({ onFilterChange, totalResults }: FilterBarProps) {
  const [isHydrated, setIsHydrated] = useState(false);
  const [filters, setFilters] = useState<FilterState>({
    search: '',
    type: 'all',
    category: 'all',
    sortBy: 'newest',
  });
  const [showFilters, setShowFilters] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  useEffect(() => {
    if (isHydrated) {
      onFilterChange(filters);
    }
  }, [filters, isHydrated, onFilterChange]);

  const resourceTypes = [
    { value: 'all', label: 'All Types' },
    { value: 'Whitepaper', label: 'Whitepapers' },
    { value: 'Webinar', label: 'Webinars' },
    { value: 'Blog', label: 'Blog Posts' },
    { value: 'Case Study', label: 'Case Studies' },
  ];

  const categories = [
    { value: 'all', label: 'All Categories' },
    { value: 'Digital Transformation', label: 'Digital Transformation' },
    { value: 'Low-Code Development', label: 'Low-Code Development' },
    { value: 'API Integration', label: 'API Integration' },
    { value: 'Cloud Solutions', label: 'Cloud Solutions' },
    { value: 'Security', label: 'Security' },
  ];

  const sortOptions = [
    { value: 'newest', label: 'Newest First' },
    { value: 'oldest', label: 'Oldest First' },
    { value: 'popular', label: 'Most Popular' },
    { value: 'title', label: 'Title A-Z' },
  ];

  if (!isHydrated) {
    return (
      <div className="bg-surface border border-border rounded-xl p-6 mb-8">
        <div className="animate-pulse space-y-4">
          <div className="h-10 bg-muted/30 rounded-lg w-full" />
          <div className="flex gap-4">
            <div className="h-10 bg-muted/30 rounded-lg flex-1" />
            <div className="h-10 bg-muted/30 rounded-lg flex-1" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface border border-border rounded-xl p-6 mb-8">
      <div className="flex flex-col lg:flex-row lg:items-center gap-4">
        {/* Search Bar */}
        <div className="flex-1 relative">
          <Icon
            name="MagnifyingGlassIcon"
            size={20}
            className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground"
          />
          <input
            type="text"
            placeholder="Search resources..."
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            className="w-full pl-12 pr-4 py-2.5 bg-muted/30 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:border-secondary transition-smooth"
          />
        </div>

        {/* Filter Toggle (Mobile) */}
        <button
          onClick={() => setShowFilters(!showFilters)}
          className="lg:hidden flex items-center justify-center px-4 py-2.5 bg-muted/30 border border-border rounded-lg text-foreground hover:border-secondary transition-smooth"
        >
          <Icon name="AdjustmentsHorizontalIcon" size={20} className="mr-2" />
          Filters
        </button>

        {/* Desktop Filters */}
        <div className="hidden lg:flex items-center gap-3">
          <select
            value={filters.type}
            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
            className="px-4 py-2.5 bg-muted/30 border border-border rounded-lg text-foreground focus:outline-none focus:border-secondary transition-smooth cursor-pointer"
          >
            {resourceTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>

          <select
            value={filters.category}
            onChange={(e) => setFilters({ ...filters, category: e.target.value })}
            className="px-4 py-2.5 bg-muted/30 border border-border rounded-lg text-foreground focus:outline-none focus:border-secondary transition-smooth cursor-pointer"
          >
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>

          <select
            value={filters.sortBy}
            onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
            className="px-4 py-2.5 bg-muted/30 border border-border rounded-lg text-foreground focus:outline-none focus:border-secondary transition-smooth cursor-pointer"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      </div>

      {/* Mobile Filters */}
      {showFilters && (
        <div className="lg:hidden mt-4 pt-4 border-t border-border space-y-3">
          <select
            value={filters.type}
            onChange={(e) => setFilters({ ...filters, type: e.target.value })}
            className="w-full px-4 py-2.5 bg-muted/30 border border-border rounded-lg text-foreground focus:outline-none focus:border-secondary transition-smooth"
          >
            {resourceTypes.map((type) => (
              <option key={type.value} value={type.value}>
                {type.label}
              </option>
            ))}
          </select>

          <select
            value={filters.category}
            onChange={(e) => setFilters({ ...filters, category: e.target.value })}
            className="w-full px-4 py-2.5 bg-muted/30 border border-border rounded-lg text-foreground focus:outline-none focus:border-secondary transition-smooth"
          >
            {categories.map((category) => (
              <option key={category.value} value={category.value}>
                {category.label}
              </option>
            ))}
          </select>

          <select
            value={filters.sortBy}
            onChange={(e) => setFilters({ ...filters, sortBy: e.target.value })}
            className="w-full px-4 py-2.5 bg-muted/30 border border-border rounded-lg text-foreground focus:outline-none focus:border-secondary transition-smooth"
          >
            {sortOptions.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
        </div>
      )}

      {/* Results Count */}
      <div className="mt-4 pt-4 border-t border-border">
        <p className="text-sm text-muted-foreground">
          Showing <span className="text-foreground font-semibold">{totalResults}</span> resources
        </p>
      </div>
    </div>
  );
}