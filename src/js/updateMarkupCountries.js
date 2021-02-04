import countriesTpl from '../templates/countries.hbs';
import refs from './refs';

function renderMurkupCountries(country) {
  const markup = countriesTpl(country);
  refs.article.insertAdjacentHTML('beforeend', markup);
}

export default renderMurkupCountries;
