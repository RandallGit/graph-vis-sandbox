import Ember from "ember";

export default Ember.Component.extend({
	tagName: '',
	cy: undefined,
	root_node: undefined,
	
	cytoscape_data: function() {
		var ret = {
			nodes: [],
			edges: []
		};

		var first = true;
		var self = this;
		this.get("model").forEach(function(node) {
			if(first) {
				first = false;
				self.set("root_node", node.get("id"));

				ret["nodes"].push({
					data: {
						id: node.get("id"),
						name: node.get("title"),
						tooltip: node.get("intro"),
						node_type: node.get("category").get("type")
					},
					position: {
						//x: node.get("position").get("x"),
						y: 0
					}
				});
			} else {
				ret["nodes"].push({
					data: {
						id: node.get("id"),
						name: node.get("title"),
						tooltip: node.get("intro"),
						node_type: node.get("category").get("type")
					}/*,
					position: {
						x: node.get("position").get("x"),
						y: node.get("position").get("y")
					}*/
				});
			}
			node.get("node_parent").forEach(function(parent) {
				ret["edges"].push({
					data: {
						source: parent.get("id"),
						target: node.get("id")
					}
				});
			});
		});

		return ret;
	}.property("model"),

	didInsertElement: function() {
		this._super();
		Ember.run.scheduleOnce('afterRender', this, function(){
			var self = this;
			Ember.$(window).on("window:resize", function() {
					self.reposition_graph();
				});
			this.reset_graph_panel();
			this.set("cy", cytoscape({
						container: Ember.$('#cy')[0],
						elements: this.get("cytoscape_data"),
						zoom: 1,
						pan: { x: 0, y: 0 },
						zoomingEnabled: false,
						userZoomingEnabled: false,
						panningEnabled: true,
						userPanningEnabled: false,
						autoungrabify: false,
						ready: function() {
							console.log("Graph is ready!");
							self.reset_graph_panel();
							self.style_graph();
							self.reposition_graph();
							self.setup_graph_actions();
							self.get("cy").forceRender();
						}
				}));
		});
	var cy = cytoscape({

	container: document.getElementById('cy'), // container to render in

	elements: [ // list of graph elements to start with
		{ // node a
			data: { id: 'a' }
		},
		{ // node b
			data: { id: 'b' }
		},
		{ // edge ab
			data: { id: 'ab', source: 'a', target: 'b' }
		}
	],

	style: [ // the stylesheet for the graph
		{
			selector: 'node',
			style: {
				'background-color': '#666',
				'label': 'data(id)'
			}
		},

		{
			selector: 'edge',
			style: {
				'width': 3,
				'line-color': '#ccc',
				'target-arrow-color': '#ccc',
				'target-arrow-shape': 'triangle'
			}
		}
	],

	layout: {
		name: 'grid',
		rows: 1
	}

});
	},
	reset_graph_panel: function() {
		var graphPanel = document.getElementById("cy");

		graphPanel.style.width = "100%";
		graphPanel.style.height = 800 + "px";
	},
	loadGraph: function(file) {
				var json = null;
				Ember.$.ajax({
						'async': false,
						'global': false,
						'url': file,
						'dataType': 'json',
						'success': function (data) {
								json = data;
						}
				});
				return json;
		},
		reposition_graph: function() {
			var self = this;
			this.get("cy").autolock(false);
			var width = Ember.$("#cy").width();
			var height = 800;
			var options = {
			name: 'breadthfirst',
			roots: [self.get("root_node")],
			boundingBox: {
				x1: 0,
				y1: 0,
				w: width,
				h: height
			},
			padding: 5,
			spacingFactor: 1

			/*fit: true, // whether to fit the viewport to the graph
			directed: false, // whether the tree is directed downwards (or edges can point in any direction if false)
			padding: 30, // padding on fit
			circle: false, // put depths in concentric circles if true, put depths top down if false
			spacingFactor: 1.75, // positive spacing factor, larger => more space between nodes (N.B. n/a if causes overlap)
			boundingBox: undefined, // constrain layout bounds; { x1, y1, x2, y2 } or { x1, y1, w, h }
			avoidOverlap: true, // prevents node overlap, may overflow boundingBox if not enough space
			roots: undefined, // the roots of the trees
			maximalAdjustments: 0, // how many times to try to position the nodes in a maximal way (i.e. no backtracking)
			animate: false, // whether to transition the node positions
			animationDuration: 500, // duration of animation in ms if enabled
			ready: undefined, // callback on layoutready
			stop: undefined // callback on layoutstop*/
		};
		this.get("cy").layout(options);
		this.get("cy").center();
		options.boundingBox.height = this.get("cy").height();
		//this.get("cy").layout(options);
		this.get("cy").autolock(true);
		this.get("cy").forceRender();
		},
		style_graph: function()  {
			this.get("cy").style()
						.selector('node')
							.css({
								'width': '100px',
								'height': '100px',
								'border-color': 'gray',
								'border-width': 3,
								'border-opacity': 0.5
							})
						.selector('node[node_type = "uvod"]')
							.css({
				'background-image': 'img/nodes/node-start.svg',
				'background-width': '103px',
				'background-height': '103px'
							})
						.selector('node[node_type = "small_p"]')
							.css({
								'background-image': 'img/nodes/node-jelen.png',
								'background-width': '103px',
								'background-height': '103px'
								//'background-color': '#3885C6'
							})
						.selector('node[node_type = "small_t"]')
							.css({
								'background-image': 'img/nodes/node-kufor.png',
								'background-width': '103px',
								'background-height': '103px'
								//'background-color': '#81E877'
							})
						.selector('node[node_type = "big"]')
							.css({
								'background-image': 'img/nodes/node-sova.png',
								'background-width': '103px',
								'background-height': '103px'
								//'background-color': '#FFCC52'
							})
						.selector('node[node_type = "bonus"]')
							.css({
								'background-image': 'img/nodes/node-zem.png',
								'background-width': '103px',
								'background-height': '103px'
								//'background-color': '#7A80FF'
							})
						.selector('edge')
							.css({
								'width': 6,
								'border-color': '#39393a',
								'target-arrow-shape': 'triangle',
								'opacity': 1
							})
						.selector(':selected')
							.css({
								'background-color': 'orange',
								'opacity': 1
							})
						.selector('.faded')
							.css({
								'opacity': 0.0,
								'text-opacity': 0
					}).update();
				//this.get("cy").style(style);
		},
		setup_graph_actions: function() {
			var self = this;
			this.get("cy").cxtmenu({
					selector: 'node',
					commands: [
							{
									content: 'Odevzdání',
									select: function(){
											self.sendAction("sub", this.id());
									}
							},

							{
									content: 'Zadání',
									select: function(){
											self.sendAction('assign', this.id());
									}
							},

							{
									content: 'Statistika',
									select: function(){
											self.sendAction('stat', this.id());
									}
							},

							{
									content: 'Diskuze',
									select: function(){
											self.sendAction('discuss', this.id());
									}
							},

							{
									content: 'Řešení',
									select: function(){
											self.sendAction('solution', this.id());
									}
							}
					]
			});
			this.get("cy").on('mousedown','node', function(event){
			var target = event.cyTarget;
					var id = target.data("id");
					self.sendAction('assign', id);
		});

		this.get("cy").on('mouseover','node', function(event){
					var target = event.cyTarget;
					var id = target.data("id");
					var name = target.data("name");
					var text = target.data("tooltip") + " Pro detaily podrž pravé tlačítko."; //TODO formatovanie textu

					var x=event.cyPosition.x;
					var y=event.cyPosition.y;
					self.get("cy").$('#' + id).qtip({
							content: {
									title: name,
									text: text
							},
							show: {
									event: false,
									ready: true,
									effect:false
							},
							position: {
									my: 'bottom center',
									at: 'top center',
									target: [x+3, y+3],
									adjust: {x:7,y:7}
							},
							hide: {
									fixed: true,
									event: false,
									inactive: 1000
							},
							style: {
									classes: 'qtip-bootstrap',
									tip: {
											width: 16,
											height: 8
									}
							}
					});
			});
		}
});
