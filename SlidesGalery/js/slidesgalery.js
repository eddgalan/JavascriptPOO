(function(window){
  'use strict';
  var App = window.App || {};

  // Constructor
  function SlideGalery(container, images){
    this.data = {container: container, slideIndex: 1, imgs: images};
    // Escribe el html del slide
    var html = "";
    var cont = 1;
    var num_imgs = this.data.imgs.length;
    // Escribe la primera parte del Slide
    for(let img of this.data.imgs){
      html += "<div class='mySlides'>"+
                "<div class='numbertext'>"+ cont +" / "+ num_imgs +"</div>"+
                  "<img src='"+ img.path +"' style='width:100%'>"+
              "</div>";
      cont++;
    }
    // Escribe los botones de siguiente y anterior
    html += "<a class='prev' onclick='showImage(-1)'>&#10094;</a>"+
            "<a class='next' onclick='showImage(1)'>&#10095;</a>";
    // Escribe el texto de la imágen
    html += "<div class='caption-container'>"+
              "<p id='caption'></p>"+
            "</div>";
    // Escribe las imágenes miniaturas
    html += "<div class='row'>";
    cont = 1;
    for(let img of this.data.imgs){
      html += "<div class='column'>"+
                "<img class='demo cursor' src='"+ img.path +"' style='width:100%' onclick='showCurrentImg("+ cont +")' alt='"+ img.alt +"'>"+
              "</div>";
      cont++;
    }
    html += "</div>";
    document.getElementById(container).innerHTML = html;
  }

  // Función que muestra la imagen seleccionada, siguiente o anterior
  SlideGalery.prototype.showSlides = function(n=1){
    this.data.slideIndex = n;
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var dots = document.getElementsByClassName("demo");
    var captionText = document.getElementById("caption");
    if (n > slides.length) {this.data.slideIndex = 1}
    if (n < 1) {this.data.slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
      slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
      dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[this.data.slideIndex-1].style.display = "block";
    dots[this.data.slideIndex-1].className += " active";
    captionText.innerHTML = dots[this.data.slideIndex-1].alt;
  }
  // Next/previous controls
  SlideGalery.prototype.plusSlides = function(n){
    this.showSlides(this.data.slideIndex += n);
  }
  // Función que muestra la imágen seleccionada
  SlideGalery.prototype.currentSlide = function(n){
    this.showSlides(this.data.slideIndex = n);
  }

  App.SlideGalery = SlideGalery;
  window.App = App;
}(window));



// var slideIndex = 1;
// showSlides(slideIndex);
// Next/previous controls
function plusSlides(n) {

}

// Thumbnail image controls
function currentSlide(n) {

}

function showSlides(n) {

}
