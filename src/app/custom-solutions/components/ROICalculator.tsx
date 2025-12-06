'use client';

import { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface ROICalculatorProps {
  defaultValues: {
    employees: number;
    avgSalary: number;
    hoursPerWeek: number;
    efficiencyGain: number;
  };
}

const ROICalculator: React.FC<ROICalculatorProps> = ({ defaultValues }) => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [employees, setEmployees] = useState(defaultValues.employees);
  const [avgSalary, setAvgSalary] = useState(defaultValues.avgSalary);
  const [hoursPerWeek, setHoursPerWeek] = useState(defaultValues.hoursPerWeek);
  const [efficiencyGain, setEfficiencyGain] = useState(defaultValues.efficiencyGain);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  if (!isHydrated) {
    return (
      <section className="py-20 px-6 lg:px-12 bg-surface/30">
        <div className="max-w-5xl mx-auto">
          <div className="bg-surface border border-border rounded-2xl p-8 lg:p-12">
            <div className="animate-pulse">
              <div className="h-8 bg-muted rounded w-3/4 mx-auto mb-4" />
              <div className="h-4 bg-muted rounded w-1/2 mx-auto mb-12" />
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="h-32 bg-muted rounded" />
                <div className="h-32 bg-muted rounded" />
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  // Calculations
  const hourlyRate = avgSalary / 2080; // Annual hours (52 weeks * 40 hours)
  const weeklyTimeSaved = hoursPerWeek * (efficiencyGain / 100);
  const annualTimeSaved = weeklyTimeSaved * 52;
  const annualSavingsPerEmployee = annualTimeSaved * hourlyRate;
  const totalAnnualSavings = annualSavingsPerEmployee * employees;
  const threeYearROI = totalAnnualSavings * 3;

  const formatCurrency = (value: number) => {
    return new Intl.NumberFormat('en-US', {
      style: 'currency',
      currency: 'USD',
      minimumFractionDigits: 0,
      maximumFractionDigits: 0,
    }).format(value);
  };

  return (
    <section className="py-20 px-6 lg:px-12 bg-surface/30">
      <div className="max-w-5xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-headline font-bold text-foreground mb-4">
            ROI Calculator
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Calculate your potential return on investment with our custom solutions
          </p>
        </div>

        <div className="bg-surface border border-border rounded-2xl p-8 lg:p-12">
          {/* Input Controls */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-12">
            {/* Number of Employees */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">
                Number of Employees
              </label>
              <input
                type="number"
                value={employees}
                onChange={(e) => setEmployees(Number(e.target.value))}
                min="1"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition-smooth"
              />
            </div>

            {/* Average Salary */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">
                Average Annual Salary ($)
              </label>
              <input
                type="number"
                value={avgSalary}
                onChange={(e) => setAvgSalary(Number(e.target.value))}
                min="0"
                step="1000"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition-smooth"
              />
            </div>

            {/* Hours Per Week */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">
                Hours Spent on Manual Tasks (per week)
              </label>
              <input
                type="number"
                value={hoursPerWeek}
                onChange={(e) => setHoursPerWeek(Number(e.target.value))}
                min="0"
                max="40"
                className="w-full px-4 py-3 bg-background border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition-smooth"
              />
            </div>

            {/* Efficiency Gain */}
            <div>
              <label className="block text-sm font-semibold text-foreground mb-3">
                Expected Efficiency Gain (%)
              </label>
              <input
                type="range"
                value={efficiencyGain}
                onChange={(e) => setEfficiencyGain(Number(e.target.value))}
                min="10"
                max="90"
                step="5"
                className="w-full"
              />
              <div className="text-center mt-2 text-2xl font-bold text-secondary">
                {efficiencyGain}%
              </div>
            </div>
          </div>

          {/* Results */}
          <div className="border-t border-border pt-8">
            <h3 className="text-2xl font-headline font-bold text-foreground text-center mb-8">
              Your Projected Savings
            </h3>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {/* Annual Savings */}
              <div className="bg-background rounded-xl p-6 text-center border border-border">
                <Icon
                  name="CalendarIcon"
                  size={32}
                  variant="outline"
                  className="text-secondary mx-auto mb-3"
                />
                <div className="text-3xl font-bold text-gradient-primary mb-2">
                  {formatCurrency(totalAnnualSavings)}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  Annual Savings
                </div>
              </div>

              {/* 3-Year ROI */}
              <div className="bg-background rounded-xl p-6 text-center border-2 border-secondary shadow-glow-blue">
                <Icon
                  name="ChartBarIcon"
                  size={32}
                  variant="solid"
                  className="text-secondary mx-auto mb-3"
                />
                <div className="text-3xl font-bold text-gradient-primary mb-2">
                  {formatCurrency(threeYearROI)}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  3-Year ROI
                </div>
              </div>

              {/* Time Saved */}
              <div className="bg-background rounded-xl p-6 text-center border border-border">
                <Icon
                  name="ClockIcon"
                  size={32}
                  variant="outline"
                  className="text-secondary mx-auto mb-3"
                />
                <div className="text-3xl font-bold text-gradient-primary mb-2">
                  {Math.round(annualTimeSaved).toLocaleString()}
                </div>
                <div className="text-sm text-muted-foreground uppercase tracking-wide">
                  Hours Saved/Year
                </div>
              </div>
            </div>

            {/* CTA */}
            <div className="text-center mt-8">
              <p className="text-muted-foreground mb-4">
                Ready to unlock these savings for your business?
              </p>
              <button className="inline-flex items-center px-8 py-3 bg-gradient-primary text-primary-foreground font-semibold rounded-lg transition-smooth hover:shadow-glow-blue hover:scale-105">
                Schedule Consultation
                <Icon name="ArrowRightIcon" size={20} variant="outline" className="ml-2" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ROICalculator;