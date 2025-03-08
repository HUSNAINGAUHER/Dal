/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: ['./src/**/*.{ts,tsx}'],
  theme: {
    container: {
      center: true,
      padding: '2rem',
      screens: {
        '2xl': '1400px',
      },
    },
    extend: {
      colors: {
        border: {
          DEFAULT: '#e2e8f0',
          dark: '#334155',
        },
        input: {
          DEFAULT: '#e2e8f0',
          dark: '#334155',
        },
        ring: {
          DEFAULT: '#1e293b',
          dark: '#cbd5e1',
        },
        background: {
          DEFAULT: '#ffffff',
          dark: '#0f172a',
        },
        foreground: {
          DEFAULT: '#0f172a',
          dark: '#f8fafc',
        },
        primary: {
          DEFAULT: '#1e293b',
          foreground: '#f8fafc',
          dark: '#f8fafc',
          'dark-foreground': '#1e293b',
        },
        secondary: {
          DEFAULT: '#f1f5f9',
          foreground: '#1e293b',
          dark: '#334155',
          'dark-foreground': '#f8fafc',
        },
        destructive: {
          DEFAULT: '#ef4444',
          foreground: '#f8fafc',
          dark: '#7f1d1d',
          'dark-foreground': '#f8fafc',
        },
        muted: {
          DEFAULT: '#f1f5f9',
          foreground: '#64748b',
          dark: '#334155',
          'dark-foreground': '#94a3b8',
        },
        accent: {
          DEFAULT: '#f1f5f9',
          foreground: '#1e293b',
          dark: '#334155',
          'dark-foreground': '#f8fafc',
        },
        popover: {
          DEFAULT: '#ffffff',
          foreground: '#0f172a',
          dark: '#0f172a',
          'dark-foreground': '#f8fafc',
        },
        card: {
          DEFAULT: '#ffffff',
          foreground: '#0f172a',
          dark: '#0f172a',
          'dark-foreground': '#f8fafc',
        },
      },
      borderRadius: {
        lg: '0.5rem',
        md: '0.375rem',
        sm: '0.25rem',
      },
    },
  },
  plugins: [],
  corePlugins: {
    preflight: false, // This prevents Tailwind from conflicting with Ant Design's base styles
  },
};
