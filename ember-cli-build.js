var EmberApp = require('ember-cli/lib/broccoli/ember-app');

module.exports = function(defaults) {
		var app = new EmberApp(defaults, {
			autoprefixer: {
				browsers: ['last 2 version']
				// cascade: false
			},
			lessOptions: {
				paths: [
					"app"
				]
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
	app.import("bower_components/lodash/lodash.min.js");
	app.import("bower_components/graphlib/dist/graphlib.core.min.js");
	app.import("bower_components/dagre/dist/dagre.core.js");
	app.import("bower_components/cytoscape-dagre/cytoscape-dagre.js");

	return app.toTree();
};
