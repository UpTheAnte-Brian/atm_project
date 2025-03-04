// import type { Config } from "tailwindcss";
// import forms from "@tailwindcss/forms";
import preline from "preline/plugin";

// export default {
//   content: [],
//   theme: {
//     extend: {},
//   },
//   plugins: [forms, preline],
// } as Config;

// tailwind.config.js
module.exports = {
  content: [
    // './src/**/*.{html,js}',
      'node_modules/preline/dist/*.js',
  ],
  plugins: [
    // require('@tailwindcss/forms'),
      preline,
  ],
}