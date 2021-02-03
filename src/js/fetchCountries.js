function fetchCountries(country) {
  const url = `https://restcountries.eu/rest/v2/name/${country}`;

  return fetch(url)
    .then(res => res.json())
    .then(data => data.countries)
    .catch(error => console.log(error));
}
export default fetchCountries;
