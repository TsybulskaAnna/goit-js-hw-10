import { Notify } from 'notiflix/build/notiflix-notify-aio';
import { notifyOptions } from './notifyOptions';
import templateCard from './handlebars/card';
import templateList from './handlebars/list';

const refs = {
  list: document.querySelector('.country-list'),
  card: document.querySelector('.country-info'),
};

export function draw(data) {
  if (data.length > 10) {
    Notify.info('Too many matches found. Please keep typing', notifyOptions);
    return;
  }

  if (data.length === 1) {
    refs.card.innerHTML = templateCard(data[0]);
    console.log(data[0].flags);
  } else {
    refs.list.innerHTML = templateList(data);
  }
}

export function clear() {
  refs.card.innerHTML = '';
  refs.list.innerHTML = '';
};
