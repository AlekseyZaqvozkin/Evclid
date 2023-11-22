//burger

let burger = document.querySelector('.burger');
let menu = document.querySelector('.nav');
let menuLinks = document.querySelectorAll('.nav__link');
let header = document.querySelector('.header__logo');

burger.addEventListener(
  "click",

  function () {
    burger.classList.toggle("burger--active");

    menu.classList.toggle("nav--active");

    header.classList.toggle("logo-nav--active");

    document.body.classList.toggle("stop-scroll");
  }
);

menuLinks.forEach(function (el) {
  el.addEventListener("click", function () {
    burger.classList.remove("burger--active");

    menu.classList.remove("nav--active");

    header.classList.remove("logo-nav--active");

    document.body.classList.remove("stop-scroll");
  });
});


//search

function setSearch(params) {
  const openBtn = document.querySelector(`.${params.openBtnClass}`);
  const search = document.querySelector(`.${params.searchClass}`);
  const closeBtn = search.querySelector(`.${params.closeBtnClass}`);

  search.addEventListener("animationend", function (evt) {
    if (this._isOpened) {
      this.classList.remove(params.activeClass);
      this.classList.remove(params.hiddenClass);
      this._isOpened = false;
    } else {
      this._isOpened = true;
    }
  });

  search.addEventListener("click", function (evt) {
    evt._isSearch = true;
  });

  openBtn.addEventListener("click", function (evt) {
    this.disabled = true;

    if (
      !search.classList.contains(params.activeClass) &&
      !search.classList.contains(params.hiddenClass)
    ) {
      search.classList.add(params.activeClass);
    }
  });

  closeBtn.addEventListener("click", function () {
    openBtn.disabled = false;
    search.classList.add(params.hiddenClass);
  });

  document.body.addEventListener("click", function (evt) {
    if (!evt._isSearch && search._isOpened) {
      openBtn.disabled = false;
      search.classList.add(params.hiddenClass);
    }
  });
}

setSearch({
  openBtnClass: "js-open-search", // класс кнопки открытия
  closeBtnClass: "js-close", // класс кнопки закрытия
  searchClass: "js-form", // класс формы поиска
  activeClass: "is-opened", // класс открытого состояния
  hiddenClass: "is-closed" // класс закрывающегося состояния (удаляется сразу после закрытия)
});


//Swiper

const swiper = new Swiper('.swiper', {
	slidesPerView: 1,

  loop: true,
	pagination: {
    el: '.swiper-pagination',
    type: 'bullets',
		clickable: true,
  },
});

//Tabs

let tabsBtn = document.querySelectorAll('.how-steps__button');
let tabsItem = document.querySelectorAll('.how-tabs');
let tabsImage = document.querySelectorAll('.how-tabs');

tabsBtn.forEach(function(element){
  element.addEventListener('click', function(e){
    const path = e.currentTarget.dataset.path;
 
    tabsBtn.forEach(function(btn){ btn.classList.remove('how-steps--active')});
    e.currentTarget.classList.add('how-steps--active');
 
    tabsItem.forEach(function(element){ element.classList.remove('how-tabs--active')});
    document.querySelector(`[data-target="${path}"]`).classList.add('how-tabs--active');
  });
});

//Accordion
(() => {
new Accordion('.js-accordion-container', {
  duration: 400,
  // showMultiple: true,
  // triggerClass: ".accordion-icon",
  // onOpen: function(currentElement) {
  //   console.log(currentElement);
  // }
});
})();

