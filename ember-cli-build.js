/*jshint node:true*/
/* global require, module */
var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
		var app = new EmberApp(defaults, {
			autoprefixer: {
				browsers: ['last 2 version']
				// cascade: false
			},
			lessOptions: {
				paths: [
					"app" // TODO: Figure out why this breaks build
				],
				ieCompat: false // Allows data-URIs to exceed 32 kB
			},
			babel: {
				includePolyfill: true
			},
		});
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
	app.import("bower_components/cytoscape/dist/cytoscape.js");
	app.import("bower_components/cola/WebCola/cola.js");
	app.import("bower_components/cytoscape-cola/cytoscape-cola.js");

	return app.toTree();

	// var cytoscape = require('cytoscape');
	// var cycola = require('cytoscape-cola');
	// var cola = require('webcola');
	//
	// cycola( cytoscape, cola ); // register extension
};
