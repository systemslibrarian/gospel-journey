import { defineConfig } from 'vite';

export default defineConfig({
  // Relative asset URLs keep the site portable for GitHub Pages project sites.
  base: './',
  build: {
    rollupOptions: {
      input: {
        main: 'index.html',
        journey: 'journey.html',
        whoIsJesus: 'who-is-jesus.html',
        whySaving: 'why-saving.html',
        scarletThread: 'scarlet-thread.html',
        respond: 'respond.html',
        nextSteps: 'next-steps.html',
        scriptureLibrary: 'scripture-library.html',
        prayerResponse: 'prayer-response.html',
        about: 'about.html',
      },
    },
  },
});
