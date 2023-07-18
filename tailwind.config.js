/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	theme: {
		extend: {},
	},
	daisyui: {
		themes: [
			{
				mytheme: {
					primary: '#F7A421',

					secondary: '#d1d5db',

					accent: '#2E2F3C',

					neutral: '#2b3440',

					'base-100': '#ffffff',

					info: '#3abff8',

					success: '#4ade80',

					warning: '#facc15',

					error: '#f43f5e',
				},
				dark: {
					primary: '#F7A421',

					secondary: '#d1d5db',

					accent: '#2E2F3C',

					neutral: '#2b3440',

					'base-100': '#1D222A',

					info: '#3abff8',

					success: '#4ade80',

					warning: '#facc15',

					error: '#f43f5e',
				},
			},
		],
	},
	plugins: [require('daisyui')],
};
