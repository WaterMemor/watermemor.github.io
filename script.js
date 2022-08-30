$(document).ready(function(){
    $('.slider').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        dots:true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 450,
            settings: {
                slidesToShow: 1
            }
        }
        ]
      });
      $('.slider-rev').slick({
        infinite: true,
        slidesToShow: 4,
        slidesToScroll: 2,
        dots:true,
        responsive: [{
            breakpoint: 1024,
            settings: {
                slidesToShow: 3
            }
        },
        {
            breakpoint: 600,
            settings: {
                slidesToShow: 2
            }
        },
        {
            breakpoint: 450,
            settings: {
                slidesToShow: 1
            }
        }
        ]
      });
    });
