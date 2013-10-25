





locations = [
{ title: "Magellan's Voyage", next: "/seville" , blurb: "Magellan was an explorer!"}
{ title: "Seville", next: "/canaryislands", blurb: "I hear a barber lives here." },
{ title: "Canary Islands", next: "/capeverde", blurb: "The canary islands have lots of birds."},
{ title: "Cape Verde", next: "/straitofmagellan", blurb: "Verde means green."},
{ title: "Strait of Magellan", next: "/guam", blurb: "It's named after some explorer guy."},
{ title: "Guam", next: "/phillipines", blurb: "Lots of places claim to be hotter than it is here."},
{ title: "Phillipines", next: "/", blurb: "Last stop."}
]

//what we did to get one:
exports.index = function(req, res){
  res.render('index', { title: "Magellan's Voyage", next: "/seville" , blurb: "Magellan was an explorer!"});
};

//what we can do to access a bunch:
exports.index = function(req, res){
  res.render('index', locations[0]);
};
