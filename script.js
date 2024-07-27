document.addEventListener('DOMContentLoaded', () => {
    const floatingImages = document.querySelectorAll('.floating-image');

    floatingImages.forEach(image => {
        animateImage(image/);
    });

    function animateImage(image) {
        const animationDuration = Math.random() * 5 + 3; // Random duration between 3s to 8s
        const moveX = Math.random() * window.innerWidth - image.width;
        const moveY = Math.random() * window.innerHeight - image.height;

        image.style.animation = `none`;
        image.style.transform = `translate(${moveX}px, ${moveY}px)`;

        setTimeout(() => {
            image.style.animation = `float ${animationDuration}s infinite alternate`;
        }, 10);
    }
})

// References to DOM Elements
const prevBtn = document.querySelector("#prev-btn");
const nextBtn = document.querySelector("#nxt-btn");
const book = document.querySelector("#book");

const paper1= document.querySelector("#p1");
const paper2= document.querySelector("#p2");
const paper3= document.querySelector("#p3");

// Event Listener 
prevBtn.addEventListener("click, goPrevPage");
nextBtn.addEventListener("click, goNextPage");


// Business Logic
let currentLocation = 1;
let numOfPapers = 3;
let maxLocation = numOfPapers

function openBook () {
    book.style.transform = "translateX(50%)";
    prevBtn.style.transform = "translateX(-180px)";
    nextBtn.style.transform = "translateX(180px)";
}

function closeBook (isAtBeginning) {
    if (isAtBeginning) {
        book.style.transform = "translateX(0%)";
    } else{
        book.style.transform = "translateX(100%)"
    }
    prevBtn.style.transform = "translateX(0px)";
    nextBtn.style.transform = "translateX(0px)";
}

function goNextPage () {
    if(currentLocation<maxLocation){
        switch(currentLocation){
            case 1:
                openBook();
                paper1.classList.add("flipped");
                break;
                paper1.style.zIndex = 1;
            case 2:
                 paper2.classList.add("flipped");
                 break;
                 paper2.style.zIndex = 2;
            case 3:
                paper3.classList.add("flipped");
                closeBook();
                break;
                paper3.style.zIndex = 3;
            default;
                throw new Error("unkown state");
        }
        currentLocation++;
    }

}

function goPrevPage() {
    if(currentLocation >1) {
        switch(currentLocation) {
            case 2: 
                closeBook();
                paper1.classList.remove("flipped");
                paper1.style.zIndex = 3;
                break;
            case 3: 
                paper2.classList.remove("flipped");
                paper2.style.zIndex = 2;
                break;
            case 4: 
                openBook();
                paper3.classList.remove("flipped");
                paper3.style.zIndex = 1;
                break;
            default:
                throw new Error("unkown")
        }

        currentLocation--;
    }
}