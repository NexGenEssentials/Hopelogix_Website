'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/components/ui/AppIcon';

interface FormData {
  userType: string;
  firstName: string;
  lastName: string;
  email: string;
  phone: string;
  company: string;
  jobTitle: string;
  industry: string;
  projectType: string;
  budget: string;
  timeline: string;
  message: string;
  preferredContact: string;
  newsletter: boolean;
}

const ContactFormSection: React.FC = () => {
  const [isHydrated, setIsHydrated] = useState(false);
  const [currentStep, setCurrentStep] = useState(1);
  const [formData, setFormData] = useState<FormData>({
    userType: '',
    firstName: '',
    lastName: '',
    email: '',
    phone: '',
    company: '',
    jobTitle: '',
    industry: '',
    projectType: '',
    budget: '',
    timeline: '',
    message: '',
    preferredContact: 'email',
    newsletter: false
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitSuccess, setSubmitSuccess] = useState(false);

  useEffect(() => {
    setIsHydrated(true);
  }, []);

  const userTypes = [
    { value: 'executive', label: 'C-Suite Executive', icon: 'BriefcaseIcon' },
    { value: 'technical', label: 'Technical Evaluator', icon: 'CodeBracketIcon' },
    { value: 'procurement', label: 'Procurement Professional', icon: 'DocumentTextIcon' },
    { value: 'innovation', label: 'Innovation Explorer', icon: 'LightBulbIcon' }
  ];

  const industries = [
    'Financial Services',
    'Healthcare',
    'Retail & E-commerce',
    'Manufacturing',
    'Technology',
    'Education',
    'Government',
    'Other'
  ];

  const projectTypes = [
    'Custom Software Development',
    'Low-Code Platform Implementation',
    'Digital Transformation',
    'Legacy System Modernization',
    'API Integration',
    'Consultation Only'
  ];

  const budgetRanges = [
    'Under $50,000',
    '$50,000 - $100,000',
    '$100,000 - $250,000',
    '$250,000 - $500,000',
    '$500,000+'
  ];

  const timelines = [
    'Urgent (1-3 months)',
    'Standard (3-6 months)',
    'Flexible (6-12 months)',
    'Long-term (12+ months)'
  ];

  const validateStep = (step: number): boolean => {
    const newErrors: Partial<FormData> = {};

    if (step === 1) {
      if (!formData.userType) newErrors.userType = 'Please select your role';
    }

    if (step === 2) {
      if (!formData.firstName.trim()) newErrors.firstName = 'First name is required';
      if (!formData.lastName.trim()) newErrors.lastName = 'Last name is required';
      if (!formData.email.trim()) {
        newErrors.email = 'Email is required';
      } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
        newErrors.email = 'Invalid email format';
      }
      if (!formData.company.trim()) newErrors.company = 'Company name is required';
    }

    if (step === 3) {
      if (!formData.projectType) newErrors.projectType = 'Please select a project type';
      if (!formData.budget) newErrors.budget = 'Please select a budget range';
      if (!formData.timeline) newErrors.timeline = 'Please select a timeline';
    }

    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleNext = () => {
    if (validateStep(currentStep)) {
      setCurrentStep(currentStep + 1);
    }
  };

  const handleBack = () => {
    setCurrentStep(currentStep - 1);
    setErrors({});
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!validateStep(currentStep)) return;

    setIsSubmitting(true);

    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 2000));

    setIsSubmitting(false);
    setSubmitSuccess(true);
  };

  const handleInputChange = (field: keyof FormData, value: string | boolean) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: undefined }));
    }
  };

  if (!isHydrated) {
    return (
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-border rounded-xl p-8">
            <div className="animate-pulse space-y-4">
              <div className="h-8 bg-muted rounded w-3/4"></div>
              <div className="h-4 bg-muted rounded w-1/2"></div>
              <div className="space-y-3 mt-8">
                <div className="h-12 bg-muted rounded"></div>
                <div className="h-12 bg-muted rounded"></div>
                <div className="h-12 bg-muted rounded"></div>
              </div>
            </div>
          </div>
        </div>
      </section>
    );
  }

  if (submitSuccess) {
    return (
      <section className="py-20 px-6 lg:px-12">
        <div className="max-w-4xl mx-auto">
          <div className="bg-card border border-success rounded-xl p-12 text-center">
            <div className="w-20 h-20 bg-success/20 rounded-full flex items-center justify-center mx-auto mb-6">
              <Icon name="CheckCircleIcon" size={48} variant="solid" className="text-success" />
            </div>
            <h2 className="text-3xl font-headline font-bold text-foreground mb-4">
              Thank You for Reaching Out!
            </h2>
            <p className="text-lg text-muted-foreground mb-6">
              We've received your inquiry and will get back to you within 24 hours.
            </p>
            <p className="text-sm text-muted-foreground mb-8">
              A confirmation email has been sent to <span className="text-foreground font-medium">{formData.email}</span>
            </p>
            <button
              onClick={() => {
                setSubmitSuccess(false);
                setCurrentStep(1);
                setFormData({
                  userType: '',
                  firstName: '',
                  lastName: '',
                  email: '',
                  phone: '',
                  company: '',
                  jobTitle: '',
                  industry: '',
                  projectType: '',
                  budget: '',
                  timeline: '',
                  message: '',
                  preferredContact: 'email',
                  newsletter: false
                });
              }}
              className="px-8 py-3 bg-gradient-primary text-primary-foreground font-semibold rounded-lg transition-smooth hover:shadow-glow-blue"
            >
              Submit Another Inquiry
            </button>
          </div>
        </div>
      </section>
    );
  }

  return (
    <section id="contact-form" className="py-20 px-6 lg:px-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl lg:text-5xl font-headline font-bold text-foreground mb-4">
            Start Your <span className="text-gradient-primary">Transformation</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Complete this form to help us understand your needs and provide the best solution.
          </p>
        </div>

        {/* Progress Indicator */}
        <div className="mb-12">
          <div className="flex items-center justify-between mb-4">
            {[1, 2, 3, 4].map((step) => (
              <div key={step} className="flex items-center flex-1">
                <div
                  className={`w-10 h-10 rounded-full flex items-center justify-center font-semibold transition-smooth ${
                    step <= currentStep
                      ? 'bg-gradient-primary text-primary-foreground'
                      : 'bg-muted text-muted-foreground'
                  }`}
                >
                  {step}
                </div>
                {step < 4 && (
                  <div
                    className={`flex-1 h-1 mx-2 transition-smooth ${
                      step < currentStep ? 'bg-secondary' : 'bg-muted'
                    }`}
                  />
                )}
              </div>
            ))}
          </div>
          <div className="flex justify-between text-xs text-muted-foreground">
            <span>Your Role</span>
            <span>Contact Info</span>
            <span>Project Details</span>
            <span>Additional Info</span>
          </div>
        </div>

        <form onSubmit={handleSubmit} className="bg-card border border-border rounded-xl p-8">
          {/* Step 1: User Type */}
          {currentStep === 1 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-4">
                  Which best describes your role? *
                </label>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {userTypes.map((type) => (
                    <button
                      key={type.value}
                      type="button"
                      onClick={() => handleInputChange('userType', type.value)}
                      className={`p-6 border rounded-lg text-left transition-smooth ${
                        formData.userType === type.value
                          ? 'border-secondary bg-secondary/10' :'border-border hover:border-secondary/50'
                      }`}
                    >
                      <Icon
                        name={type.icon as any}
                        size={32}
                        variant="outline"
                        className={formData.userType === type.value ? 'text-secondary' : 'text-muted-foreground'}
                      />
                      <h3 className="text-lg font-semibold text-foreground mt-4 mb-2">
                        {type.label}
                      </h3>
                    </button>
                  ))}
                </div>
                {errors.userType && (
                  <p className="text-error text-sm mt-2">{errors.userType}</p>
                )}
              </div>
            </div>
          )}

          {/* Step 2: Contact Information */}
          {currentStep === 2 && (
            <div className="space-y-6">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    First Name *
                  </label>
                  <input
                    type="text"
                    value={formData.firstName}
                    onChange={(e) => handleInputChange('firstName', e.target.value)}
                    className={`w-full px-4 py-3 bg-input border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition-smooth ${
                      errors.firstName ? 'border-error' : 'border-border'
                    }`}
                    placeholder="John"
                  />
                  {errors.firstName && (
                    <p className="text-error text-sm mt-1">{errors.firstName}</p>
                  )}
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Last Name *
                  </label>
                  <input
                    type="text"
                    value={formData.lastName}
                    onChange={(e) => handleInputChange('lastName', e.target.value)}
                    className={`w-full px-4 py-3 bg-input border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition-smooth ${
                      errors.lastName ? 'border-error' : 'border-border'
                    }`}
                    placeholder="Doe"
                  />
                  {errors.lastName && (
                    <p className="text-error text-sm mt-1">{errors.lastName}</p>
                  )}
                </div>
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Business Email *
                </label>
                <input
                  type="email"
                  value={formData.email}
                  onChange={(e) => handleInputChange('email', e.target.value)}
                  className={`w-full px-4 py-3 bg-input border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition-smooth ${
                    errors.email ? 'border-error' : 'border-border'
                  }`}
                  placeholder="john.doe@company.com"
                />
                {errors.email && (
                  <p className="text-error text-sm mt-1">{errors.email}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Phone Number
                </label>
                <input
                  type="tel"
                  value={formData.phone}
                  onChange={(e) => handleInputChange('phone', e.target.value)}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition-smooth"
                  placeholder="+1 (555) 123-4567"
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Company Name *
                </label>
                <input
                  type="text"
                  value={formData.company}
                  onChange={(e) => handleInputChange('company', e.target.value)}
                  className={`w-full px-4 py-3 bg-input border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition-smooth ${
                    errors.company ? 'border-error' : 'border-border'
                  }`}
                  placeholder="Acme Corporation"
                />
                {errors.company && (
                  <p className="text-error text-sm mt-1">{errors.company}</p>
                )}
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Job Title
                  </label>
                  <input
                    type="text"
                    value={formData.jobTitle}
                    onChange={(e) => handleInputChange('jobTitle', e.target.value)}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition-smooth"
                    placeholder="Chief Technology Officer"
                  />
                </div>

                <div>
                  <label className="block text-sm font-semibold text-foreground mb-2">
                    Industry
                  </label>
                  <select
                    value={formData.industry}
                    onChange={(e) => handleInputChange('industry', e.target.value)}
                    className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition-smooth"
                  >
                    <option value="">Select Industry</option>
                    {industries.map((industry) => (
                      <option key={industry} value={industry}>
                        {industry}
                      </option>
                    ))}
                  </select>
                </div>
              </div>
            </div>
          )}

          {/* Step 3: Project Details */}
          {currentStep === 3 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Project Type *
                </label>
                <select
                  value={formData.projectType}
                  onChange={(e) => handleInputChange('projectType', e.target.value)}
                  className={`w-full px-4 py-3 bg-input border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition-smooth ${
                    errors.projectType ? 'border-error' : 'border-border'
                  }`}
                >
                  <option value="">Select Project Type</option>
                  {projectTypes.map((type) => (
                    <option key={type} value={type}>
                      {type}
                    </option>
                  ))}
                </select>
                {errors.projectType && (
                  <p className="text-error text-sm mt-1">{errors.projectType}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Budget Range *
                </label>
                <select
                  value={formData.budget}
                  onChange={(e) => handleInputChange('budget', e.target.value)}
                  className={`w-full px-4 py-3 bg-input border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition-smooth ${
                    errors.budget ? 'border-error' : 'border-border'
                  }`}
                >
                  <option value="">Select Budget Range</option>
                  {budgetRanges.map((range) => (
                    <option key={range} value={range}>
                      {range}
                    </option>
                  ))}
                </select>
                {errors.budget && (
                  <p className="text-error text-sm mt-1">{errors.budget}</p>
                )}
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Timeline *
                </label>
                <select
                  value={formData.timeline}
                  onChange={(e) => handleInputChange('timeline', e.target.value)}
                  className={`w-full px-4 py-3 bg-input border rounded-lg text-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition-smooth ${
                    errors.timeline ? 'border-error' : 'border-border'
                  }`}
                >
                  <option value="">Select Timeline</option>
                  {timelines.map((time) => (
                    <option key={time} value={time}>
                      {time}
                    </option>
                  ))}
                </select>
                {errors.timeline && (
                  <p className="text-error text-sm mt-1">{errors.timeline}</p>
                )}
              </div>
            </div>
          )}

          {/* Step 4: Additional Information */}
          {currentStep === 4 && (
            <div className="space-y-6">
              <div>
                <label className="block text-sm font-semibold text-foreground mb-2">
                  Tell us about your project
                </label>
                <textarea
                  value={formData.message}
                  onChange={(e) => handleInputChange('message', e.target.value)}
                  rows={6}
                  className="w-full px-4 py-3 bg-input border border-border rounded-lg text-foreground placeholder-muted-foreground focus:outline-none focus:ring-2 focus:ring-secondary transition-smooth resize-none"
                  placeholder="Describe your project goals, challenges, and any specific requirements..."
                />
              </div>

              <div>
                <label className="block text-sm font-semibold text-foreground mb-3">
                  Preferred Contact Method
                </label>
                <div className="flex flex-wrap gap-4">
                  {['email', 'phone', 'both'].map((method) => (
                    <label key={method} className="flex items-center gap-2 cursor-pointer">
                      <input
                        type="radio"
                        name="preferredContact"
                        value={method}
                        checked={formData.preferredContact === method}
                        onChange={(e) => handleInputChange('preferredContact', e.target.value)}
                        className="w-4 h-4 text-secondary focus:ring-secondary"
                      />
                      <span className="text-sm text-foreground capitalize">{method}</span>
                    </label>
                  ))}
                </div>
              </div>

              <div className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="newsletter"
                  checked={formData.newsletter}
                  onChange={(e) => handleInputChange('newsletter', e.target.checked)}
                  className="w-5 h-5 mt-0.5 text-secondary focus:ring-secondary rounded"
                />
                <label htmlFor="newsletter" className="text-sm text-muted-foreground cursor-pointer">
                  I'd like to receive updates about HopeLogix's solutions, industry insights, and exclusive content.
                </label>
              </div>
            </div>
          )}

          {/* Navigation Buttons */}
          <div className="flex items-center justify-between mt-8 pt-6 border-t border-border">
            {currentStep > 1 ? (
              <button
                type="button"
                onClick={handleBack}
                className="px-6 py-3 border border-border text-foreground font-semibold rounded-lg transition-smooth hover:bg-muted"
              >
                Back
              </button>
            ) : (
              <div />
            )}

            {currentStep < 4 ? (
              <button
                type="button"
                onClick={handleNext}
                className="px-8 py-3 bg-gradient-primary text-primary-foreground font-semibold rounded-lg transition-smooth hover:shadow-glow-blue hover:scale-105 flex items-center gap-2"
              >
                Continue
                <Icon name="ArrowRightIcon" size={20} variant="outline" />
              </button>
            ) : (
              <button
                type="submit"
                disabled={isSubmitting}
                className="px-8 py-3 bg-gradient-primary text-primary-foreground font-semibold rounded-lg transition-smooth hover:shadow-glow-blue hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed flex items-center gap-2"
              >
                {isSubmitting ? (
                  <>
                    <Icon name="ArrowPathIcon" size={20} variant="outline" className="animate-spin" />
                    Submitting...
                  </>
                ) : (
                  <>
                    <Icon name="PaperAirplaneIcon" size={20} variant="solid" />
                    Submit Inquiry
                  </>
                )}
              </button>
            )}
          </div>
        </form>
      </div>
    </section>
  );
};

export default ContactFormSection;