document
  .querySelector("#js-drawer-button")
  .addEventListener("click", function (e) {
    e.preventDefault();

    document.querySelector("#js-drawer-button").classList.toggle("is-checked");
    document.querySelector("#js-drawer-content").classList.toggle("is-checked");
  });

document
  .querySelectorAll('#js-drawer-content a[href^="#"]')
  .forEach(function (link) {
    link.addEventListener("click", function (e) {
      document
        .querySelector("#js-drawer-button")
        .classList.remove("is-checked");
      document
        .querySelector("#js-drawer-content")
        .classList.remove("is-checked");
    });
  });

const intersectionObserver = new IntersectionObserver(function (entries) {
  entries.forEach(function (entry) {
    if (entry.isIntersecting) {
      entry.target.classList.add("is-in-view");
    } else {
      entry.target.classList.remove("is-in-view");
    }
  });
});

const inViewItems = document.querySelectorAll(".js-in-view");
inViewItems.forEach(function (inViewItem) {
  intersectionObserver.observe(inViewItem);
});

const swiper = new Swiper("#js-concept-swiper", {
  loopAdditionalSlides: 2,
  spaceBetween: 4,
  loop: true,
  speed: 800,

  autoplay: {
    delay: 7000, //　デフォルトの表示時間を指定
  },

  breakpoints: {
    768: {
      spaceBetween: 6,
      slidesPerView: 2.5,
      loop: true,
      speed: 800,

      autoplay: {
        delay: 7000, //デフォルトの表示時間を指定
      },
    },
  },
  breakpoints: {
    900: {
      spaceBetween: 6,
      slidesPerView: 1.8,
      loop: true,
      speed: 800,

      autoplay: {
        delay: 7000, //デフォルトの表示時間を指定
      },
    },
  },

  // If we need pagination
  pagination: {
    el: "#js-concept-pagination",
  },
});
