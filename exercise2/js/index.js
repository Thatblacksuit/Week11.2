$(document).on("pagecreate","#pageone", onPageCreated);

//some example data
fruit = [
  { name: 'Banana', 	colour: 'Yellow',	cost: '50p',	country: 'Madagascar'},
  { name: 'Orange',  colour: 'Orange', cost:'40p',	country:'Kenya'},
  { name: 'Lime',	colour: 'Green',	cost:'30p',	country: 'United States'}
];


function onPageCreated() {
	var ractive = new Ractive({
		  // The `el` option can be a node, an ID, or a CSS selector.
		  el: '#content',
	
		  // We could pass in a string, but for the sake of convenience
		  // we're passing the ID of the <script> tag above.
	  template: '#template',
	
		  // Here, we're passing in some initial data
		  data: { fruitlist: fruit }
		});
}