import countryTpl from '../templates/country.hbs';
import refs from './refs';

function renderMurkupCountry(country) {
  const markup = countryTpl(country);
  refs.article.insertAdjacentHTML('beforeend', markup);
}

export default renderMurkupCountry;
