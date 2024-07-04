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

<!-- to add animation -->

1 - npm install lottie-react
2 - go to <https://lottiefiles.com/> and get your animation, and download as a <JSON> in your <asset> file.
3 - import Lottie from 'lottie-react';
4 - import animationData from '../assets/animation.json'; // Adjust the path accordingly
5 - add in your component that you wanna use:
<section>
<!-- animation -->
<div className="absolute mt-20 inset-0 z-0 pointer-events-none">
<Lottie animationData={animationData} loop={true} />
</div>
<!-- component itself -->
<div>
</div>
</section>


<!-- hidden : note -->
<div className="hidden md:flex">
- it gonne be hidden in <sm> screen, when hit the <md> screen gonna be visible.

<!-- flex-col / flex-row -->
1 - use, <flex-col> for <small screen>
2 - use, <flex-row> for <medium screen> e.g. <md:flex:row>


<!-- container -->
 <container> class in Tailwind CSS is used to create a fixed-width container that centers the content horizontally and adjusts its width responsively based on the screen size.
<container> helps in creating consistent layouts by keeping the content within a specified maximum width while maintaining proper alignment.
 
 
<brief summary> ::::::

<Fixed Width> The container has a maximum width that changes based on the screen size.
<Centered Content> The content inside the container is centered horizontally.
<Responsive> The container’s width adjusts according to the screen size to ensure a good layout on all devices.


<!-- text color -->
<bg-gradient-to-r from-cyan-500 to-blue-500 bg-clip-text text-transparent>


<!-- git repo issues -->

# Remove the existing remote
git remote remove origin

# Add the new remote
git remote add origin https://github.com/haruntoker/React-Tailwind---LoopStudios-v.1.0.git

# Ensure you are on the main branch (create it if it doesn't exist)
git checkout -b main

# Push the code to the new remote repository
git push -u origin main




<!-- babel -->
<!-- babel -->
<!-- babel -->
<!-- babel -->
<!-- babel -->
<!-- ERR_UNKNOWN_FILE_EXTENSION` -->

The error message indicates that Node.js is having trouble understanding the file extension ".jsx". This is likely because your project isn't properly configured to handle `.jsx` files. This can usually be resolved by ensuring your development environment is set up to work with JSX files, typically through Babel and Webpack.

Here are the steps to configure your environment correctly:

### 1. Install Babel and Webpack

First, ensure you have Babel and Webpack installed:

```bash
npm install @babel/core @babel/preset-env @babel/preset-react babel-loader webpack webpack-cli webpack-dev-server --save-dev
```

### 2. Create a Babel Configuration File

Create a file named `.babelrc` in the root of your project with the following content:

```json
{
  "presets": ["@babel/preset-env", "@babel/preset-react"]
}
```

### 3. Create a Webpack Configuration File

Create a file named `webpack.config.js` in the root of your project with the following content:

```javascript
const path = require('path');

module.exports = {
  entry: './src/index.js',
  output: {
    path: path.resolve(__dirname, 'dist'),
    filename: 'bundle.js'
  },
  module: {
    rules: [
      {
        test: /\.jsx?$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader'
        }
      }
    ]
  },
  resolve: {
    extensions: ['.js', '.jsx']
  },
  devServer: {
    contentBase: path.join(__dirname, 'dist'),
    compress: true,
    port: 9000
  }
};
```

### 4. Update Scripts in `package.json`

Ensure your `package.json` has the necessary scripts to build and start your project:

```json
{
  "scripts": {
    "start": "webpack serve --mode development",
    "build": "webpack --mode production"
  }
}
```

### 5. Entry Point

Ensure your entry point (`./src/index.js`) imports React and ReactDOM, and renders your main component. Example:

```javascript
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

ReactDOM.render(<App />, document.getElementById('root'));
```

### 6. Main Component

Make sure your `./src/components/Navbar.jsx` (or your main component file) is correctly set up to be imported. Example of a simple component:

```jsx
import React from 'react';

const Navbar = () => {
  return (
    <nav>
      <h1>Navbar</h1>
    </nav>
  );
};

export default Navbar;
```

### 7. Ensure All Dependencies are Installed

Run the following command to install all dependencies:

```bash
npm install
```

### 8. Start Your Project

Run the following command to start your project:

```bash
npm start
```

### Summary

This setup ensures that your project is configured to handle `.jsx` files using Babel and Webpack, which will transpile your JSX into JavaScript that Node.js can understand. By following these steps, your project should be able to import and use `.jsx` files without encountering the `ERR_UNKNOWN_FILE_EXTENSION` error.