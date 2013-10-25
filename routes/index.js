
/*
 * GET home page.
 */

var locations = {
landing : { title: "Magellan's Voyage", next: "seville" , blurb: "Magellan was an explorer!"},
seville: { title: "Seville", next: "canary", blurb: "I hear a barber lives here." },
canary: { title: "Canary Islands", next: "capeverde", blurb: "The canary islands have lots of birds."},
capeverde: { title: "Cape Verde", next: "straitofmagellan", blurb: "Verde means green."},
straitofmagellan: { title: "Strait of Magellan", next: "guam", blurb: "It's named after some explorer guy."},
guam: { title: "Guam", next: "phillipines", blurb: "Lots of places claim to be hotter than it is here."},
phillipines: { title: "Phillipines", next: "landing", blurb: "Last stop."}
}

// var i = locations[0]

// exports.index = function(req, res){
//   res.render('index', locations[i]);
// };

exports.index = function(req, res){
  res.render('index', locations["landing"]);
};

exports.getlocation = function(req,res) {
	var location = req.query.location;
	res.send(locations[location]);
	//res.send(location);

};

