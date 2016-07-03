import { Observable as $ } from 'rx';
import { div, button, h4, br } from '@cycle/dom';
import { Button } from '../../helpers/streamHelpers';

export default ({ DOM }) => {
  Button(DOM.select('.Home')).forEach(() => {
    window.location.href = '/';
  });

  const number$ = $.merge(
      Button(DOM.select('.Increment')).map(ev => +1),
      Button(DOM.select('.Decrement')).map(ev => -1))
    .startWith(10)
    .scan((prev, curr) => prev + curr);

  const vdom$ = number$.map(number =>
    div('.p2.measure', [
      h4(`Current count: ${number}`),
      button('.btn.Increment', 'Increment'),
      button('.btn.Decrement', { style: { marginLeft: '10px' } }, 'Decrement'),
      br(),
      br(),
      button('.btn.Home', 'Home')
    ])
  );

  return {
    DOM: vdom$
  };
}