import './styles.css';
import fetchCountries from './js/fetchCountries';
import renderMarkupCountry from './js/updateMarkupCountry';
import renderMarkupCountries from './js/updateMarkupCountries';
import refs from './js/refs';
import error from './js/notification';
var debounce = require('lodash.debounce');

refs.input.addEventListener(
  'input',
  debounce(event => {
    const inputCountry = event.target.value;
    refs.article.innerHTML = '';

    fetchCountries(inputCountry)
      .then(data => {
        if (data.length === 1) {
          renderMarkupCountry(data);
        } else if (data.length > 1) {
          renderMarkupCountries(data);
          error({
            text: 'Try more specific keywords',
          });
        }
      })
      .catch(
        error({
          text: 'Sorry, something went wrong',
        }),
      );
  }, 500),
);
