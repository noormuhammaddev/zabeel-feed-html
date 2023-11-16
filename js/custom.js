jQuery(document).ready(function(){
  // main slider start
  const main_slider = jQuery('#main_slider');
  main_slider &&  jQuery(main_slider).owlCarousel({
    loop:true,
    nav:false,
    dots: true,
    autoplay: true,
    responsive:{
        0:{
            items:1
        }
    }
  })
  // main slider end

  // media slider start
  const media_list = jQuery('#media_list');
  media_list && media_list.owlCarousel({
    loop:true,
    margin:25,
    nav:false,
    dots: true,
    responsive:{
        0:{
            items:1
        },
        768:{
            items:2
        },
        993:{
            items:3
        }
    }
  })
  // media slider end

  // accordion start
  jQuery('.accordions ul li button').on('click', function(){
    jQuery('.accordions ul li').find('.accordion-content').slideUp();
    jQuery(this).siblings('.accordion-content').slideDown();
  })

  // accordion end

  
})