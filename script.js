// Select all required elements

const prevBtn =
document.querySelector(".prev");

const nextBtn = 
document.querySelector(".next");

let currentIndex = 0;

const galleryImages = 
document.querySelectorAll(".gallery img");

const lightbox = 
document.querySelector(".lightbox");

const lightboxImg = 
document.querySelector(".lightbox-img");




// adding click event to every image
galleryImages.forEach((image, index) => {
    image.addEventListener("click",() => {

        currentIndex = index;
        lightbox.style.display = "flex";

        lightboxImg.src = image.src;
    });
});

const closeBtn =
document.querySelector(".close");

closeBtn.addEventListener("click",() =>{
    lightbox.style.display = "none";
});



//adding eventlistener to next button 

nextBtn.addEventListener("click",() => {

    currentIndex++;

    if(currentIndex >= galleryImages.length)
    {
        currentIndex = 0;
    }

    lightboxImg.src = galleryImages[currentIndex].src;
});

// adding eventlistener to previous button

prevBtn.addEventListener("click", () => {

    currentIndex--;

    if(currentIndex < 0)
    {
        currentIndex = galleryImages.length -1;
    }

    lightboxImg.src = galleryImages[currentIndex].src;
});

// close the lightbox by clicking outside the image
lightbox.addEventListener("click", (event) =>{

    if(event.target === lightbox)
    {
        lightbox.style.display = "none";
    }
});

// close the lighbox using the Esc key
document.addEventListener("keydown", (event) => {
    
    if(event.key === "Escape"){
        lightbox.style.display = "none";
    }
});



// alert("Javascript Connected!");