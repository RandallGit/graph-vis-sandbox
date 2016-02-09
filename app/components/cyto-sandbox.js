import Ember from "ember";

export default Ember.Component.extend({
	tagName: '',
	cy: undefined,

	didInsertElement: function() {
		this._super();
		// Ember.run.scheduleOnce('afterRender', this, function(){
		// 	var self = this;
		// 	// this.reset_graph_panel();
		// 	this.set("cy", cytoscape({
		// 				container: Ember.$('#cy')[0],
		// 				// elements: this.get("cytoscape_data"),
		// 				// zoom: 1,
		// 				// pan: { x: 0, y: 0 },
		// 				// zoomingEnabled: false,
		// 				// userZoomingEnabled: false,
		// 				// panningEnabled: true,
		// 				// userPanningEnabled: false,
		// 				// autoungrabify: false,
		// 				ready: function() {
		// 					console.log("Graph is ready!");
		// 					// self.reset_graph_panel();
		// 					// self.style_graph();
		// 					// self.reposition_graph();
		// 					// self.setup_graph_actions();
		// 					// self.get("cy").forceRender();
		// 				}
		// 		}));
		// });
		var cy = cytoscape({

		container: document.getElementById('cy'),

		boxSelectionEnabled: false,
		autounselectify: true,

		style: [
			{
				selector: 'node',
				css: {
					'content': 'data(id)',
					'text-valign': 'center',
					'text-halign': 'center'
				}
			},
			{
				selector: '$node > node',
				css: {
					'padding-top': '10px',
					'padding-left': '10px',
					'padding-bottom': '10px',
					'padding-right': '10px',
					'text-valign': 'top',
					'text-halign': 'center',
					'background-color': '#bbb'
				}
			},
			{
				selector: 'edge',
				css: {
					'target-arrow-shape': 'triangle'
				}
			},
			{
				selector: ':selected',
				css: {
					'background-color': 'black',
					'line-color': 'black',
					'target-arrow-color': 'black',
					'source-arrow-color': 'black'
				}
			}
		],

		elements: {
			nodes: [
				{ data: { id: 'a', parent: 'b' }, position: { x: 215, y: 85 } },
				{ data: { id: 'b' } },
				{ data: { id: 'c', parent: 'b' }, position: { x: 300, y: 85 } },
				{ data: { id: 'd' }, position: { x: 215, y: 175 } },
				{ data: { id: 'e' } },
				{ data: { id: 'f', parent: 'e' }, position: { x: 300, y: 175 } }
			],
			edges: [
				{ data: { id: 'ad', source: 'a', target: 'd' } },
				{ data: { id: 'eb', source: 'e', target: 'b' } }

			]
		},

		layout: {
			name: 'grid',
			padding: 30, // the padding on fit
			// startAngle: 3/2 * Math.PI, // where nodes start in radians
			// sweep: undefined, // how many radians should be between the first and last node (defaults to full circle)
			// clockwise: true, // whether the layout should go clockwise (true) or counterclockwise/anticlockwise (false)
			// equidistant: false, // whether levels have an equal radial distance betwen them, may cause bounding box overflow
			// minNodeSpacing: 10, // min spacing between outside of nodes (used for radius adjustment)
			// boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
			// avoidOverlap: true, // prevents node overlap, may overflow boundingBox if not enough space
			// height: undefined, // height of layout area (overrides container height)
			// width: undefined, // width of layout area (overrides container width)
			// concentric: function(node){ // returns numeric value for each node, placing higher nodes in levels towards the centre
			// 	return node.degree();
			// },
			// levelWidth: function(nodes){ // the variation of concentric values in each level
			// 	return nodes.maxDegree() / 4;
			// },
			// animate: false, // whether to transition the node positions
			// animationDuration: 500, // duration of animation in ms if enabled
			// animationEasing: undefined, // easing of animation if enabled
			// ready: undefined, // callback on layoutready
			// stop: undefined // callback on layoutstop
		}
	});
}

		// Ember.run.scheduleOnce('afterRender', this, function(){
		// 	var self = this;
		// 	Ember.$(window).on("window:resize", function() {
		// 			self.reposition_graph();
		// 		});
		// 	this.reset_graph_panel();
		// 	this.set("cy", cytoscape({
		// 				container: Ember.$('#cy')[0],
		// 				elements: this.get("cytoscape_data"),
		// 				zoom: 1,
		// 				pan: { x: 0, y: 0 },
		// 				zoomingEnabled: false,
		// 				userZoomingEnabled: false,
		// 				panningEnabled: true,
		// 				userPanningEnabled: false,
		// 				autoungrabify: false,
		// 				ready: function() {
		// 					console.log("Graph is ready!");
		// 					self.reset_graph_panel();
		// 					self.style_graph();
		// 					self.reposition_graph();
		// 					self.setup_graph_actions();
		// 					self.get("cy").forceRender();
		// 				}
		// 		}));
		// });
	// var cy = cytoscape({
	//
	// container: document.getElementById('cy'), // container to render in

// 	elements: [ // list of graph elements to start with
// 		{ // node a
// 			data: { id: 'a' }
// 		},
// 		{ // node b
// 			data: { id: 'b' }
// 		},
// 		{ // edge ab
// 			data: { id: 'ab', source: 'a', target: 'b' }
// 		}
// 	],
//
// 	style: [ // the stylesheet for the graph
// 		{
// 			selector: 'node',
// 			style: {
// 				'background-color': '#666',
// 				'label': 'data(id)'
// 			}
// 		},
//
// 		{
// 			selector: 'edge',
// 			style: {
// 				'width': 3,
// 				'line-color': '#ccc',
// 				'target-arrow-color': '#ccc',
// 				'target-arrow-shape': 'triangle'
// 			}
// 		}
// 	],
//
// 	layout: {
// 		name: 'grid',
// 		rows: 1
// 	}
//
// });
	// },
	// reset_graph_panel: function() {
	// 	var graphPanel = document.getElementById("cy");
	//
	// 	graphPanel.style.width = "100%";
	// 	graphPanel.style.height = 800 + "px";
	// },
	// loadGraph: function(file) {
	// 			var json = null;
	// 			Ember.$.ajax({
	// 					'async': false,
	// 					'global': false,
	// 					'url': file,
	// 					'dataType': 'json',
	// 					'success': function (data) {
	// 							json = data;
	// 					}
	// 			});
	// 			return json;
	// 	},
	// 	reposition_graph: function() {
	// 		var self = this;
	// 		this.get("cy").autolock(false);
	// 		var width = Ember.$("#cy").width();
	// 		var height = 800;
	// 		var options = {
	// 		name: 'breadthfirst',
	// 		roots: [self.get("root_node")],
	// 		boundingBox: {
	// 			x1: 0,
	// 			y1: 0,
	// 			w: width,
	// 			h: height
	// 		},
	// 		padding: 5,
	// 		spacingFactor: 1
	//
	// 		/*fit: true, // whether to fit the viewport to the graph
	// 		directed: false, // whether the tree is directed downwards (or edges can point in any direction if false)
	// 		padding: 30, // padding on fit
	// 		circle: false, // put depths in concentric circles if true, put depths top down if false
	// 		spacingFactor: 1.75, // positive spacing factor, larger => more space between nodes (N.B. n/a if causes overlap)
	// 		boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
	// 		avoidOverlap: true, // prevents node overlap, may overflow boundingBox if not enough space
	// 		roots: undefined, // the roots of the trees
	// 		maximalAdjustments: 0, // how many times to try to position the nodes in a maximal way (i.e. no backtracking)
	// 		animate: false, // whether to transition the node positions
	// 		animationDuration: 500, // duration of animation in ms if enabled
	// 		ready: undefined, // callback on layoutready
	// 		stop: undefined // callback on layoutstop*/
	// 	};
	// 	this.get("cy").layout(options);
	// 	this.get("cy").center();
	// 	options.boundingBox.height = this.get("cy").height();
	// 	//this.get("cy").layout(options);
	// 	this.get("cy").autolock(true);
	// 	this.get("cy").forceRender();
	// 	},
	// 	style_graph: function()  {
	// 		this.get("cy").style()
	// 					.selector('node')
	// 						.css({
	// 							'width': '100px',
	// 							'height': '100px',
	// 							'border-color': 'gray',
	// 							'border-width': 3,
	// 							'border-opacity': 0.5
	// 						})
	// 					.selector('node[node_type = "uvod"]')
	// 						.css({
	// 			'background-image': 'img/nodes/node-start.svg',
	// 			'background-width': '103px',
	// 			'background-height': '103px'
	// 						})
	// 					.selector('node[node_type = "small_p"]')
	// 						.css({
	// 							'background-image': 'img/nodes/node-jelen.png',
	// 							'background-width': '103px',
	// 							'background-height': '103px'
	// 							//'background-color': '#3885C6'
	// 						})
	// 					.selector('node[node_type = "small_t"]')
	// 						.css({
	// 							'background-image': 'img/nodes/node-kufor.png',
	// 							'background-width': '103px',
	// 							'background-height': '103px'
	// 							//'background-color': '#81E877'
	// 						})
	// 					.selector('node[node_type = "big"]')
	// 						.css({
	// 							'background-image': 'img/nodes/node-sova.png',
	// 							'background-width': '103px',
	// 							'background-height': '103px'
	// 							//'background-color': '#FFCC52'
	// 						})
	// 					.selector('node[node_type = "bonus"]')
	// 						.css({
	// 							'background-image': 'img/nodes/node-zem.png',
	// 							'background-width': '103px',
	// 							'background-height': '103px'
	// 							//'background-color': '#7A80FF'
	// 						})
	// 					.selector('edge')
	// 						.css({
	// 							'width': 6,
	// 							'border-color': '#39393a',
	// 							'target-arrow-shape': 'triangle',
	// 							'opacity': 1
	// 						})
	// 					.selector(':selected')
	// 						.css({
	// 							'background-color': 'orange',
	// 							'opacity': 1
	// 						})
	// 					.selector('.faded')
	// 						.css({
	// 							'opacity': 0.0,
	// 							'text-opacity': 0
	// 				}).update();
	// 			//this.get("cy").style(style);
	// 	},
	// 	setup_graph_actions: function() {
	// 		var self = this;
	// 		this.get("cy").cxtmenu({
	// 				selector: 'node',
	// 				commands: [
	// 						{
	// 								content: 'Odevzdání',
	// 								select: function(){
	// 										self.sendAction("sub", this.id());
	// 								}
	// 						},
	//
	// 						{
	// 								content: 'Zadání',
	// 								select: function(){
	// 										self.sendAction('assign', this.id());
	// 								}
	// 						},
	//
	// 						{
	// 								content: 'Statistika',
	// 								select: function(){
	// 										self.sendAction('stat', this.id());
	// 								}
	// 						},
	//
	// 						{
	// 								content: 'Diskuze',
	// 								select: function(){
	// 										self.sendAction('discuss', this.id());
	// 								}
	// 						},
	//
	// 						{
	// 								content: 'Řešení',
	// 								select: function(){
	// 										self.sendAction('solution', this.id());
	// 								}
	// 						}
	// 				]
	// 		});
	// 		this.get("cy").on('mousedown','node', function(event){
	// 		var target = event.cyTarget;
	// 				var id = target.data("id");
	// 				self.sendAction('assign', id);
	// 	});
	//
	// 	this.get("cy").on('mouseover','node', function(event){
	// 				var target = event.cyTarget;
	// 				var id = target.data("id");
	// 				var name = target.data("name");
	// 				var text = target.data("tooltip") + " Pro detaily podrž pravé tlačítko."; //TODO formatovanie textu
	//
	// 				var x=event.cyPosition.x;
	// 				var y=event.cyPosition.y;
	// 				self.get("cy").$('#' + id).qtip({
	// 						content: {
	// 								title: name,
	// 								text: text
	// 						},
	// 						show: {
	// 								event: false,
	// 								ready: true,
	// 								effect:false
	// 						},
	// 						position: {
	// 								my: 'bottom center',
	// 								at: 'top center',
	// 								target: [x+3, y+3],
	// 								adjust: {x:7,y:7}
	// 						},
	// 						hide: {
	// 								fixed: true,
	// 								event: false,
	// 								inactive: 1000
	// 						},
	// 						style: {
	// 								classes: 'qtip-bootstrap',
	// 								tip: {
	// 										width: 16,
	// 										height: 8
	// 								}
	// 						}
	// 				});
	// 		});
	// 	}
});
