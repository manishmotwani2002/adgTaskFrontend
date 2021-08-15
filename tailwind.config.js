const defaultTheme = require('tailwindcss/defaultTheme');

module.exports = {
	purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
	darkMode: false, // or 'media' or 'class'
	theme: {
		extend: {
			colors: {
				primary: '#4AAD9B',
				secondary: '#3C5CA3',
				background: '#F8F9FB',
			},
			fontFamily: {
				body: ['Poppins', 'sans-serif'],
			},
		},
	},
	variants: {
		extend: {
			transform: ['hover', 'focus'],
			transitionProperty: ['hover', 'focus'],
		},
	},
	corePlugins: {
		container: false,
	},
	plugins: [
		({ addComponents, theme }) => {
			addComponents({
				'.container': {
					marginInline: 'auto',
					paddingInline: theme('spacing.4'),
					maxWidth: theme('screens.xl'),

					// Breakpoints
					'@screen sm': {
						maxWidth: theme('screens.sm'),
					},
					'@screen md': {
						maxWidth: theme('screens.md'),
					},
				},
			});
		},
	],
};
