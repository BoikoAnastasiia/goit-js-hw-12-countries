import './styles.css';
import fetchCountries from './js/fetchCountries';
import renderMurkupCountry from './js/updateMarkupCountry';
import renderMurkupCountries from './js/updateMarkupCountries';
import refs from './js/refs';

refs.input.addEventListener('input', event => {
  const inputCountry = event.target.value;
  refs.article.innerHtml = '';

  fetchCountries(inputCountry).then(renderMurkupCountry).catch(console.log);
});
