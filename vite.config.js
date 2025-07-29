import { defineConfig } from 'vite';

export default defineConfig({
  build: {
    target: "esnext",  // Ensures modern syntax is preserved   // Alternative minifier
    terserOptions: {
      format: {
        comments: false 
      }
    }
  }
});
