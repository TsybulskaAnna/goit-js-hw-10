import './css/styles.css';
import debounce from 'lodash.debounce';
import { notifyOptions } from './notifyOptions';
import { fetchCountries } from './fetchCountries';
import { Notify } from 'notiflix/build/notiflix-notify-aio';
import * as Markup from './markup';

const debounceCard = 300;
const inputEl = document.querySelector('#search-box');
inputEl.addEventListener('input', debounce(onInput, debounceCard));

function onInput(event) {
  const searchValue = event.target.value;
  if (searchValue.length > 0) {
    fetchCountries(searchValue)
      .then(el => {
        Markup.clear();
        Markup.draw(el);
      })
      .catch(error => {
        Notify.failure('Oops, there is no country with that name!', notifyOptions);

        console.log('error caught in index: ', error);
      });
  } else {
    Markup.clear();
  }
}
