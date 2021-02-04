import './styles.css';
import fetchCountries from './js/fetchCountries';
import renderMurkupCountry from './js/updateMarkupCountry';

const input = document.querySelector('.form-control');

input.addEventListener('input', event => {
  const inputedCountry = event.target.value;

  renderMurkupCountry(fetchCountries(inputedCountry));
});

// renderMurkupCountry(fetchCountries('canada'));
// console.log(fetchCountries.country);
