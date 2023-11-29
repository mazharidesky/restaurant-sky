import 'regenerator-runtime'; /* for async await transpile */
import '../styles/main.css';
import '../styles/responsive.css';
import App from './views/app';
import swRegister from './utils/sw-register';

const app = new App({
  button: document.querySelector('#menu'),
  drawer: document.querySelector('#navbar-list'),
  content: document.querySelector('#maincontent'),
});

window.addEventListener('hashchange', () => {
  app.renderPage();
});

window.addEventListener('load', () => {
  app.renderPage();
  swRegister();
});

// const menu = document.querySelector('#menu');
// const hero = document.querySelector('.hero');
// const main = document.querySelector('main');
// const navbarList = document.querySelector('.navbar-list');

// menu.addEventListener('click', (event) => {
//   navbarList.classList.toggle('open');
//   event.stopPropagation();
// });

// hero.addEventListener('click', () => {
//   navbarList.classList.remove('open');
// });

// main.addEventListener('click', () => {
//   navbarList.classList.remove('open');
// });

// menu.addEventListener('keydown', (event) => {
//   if (event.key === 'Enter') {
//     menu.style.color = '#22A39F';
//     navbarList.classList.toggle('open');
//     event.stopPropagation();
//   }
// });
