$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $(".navbar").addClass("sticky");
    } else {
      $(".navbar").removeClass("sticky");
    }
    if (this.scroll>500){
        $(".scroll-up-btn").addClass("show");
    }else{
        $(".scroll-up-btn").removeClass("show");
    }
  });
 //slide up script
 $(".scroll-up-btn").click(function(){
    $('html').animate({screenTop:0})
 });

  // toggle  menu/nav script
  $(".menu-btn").click(function () {
    $(".navbar .menu").toggleClass("active");
    $(".menu-btn i").toggleClass("active");
  });
  //Owl Carousel Script
  $(".carousel").owlCarousel({
    margin: 20,
    loop: true,
    autoplay:true,
    autoplayTimeout:2000,
    autoplayHoverPause: true,
    responsive: {
      0: {
        items: 1,
        nav: false,
      },
      600: {
        items: 2,
        nav: false,
      },
      1000: {
        items: 2, //change this number when more projects added
        nav: false,
      },
    },
  });
});
