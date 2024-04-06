import Store from './services/Store.js';
import { loadData } from './services/Menu.js';
import Router from './services/Router.js';

//Web components
import { MenuPage } from './components/MenuPage.js';
import { OrderPage } from './components/OrderPage.js';
import { DetailsPage } from './components/DetailsPage.js';
import { ProductItem } from './components/ProductItem.js';

window.app = {};
app.store = Store;
app.router = Router;

window.addEventListener('DOMContentLoaded', async () => {
  loadData();
  app.router.init();
});

window.addEventListener('appcartchange', () => {
  const badge = document.getElementById('badge');
  const qty = app.store.cart.reduce((acc, item) => acc + item.quantity, 0);

  badge.textContent = qty;
  badge.hidden = !qty;
});
