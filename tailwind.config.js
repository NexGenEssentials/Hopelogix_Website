/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "var(--color-border)", /* white with opacity */
        input: "var(--color-input)", /* white with opacity */
        ring: "var(--color-ring)", /* cyan-400 */
        background: "var(--color-background)", /* black */
        foreground: "var(--color-foreground)", /* white */
        surface: {
          DEFAULT: "var(--color-surface)", /* gray-900 */
          foreground: "var(--color-surface-foreground)", /* white */
        },
        primary: {
          DEFAULT: "var(--color-primary)", /* blue-600 */
          foreground: "var(--color-primary-foreground)", /* white */
        },
        secondary: {
          DEFAULT: "var(--color-secondary)", /* cyan-400 */
          foreground: "var(--color-secondary-foreground)", /* black */
        },
        destructive: {
          DEFAULT: "var(--color-destructive)", /* red-500 */
          foreground: "var(--color-destructive-foreground)", /* white */
        },
        muted: {
          DEFAULT: "var(--color-muted)", /* gray-800 */
          foreground: "var(--color-muted-foreground)", /* gray-400 */
        },
        accent: {
          DEFAULT: "var(--color-accent)", /* indigo-950 */
          foreground: "var(--color-accent-foreground)", /* white */
        },
        popover: {
          DEFAULT: "var(--color-popover)", /* gray-900 */
          foreground: "var(--color-popover-foreground)", /* white */
        },
        card: {
          DEFAULT: "var(--color-card)", /* gray-900 */
          foreground: "var(--color-card-foreground)", /* white */
        },
        success: {
          DEFAULT: "var(--color-success)", /* green-500 */
          foreground: "var(--color-success-foreground)", /* white */
        },
        warning: {
          DEFAULT: "var(--color-warning)", /* orange-500 */
          foreground: "var(--color-warning-foreground)", /* white */
        },
        error: {
          DEFAULT: "var(--color-error)", /* red-500 */
          foreground: "var(--color-error-foreground)", /* white */
        },
      },
      fontFamily: {
        headline: ['var(--font-headline)', 'Inter', 'sans-serif'],
        body: ['var(--font-body)', 'Inter', 'sans-serif'],
        accent: ['var(--font-accent)', 'JetBrains Mono', 'monospace'],
      },
      fontSize: {
        'hero': ['3rem', { lineHeight: '1.2', fontWeight: '700' }], /* 48px */
        'hero-support': ['2rem', { lineHeight: '1.4', fontWeight: '400' }], /* 32px */
      },
      spacing: {
        'xs': 'var(--spacing-xs)', /* 8px */
        'sm': 'var(--spacing-sm)', /* 12px */
        'md': 'var(--spacing-md)', /* 20px */
        'lg': 'var(--spacing-lg)', /* 32px */
        'xl': 'var(--spacing-xl)', /* 52px */
      },
      borderRadius: {
        sm: "var(--radius-sm)", /* 4px */
        md: "var(--radius-md)", /* 8px */
        lg: "var(--radius-lg)", /* 12px */
        xl: "var(--radius-xl)", /* 16px */
      },
      boxShadow: {
        'subtle': '0 4px 8px rgba(0, 0, 0, 0.2)',
        'depth': '0 40px 80px rgba(0, 0, 0, 0.4)',
        'glow-blue': '0 0 20px rgba(0, 212, 255, 0.3)',
        'glow-blue-strong': '0 20px 40px rgba(0, 212, 255, 0.3)',
        'elevation': '0 4px 20px rgba(0, 100, 204, 0.1)',
      },
      backgroundImage: {
        'gradient-cinematic': 'linear-gradient(135deg, var(--color-brand-gradient-start) 0%, var(--color-brand-gradient-mid) 50%, var(--color-brand-gradient-end) 100%)',
        'gradient-primary': 'linear-gradient(135deg, var(--color-primary) 0%, var(--color-secondary) 100%)',
      },
      keyframes: {
        "gradient-shift": {
          '0%, 100%': { backgroundPosition: '0% 50%' },
          '50%': { backgroundPosition: '100% 50%' },
        },
        "pulse-glow": {
          '0%, 100%': { opacity: '1' },
          '50%': { opacity: '0.7' },
        },
        "slide-in": {
          '0%': { transform: 'translateY(40px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
      },
      animation: {
        "gradient-shift": "gradient-shift 8s ease infinite",
        "pulse-glow": "pulse-glow 2s ease-in-out infinite",
        "slide-in": "slide-in 0.6s cubic-bezier(0.4, 0, 0.2, 1)",
      },
    },
  },
  plugins: [],
}