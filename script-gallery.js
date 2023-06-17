//Funkce pro funkčnost galerie

const newGallery = document.getElementById('gallery-current');

const oldGallery = document.getElementById('gallery-historical');

const newGalleryBtn = document.getElementById('open-new-btn');

const oldGalleryBtn = document.getElementById('open-old-btn');

document.addEventListener('DOMContentLoaded', () => {
    newGalleryBtn.addEventListener('click', openNewGallery);

    oldGalleryBtn.addEventListener('click', openOldGallery);
})

function openNewGallery() {
    oldGallery.style.display = 'none';
    newGallery.style.display = 'block';
}

function openOldGallery() {
    oldGallery.style.display = 'block';
    newGallery.style.display = 'none';
}



//Following code enables gallery navigation


const currentPhotosArr = Array.from(document.querySelector('#gallery-current').children);
const historicalPhotosArr = Array.from(document.querySelector('#gallery-historical').children);

currentPhotosArr.pop();
historicalPhotosArr.pop();

console.log(currentPhotosArr);
console.log(historicalPhotosArr);

const backArrowCurrent = document.getElementById('back-curr');
const forwardArrowCurrent = document.getElementById('forward-curr');
const backArrowHistorical = document.getElementById('back-hist');
const forwardArrowHistorical = document.getElementById('forward-hist');

document.addEventListener('keydown', function(event) {
    if (event.key === 'ArrowLeft') {
        nextImageCurrent('back');
        nextImageHist('back');
    } else if (event.key === 'ArrowRight') {
        nextImageCurrent('forward');
        nextImageHist('forward');
    }
  });

backArrowCurrent.addEventListener('click', () => {
    nextImageCurrent('back');
});
forwardArrowCurrent.addEventListener('click', () => {
    nextImageCurrent('forward');
});

backArrowHistorical.addEventListener('click', () => {
    nextImageHist('back');
});
forwardArrowHistorical.addEventListener('click', () => {
    nextImageHist('forward');
});

const photoCountCurr = currentPhotosArr.length;
const photoCountHist = historicalPhotosArr.length;

let indexCurr = 0;
let indexHist = 0;

//function to change to the next image in the array
function nextImageCurrent(direction) {
    if (direction === 'forward') {
        indexCurr++;
        if (indexCurr == photoCountCurr) {
            indexCurr = 0;
        }
    } else if(direction ==='back') {
        if (indexCurr == 0) {
            indexCurr = photoCountCurr - 1;
        } else {
            indexCurr--;
        }
    }
    for (let i = 0; i < photoCountCurr; i++) {
        currentPhotosArr[i].classList.remove('current-active');
    }
    currentPhotosArr[indexCurr].classList.add('current-active');
}

function nextImageHist(direction) {
    if (direction === 'forward') {
        indexHist++;
        if (indexHist == photoCountHist) {
            indexHist = 0;
        }
    } else if(direction ==='back') {
        if (indexHist == 0) {
            indexHist = photoCountHist - 1;
        } else {
            indexHist--;
        }
    }
    for (let i = 0; i < photoCountHist; i++) {
        historicalPhotosArr[i].classList.remove('old-active');
    }
    historicalPhotosArr[indexHist].classList.add('old-active');
}
