/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#E6F0FF',
          100: '#CCE0FF',
          200: '#99C2FF',
          300: '#66A3FF',
          400: '#3385FF',
          500: '#0066FF',
          600: '#0052CC',
          700: '#003D99',
          800: '#002966',
          900: '#001433',
        },
        secondary: {
          50: '#EAFEF6',
          100: '#D5FCEE',
          200: '#ABF9DE',
          300: '#80F5CD',
          400: '#56F2BD',
          500: '#2BEEAC',
          600: '#22BE8A',
          700: '#1A8F67',
          800: '#115F45',
          900: '#093022',
        },
        accent: {
          50: '#FFF8E6',
          100: '#FFF1CC',
          200: '#FFE299',
          300: '#FFD466',
          400: '#FFC533',
          500: '#FFB700',
          600: '#CC9200',
          700: '#996E00',
          800: '#664900',
          900: '#332500',
        },
        dark: {
          100: '#d5d6db',
          200: '#aaacb8',
          300: '#808394',
          400: '#555971',
          500: '#2b304d',
          600: '#22263e',
          700: '#1a1d2e',
          800: '#11131f',
          900: '#090a0f'
        },
        light: {
          100: '#ffffff',
          200: '#fcfcfd',
          300: '#f9fafc',
          400: '#f7f7fa',
          500: '#f4f5f9',
          600: '#c3c4c7',
          700: '#929395',
          800: '#626264',
          900: '#313132'
        }
      },
      fontFamily: {
        sans: ['"Inter"', 'sans-serif'],
        display: ['"Outfit"', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace']
      },
      animation: {
        'float': 'float 3s ease-in-out infinite',
      },
      keyframes: {
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        }
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
      }
    },
  },
  plugins: [],
};