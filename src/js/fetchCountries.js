import error from './notification';

function fetchCountries(country) {
  const url = `https://restcountries.eu/rest/v2/name/${country}`;

  return fetch(url)
    .then(res => res.json())
    .catch(
      error({
        text: 'Something went wrong',
        delay: 1000,
      }),
    )
    .then({ name })
    .catch(console.log);
}
export default fetchCountries;
