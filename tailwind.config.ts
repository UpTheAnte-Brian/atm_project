// import

// export default config() {
//     content: [
//         // './src/**/*.{html,js}',
//           'node_modules/preline/dist/*.js',
//       ],
//     plugins: [
//       require('preline/plugin')
//     ],
//   }

import type { Config } from "tailwindcss";
import forms from "@tailwindcss/forms";
import preline from "preline/plugin";

export default {
  content: [],
  theme: {
    extend: {},
  },
  plugins: [forms, preline],
} as Config;
