function fetchCountries(country) {
  const url = `https://restcountries.eu/rest/v2/name/${country}`;

  return fetch(url)
    .then(res => res.json())
    .then({ name })
    .catch(console.log);
}
export default fetchCountries;
