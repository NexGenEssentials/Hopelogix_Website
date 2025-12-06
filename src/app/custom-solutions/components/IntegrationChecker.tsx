'use client';

import { useState } from 'react';
import Icon from '@/components/ui/AppIcon';
import AppImage from '@/components/ui/AppImage';

interface IntegrationSystem {
  id: string;
  name: string;
  category: string;
  logo: string;
  logoAlt: string;
  compatible: boolean;
  integrationTime: string;
}

interface IntegrationCheckerProps {
  systems: IntegrationSystem[];
  categories: string[];
}

const IntegrationChecker: React.FC<IntegrationCheckerProps> = ({ systems, categories }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('all');
  const [searchQuery, setSearchQuery] = useState<string>('');

  const filteredSystems = systems.filter((system) => {
    const categoryMatch = selectedCategory === 'all' || system.category === selectedCategory;
    const searchMatch =
      searchQuery === '' || system.name.toLowerCase().includes(searchQuery.toLowerCase());
    return categoryMatch && searchMatch;
  });

  return (
    <section className="py-20 px-6 lg:px-12 bg-background">
      <div className="max-w-7xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold text-foreground mb-4">
            Integration Compatibility Checker
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Verify seamless integration with your existing enterprise systems and tools
          </p>
        </div>

        {/* Search and Filter */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-12">
          {/* Search */}
          <div className="relative">
            <Icon
              name="MagnifyingGlassIcon"
              size={20}
              variant="outline"
              className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground"
            />
            <input
              type="text"
              placeholder="Search systems..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="w-full pl-12 pr-4 py-3 bg-surface border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition-smooth"
            />
          </div>

          {/* Category Filter */}
          <select
            value={selectedCategory}
            onChange={(e) => setSelectedCategory(e.target.value)}
            className="w-full px-4 py-3 bg-surface border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition-smooth"
          >
            <option value="all">All Categories</option>
            {categories.map((category) => (
              <option key={category} value={category}>
                {category}
              </option>
            ))}
          </select>
        </div>

        {/* Systems Grid */}
        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
          {filteredSystems.map((system) => (
            <div
              key={system.id}
              className={`bg-surface border-2 rounded-xl p-6 text-center transition-smooth ${
                system.compatible
                  ? 'border-success hover:border-success hover:shadow-glow-blue'
                  : 'border-border opacity-60'
              }`}
            >
              {/* Logo */}
              <div className="w-16 h-16 mx-auto mb-4 bg-white rounded-lg p-2 flex items-center justify-center">
                <AppImage
                  src={system.logo}
                  alt={system.logoAlt}
                  className="w-full h-full object-contain"
                />
              </div>

              {/* System Name */}
              <h3 className="text-sm font-semibold text-foreground mb-2">{system.name}</h3>

              {/* Category */}
              <p className="text-xs text-muted-foreground mb-3">{system.category}</p>

              {/* Status */}
              <div className="flex items-center justify-center space-x-2">
                {system.compatible ? (
                  <>
                    <Icon name="CheckCircleIcon" size={16} variant="solid" className="text-success" />
                    <span className="text-xs text-success font-semibold">Compatible</span>
                  </>
                ) : (
                  <>
                    <Icon name="XCircleIcon" size={16} variant="solid" className="text-error" />
                    <span className="text-xs text-error font-semibold">Not Available</span>
                  </>
                )}
              </div>

              {/* Integration Time */}
              {system.compatible && (
                <p className="text-xs text-muted-foreground mt-2">
                  Integration: {system.integrationTime}
                </p>
              )}
            </div>
          ))}
        </div>

        {/* No Results */}
        {filteredSystems.length === 0 && (
          <div className="text-center py-12">
            <Icon
              name="MagnifyingGlassIcon"
              size={48}
              variant="outline"
              className="text-muted-foreground mx-auto mb-4"
            />
            <p className="text-lg text-muted-foreground">
              No systems found matching your criteria
            </p>
          </div>
        )}
      </div>
    </section>
  );
};

export default IntegrationChecker;