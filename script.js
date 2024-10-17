const hamMenu = document.querySelector(`.ham-menu`);
const hamLine = document.querySelectorAll(`.ham-menu>div`);
const list = document.querySelector(`.list`);

hamMenu.addEventListener(`click`, () => {
  list.classList.toggle(`hidden`);
  hamLine[1].classList.toggle(`rotate-1`);
  hamLine[2].classList.toggle(`hidden1`);
  hamLine[3].classList.toggle(`rotate-2`);
});




const hamMenu2 = document.querySelector(`.ham-menu2`);
const hamLine2 = document.querySelectorAll(`.ham-menu2>div`);
const list2 = document.querySelector(`.list2`);

hamMenu2.addEventListener(`click`, () => {
  list2.classList.toggle(`hidden`);
  hamLine2[0].classList.toggle(`rotate-1-2`);
  hamLine2[1].classList.toggle(`hidden1-2`);
  hamLine2[2].classList.toggle(`rotate-2-2`);
});






const scrollArrow = document.querySelector(".scroll-arrow");

window.addEventListener("scroll", () => {
  if (window.scrollY > 500) {
    scrollArrow.style.display = "block";
  } else {
    scrollArrow.style.display = "none";
  }
});
