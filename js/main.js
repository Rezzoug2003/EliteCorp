// function f () {
//     'use strict';
//   var allhieght = $(window).height();
//   var heightupper = $(".upper-bar").innerHeight();
//   var heightnav = $(".navbar").innerHeight();
//   $(".slider").height(allhieght - (heightnav + heightupper));
// };
let lis = document.querySelectorAll(".featured-work ul li");
let imgs = document.querySelectorAll(".featured-work .shuffle-imgs .row div img");
// console.log(divs)

lis.forEach((li) => {
  li.addEventListener("click", () => {
    lis.forEach((li) => {
      li.classList.remove("active")
    })
    li.classList.add("active")
    imgs.forEach((img) => {
      if (li.dataset.class === "all") {
        img.style.opacity = "1";
        
      } else {
        img.style.opacity = "0.1";
        if(img.classList.contains(`${li.dataset.class}`))
          img.style.opacity = "1";
        // console.log(img.parentElement)
      }
      
    })
    

  })
  
})


