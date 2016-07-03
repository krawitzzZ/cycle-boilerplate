import {Observable as $} from 'rx';
import {div, br, label, input, button} from '@cycle/dom';
import {Input, Button} from '../helpers/helpers';

export default ({DOM}) => {
  let height$ = Input(DOM.select('#Height'))
    .startWith('177');
  let weight$ = Input(DOM.select('#Weight'))
      .startWith('62');
  Button(DOM.select('.About')).forEach(() => {
    window.location.href = '/about';
  });
  Button(DOM.select('.Counter')).forEach(() => {
    window.location.href = '/counter';
  });

  let bmi$ = $.combineLatest(
    height$, weight$,
    (h, w) => (w / (h / 100) ** 2).toFixed(1)
  );

  return {
    DOM: $.combineLatest(height$, weight$, bmi$, (h, w, bmi) =>
      div('.p2.measure', [
        label({htmlFor: 'Height'}, 'Your height: '),
        input('#Height', {value: h}),
        br(),
        label({htmlFor: 'Weight'}, 'Your weight: '),
        input('#Weight', {value: w}),
        br(),
        'BMI: ' + bmi,
        br(),
        br(),
        button('.btn.About', 'About'),
        button('.btn.Counter', {style: {marginLeft: '15px'}}, 'Counter')
      ])
    )
  };
}
