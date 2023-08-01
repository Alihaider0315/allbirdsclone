$('.top-bar-slider').slick({
  dots: false,
  infinite: true,
  speed: 300,
  autoplay: true,
  autoplaySpeed: 7000,
  slidesToShow: 1,
  adaptiveHeight: true,

});



$('.multiple-items').slick({
  infinite: true,
  slidesToShow: 3,
  adaptiveHeight: true,
  infinite: true,
  slidesToScroll: 3,
  prevArrow: "<button type='button' class='slick-prev pull-left'><i class='fa fa-angle-left' aria-hidden='true'></i></button>",
  nextArrow: "<button type='button' class='slick-next pull-right'><i class='fa fa-angle-right' aria-hidden='true'></i></button>",
  responsive: [
    {
      breakpoint: 600,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 3,
        infinite: true,
        dots: false
      }
    },]

});




