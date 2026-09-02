const pages = document.querySelectorAll(".menu-page");

let currentPage = 0;

let touchStartX = 0;
let touchEndX = 0;

function showPage(index) {

    if (index < 0 || index >= pages.length) {
        return;
    }

    pages[currentPage].classList.remove("active");

    currentPage = index;

    pages[currentPage].classList.add("active");
}


/* TOUCH */

document.addEventListener("touchstart", (event) => {

    touchStartX = event.changedTouches[0].screenX;

});


document.addEventListener("touchend", (event) => {

    touchEndX = event.changedTouches[0].screenX;

    handleSwipe();

});


function handleSwipe() {

    const distance = touchEndX - touchStartX;

    const minimumSwipe = 50;


    // Deslizar hacia la izquierda
    if (distance < -minimumSwipe) {

        showPage(currentPage + 1);

    }


    // Deslizar hacia la derecha
    if (distance > minimumSwipe) {

        showPage(currentPage - 1);

    }

}