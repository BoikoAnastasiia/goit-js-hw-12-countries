import './styles.css';
import fetchCountries from './js/fetchCountries';
import renderMarkupCountry from './js/updateMarkupCountry';
import renderMarkupCountries from './js/updateMarkupCountries';
import refs from './js/refs';
import ukraine from './templates/ukraine.json';

refs.input.addEventListener('input', event => {
  const inputCountry = event.target.value;
  fetchCountries(inputCountry).then(renderMarkupCountry).catch(console.log);
});
renderMarkupCountry(ukraine);
