(function(window){
  'use strict';
  var App = window.App;
  var SlideGalery = App.SlideGalery;

  var jsonImages = [
    {
      "path":"galery/couple-3798371_1280.jpg",
      "title":"Img - couple",
      "alt":"value"
    },
    {
      "path":"galery/japan-2014618_1280.jpg",
      "title":"Img - japan",
      "alt":"value"
    },
    {
      "path":"galery/lion-3576045_1280.jpg",
      "title":"Img - lion",
      "alt":"value"
    },
    {
      "path":"galery/mobile-phone-1875813_1280.jpg",
      "title":"Img - mobile",
      "alt":"value"
    },
    {
      "path":"galery/nature-3616194_1280.jpg",
      "title":"Img - nature",
      "alt":"value"
    },
    {
      "path":"galery/wolves-2864647_1280.jpg",
      "title":"Img - wolves",
      "alt":"value"
    }
  ]

  var slide = new SlideGalery("slidesgalery", jsonImages);
  slide.showSlides(1);
}(window));
