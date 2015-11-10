/* global angular, document */

var app = angular.module("musicApp", []).config(function($sceProvider) {
  $sceProvider.enabled(false);
});

// bottom stories
app.controller("StoriesController", function($scope, $window) {
  $scope.stories =
  [
    {
      title: "Asheville's Music Heritage",
      youtube: "7cpk7PTN7xA",
      caption: "The sounds of bluegrass and old-time music have their roots in the Appalachian mountain region around Asheville, N.C., where visitors can hear live music any night of the week. Asheville’s many festivals and diverse venues keep the area’s musical heritage alive and make it a unique destination for lovers of both traditional and contemporary music.",
      URL: "http://www.exploreasheville.com/iconic-asheville/music-heritage/",
      subhead: "Making Music in the Blue Ridge Mountains",
      featured: true,
      type: "story"
    },
    {
      title: "Buskers",
      image: "flat-iron.jpg",
      caption: "Lorem ipsum dolor sit amet, vis elit minim molestie ei, eu nobis legendos qui. Quo at legendos lobortis assueverit, illud impedit ponderum ne mei. Has modus labore democritum ad, mea in probo dicunt, quis quaerendum vim an. Ei est fierent noluisse menandri.",
      URL: "http://www.exploreasheville.com/see-do/music/",
      subhead: "Buskers Subhead",
      featured: true,
      type: "story"
    },
    {
      title: "The Orange Peel",
      image: "orange-peel.jpg",
      caption: "Lorem ipsum dolor sit amet, vis elit minim molestie ei, eu nobis legendos qui. Quo at legendos lobortis assueverit, illud impedit ponderum ne mei. Has modus labore democritum ad, mea in probo dicunt, quis quaerendum vim an. Ei est fierent noluisse menandri.",
      URL: "http://www.exploreasheville.com/see-do/music/",
      subhead: "Learn more about the Orange Peel",
      featured: true,
      type: "story"
    },
    {
      title: "Street Scene",
      image: "pack-square-singing.jpg",
      caption: "Lorem ipsum dolor sit amet, vis elit minim molestie ei, eu nobis legendos qui. Quo at legendos lobortis assueverit, illud impedit ponderum ne mei. Has modus labore democritum ad, mea in probo dicunt, quis quaerendum vim an. Ei est fierent noluisse menandri.",
      URL: "http://www.exploreasheville.com/see-do/music/",
      subhead: "Street Scene Subhead",
      featured: true,
      type: "story"
    },
    {
      title: "Bluegrass to Newgrass to Nograss",
      image: "bluegrass-at-isis.jpg",
      caption: "A progressive and collaborative arts community, Asheville's modern music scene melds old and new with surprising ease. Music permeates the city from the street musicians who serenade you downtown, to multi-generation bluegrass jam sessions, to a rock club named one of the best in the country by Rolling Stone.",
      URL: "http://www.exploreasheville.com/iconic-asheville/music-heritage/",
      subhead: "Learn more about Asheville's music scene.",
      featured: false,
      type: "story"
    },
    {
      title: "Shopping",
      image: "drum-circle-square.jpg",
      caption: "Every street downtown leads to a treasure-trove of music businesses that could only flourish in Asheville. There is a diverse mix of record shops, along with specialty stores like clothing and music merchandise, and electronics.",
      URL: "http://www.exploreasheville.com/see-do/music/music-shopping/",
      subhead: "Check out Asheville music stores.",
      featured: false,
      type: "deal"
    },
    {
      title: "Evolution of Mountain Music",
      image: "musical-instruments.jpg",
      caption: "Asheville's musical legacy has deep roots. The story begins with Scotch-Irish immigrants who settled Western North Carolina because the mountains and rolling hills reminded them of home. They brought their haunting melodies and traditional ballads and influenced the local music scene for centuries to come.",
      URL: "http://www.exploreasheville.com/iconic-asheville/music-heritage/",
      subhead: "Learn more about Asheville's music history.",
      featured: false,
      type: "story"
    },
    {
      title: "Music Itineraries",
      image: "jam-session-at-the-millroom.jpg",
      caption: "Enjoy the unique traditions of the Festival of Native Peoples in Cherokee or listen to the indie bands at the Lexington Avenue Arts &amp; Fun Festival. Whatever your musical tastes, Asheville's music festivals provide another compelling mix of musical sounds.",
      URL: "http://www.exploreasheville.com/music-scene/itineraries/",
      subhead: "Check out recommended music itineraries.",
      featured: false,
      type: "itinerary"
    },
    {
      title: "Listen/Watch",
      image: "live-stream.jpg",
      caption: "Today, Asheville's music scene is all encompassing. Traditional mountain music still rings out from national artists such as David Holt and Laura Boosinger who live in the area. Classical music from the Asheville Symphony Orchestra fills the Thomas Wolfe Auditorium throughout the year.",
      URL: "http://www.exploreasheville.com/see-do/music/music-venues/",
      subhead: "View Asheville music videos.",
      featured: false,
      type: "story"
    },
    {
      title: "Festivals",
      image: "festivals.jpg",
      caption: "From the local and national acts that performed at Moogfest and Mountain Oasis, to the global performers at July's Folkmoot festival in nearby Waynesville, the Asheville area's summer music festivals are as eclectic as the city itself.",
      URL: "http://www.exploreasheville.com/see-do/music/music-festivals/",
      subhead: "See upcoming music festivals in Asheville.",
      featured: false,
      type: "story"
    },
    {
      title: "Venues",
      image: "venues.jpg",
      caption: "Asheville's thriving music scene means that literally hundreds of bands and musicians make their way through the city during the year. The best way to tap into Asheville's live music is to experience it first-hand at one of our local venues.",
      URL: "http://www.exploreasheville.com/see-do/music/music-venues/",
      subhead: "Find out where to see live music.",
      featured: true,
      type: "story"
    }
  ];

  // Random sorting
  // -> Fisher–Yates shuffle algorithm
  var shuffleArray = function(array) {
    var m = array.length, t, i;

    // While there remain elements to shuffle
    while (m) {
      // Pick a remaining element...
      i = Math.floor(Math.random() * m--);

      // And swap it with the current element.
      t = array[m];
      array[m] = array[i];
      array[i] = t;
    }

    return array;
  }
  shuffleArray($scope.stories);

  
  // URL strings
  $scope.imageURL = "/images/";
  $scope.youtubeURL = "https://www.youtube.com/embed/";
  $scope.youtubeOptions = "?rel=0&amp;showinfo=0";

  // slideshow size
  var wrapper = angular.element(document.querySelector("#highlights")),
      window = angular.element($window),
      imageWidth = wrapper[0].offsetWidth,
      galleryWidth = imageWidth * $scope.stories.length;

  $scope.imagewrapper = { width: imageWidth + "px" };
  $scope.listposition = { width: galleryWidth + "px" };
  $scope.selected = 0;
  // Scroll to appropriate position based on image index and width
  $scope.scrollTo = function(slide,index) {
    var newMargin = imageWidth * index;
    $scope.selected = index;
    
    $scope.listposition = {
      margin:("0 0 0 " + -newMargin + "px"),
      width: galleryWidth + "px"
    };
  };
});

