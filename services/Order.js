import { getProductById } from './Menu.js';

export async function addToCart(id) {
  const product = await getProductById(id);
  const results = app.store.cart.filter(
    (prodInCart) => prodInCart.product.id === id,
  );

  if (results.length) {
    app.store.cart = app.store.cart.map((prodInCart) => {
      if (prodInCart.product.id === id) {
        return { ...prodInCart, quantity: prodInCart.quantity + 1 };
      }
      return prodInCart;
    });
  } else {
    app.store.cart = [...app.store.cart, { product, quantity: 1 }];
  }
}

export function removeFromCart(id) {
  app.store.cart = app.store.cart.filter(
    (prodInCart) => prodInCart.product.id !== id,
  );
}
