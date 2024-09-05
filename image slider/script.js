
let slideImage = document.getElementById('slideImage');
let previousBtn = document.getElementById('Previous');
let nextBtn = document.getElementById('Next');
let totalSlider = slideImage.children.length;

let currenIndex = 0 ;

function updateImage() {
      slideImage.style.transform = `translateX(-${currenIndex * 100}%)`;

}
nextBtn.addEventListener('click' , ()=> {
      currenIndex = (currenIndex + 1 ) % totalSlider;
      updateImage()
})
previousBtn.addEventListener('click' , ()=> {
      currenIndex = (currenIndex - 1 ) % totalSlider;
      updateImage()
})