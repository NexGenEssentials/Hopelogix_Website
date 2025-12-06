'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

export default function ROICalculator() {
  const [isHydrated, setIsHydrated] = useState(false);
  const [inputs, setInputs] = useState({
    currentCosts: '',
    timeToMarket: '',
    teamSize: '',
    projectDuration: '',
  });
  const [results, setResults] = useState({
    costSavings: 0,
    timeSavings: 0,
    roi: 0,
    paybackPeriod: 0,
  });

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const calculateROI = () => {
    const costs = parseFloat(inputs.currentCosts) || 0;
    const time = parseFloat(inputs.timeToMarket) || 0;
    const team = parseFloat(inputs.teamSize) || 0;
    const duration = parseFloat(inputs.projectDuration) || 0;

    const costSavings = costs * 0.45;
    const timeSavings = time * 0.60;
    const roi = ((costSavings * 12) / costs) * 100;
    const paybackPeriod = costs / (costSavings * 12);

    setResults({
      costSavings: Math.round(costSavings),
      timeSavings: Math.round(timeSavings),
      roi: Math.round(roi),
      paybackPeriod: parseFloat(paybackPeriod.toFixed(1)),
    });
  };

  const handleInputChange = (key: string, value: string) => {
    setInputs(prev => ({ ...prev, [key]: value }));
  };

  if (!isHydrated) {
    return (
      <div className="bg-surface rounded-xl border border-border p-8">
        <div className="animate-pulse space-y-6">
          <div className="h-8 bg-muted/50 rounded w-1/2" />
          <div className="space-y-4">
            <div className="h-16 bg-muted/50 rounded" />
            <div className="h-16 bg-muted/50 rounded" />
            <div className="h-16 bg-muted/50 rounded" />
            <div className="h-16 bg-muted/50 rounded" />
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="bg-surface rounded-xl border border-border p-8 space-y-6">
      <div className="text-center space-y-2">
        <div className="inline-flex items-center justify-center w-16 h-16 bg-gradient-primary rounded-full mb-4">
          <Icon name="CalculatorIcon" size={32} variant="outline" className="text-primary-foreground" />
        </div>
        <h3 className="text-2xl font-headline font-bold text-foreground">ROI Calculator</h3>
        <p className="text-muted-foreground">Estimate your potential savings with HopeLogix solutions</p>
      </div>

      <div className="space-y-4">
        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            Current Monthly Development Costs ($)
          </label>
          <input
            type="number"
            value={inputs.currentCosts}
            onChange={(e) => handleInputChange('currentCosts', e.target.value)}
            placeholder="50000"
            className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-smooth"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            Average Time to Market (months)
          </label>
          <input
            type="number"
            value={inputs.timeToMarket}
            onChange={(e) => handleInputChange('timeToMarket', e.target.value)}
            placeholder="12"
            className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-smooth"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            Development Team Size
          </label>
          <input
            type="number"
            value={inputs.teamSize}
            onChange={(e) => handleInputChange('teamSize', e.target.value)}
            placeholder="8"
            className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-smooth"
          />
        </div>

        <div>
          <label className="block text-sm font-semibold text-foreground mb-2">
            Typical Project Duration (months)
          </label>
          <input
            type="number"
            value={inputs.projectDuration}
            onChange={(e) => handleInputChange('projectDuration', e.target.value)}
            placeholder="6"
            className="w-full px-4 py-3 bg-muted/50 border border-border rounded-lg text-foreground placeholder:text-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary/50 transition-smooth"
          />
        </div>

        <button
          onClick={calculateROI}
          className="w-full px-6 py-3 bg-gradient-primary text-primary-foreground font-semibold rounded-lg transition-smooth hover:shadow-glow-blue hover:scale-105"
        >
          Calculate ROI
        </button>
      </div>

      {results.roi > 0 && (
        <div className="grid grid-cols-2 gap-4 pt-6 border-t border-border">
          <div className="text-center p-4 bg-muted/30 rounded-lg">
            <div className="text-3xl font-bold text-secondary mb-1">
              ${results.costSavings.toLocaleString()}
            </div>
            <div className="text-sm text-muted-foreground">Monthly Cost Savings</div>
          </div>
          <div className="text-center p-4 bg-muted/30 rounded-lg">
            <div className="text-3xl font-bold text-secondary mb-1">
              {results.timeSavings}%
            </div>
            <div className="text-sm text-muted-foreground">Time Reduction</div>
          </div>
          <div className="text-center p-4 bg-muted/30 rounded-lg">
            <div className="text-3xl font-bold text-secondary mb-1">
              {results.roi}%
            </div>
            <div className="text-sm text-muted-foreground">Annual ROI</div>
          </div>
          <div className="text-center p-4 bg-muted/30 rounded-lg">
            <div className="text-3xl font-bold text-secondary mb-1">
              {results.paybackPeriod}
            </div>
            <div className="text-sm text-muted-foreground">Payback Period (years)</div>
          </div>
        </div>
      )}

      <div className="text-center pt-4">
        <p className="text-xs text-muted-foreground">
          * Calculations based on industry averages and HopeLogix client data
        </p>
      </div>
    </div>
  );
}