import Typed from 'typed.js';

const loadDynamicBannerText = () => {
  new Typed('#banner-typed-text', {
    strings: ["Create category lists", "Add movies to your lists"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
