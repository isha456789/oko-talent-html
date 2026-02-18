import "slick-carousel";

export class Plugins {
  init() {
    this.logoslider();
    this.testimonialslider();
  }
  logoslider() {
    $(".logo-slider").slick({
      dots: false,
      infinite: true,
      autoplay:true,
      speed: 1000,
      slidesToShow: 6,
      slidesToScroll: 1,
    });
  } 
}


