import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import react from '@astrojs/react';
import icon from 'astro-icon';

// https://astro.build/config
export default defineConfig({
	integrations: [
		tailwind({
			applyBaseStyles: false,
		}),
		react({
			include: ['**/components/react/*'],
		}),
		icon({
			include: {
				// Include only three `openmoji` icons in the bundle
				openmoji: ['facebook', 'github', 'twitter'],
			},
		}),
	],
});
