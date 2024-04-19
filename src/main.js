$(document).ready(function(){
  $('#search-icon').click(function(){
    $(this).toggleClass('fa-times');
    $('#search-box').toggleClass('active');
  });
  $('#menu').click(function(){
    $(this).toggleClass('fa-times');
    $('.navbar').toggleClass('nav-toggle');
  });
  $(window).on('scroll load',function(){

    $('#search-icon').removeClass('fa-times');
    $('#search-box').removeClass('active');

    $('#menu').removeClass('fa-times');
    $('.navbar').removeClass('nav-toggle');

    if($(window).scrollTop() > 0){
      $('header').addClass('sticky');
    }else{
      $('header').removeClass('sticky');
    }

  });

  $('a[href*="#"]').on('click',function(e){
    e.preventDefault();
  
    $('html,body').animate({
    scrollTop:$($(this).attr('href')).offset().top,
    },
    500,
    'linear'  
    );
  });
});

var swiper = new Swiper(".deal-container", {
  slidesPerView: 1,
  spaceBetween: 10,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false,
  },
  pagination: {
    el: ".swiper-pagination",
    clickable: true,
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});