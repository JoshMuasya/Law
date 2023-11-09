import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        'xs': '320px',
        's': '480px',
        'm': '768px',
        'md': '1024px',
        'l': '1200px',
      },

      fontSize: {
        'xs': '11px',
        's': '12px',
        'sx': '16px',
        'lm': '20px',
        'l': '24px',
        'lg': '32px',
        'xl': '36px',
        'xxl': '40px',
        '2xl': '64px',
      },

      fontFamily: {
        'mont': 'Montserrat, sans-serif',
        'tinos': 'Tinos, serif',
        'shadow-light': 'Shadows Into Light, cursive',
      },

      // colors: {
      //   'midnight-purple': '#290B36',
      //   'logo-blue': '#6BA4D9',
      //   'light-blue': '#E6F4F1',
      //   'purple': '#543361',
      //   'thistle': '#E6BDF4',
      //   'white-purple': '#FFE2FF',
      //   'white-blue': '#F2FAFF',
      //   'blue': '#32C4EA',
      //   'black': '#121212',
      // },
    },
  },
  plugins: [require("daisyui")],
  daisyui: {
    themes: [
      "business",
      "winter",
    ]
  }
}
export default config
