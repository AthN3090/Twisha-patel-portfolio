/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
        'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'landing':'url("/images/landing.png")',
        'ux':'url(/images/ux.png)',
        'landing-hey':'url(/images/hey.png)',
        'gradient-green' : 'linear-gradient(180deg, rgba(245, 243, 255, 0.00) 0%, rgba(239, 255, 234, 0.00) 0.01%, rgba(239, 255, 234, 0.50) 14.36%, #EFFFEA 50%, rgba(239, 255, 234, 0.50) 83.82%, rgba(243, 255, 249, 0.00) 100%, rgba(239, 255, 234, 0.00) 100%)',
        'gradient-red': 'linear-gradient(180deg, rgba(245, 243, 255, 0.00) 0%, rgba(255, 234, 235, 0.00) 0.01%, rgba(255, 234, 235, 0.50) 14.36%, #FFEAEB 50%, rgba(255, 234, 235, 0.50) 83.82%, rgba(243, 255, 249, 0.00) 100%, rgba(255, 234, 235, 0.00) 100%)',
        'gradient-blue' :'linear-gradient(180deg, rgba(245, 243, 255, 0.00) 0%, rgba(234, 240, 255, 0.00) 0.01%, rgba(234, 240, 255, 0.50) 14.36%, #EAF0FF 50%, rgba(234, 240, 255, 0.50) 83.82%, rgba(243, 255, 249, 0.00) 100%, rgba(234, 240, 255, 0.00) 100%)'

      },
      fontFamily:{
        epilogue : ['Epilogue', 'sans-serif']
      },
      gridTemplateColumns:{
        'landing-grid':'repeat(3, 480px)'
      }
    },
  },
  plugins: [],
}
