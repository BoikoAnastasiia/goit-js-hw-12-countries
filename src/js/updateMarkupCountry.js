import countryTpl from '../templates/country.hbs';
import ukraine from '../templates/ukraine.json';

const article = document.querySelector('.countries-container');

function renderMurkupCountry(country) {
  const markup = countryTpl(country);
  article.insertAdjacentHTML('beforeend', markup);
}

export default renderMurkupCountry;
console.log(renderMurkupCountry(ukraine));
