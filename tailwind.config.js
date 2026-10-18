/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'system-ui', 'sans-serif'],
        display: ['"Sora"', 'system-ui', 'sans-serif'],
      },
      colors: {
        ink: {
          50: '#f5f8fb',
          100: '#e7edf4',
          200: '#ccd8e5',
          300: '#a6b8cc',
          400: '#7891ad',
          500: '#58718f',
          600: '#405a78',
          700: '#304765',
          800: '#243953',
          900: '#152c4d',
          950: '#071a36',
        },
        jute: {
          50: '#fffaf0',
          100: '#fff0c7',
          200: '#ffe296',
          300: '#f8ca50',
          400: '#eeb52d',
          500: '#d99a16',
          600: '#b9780e',
          700: '#92570e',
          800: '#754613',
          900: '#603a15',
          950: '#3b210b',
        },
        leaf: {
          50: '#edf9f2',
          100: '#d4f0dd',
          200: '#a9dfbc',
          300: '#72c996',
          400: '#40ae70',
          500: '#208d54',
          600: '#157244',
          700: '#125b39',
          800: '#10492f',
          900: '#0c3c28',
          950: '#052217',
        },
      },
      boxShadow: {
        soft: '0 2px 20px -8px rgba(31, 41, 34, 0.18)',
        card: '0 10px 40px -16px rgba(31, 41, 34, 0.25)',
        lift: '0 24px 60px -24px rgba(31, 41, 34, 0.35)',
      },
      keyframes: {
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        floatY: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        marquee: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-50%)' },
        },
      },
      animation: {
        'fade-up': 'fadeUp 0.7s ease-out both',
        'float-y': 'floatY 6s ease-in-out infinite',
        marquee: 'marquee 32s linear infinite',
      },
    },
  },
  plugins: [],
};
