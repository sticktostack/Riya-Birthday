let btn = document.querySelector("#btn");
let firstdiv = document.querySelector(".firstmain");
let seconddiv = document.querySelector(".seconddiv");
let firstslide = document.querySelector(".firstslide");
let secondslide = document.querySelector(".secondslide");
let thirdslide = document.querySelector(".thirdslide");
let fourthslide = document.querySelector(".fourthslide");
let overimgbox = document.querySelector(".overimgbox");
let firstimg = document.querySelector("#firstimg");
let lastimg = document.querySelector("#lastimg")
console.log(firstimg);

btn.addEventListener("click", () => {
  firstdiv.style.opacity = 0;
  // firstdiv.style.top = -100;
  lastimg.style.opacity = 1;
});

setTimeout(() => {
  firstimg.style.opacity = 1;
}, 2000);

