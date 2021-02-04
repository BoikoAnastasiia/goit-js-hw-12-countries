import countryTpl from '../templates/country.hbs';

const article = document.querySelector('.countries-container');

function renderMurkupCountry(country) {
  const markup = countryTpl(country);
  article.insertAdjacentHTML('beforeend', markup);
}

export default renderMurkupCountry;
