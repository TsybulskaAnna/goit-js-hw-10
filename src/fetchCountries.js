export function fetchCountries(name) {
    const info = 'name,capital,population,flags,languages';
    const url = `https://restcountries.com/v3.1/name/${name.trim()}?fields=${info}`;
  
    return fetch(url).then(response => {
      if (!response.ok) {
        throw new Error('response is not OK: ', response.status);
      }
      return response.json();
    });
  }
