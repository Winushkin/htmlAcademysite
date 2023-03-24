const buttons = document.querySelectorAll(".add-btn");
buttons.forEach(
    function (element) {
        element.addEventListener("click", function (event) 
        {
            const parent = event.target.parentNode.querySelector(".choose-elem");
            parent.classList.toggle("hidden");
        });
    }
);

const changeLayoutHandler = function (evt) {
    const newLayout = evt.target.value;
    const layoutElement = document.querySelector('.layout');
    layoutElement.classList.remove('layout--landing');
    layoutElement.classList.remove('layout--blog');
    layoutElement.classList.remove('layout--shop');
    layoutElement.classList.add('layout--' + newLayout);
};

document.querySelector('.grid-select').addEventListener('change', changeLayoutHandler);
