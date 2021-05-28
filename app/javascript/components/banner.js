import Typed from 'typed.js';

const loadDynamicBannerTextHome = () => {
  new Typed('#banner-typed-text-home', {
    strings: ["Create category lists", "Add movies to your lists"],
    typeSpeed: 50,
    loop: true
  });

}

const loadDynamicBannerTextLists = () => {
  new Typed('#banner-typed-text-lists', {
    strings: ["Classic", "Drama", "Superhero", "Comedy", "Animation"],
    typeSpeed: 50,
    loop: true
  });
}

export { loadDynamicBannerText };
export { loadDynamicBannerTextLists };
