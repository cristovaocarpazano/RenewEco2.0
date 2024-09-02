
const button = document.getElementById('read_button') as HTMLElement;
const button2 = document.getElementById('read_button2') as HTMLElement;
const button3 = document.getElementById('read_button3') as HTMLElement;


button.addEventListener('click', () => {
    const card = document.querySelector('#card') as HTMLElement | null;
    if (card) {
        card.classList.toggle('active');
    }
});

button2.addEventListener('click', () => {
    const card2 = document.querySelector('#card2') as HTMLElement | null;
    if (card2) {
        card2.classList.toggle('active2');
    }
});

button3.addEventListener('click', () => {
    const card3 = document.querySelector('#card3') as HTMLElement | null;
    if (card3) {
        card3.classList.toggle('active3');
    }
});

let count = 1;

const initialSlide = document.getElementById('slide1') as HTMLInputElement | null;
if (initialSlide) {
    initialSlide.checked = true;
}


setInterval(() => {
    nextImage();
}, 10000);

function nextImage() {
    count++;
    if (count > 2) {
        count = 1;
    }
    const nextSlide = document.getElementById('slide' + count) as HTMLInputElement | null;
    if (nextSlide) {
        nextSlide.checked = true;
    }
}
