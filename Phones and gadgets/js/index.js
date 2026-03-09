import BurgerMenu from "./burger.js";
import Modal from "./modal.js";
import { heroSlider } from "./hero-slider.js";

try {
  const searchInput = document.querySelector(".search-input");

  const tags = document.querySelectorAll(".tag");

  tags.forEach((tag) => {
    tag.addEventListener("click", () => {
      searchInput.value = tag.textContent;

      searchInput.focus();
    });
  });

  new BurgerMenu({
    BURGER: "burger",
    BURGER_OPEN: "burger--open",
    HEADER_MENU: "header__menu",
    HEADER_MENU_OPEN: "header__menu--open",
    lABEL: {
      OPEN: "Открыть меню",
      CLOSE: "Закрыть меню",
    },
    PAGE_BODY: "page__body",
    PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
    MENU_LINK: "menu__link",
    BREAKPOINT: 768,
    MAIN: "main",
  });

  new Modal({
    PAGE_BODY: "page__body",
    PAGE_BODY_NO_SCROLL: "page__body--no-scroll",
  });

  heroSlider();
} catch (error) {
  console.error(error);
}
