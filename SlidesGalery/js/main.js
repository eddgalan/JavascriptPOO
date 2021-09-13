var App = window.App;
var SlideGalery = App.SlideGalery;

var jsonImages = [
  {
    "path":"galery/couple-3798371_1280.jpg",
    "title":"Img - couple",
    "alt":"Pareja"
  },
  {
    "path":"galery/japan-2014618_1280.jpg",
    "title":"Img - japan",
    "alt":"Yoshinoya"
  },
  {
    "path":"galery/lion-3576045_1280.jpg",
    "title":"Img - lion",
    "alt":"León"
  },
  {
    "path":"galery/mobile-phone-1875813_1280.jpg",
    "title":"Img - mobile",
    "alt":"iPhone"
  },
  {
    "path":"galery/nature-3616194_1280.jpg",
    "title":"Img - nature",
    "alt":"Naturaleza"
  },
  {
    "path":"galery/wolves-2864647_1280.jpg",
    "title":"Img - wolves",
    "alt":"Lobos"
  }
]
var slide = new SlideGalery("slidesgalery", jsonImages);
slide.showSlides();

function showImage(index){
  slide.plusSlides(index);
}

function showCurrentImg(index){
  slide.currentSlide(index);
}
