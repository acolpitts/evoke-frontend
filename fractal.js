'use strict';

/*
 * Require the path module
 */
const path = require ('path');

/*
 * Require the Fractal module
 */
const fractal = module.exports = require ('@frctl/fractal').create ();

const mandelbrot = require ('@frctl/mandelbrot'); // require the Mandelbrot theme module

// create a new instance with custom config options
const myCustomisedTheme = mandelbrot ({
  skin: "black",
  nav: ["docs", "components"] // show docs above components in the sidebar
});

fractal.web.theme (myCustomisedTheme); // tell Fractal to use the configured theme by default

/*
 * Give your project a title.
 */
fractal.set ('project.title', 'əˈvōk·ui');

/*
 * Tell Fractal where to look for components.
 */
fractal.components.set ('path', path.join (__dirname, 'src/components'));

/*
 * Tell Fractal where to look for documentation pages.
 */
fractal.docs.set ('path', path.join (__dirname, 'src/docs'));

/*
 * Tell the Fractal web preview plugin where to look for static assets.
 */
fractal.web.set ('static.path', path.join (__dirname, 'src/assets'));

/*
 * Tell Fractal where to build static HTML to.
 */
fractal.web.set ('builder.dest', __dirname + '/build');

/*
 * Set the default status of components to WIP
 */
fractal.components.set ('default.status', 'wip');

/*
 * Set the default status of documentation pages to draft
 */
fractal.docs.set ('default.status', 'draft');

/*
 * Set the default preview layout
 */
fractal.components.set ('default.preview', '@preview');

/*
 * Top-level label for components in web UI
 */
fractal.components.set ('label', 'UI Elements');

