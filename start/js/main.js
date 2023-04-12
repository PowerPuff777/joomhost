// $(function () {

//    $('.reviews-slider').slick({
//       infinite: true,
//       slidesToShow: 2,
//       slidesToScroll: 2,
//       arrows: false,
//       dots: true,
//       responsive: [
//          {
//             breakpoint: 1106,
//             settings: {
//                slidesToShow: 1,
//                slidesToScroll: 1,
//             }
//          },
//       ]
//    });

//    $('.btn__menu').on('click', function () {
//       $('.menu__list').slideToggle();

//    });














// });

console.log(document.querySelector('.btn__menu'));

let btn = document.querySelector('.btn__menu');
let items = document.querySelectorAll(".price-item__btn");
let chislo = ['яблоко', 'груша', 'виноград', 'малина'];


// if (10 == 3) {
//    console.log('da')
// } else {
//    console.log('net')
// }

for (let i = 0; i < items.length; i++) {
   items[i].addEventListener('click', function () {
      console.log(items[i].innerText)
      if (this.style.backgroundColor == 'red') {
         this.style.backgroundColor = 'yellow'
      } else {
         this.style.backgroundColor = 'red'
      }
   })
}
