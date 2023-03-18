let rightBtn = document.querySelector(".fa-chevron-right");
let leftBtn = document.querySelector(".fa-chevron-left");
let image1 = document.querySelector(".image1");
let image2 = document.querySelector(".image2");
let image3 = document.querySelector(".image3");
let image4 = document.querySelector(".image4");

let imgPos1 = 0;
let imgPos2 = 1317;
let imgPos3 = 2634;
let imgPos4 = -1317;

let isClicked = true;

rightBtn.addEventListener("click", function () {
  if (!isClicked) return false;

  isClicked = false;

  setTimeout(() => {
    isClicked = true;
  }, 2000);

  let imgPos11 = imgPos1;
  let imgPos22 = imgPos2;
  let imgPos33 = imgPos3;
  let imgPos44 = imgPos4;

  imgPos4 = imgPos33;
  imgPos3 = imgPos22;
  imgPos2 = imgPos11;
  imgPos1 = imgPos44;

  if (imgPos1 == 0) {
    image1.style.zIndex = "10";
  } else {
    image1.style.zIndex = "1";
  }
  if (imgPos2 == 0) {
    image2.style.zIndex = "10";
  } else {
    image2.style.zIndex = "1";
  }
  if (imgPos3 == 0) {
    image3.style.zIndex = "10";
  } else {
    image3.style.zIndex = "1";
  }
  if (imgPos4 == 0) {
    image4.style.zIndex = "10";
  } else {
    image4.style.zIndex = "1";
  }

  image1.style.left = `${imgPos1}px`;
  image2.style.left = `${imgPos2}px`;
  image3.style.left = `${imgPos3}px`;
  image4.style.left = `${imgPos4}px`;
});

leftBtn.addEventListener("click", function () {
  if (!isClicked) return false;

  isClicked = false;

  setTimeout(() => {
    isClicked = true;
  }, 2000);

  let imgPos11 = imgPos1;
  let imgPos22 = imgPos2;
  let imgPos33 = imgPos3;
  let imgPos44 = imgPos4;

  imgPos4 = imgPos11;
  imgPos3 = imgPos44;
  imgPos2 = imgPos33;
  imgPos1 = imgPos22;

  if (imgPos1 == 0) {
    image1.style.zIndex = "10";
  } else {
    image1.style.zIndex = "1";
  }
  if (imgPos2 == 0) {
    image2.style.zIndex = "10";
  } else {
    image2.style.zIndex = "1";
  }
  if (imgPos3 == 0) {
    image3.style.zIndex = "10";
  } else {
    image3.style.zIndex = "1";
  }
  if (imgPos4 == 0) {
    image4.style.zIndex = "10";
  } else {
    image4.style.zIndex = "1";
  }

  image1.style.left = `${imgPos1}px`;
  image2.style.left = `${imgPos2}px`;
  image3.style.left = `${imgPos3}px`;
  image4.style.left = `${imgPos4}px`;
});
