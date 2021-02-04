import './styles.css';
import fetchCountries from './js/fetchCountries';
import renderMurkupCountry from './js/updateMarkupCountry';
import renderMurkupCountries from './js/updateMarkupCountries';

const input = document.querySelector('.form-control');

input.addEventListener('input', event => {
  const inputedCountry = event.target.value;

  //   renderMurkupCountry(fetchCountries(inputedCountry));
  console.log(fetchCountries(inputedCountry));
});

// renderMurkupCountry(fetchCountries('canada'));
// console.log(fetchCountries.country);
