/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}"
  ],
  theme: {
    extend: {
      backgroundColor: {
        primary: '#2B2A2B',
        hover: 'rgba(247, 245, 243, 0.1)',
        hero: 'rgba(227, 222, 215, 0.3)',
        buttonOrigin: 'rgb(31, 24, 21)',
        btnCoffe: '#2A5B45',
        btnCoffeCard: 'rgba(42, 91, 69, 0.7)',
        hoverCoffeCard: '#F7F5F3',
        bgForm: '#E3DED7',
        footerBg: '#1F1815',
        btnFotter: '#515051'
      },
      colors: {
        heroTitle: '#2A5B45',
        p: '#111827',
        titleCard: '#2B2A2B',
        pLight: '#6B7280',
        label: '#374151',
        span: '#515051'
      },
      margin: {
        center: '0px auto'
      },
      boxShadow: {
        heroShadow: '0px 4px 4px rgba(0, 0, 0, 0.25)',
        shadowCard: '0px 1px 4px rgba(227, 222, 215, 0.8)',
        inputShadow: '0px 1px 2px rgba(0, 0, 0, 0.05)'
      },
      fontSize: {
        h1: '38px'
      },
      lineHeight: {
        h1: '44px'
      },
      fontFamily: {
        outfit: ['Heebo', 'sans-serif']
      },
      borderColor: {
        borderColor: '#E3DED7',
        borderInput: '#D1D5DB',
        focusInput: '#3F8F6B',
        borderRadio: '#2A5B45',
        borderInputRadio: '#555555'
      },
    },
  },
  plugins: [],
}

