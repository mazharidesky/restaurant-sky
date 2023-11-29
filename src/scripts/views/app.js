import UrlParser from '../routes/url-parser';
import routes from '../routes/routes';
import DrawerInitiator from '../utils/drawer-initiator';

class App {
  constructor({ drawer, button, content }) {
    this._drawer = drawer;
    this._button = button;
    this._content = content;

    this._initialAppsShell();
  }

  _initialAppsShell() {
    DrawerInitiator.init({
      drawer: this._drawer,
      button: this._button,
      content: this._content,
    });
  }

  async renderPage() {
    const url = UrlParser.parseActiveUrlWithCombiner();
    const page = routes[url];
    const skipLinkElem = document.querySelector('.skip-link');

    skipLinkElem.addEventListener('click', (event) => {
      event.preventDefault();
      document.querySelector('#maincontent').focus();
    });

    this._content.innerHTML = await page.render();
    await page.afterRender();

    const skipContent = document.querySelector('.skip-link');
    skipContent.addEventListener('Enter', (e) => {
      e.preventDefault();
      document.querySelector('#maincontent').focus();
    });
  }
}

export default App;
