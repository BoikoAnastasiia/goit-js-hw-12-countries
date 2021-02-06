import './styles.css';
import fetchCountries from './js/fetchCountries';
import renderMarkupCountry from './js/updateMarkupCountry';
import renderMarkupCountries from './js/updateMarkupCountries';
import refs from './js/refs';
var debounce = require('lodash.debounce');

refs.input.addEventListener(
  'input',
  debounce(event => {
    const inputCountry = event.target.value;
    refs.article.innerHTML = '';
    fetchCountries(inputCountry)
      .catch(console.log)
      .then(data => {
        if (data.lenght > 1) {
          renderMarkupCountry(data);
        }
        renderMarkupCountries(data);
      })
      .catch(console.log);
  }, 500),
);
