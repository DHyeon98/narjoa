import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  mode: 'jit',
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic': 'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      fontFamily: {
        Pretendard: ['Pretendard'],
      },
      transitionDuration: {
        '2000': '2000ms',
      },
    },
  },
  plugins: [
    ({ addUtilities }: any) => {
      addUtilities({
        '.layout-container': {
          '@apply max-w-[1440px] px-4 mx-auto w-full': '',
        },
        '.hid': {
          '@apply absolute left-[-9999px] top-[-9999px] leading-[0] w-0 h-0 overflow-hidden': '',
        },
        '.paginationButton': {
          '@apply flex-center w-[34px] h-[34px] rounded-full border border-[#b1b1b1]': '',
        },
        '.flex-center': {
          '@apply flex items-center justify-center': '',
        },
        '.weather-introduce-card': {
          '@apply w-1/3 bg-white rounded-2xl text-center py-3 px-10 break-keep': '',
        },
        '.introduce-bg': {
          '@apply p-14 rounded-2xl bg-slate-100 max-lg:p-8 max-md:p-6': '',
        },
        '.introduce-title': {
          '@apply text-center text-xl font-bold mb-8 max-lg:mb-6 max-md:text-lg': '',
        },
        '.link-button': {
          '@apply flex-center bg-slate-900 text-white hover:bg-slate-600': '',
        },
      });
    },
  ],
};
export default config;
