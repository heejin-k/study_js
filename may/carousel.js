const showing_class = "showing";
const firstslide = document.querySelector(".itemwrap-result:first-child");
firstslide.classList.add(showing_class)
function slide() {
    const currentslide = document.querySelector(`.${showing_class}`);
    if (currentslide) {
        currentslide.classList.remove(showing_class);
        const nextslide = currentslide.nextElementSibling;
        if (nextslide) {
            nextslide.classList.add(showing_class);
        } else {
            firstslide.classList.add(showing_class);
        }
    } else {
        firstslide.classList.add(showing_class);
    }
}

slide();
setInterval(slide, 3000);