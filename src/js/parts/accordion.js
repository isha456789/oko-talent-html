// export class Accordion {
//     init() {
//         // this.Accordion();

//     }
//     // Accordion() {
//     //     $(document).ready(function () {
//     //         // Open the first child by default
//     //         $('.closet-header').first().addClass('active').next('.closet-content').slideDown();

//     //         // Handle click events for closet headers
//     //         $('.closet-header').click(function () {
//     //             $(this).toggleClass('active').next('.closet-content').slideToggle();
//     //             $('.closet-header').not(this).removeClass('active').next('.closet-content').slideUp();
//     //         });
//     //     });
//     // }


    
// }

// document.querySelectorAll(".faq-question").forEach(q => {

//   q.addEventListener("click", () => {

//     const item = q.parentElement;
//     document.querySelectorAll(".faq-item").forEach(i => {
//       if(i !== item){
//         i.classList.remove("active");
//       }
//     });
//     item.classList.toggle("active");

//   });

// });


document.querySelectorAll(".faq-icon").forEach(icon => {
  icon.addEventListener("click", () => {
    const item = icon.closest(".faq-item");
    document.querySelectorAll(".faq-item").forEach(i => {
      if(i !== item){
        i.classList.remove("active");
      }
    });
    item.classList.toggle("active");

  });

});
