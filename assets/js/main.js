const reveals = document.querySelectorAll('.reveal');

function revealOnScroll(){

    reveals.forEach(item => {

        const top =
            item.getBoundingClientRect().top;

        const trigger =
            window.innerHeight - 100;

        if(top < trigger){
            item.classList.add('active');
        }

    });

}

window.addEventListener(
    'scroll',
    revealOnScroll
);

revealOnScroll();