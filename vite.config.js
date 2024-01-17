import {defineConfig} from 'vite'
import path from 'path';

export default defineConfig({
	plugins: [],	

	build: {
		outDir: 'dist',
        rollupOptions: {
            input: {
                index: path.resolve(__dirname, 'index.html'),
                about: path.resolve(__dirname, 'about.html'),
                project: path.resolve(__dirname, 'project.html'),
                contact: path.resolve(__dirname, 'contact.html')
            },
          },
	  },
})