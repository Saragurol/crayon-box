'use strict';

const EmberApp = require('ember-cli/lib/broccoli/ember-app');
const autoprefixer = require('autoprefixer');

module.exports = function(defaults) {
  let app = new EmberApp(defaults, {
    // Add options here
    postcssOptions: {
      compile: {
        plugins: [
          require('tailwindcss')
        ]
      }
    }
  });
//   postcssOptions: {
//     compile: {
//       enabled: false,
//       browsers: ['last 3 versions'], // this will override config found in config/targets.js
//     },
//     filter: {
//       enabled: true,
//       plugins: [
//         {
//           module: autoprefixer,
//           options: {
//             browsers: ['last 2 versions'] // this will override the config, but just for this plugin
//           }
//         }
//       ]
//     }
//   }
// });

  // Use `app.import` to add additional libraries to the generated
  // output files.
  //
  // If you need to use different assets in different
  // environments, specify an object as the first parameter. That
  // object's keys should be the environment name and the values
  // should be the asset to use in that environment.
  //
  // If the library that you are including contains AMD or ES6
  // modules that you would like to import into your application
  // please specify an object with the list of modules as keys
  // along with the exports of each module as its value.

  return app.toTree();
};
