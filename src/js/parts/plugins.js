import "slick-carousel";

export class Plugins {
  init() {
    this.logoslider();
    this.Roadmapslider();
    this.IndependenceSlider();
  }
  logoslider() {
    $(".logo-slider").slick({
      dots: false,
      infinite: true,
      autoplay: true,
      speed: 1000,
      slidesToShow: 6,
      slidesToScroll: 1,
    });
  }
  Roadmapslider() {
    var slider = $(".roadmap-slider");

    slider.slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      infinite: false,
      autoplay:true,
      spped:300,
    });  
  }

  IndependenceSlider(){
    var slider = $(".independence-slider");

    slider.slick({
      slidesToShow: 4,
      slidesToScroll: 1,
      arrows: true,
      dots: false,
      infinite: false,
      autoplay:true,
      spped:300,
    });  
  }
  }

