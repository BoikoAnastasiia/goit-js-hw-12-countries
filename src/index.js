import './styles.css';
import fetchCountries from './js/fetchCountries';
import renderMurkupCountry from './js/updateMarkupCountry';
import renderMurkupCountries from './js/updateMarkupCountries';

const input = document.querySelector('.form-control');

input.addEventListener('input', event => {
  const inputCountry = event.target.value;

  renderMurkupCountry(fetchCountries(inputCountry));
  console.log(fetchCountries(inputCountry));
});

// renderMurkupCountry(fetchCountries('canada'));
// console.log(fetchCountries.country);
