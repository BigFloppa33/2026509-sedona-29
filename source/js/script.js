let navMain = document.querySelector('.navigation__list');
let navToggle = document.querySelector('.navigation__toggle');
let map = document.querySelector("iframe");
let modalButtonFailure = document.querySelector(".modal__button--failure")
let modalButtonSuccess = document.querySelector(".modal__button--success")
let modal = document.querySelector(".page__modal--closed")

map.classList.remove("map__location--no-js");
navMain.classList.remove('navigation__list--no-js');
navToggle.classList.remove('navigation__toggle--no-js');
navMain.classList.add('navigation__list--closed');

navToggle.addEventListener('click', function () {
  if (navMain.classList.contains('navigation__list--closed')) {
    navMain.classList.remove('navigation__list--closed');
    navMain.classList.add('navigation__list--open');
    navToggle.classList.add('navigation__toggle--open');
  } else {
    navMain.classList.add('navigation__list--closed');
    navMain.classList.remove('navigation__list--open');
    navToggle.classList.remove('navigation__toggle--open');
  }
});

modalButtonFailure.onclick = () => {
  modal.classList.remove("page__modal--closed")
}

modalButtonSuccess.onclick = () => {
  modal.classList.remove("page__modal--closed")
}
