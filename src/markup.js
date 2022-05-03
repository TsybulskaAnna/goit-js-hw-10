import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { notifyOptions } from './notifyOptions';
import cardCountry from './handlebars/cardCountry';
import listCountry from './handlebars/listCountry';

const link = {
  list: document.querySelector('.country-list'),
  card: document.querySelector('.country-info'),
};

export function draw(el) {
  if (el.length > 10) {
    Notify.info('Too many matches found. Please keep typing', notifyOptions);
    return;
  }

  if (el.length === 1) {
    link.card.innerHTML = cardCountry(el[0]);
    console.log(el[0].flags);
  } else {
    link.list.innerHTML = listCountry(el);
  }
}

export function clear() {
  link.card.innerHTML = '';
  link.list.innerHTML = '';
}
