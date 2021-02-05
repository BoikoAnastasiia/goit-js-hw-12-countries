function fetchCountries(country) {
  const url = `https://restcountries.eu/rest/v2/name/${country}`;

  return fetch(url)
    .then(res => res.json())
    .catch(console.log)
    .then({ name })
    .catch(console.log);
}
export default fetchCountries;
