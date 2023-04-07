const toggleMenu = document.querySelector('.header__toggle-menu');
const nav = document.querySelector('.header__nav');
const body = document.querySelector('body');

toggleMenu.addEventListener('click', function() {
    toggleMenu.classList.toggle('active');
    nav.classList.toggle('active');
    body.classList.toggle('body__over')
});


const acc = document.getElementsByTagName("h3");
let i;

for (i = 0; i < acc.length; i++) {
    acc[i].addEventListener("click", function() {
        /* Переключаем класс "active" для активного элемента */
        this.classList.toggle("active");

        /* Получаем следующий элемент после заголовка */
        const panel = this.nextElementSibling;

        /* Переключаем класс "show" для следующего элемента после заголовка */
        if (panel.style.maxHeight){
            panel.style.maxHeight = null;
        } else {
            panel.style.maxHeight = panel.scrollHeight + "px";
        }
    });
}