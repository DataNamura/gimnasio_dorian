/** @type {import('tailwindcss').Config} */
export default {
	content: ['./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}'],
	theme: {
		extend: {
			colors: {
				'gym-red': '#ff0000',
			},
			transitionProperty: {
				'gpu': 'transform, opacity',
			},
		},
	},
	plugins: [],
	// Optimizaciones para reducir el tamaño del CSS
	future: {
		removeDeprecatedGapUtilities: true,
		purgeLayersByDefault: true,
	},
	// Reducir el CSS generado en desarrollo
	mode: 'jit',
}
