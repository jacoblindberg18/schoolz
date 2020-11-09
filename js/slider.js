let idx = 1;

function changeImage() {
    document.getElementById("slider").classList.remove(`slider-image-${idx}`);
    idx++;
    if(idx == 5) idx = 1;
    document.getElementById("slider").classList.add(`slider-image-${idx}`);
}

let sliderTimer = setInterval(changeImage, 5000);