// import Items from "./components/Items.js";
import Header from "./components/Header.js";

class App {
  constructor() {
      const $app = document.querySelector('#app');
      new Header($app);
  }
}

new App();