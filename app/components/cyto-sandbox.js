import Ember from "ember";

export default Ember.Component.extend({
	tagName: '',
	cy: undefined,
	layoutTypeIndex: 2,
	testPropertyLayoutValue: true,

	layout: Ember.computed('layoutTypeIndex', function() {
		return this.get('layoutType')[this.get('layoutTypeIndex')];
	}),

	layoutChanged: Ember.observer('layout', function() {
		this.load_graph();
	}),

	load_graph: function()  {
		var layout = this.get('layout');
		this.get("cy").layout(layout).forceRender();
	},

	didInsertElement: function() {
		this._super();

		var cy = cytoscape({
			container: document.getElementById('cy'),
			boxSelectionEnabled: false,
			autounselectify: true,
			hideLabelsOnViewport: true,

			layout: this.get('layoutType')[this.get('layoutTypeIndex')],

			style: [{
				selector: 'node',
				css: {
					'content': 'data(label)',
					'text-valign': 'center',
					'text-halign': 'center',
					'font-size': '54px',
					'background-color': '#FFFFFF',
					'border-width': '12px',
					'border-color': '#18679A',
					'transition-property': 'background-color',
					'transition-duration': '750ms',
					'cursor': 'pointer',
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
					'<pos>-arrow-color': '#fff',
					'line-color': '#fff',
					'width': '12px',
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
						'background-color': '#f9a15c',
					}
			}, {
				selector: '.parentnode',
					css: {
						'background-color': '#FF7F00',
					}
			}, {
				selector: 'node[[degree >= 6]]',
				css: {
					'height': '600px',
					'width': '600px',
				}
			}, {
				selector: 'node[[degree >= 2]][[degree <= 5]]',
				css: {
					'height': '400px',
					'width': '400px',
				}
			}, {
				selector: 'node[[degree <= 1]]',
				css: {
					'height': '200px',
					'width': '200px',
				}
			},

		],

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
		cy.on('mouseover', 'node', function () {
			Ember.$('html,body').css('cursor', 'pointer');
		});
		cy.on('mouseout', 'node', function () {
			Ember.$('html,body').css('cursor', 'default');
		});
		// Tapping on a node will select and highlight it's neighbors
		cy.on('tap', 'node', function(e) {
			var node = e.cyTarget;
			var directlyConnected = node.neighborhood();
			directlyConnected.nodes().addClass('connectednodes');
			node.addClass('parentnode');
		});

		this.set('cy', cy);
	},
});
