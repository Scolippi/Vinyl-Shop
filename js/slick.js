// $('.bestsellers__carousel-area').slick({
//     centerMode: true,
//     centerPadding: '60px',
//     slidesToShow: 2,
//     autoplay: true,
//     responsive: [
//       {
//         breakpoint: 768,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '40px',
//           slidesToShow: 3
//         }
//       },
//       {
//         breakpoint: 480,
//         settings: {
//           arrows: false,
//           centerMode: true,
//           centerPadding: '40px',
//           slidesToShow: 1
//         }
//       }
//     ]
//   });

$('.bestsellers__carousel-area').slick({
  dots: false,
  infinite: true,
  speed: 300,
  slidesToShow: 1,
  adaptiveHeight: true,
  mobileFirst: true,
  autoplay: true,
  arrows: false,
  responsive: [
    {
      breakpoint: 720,
      settings: {
        slidesToShow: 2,
      }
    },
    {
      breakpoint: 1024,
        settings: {
          slidesToShow: 3,
        }
      
    }
  ]
});