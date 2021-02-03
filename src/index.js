import './styles.css';
import fetchCountries from './js/fetchCountries';
const input = document.querySelector('.form-control');

input.addEventListener('input', fetchCountries());
console.dir(input);
