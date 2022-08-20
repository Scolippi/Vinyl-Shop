// $(document).ready(function () {
//     $('.bestsellers__carousel-area').slick({
//         slidesToShow: 1,
//         slidesToScroll: 1,
//         autoplay: true,
//         autoplaySpeed: 2500,
//         arrows: false,
//         mobileFirst: true,
//         responsive: [{
//             breakpoint: 700,
//             settings: {
//                 slidesToShow: 2,
//                 slidesToScroll: 1
//             }
//         }],

//     });
// })

$('.bestsellers__carousel-area').slick({
    centerMode: true,
    centerPadding: '60px',
    slidesToShow: 2,
    autoplay: true,
    responsive: [
      {
        breakpoint: 768,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 3
        }
      },
      {
        breakpoint: 480,
        settings: {
          arrows: false,
          centerMode: true,
          centerPadding: '40px',
          slidesToShow: 1
        }
      }
    ]
  });

  