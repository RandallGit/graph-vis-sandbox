import Ember from "ember";

export default Ember.Component.extend({
	// tagName: '',

	cy: undefined,

	didInsertElement: function() {
		this._super();

		var cy = cytoscape({
			container: document.getElementById('cy'),

			boxSelectionEnabled: false,
			autounselectify: true,
			hideLabelsOnViewport: true,

			style: [{
				selector: 'node',
				css: {
					'content': 'data(label)',
					'text-valign': 'center',
					'text-halign': 'center',
					'font-size': '36px',
					'width': '200px',
					'height': '200px',
					'background-color': '#FFFFFF',
					'border-width': '12px',
					'border-color': '#18679A',
				}
			}, {
				selector: '$node > node',
				css: {
					'padding-top': '30px',
					'padding-left': '30px',
					'padding-bottom': '30px',
					'padding-right': '30px',
					'text-valign': 'top',
					'text-halign': 'center',
				}
			}, {
				selector: 'edge',
				css: {
					'target-arrow-shape': 'triangle',
					// 'line-color': '#18679A',
					'line-color': '#fff',
					'width': '8px',
				}
			}, {
				selector: ':selected',
				css: {
					'background-color': 'black',
					'line-color': 'black',
					'target-arrow-color': 'black',
					'source-arrow-color': 'black'
				}
			}, {
				selector: '.connectednodes',
					css: {
						'background-color': 'magenta',
					}
			}

		],

			layout: {
				// name: 'grid',
				//
				// fit: true, // whether to fit the viewport to the graph
				// padding: 30, // padding used on fit
				// boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
				// avoidOverlap: true, // prevents node overlap, may overflow boundingBox if not enough space
				// avoidOverlapPadding: 10, // extra spacing around nodes when avoidOverlap: true
				// condense: false, // uses all available space on false, uses minimal space on true
				// rows: undefined, // force num of rows in the grid
				// cols: undefined, // force num of columns in the grid
				// position: function( node ){}, // returns { row, col } for element
				// sort: undefined, // a sorting function to order the nodes; e.g. function(a, b){ return a.data('weight') - b.data('weight') }
				// animate: false, // whether to transition the node positions
				// animationDuration: 500, // duration of animation in ms if enabled
				// animationEasing: undefined, // easing of animation if enabled
				// ready: undefined, // callback on layoutready
				// stop: undefined // callback on layoutstop

				// name: 'cose',
				// ready               : function() {},
				// // Called on `layoutstop`
				// stop                : function() {},
				// // Whether to animate while running the layout
				// animate             : true,
				// // The layout animates only after this many milliseconds
				// // (prevents flashing on fast runs)
				// animationThreshold  : 250,
				// // Number of iterations between consecutive screen positions update
				// // (0 -> only updated on the end)
				// refresh             : 20,
				// // Whether to fit the network view after when done
				// fit                 : true,
				// // Padding on fit
				// padding             : 30,
				// // Constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
				// boundingBox         : undefined,
				// // Extra spacing between components in non-compound graphs
				// componentSpacing    : 100,
				// // Node repulsion (non overlapping) multiplier
				// nodeRepulsion       : function( node ){ return 400000; },
				// // Node repulsion (overlapping) multiplier
				// nodeOverlap         : 10,
				// // Ideal edge (non nested) length
				// idealEdgeLength     : function( edge ){ return 10; },
				// // Divisor to compute edge forces
				// edgeElasticity      : function( edge ){ return 100; },
				// // Nesting factor (multiplier) to compute ideal edge length for nested edges
				// nestingFactor       : 5,
				// // Gravity force (constant)
				// gravity             : 80,
				// // Maximum number of iterations to perform
				// numIter             : 1000,
				// // Initial temperature (maximum node displacement)
				// initialTemp         : 200,
				// // Cooling factor (how the temperature is reduced between consecutive iterations
				// coolingFactor       : 0.95,
				// // Lower temperature threshold (below this point the layout will end)
				// minTemp             : 1.0,
				// // Whether to use threading to speed up the layout
				// useMultitasking     : true

				name: 'breadthfirst',

				fit: true, // whether to fit the viewport to the graph
				directed: false, // whether the tree is directed downwards (or edges can point in any direction if false)
				padding: 80, // padding on fit
				circle: false, // put depths in concentric circles if true, put depths top down if false
				spacingFactor: 1, // positive spacing factor, larger => more space between nodes (N.B. n/a if causes overlap)
				boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
				avoidOverlap: true, // prevents node overlap, may overflow boundingBox if not enough space
				roots: undefined, // the roots of the trees
				maximalAdjustments: 0, // how many times to try to position the nodes in a maximal way (i.e. no backtracking)
				animate: false, // whether to transition the node positions
				animationDuration: 500, // duration of animation in ms if enabled
				animationEasing: undefined, // easing of animation if enabled
				ready: undefined, // callback on layoutready
				stop: undefined // callback on layoutstop

				// name: 'circle',
				//
				// fit: true, // whether to fit the viewport to the graph
				// padding: 30, // the padding on fit
				// boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
				// avoidOverlap: true, // prevents node overlap, may overflow boundingBox and radius if not enough space
				// radius: undefined, // the radius of the circle
				// startAngle: 3/2 * Math.PI, // where nodes start in radians
				// sweep: undefined, // how many radians should be between the first and last node (defaults to full circle)
				// clockwise: true, // whether the layout should go clockwise (true) or counterclockwise/anticlockwise (false)
				// sort: undefined, // a sorting function to order the nodes; e.g. function(a, b){ return a.data('weight') - b.data('weight') }
				// animate: false, // whether to transition the node positions
				// animationDuration: 500, // duration of animation in ms if enabled
				// animationEasing: undefined, // easing of animation if enabled
				// ready: undefined, // callback on layoutready
				// stop: undefined // callback on layoutstop

				// name: 'concentric',
				//
				// fit: true, // whether to fit the viewport to the graph
				// padding: 30, // the padding on fit
				// startAngle: 3 / 2 * Math.PI, // where nodes start in radians
				// sweep: undefined, // how many radians should be between the first and last node (defaults to full circle)
				// clockwise: true, // whether the layout should go clockwise (true) or counterclockwise/anticlockwise (false)
				// equidistant: false, // whether levels have an equal radial distance betwen them, may cause bounding box overflow
				// minNodeSpacing: 10, // min spacing between outside of nodes (used for radius adjustment)
				// boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
				// avoidOverlap: true, // prevents node overlap, may overflow boundingBox if not enough space
				// height: undefined, // height of layout area (overrides container height)
				// width: undefined, // width of layout area (overrides container width)
				// concentric: function(node) { // returns numeric value for each node, placing higher nodes in levels towards the centre
				// 	return node.degree();
				// },
				// levelWidth: function(nodes) { // the variation of concentric values in each level
				// 	return nodes.maxDegree() / 4;
				// },
				// animate: false, // whether to transition the node positions
				// animationDuration: 500, // duration of animation in ms if enabled
				// animationEasing: undefined, // easing of animation if enabled
				// ready: undefined, // callback on layoutready
				// stop: undefined // callback on layoutstop

				// name: 'cola',
				// animate: true, // whether to show the layout as it's running
				// refresh: 1, // number of ticks per frame; higher is faster but more jerky
				// maxSimulationTime: 4000, // max length in ms to run the layout
				// ungrabifyWhileSimulating: false, // so you can't drag nodes during layout
				// fit: true, // on every layout reposition of nodes, fit the viewport
				// padding: 30, // padding around the simulation
				// boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
				//
				// // layout event callbacks
				// ready: function(){}, // on layoutready
				// stop: function(){}, // on layoutstop
				//
				// // positioning options
				// randomize: false, // use random node positions at beginning of layout
				// avoidOverlap: true, // if true, prevents overlap of node bounding boxes
				// handleDisconnected: true, // if true, avoids disconnected components from overlapping
				// // nodeSpacing: function( node ){ return 10; }, // extra spacing around nodes
				// flow: undefined, // use DAG/tree flow layout if specified, e.g. { axis: 'y', minSeparation: 30 }
				// alignment: undefined, // relative alignment constraints on nodes, e.g. function( node ){ return { x: 0, y: 1 } }
				//
				// // different methods of specifying edge length
				// // each can be a constant numerical value or a function like `function( edge ){ return 2; }`
				// edgeLength: undefined, // sets edge length directly in simulation
				// edgeSymDiffLength: undefined, // symmetric diff edge length in simulation
				// edgeJaccardLength: undefined, // jaccard edge length in simulation
				//
				// // iterations of cola algorithm; uses default values on undefined
				// unconstrIter: undefined, // unconstrained initial layout iterations
				// userConstIter: undefined, // initial layout iterations with user-specified constraints
				// allConstIter: undefined, // initial layout iterations with all constraints including non-overlap
				//
				// // infinite layout options
				// infinite: false // overrides all other options for a forces-all-the-time mode
			},

			elements: {
				nodes: [
					{
					data: {
						id: "0",
						label: "Beak"
					}
				}, {
					data: {
						id: "1",
						label: "Beescratch"
					}
				}, {
					data: {
						id: "2",
						label: "Bumper"
					}
				}, {
					data: {
						id: "3",
						label: "CCL"
					}
				}, {
					data: {
						id: "4",
						label: "Cross"
					}
				}, {
					data: {
						id: "5",
						label: "DN16"
					}
				}, {
					data: {
						id: "6",
						label: "DN21"
					}
				}, {
					data: {
						id: "7",
						label: "DN63"
					}
				}, {
					data: {
						id: "8",
						label: "Double"
					}
				}, {
					data: {
						id: "9",
						label: "Feather"
					}
				}, {
					data: {
						id: "10",
						label: "Fish"
					}
				}, {
					data: {
						id: "11",
						label: "Five"
					}
				}, {
					data: {
						id: "12",
						label: "Fork"
					}
				}, {
					data: {
						id: "13",
						label: "Gallatin"
					}
				}, {
					data: {
						id: "14",
						label: "Grin"
					}
				}, {
					data: {
						id: "15",
						label: "Haecksel"
					}
				}, {
					data: {
						id: "16",
						label: "Hook"
					}
				}, {
					data: {
						id: "17",
						label: "Jet"
					}
				}, {
					data: {
						id: "18",
						label: "Jonah"
					}
				}, {
					data: {
						id: "19",
						label: "Knit"
					}
				}, {
					data: {
						id: "20",
						label: "Kringel"
					}
				}, {
					data: {
						id: "21",
						label: "MN105"
					}
				}, {
					data: {
						id: "22",
						label: "MN23"
					}
				}, {
					data: {
						id: "23",
						label: "MN60"
					}
				}, {
					data: {
						id: "24",
						label: "MN83"
					}
				}, {
					data: {
						id: "25",
						label: "Mus"
					}
				}, {
					data: {
						id: "26",
						label: "Notch"
					}
				}, {
					data: {
						id: "27",
						label: "Number1"
					}
				}, {
					data: {
						id: "28",
						label: "Oscar"
					}
				}, {
					data: {
						id: "29",
						label: "Patchback"
					}
				}, {
					data: {
						id: "30",
						label: "PL"
					}
				}, {
					data: {
						id: "31",
						label: "Quasi"
					}
				}, {
					data: {
						id: "32",
						label: "Ripplefluke"
					}
				}, {
					data: {
						id: "33",
						label: "Scabs"
					}
				}, {
					data: {
						id: "34",
						label: "Shmuddel"
					}
				}, {
					data: {
						id: "35",
						label: "SMN5"
					}
				}, {
					data: {
						id: "36",
						label: "SN100"
					}
				}, {
					data: {
						id: "37",
						label: "SN4"
					}
				}, {
					data: {
						id: "38",
						label: "SN63"
					}
				}, {
					data: {
						id: "39",
						label: "SN89"
					}
				}, {
					data: {
						id: "40",
						label: "SN9"
					}
				}, {
					data: {
						id: "41",
						label: "SN90"
					}
				}, {
					data: {
						id: "42",
						label: "SN96"
					}
				}, {
					data: {
						id: "43",
						label: "Stripes"
					}
				}, {
					data: {
						id: "44",
						label: "Thumper"
					}
				}, {
					data: {
						id: "45",
						label: "Topless"
					}
				}, {
					data: {
						id: "46",
						label: "TR120"
					}
				}, {
					data: {
						id: "47",
						label: "TR77"
					}
				}, {
					data: {
						id: "48",
						label: "TR82"
					}
				}, {
					data: {
						id: "49",
						label: "TR88"
					}
				}, {
					data: {
						id: "50",
						label: "TR99"
					}
				}, {
					data: {
						id: "51",
						label: "Trigger"
					}
				}, {
					data: {
						id: "52",
						label: "TSN103"
					}
				}, {
					data: {
						id: "53",
						label: "TSN83"
					}
				}, {
					data: {
						id: "54",
						label: "Upbang"
					}
				}, {
					data: {
						id: "55",
						label: "Vau"
					}
				}, {
					data: {
						id: "56",
						label: "Wave"
					}
				}, {
					data: {
						id: "57",
						label: "Web"
					}
				}, {
					data: {
						id: "58",
						label: "Whitetip"
					}
				}, {
					data: {
						id: "59",
						label: "Zap"
					}
				}, {
					data: {
						id: "60",
						label: "Zig"
					}
				}, {
					data: {
						id: "61",
						label: "Zipfel"
					}
				} ],
				edges: [
					{
					data: {
						source: '8',
						target: '3'
					}
				}, {
					data: {
						source: '9',
						target: '5'
					}
				}, {
					data: {
						source: '9',
						target: '6'
					}
				}, {
					data: {
						source: '10',
						target: '0'
					}
				}, {
					data: {
						source: '10',
						target: '2'
					}
				}, {
					data: {
						source: '13',
						target: '5'
					}
				}, {
					data: {
						source: '13',
						target: '6'
					}
				}, {
					data: {
						source: '13',
						target: '9'
					}
				}, {
					data: {
						source: '14',
						target: '0'
					}
				}, {
					data: {
						source: '14',
						target: '3'
					}
				}, {
					data: {
						source: '15',
						target: '0'
					}
				}, {
					data: {
						source: '16',
						target: '14'
					}
				}, {
					data: {
						source: '17',
						target: '1'
					}
				}, {
					data: {
						source: '17',
						target: '6'
					}
				}, {
					data: {
						source: '17',
						target: '9'
					}
				}, {
					data: {
						source: '17',
						target: '13'
					}
				}, {
					data: {
						source: '18',
						target: '15'
					}
				}, {
					data: {
						source: '19',
						target: '1'
					}
				}, {
					data: {
						source: '19',
						target: '7'
					}
				}, {
					data: {
						source: '20',
						target: '8'
					}
				}, {
					data: {
						source: '20',
						target: '16'
					}
				}, {
					data: {
						source: '20',
						target: '18'
					}
				}, {
					data: {
						source: '21',
						target: '18'
					}
				}, {
					data: {
						source: '22',
						target: '17'
					}
				}, {
					data: {
						source: '24',
						target: '14'
					}
				}, {
					data: {
						source: '24',
						target: '15'
					}
				}, {
					data: {
						source: '24',
						target: '18'
					}
				}, {
					data: {
						source: '25',
						target: '17'
					}
				}, {
					data: {
						source: '26',
						target: '1'
					}
				}, {
					data: {
						source: '26',
						target: '25'
					}
				}, {
					data: {
						source: '27',
						target: '1'
					}
				}, {
					data: {
						source: '27',
						target: '7'
					}
				}, {
					data: {
						source: '27',
						target: '17'
					}
				}, {
					data: {
						source: '27',
						target: '25'
					}
				}, {
					data: {
						source: '27',
						target: '26'
					}
				}, {
					data: {
						source: '28',
						target: '1'
					}
				}, {
					data: {
						source: '28',
						target: '8'
					}
				}, {
					data: {
						source: '28',
						target: '20'
					}
				}, {
					data: {
						source: '29',
						target: '10'
					}
				}, {
					data: {
						source: '29',
						target: '18'
					}
				}, {
					data: {
						source: '29',
						target: '21'
					}
				}, {
					data: {
						source: '29',
						target: '24'
					}
				}, {
					data: {
						source: '30',
						target: '7'
					}
				}, {
					data: {
						source: '30',
						target: '19'
					}
				}, {
					data: {
						source: '30',
						target: '28'
					}
				}, {
					data: {
						source: '31',
						target: '17'
					}
				}, {
					data: {
						source: '32',
						target: '9'
					}
				}, {
					data: {
						source: '32',
						target: '13'
					}
				}, {
					data: {
						source: '33',
						target: '12'
					}
				}, {
					data: {
						source: '33',
						target: '14'
					}
				}, {
					data: {
						source: '33',
						target: '16'
					}
				}, {
					data: {
						source: '33',
						target: '21'
					}
				}, {
					data: {
						source: '34',
						target: '14'
					}
				}, {
					data: {
						source: '34',
						target: '33'
					}
				}, {
					data: {
						source: '35',
						target: '29'
					}
				}, {
					data: {
						source: '36',
						target: '1'
					}
				}, {
					data: {
						source: '36',
						target: '20'
					}
				}, {
					data: {
						source: '36',
						target: '23'
					}
				}, {
					data: {
						source: '37',
						target: '8'
					}
				}, {
					data: {
						source: '37',
						target: '14'
					}
				}, {
					data: {
						source: '37',
						target: '16'
					}
				}, {
					data: {
						source: '37',
						target: '21'
					}
				}, {
					data: {
						source: '37',
						target: '33'
					}
				}, {
					data: {
						source: '37',
						target: '34'
					}
				}, {
					data: {
						source: '37',
						target: '36'
					}
				}, {
					data: {
						source: '38',
						target: '14'
					}
				}, {
					data: {
						source: '38',
						target: '16'
					}
				}, {
					data: {
						source: '38',
						target: '20'
					}
				}, {
					data: {
						source: '38',
						target: '33'
					}
				}, {
					data: {
						source: '39',
						target: '36'
					}
				}, {
					data: {
						source: '40',
						target: '0'
					}
				}, {
					data: {
						source: '40',
						target: '7'
					}
				}, {
					data: {
						source: '40',
						target: '14'
					}
				}, {
					data: {
						source: '40',
						target: '15'
					}
				}, {
					data: {
						source: '40',
						target: '33'
					}
				}, {
					data: {
						source: '40',
						target: '36'
					}
				}, {
					data: {
						source: '40',
						target: '37'
					}
				}, {
					data: {
						source: '41',
						target: '1'
					}
				}, {
					data: {
						source: '41',
						target: '9'
					}
				}, {
					data: {
						source: '41',
						target: '13'
					}
				}, {
					data: {
						source: '42',
						target: '0'
					}
				}, {
					data: {
						source: '42',
						target: '2'
					}
				}, {
					data: {
						source: '42',
						target: '10'
					}
				}, {
					data: {
						source: '42',
						target: '30'
					}
				}, {
					data: {
						source: '43',
						target: '14'
					}
				}, {
					data: {
						source: '43',
						target: '29'
					}
				}, {
					data: {
						source: '43',
						target: '33'
					}
				}, {
					data: {
						source: '43',
						target: '37'
					}
				}, {
					data: {
						source: '43',
						target: '38'
					}
				}, {
					data: {
						source: '44',
						target: '2'
					}
				}, {
					data: {
						source: '44',
						target: '20'
					}
				}, {
					data: {
						source: '44',
						target: '34'
					}
				}, {
					data: {
						source: '44',
						target: '38'
					}
				}, {
					data: {
						source: '45',
						target: '8'
					}
				}, {
					data: {
						source: '45',
						target: '15'
					}
				}, {
					data: {
						source: '45',
						target: '18'
					}
				}, {
					data: {
						source: '45',
						target: '21'
					}
				}, {
					data: {
						source: '45',
						target: '23'
					}
				}, {
					data: {
						source: '45',
						target: '24'
					}
				}, {
					data: {
						source: '45',
						target: '29'
					}
				}, {
					data: {
						source: '45',
						target: '37'
					}
				}, {
					data: {
						source: '46',
						target: '43'
					}
				}, {
					data: {
						source: '47',
						target: '0'
					}
				}, {
					data: {
						source: '47',
						target: '10'
					}
				}, {
					data: {
						source: '47',
						target: '20'
					}
				}, {
					data: {
						source: '47',
						target: '28'
					}
				}, {
					data: {
						source: '47',
						target: '30'
					}
				}, {
					data: {
						source: '47',
						target: '42'
					}
				}, {
					data: {
						source: '49',
						target: '34'
					}
				}, {
					data: {
						source: '49',
						target: '46'
					}
				}, {
					data: {
						source: '50',
						target: '14'
					}
				}, {
					data: {
						source: '50',
						target: '16'
					}
				}, {
					data: {
						source: '50',
						target: '20'
					}
				}, {
					data: {
						source: '50',
						target: '33'
					}
				}, {
					data: {
						source: '50',
						target: '42'
					}
				}, {
					data: {
						source: '50',
						target: '45'
					}
				}, {
					data: {
						source: '51',
						target: '4'
					}
				}, {
					data: {
						source: '51',
						target: '11'
					}
				}, {
					data: {
						source: '51',
						target: '18'
					}
				}, {
					data: {
						source: '51',
						target: '21'
					}
				}, {
					data: {
						source: '51',
						target: '23'
					}
				}, {
					data: {
						source: '51',
						target: '24'
					}
				}, {
					data: {
						source: '51',
						target: '29'
					}
				}, {
					data: {
						source: '51',
						target: '45'
					}
				}, {
					data: {
						source: '51',
						target: '50'
					}
				}, {
					data: {
						source: '52',
						target: '14'
					}
				}, {
					data: {
						source: '52',
						target: '29'
					}
				}, {
					data: {
						source: '52',
						target: '38'
					}
				}, {
					data: {
						source: '52',
						target: '40'
					}
				}, {
					data: {
						source: '53',
						target: '43'
					}
				}, {
					data: {
						source: '54',
						target: '1'
					}
				}, {
					data: {
						source: '54',
						target: '6'
					}
				}, {
					data: {
						source: '54',
						target: '7'
					}
				}, {
					data: {
						source: '54',
						target: '13'
					}
				}, {
					data: {
						source: '54',
						target: '19'
					}
				}, {
					data: {
						source: '54',
						target: '41'
					}
				}, {
					data: {
						source: '55',
						target: '15'
					}
				}, {
					data: {
						source: '55',
						target: '51'
					}
				}, {
					data: {
						source: '56',
						target: '5'
					}
				}, {
					data: {
						source: '56',
						target: '6'
					}
				}, {
					data: {
						source: '57',
						target: '5'
					}
				}, {
					data: {
						source: '57',
						target: '6'
					}
				}, {
					data: {
						source: '57',
						target: '9'
					}
				}, {
					data: {
						source: '57',
						target: '13'
					}
				}, {
					data: {
						source: '57',
						target: '17'
					}
				}, {
					data: {
						source: '57',
						target: '39'
					}
				}, {
					data: {
						source: '57',
						target: '41'
					}
				}, {
					data: {
						source: '57',
						target: '48'
					}
				}, {
					data: {
						source: '57',
						target: '54'
					}
				}, {
					data: {
						source: '58',
						target: '38'
					}
				}, {
					data: {
						source: '59',
						target: '3'
					}
				}, {
					data: {
						source: '59',
						target: '8'
					}
				}, {
					data: {
						source: '59',
						target: '15'
					}
				}, {
					data: {
						source: '59',
						target: '36'
					}
				}, {
					data: {
						source: '59',
						target: '45'
					}
				}, {
					data: {
						source: '60',
						target: '32'
					}
				}, {
					data: {
						source: '61',
						target: '2'
					}
				}, {
					data: {
						source: '61',
						target: '37'
					}
				}, {
					data: {
						source: '61',
						target: '53'
					}
				}, ]
			},
		});
		cy.on('tap', 'node', function(e) {
			var node = e.cyTarget;
			var directlyConnected = node.neighborhood();
			directlyConnected.nodes().addClass('connectednodes');
		});
	},
});
