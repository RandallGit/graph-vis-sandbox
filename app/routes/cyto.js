import Ember from 'ember';

export default Ember.Route.extend({
	model(){
		return [
			{
				id: 1,
				name: 'cola',
				description: 'Cola is much more stable in interactive applications (no "jitter"), allows user specified constraints such as alignments and grouping, can automatically generate constraints to avoid overlapping nodes or provide flow layout for directed graphs. It supports noncompound and compound graphs well using constraint-based optimization techniques.',
				value: 'For this social network data it helps identify sub-communities that are not readily apparent when rendered with other layout techniques.',
				animate: true, // whether to show the layout as it's running
				refresh: 1, // number of ticks per frame; higher is faster but more jerky
				maxSimulationTime: 4000, // max length in ms to run the layout
				ungrabifyWhileSimulating: false, // so you can't drag nodes during layout
				fit: true, // on every layout reposition of nodes, fit the viewport
				padding: 30, // padding around the simulation
				boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }

				// layout event callbacks
				ready: function(){}, // on layoutready
				stop: function(){}, // on layoutstop

				// positioning options
				randomize: true, // use random node positions at beginning of layout
				avoidOverlap: true, // if true, prevents overlap of node bounding boxes
				handleDisconnected: true, // if true, avoids disconnected components from overlapping
				nodeSpacing: function( node ){ return 10; }, // extra spacing around nodes
				flow: { axis: 'y', minSeparation: 5 }, // use DAG/tree flow layout if specified, e.g. { axis: 'y', minSeparation: 30 }
				alignment: undefined, // relative alignment constraints on nodes, e.g. function( node ){ return { x: 0, y: 1 } }
				// different methods of specifying edge length
				// each can be a constant numerical value or a function like `function( edge ){ return 2; }`
				edgeLength: undefined, // sets edge length directly in simulation
				edgeSymDiffLength: undefined, // symmetric diff edge length in simulation
				edgeJaccardLength: undefined, // jaccard edge length in simulation

				// iterations of cola algorithm; uses default values on undefined
				unconstrIter: 18, // unconstrained initial layout iterations
				userConstIter: 18, // initial layout iterations with user-specified constraints
				allConstIter: 32, // initial layout iterations with all constraints including non-overlap

				// infinite layout options
				infinite: false // overrides all other options for a forces-all-the-time mode
			},
			{
				id: 2,
				name: 'grid',
				description: 'The grid layout puts nodes in a well-spaced grid.',
				value: ' This provides almost no value looking at an undirected social network.',
				fit: true, // whether to fit the viewport to the graph
				padding: 30, // padding used on fit
				boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
				avoidOverlap: true, // prevents node overlap, may overflow boundingBox if not enough space
				avoidOverlapPadding: 10, // extra spacing around nodes when avoidOverlap: true
				condense: false, // uses all available space on false, uses minimal space on true
				rows: undefined, // force num of rows in the grid
				cols: undefined, // force num of columns in the grid
				position: function( node ){}, // returns { row, col } for element
				sort: undefined, // a sorting function to order the nodes; e.g. function(a, b){ return a.data('weight') - b.data('weight') }
				animate: true, // whether to transition the node positions
				animationDuration: 500, // duration of animation in ms if enabled
				animationEasing: 'ease-in', // easing of animation if enabled
				ready: undefined, // callback on layoutready
				stop: undefined // callback on layoutstop
			},
			{
				id: 3,
				name: 'cose',
				description: 'The cose (Compound Spring Embedder) layout uses a force-directed simulation to lay out graphs. It works well with noncompound graphs and it has additional logic to support compound graphs well.',
				value: 'Like most force-directed layouts, this provides little value when visualizing social networks and other data.',
				ready               : function() {},
				// Called on `layoutstop`
				stop                : function() {},
				// Whether to animate while running the layout
				animate             : true,
				// The layout animates only after this many milliseconds
				// (prevents flashing on fast runs)
				animationThreshold  : 250,
				// Number of iterations between consecutive screen positions update
				// (0 -> only updated on the end)
				refresh             : 20,
				// Whether to fit the network view after when done
				fit                 : true,
				// Padding on fit
				padding             : 30,
				// Constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
				boundingBox         : undefined,
				// Extra spacing between components in non-compound graphs
				componentSpacing    : 500,
				// Node repulsion (non overlapping) multiplier
				nodeRepulsion       : function( node ){ return 400000; },
				// Node repulsion (overlapping) multiplier
				nodeOverlap         : 20,
				// Ideal edge (non nested) length
				idealEdgeLength     : function( edge ){ return 10; },
				// Divisor to compute edge forces
				edgeElasticity      : function( edge ){ return 100; },
				// Nesting factor (multiplier) to compute ideal edge length for nested edges
				nestingFactor       : 5,
				// Gravity force (constant)
				gravity             : 80,
				// Maximum number of iterations to perform
				numIter             : 1000,
				// Initial temperature (maximum node displacement)
				initialTemp         : 200,
				// Cooling factor (how the temperature is reduced between consecutive iterations
				coolingFactor       : 0.95,
				// Lower temperature threshold (below this point the layout will end)
				minTemp             : 1.0,
				// Whether to use threading to speed up the layout
				useMultitasking     : true
			},
			{
				id: 4,
				name: 'breadthfirst',
				description: 'The breadthfirst layout puts nodes in a hierarchy, based on a breadthfirst traversal of the graph.',
				value: 'For a data set, that is undirected, of a social network this does the best job of visualizing the relationships and identifying patterns.',
				fit: true, // whether to fit the viewport to the graph
				directed: false, // whether the tree is directed downwards (or edges can point in any direction if false)
				padding: 30, // padding on fit
				circle: false, // put depths in concentric circles if true, put depths top down if false
				spacingFactor: 1, // positive spacing factor, larger => more space between nodes (N.B. n/a if causes overlap)
				boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
				avoidOverlap: true, // prevents node overlap, may overflow boundingBox if not enough space
				roots: undefined, // the roots of the trees
				maximalAdjustments: 0, // how many times to try to position the nodes in a maximal way (i.e. no backtracking)
				animate: true, // whether to transition the node positions
				animationDuration: 500, // duration of animation in ms if enabled
				animationEasing: 'ease-in', // easing of animation if enabled
				ready: undefined, // callback on layoutready
				stop: undefined // callback on layoutstop
			},
			{
				id: 5,
				name: 'circle',
				description: 'The circle layout puts nodes in a circle.',
				value: 'Without assigning edge weights, bezier curves or some other visual weighting it provides no value when visualizing social networks.',
				fit: true, // whether to fit the viewport to the graph
				padding: 30, // the padding on fit
				boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
				avoidOverlap: true, // prevents node overlap, may overflow boundingBox and radius if not enough space
				radius: undefined, // the radius of the circle
				startAngle: 3/2 * Math.PI, // where nodes start in radians
				sweep: undefined, // how many radians should be between the first and last node (defaults to full circle)
				clockwise: true, // whether the layout should go clockwise (true) or counterclockwise/anticlockwise (false)
				sort: undefined, // a sorting function to order the nodes; e.g. function(a, b){ return a.data('weight') - b.data('weight') }
				animate: true, // whether to transition the node positions
				animationDuration: 500, // duration of animation in ms if enabled
				animationEasing: 'ease-in', // easing of animation if enabled
				ready: undefined, // callback on layoutready
				stop: undefined // callback on layoutstop
			},
			{
				id: 6,
				name: 'concentric',
				description: 'The concentric layout positions nodes in concentric circles, based on a metric that you specify to segregate the nodes into levels. This layout sets the concentric value in ele.scratch().',
				value: 'This quickly illustrates the circles of influence within a social network.',
				fit: true, // whether to fit the viewport to the graph
				padding: 30, // the padding on fit
				startAngle: 3 / 2 * Math.PI, // where nodes start in radians
				sweep: undefined, // how many radians should be between the first and last node (defaults to full circle)
				clockwise: true, // whether the layout should go clockwise (true) or counterclockwise/anticlockwise (false)
				equidistant: false, // whether levels have an equal radial distance betwen them, may cause bounding box overflow
				minNodeSpacing: 10, // min spacing between outside of nodes (used for radius adjustment)
				boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
				avoidOverlap: true, // prevents node overlap, may overflow boundingBox if not enough space
				height: undefined, // height of layout area (overrides container height)
				width: undefined, // width of layout area (overrides container width)
				concentric: function(node) { // returns numeric value for each node, placing higher nodes in levels towards the centre
					return node.degree();
				},
				levelWidth: function(nodes) { // the variation of concentric values in each level
					return nodes.maxDegree() / 4;
				},
				animate: true, // whether to transition the node positions
				animationDuration: 500, // duration of animation in ms if enabled
				animationEasing: 'ease-in', // easing of animation if enabled
				ready: undefined, // callback on layoutready
				stop: undefined // callback on layoutstop
			},
			{
				id: 7,
				name: 'dagre',
				description: 'A JavaScript library that makes it easy to lay out directed graphs on the client-side. It renders small directed graphs very efficiently and provides many controls for sophisticated acyclic graphs that include compound trees.',
				value: 'If your network is directed, Dagre can provide some added value to the presentation of the data.',
				// dagre algo options, uses default value on undefined
				nodeSep: undefined, // the separation between adjacent nodes in the same rank
				edgeSep: undefined, // the separation between adjacent edges in the same rank
				rankSep: undefined, // the separation between adjacent nodes in the same rank
				rankDir: 'LR', // 'TB' for top to bottom flow, 'LR' for left to right
				minLen: function( edge ){ return 1; }, // number of ranks to keep between the source and target of the edge
				edgeWeight: function( edge ){ return 1; }, // higher weight edges are generally made shorter and straighter than lower weight edges

				// general layout options
				fit: true, // whether to fit to viewport
				padding: 30, // fit padding
				animate: false, // whether to transition the node positions
				animationDuration: 500, // duration of animation in ms if enabled
				animationEasing: undefined, // easing of animation if enabled
				boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
				ready: function(){}, // on layoutready
				stop: function(){} // on layoutstop
			},

		];
		// var getLayouts = Ember.$.getJSON("layouts.json");
		// var getLesMis = Ember.$.getJSON("les_miserables.json");
		// return Ember.RSVP.all([getLayouts, getLesMis]);
		// return Ember.RSVP.hash({ layoutType: getLayouts, graphData: getLesMis });
	}
	// ,

	// setupController: function(controller, models) {
	// 	controller.set('layoutType', models[0]);
	// 	controller.set('graphData', models[1]);
	// }
});
