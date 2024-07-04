<project set-up guide>

1 - npm create vite@latest react-job
✔ Select a framework: › React
✔ Select a variant: › JavaScript
 > clean App.jsx file
 > delete App.css file

2 - npm install 

3 - npm run dev

4 - from tailwind webpage: <npm install -D tailwindcss postcss autoprefixer>

5 - After 5th step done, run: <npx tailwindcss init -p>

6 - copy the <tailwind.config.js> from tailwind.com


<!-- git repo issues -->

# Remove the existing remote
git remote remove origin

# Add the new remote
git remote add origin https://github.com/haruntoker/EcoFuse-v-1.0.0.git

# Ensure you are on the main branch (create it if it doesn't exist)
git checkout -b main

# Push the code to the new remote repository
git push -u origin main