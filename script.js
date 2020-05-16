var slideIndex = 0;
showSlide();

function showSlide() {
  let slides = document.getElementsByClassName("mySlide");
  let slideContent = document.getElementsByClassName("slide-content");

  for (let i = 0; i < slides.length; i++) {
    slides[i].style.display = "none";
  }
  slideIndex++;
  if (slideIndex > slides.length) {
    slideIndex = 1;
  }
  for (i = 0; i < slideContent.length; i++) {
    slideContent[i].className = slideContent[i].className.replace(" active", "");
  }
  slides[slideIndex - 1].style.display = "block";
  slideContent[slideIndex - 1].className += " active";
  setTimeout(showSlide, 2000); // Change image every 2 seconds
}
