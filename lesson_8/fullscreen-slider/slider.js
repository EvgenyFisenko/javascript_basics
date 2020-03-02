"use strict";

let mySliderImages = document.querySelectorAll('.slide');
let arrowRight = document.getElementById('right');
let arrowLeft = document.getElementById('left');
let currentImageIndex = 0;

function hideAll() {
    for(let i = 0; i < mySliderImages.length; i++){
        mySliderImages[i].style.display = 'none';
    }
}

function showFirstImage() {
    hideAll();
    mySliderImages[0].style.display = 'block';
}

function slideLeft() {
    hideAll();
    mySliderImages[currentImageIndex - 1].style.display = 'block';
    currentImageIndex--;
}

function slideRight() {
    hideAll();
    mySliderImages[currentImageIndex + 1].style.display = 'block';
    currentImageIndex++;
}

arrowLeft.addEventListener("click", function () {
    if(currentImageIndex === 0){
        currentImageIndex = mySliderImages.length;
    }
    slideLeft();
})

arrowRight.addEventListener("click", function () {
    if(currentImageIndex === mySliderImages.length -1){
        currentImageIndex = -1;
    }
    slideRight();
})

showFirstImage();
