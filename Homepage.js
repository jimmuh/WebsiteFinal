var slideIndex = 0;
showSlides();

function plusDivs(n) {
    showSlides(slideIndex += n);
}

function currentSlide(n) {
    showSlides(slideIndex = n);
}

function showSlides() {
    var i;
    var slides = document.getElementsByClassName("mySlides");
    var descriptions = document.getElementsByClassName("image-description"); 
    if (slideIndex >= slides.length) { slideIndex = 0 }
    if (slideIndex < 0) { slideIndex = slides.length - 1 }
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
        descriptions[i].style.display = "none"; 
    }
    slides[slideIndex].style.display = "block";
    descriptions[slideIndex].style.display = "block"; 
    slideIndex++;
    setTimeout(showSlides, 10000); 
}