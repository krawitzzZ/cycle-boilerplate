import {join} from 'path';

const localJoin = (...args) => './' + join(...args);
const appDir = 'src/app';
const pageDir = 'src/html';

/* endpoint configs
 app relative to ./src/js
 page relative to ./src/html
 */
export default [{
  app: 'index.js',
  page: 'index.pug',
  route: '/'
}, {
  app: 'about/about.js',
  page: 'index.pug',
  route: '/about'
}, {
  app: 'counter/counter.js',
  page: 'index.pug',
  route: '/counter'
}].map(({app, page, ...rest}, id) => ({
  app: localJoin(appDir, app),
  page: localJoin(pageDir, page),
  id,
  ...rest
}));
