import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      colors: {
        'primary-dark': 'var(--color-primary-dark)',
        'primary-light': 'var(--color-primary-light)',
        'primary-medium': 'var(--color-primary-medium)',
        'secondary-gray': 'var(--color-secondary-gray)',
        'secondary-green': 'var(--color-secondary-green)',
        'secondary-blue': 'var(--color-secondary-blue)',
        'secondary-white': 'var(--color-secondary-white)',
        'accent-yellow': 'var(--color-accent-yellow)',
        'accent-green': 'var(--color-accent-green)',
        'accent-rose': 'var(--color-accent-rose)',
        'accent-pink': 'var(--color-accent-pink)',
        'lines': 'var(--color-lines)',
        'gradients-blue': 'var(--color-gradients-blue)',
        'gradients-green': 'var(--color-gradients-green)',
      }
    },
  },
  plugins: [],
}
export default config
