import countriesTpl from '../templates/countries.hbs';

const article = document.querySelector('.countries-container');

function renderMurkupCountries(country) {
  const markup = countriesTpl(country);
  article.insertAdjacentHTML('beforeend', markup);
}

export default renderMurkupCountries;
