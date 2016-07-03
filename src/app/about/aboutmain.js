import { Observable as $ } from 'rx';
import { div, br, i, button, h2, h4 } from '@cycle/dom';
import { Button } from '../../helpers/streamHelpers';

export default ({ DOM }) => {
  Button(DOM.select('.Home')).forEach(() => {
    window.location.href = '/';
  });
  Button(DOM.select('.Github')).forEach(() => {
    window.location.href = 'https://github.com/krawitzzZ/cycle-boilerplate';
  });

  const vdom$ = $.just(
    div('.p2.measure', [
      h2('About'),
      h4([
        'This is a Cycle.js boilerplate built with convenience and speed in mind.'
      ]),
      br(),
      button('.btn.Home', 'Home'),
      button('.btn.Github', { style: { marginLeft: '10px' } }, 'Github')
    ])
  );

  return {
    DOM: vdom$
  };
}
