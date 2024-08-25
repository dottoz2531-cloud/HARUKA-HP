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

const swiper = new Swiper("#js-concept-swiper", {
  loopAdditionalSlides: 2,
  spaceBetween: 4,
  loop: true,
  speed: 800,

  autoplay: {
    delay: 7000, //　デフォルトの表示時間を指定
  },

  // If we need pagination
  pagination: {
    el: "#js-concept-pagination",
  },
});
