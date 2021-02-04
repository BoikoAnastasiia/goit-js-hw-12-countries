import './styles.css';
import fetchCountries from './js/fetchCountries';
import renderMarkupCountry from './js/updateMarkupCountry';
import renderMarkupCountries from './js/updateMarkupCountries';
import refs from './js/refs';

refs.input.addEventListener('input', event => {
  const inputCountry = event.target.value;
  refs.article.innerHtml = '';

  fetchCountries(inputCountry).then(renderMarkupCountry).catch(console.log);
});
