const Router = {
  init: () => {
    document.querySelectorAll('a.navlink').forEach((link) => {
      link.addEventListener('click', (event) => {
        event.preventDefault();

        const route = event.target.getAttribute('href');

        Router.go(route);
      });
    });

    // Event handler for url changes
    window.addEventListener('popstate', (event) => {
      Router.go(event.state.route, false);
    });

    // Check the initial URL
    Router.go(location.pathname);
  },
  go: (route, addToHistory = true) => {
    if (addToHistory) {
      history.pushState({ route }, '', route);
    }

    let pageElement = null;
    switch (route) {
      case '/':
        pageElement = document.createElement('h1');
        pageElement.textContent = 'Menu';
        break;

      case '/order':
        pageElement = document.createElement('h1');
        pageElement.textContent = 'Your Order';
        break;
      default:
        if (route.startsWith('/product/')) {
          pageElement = document.createElement('h1');
          pageElement.textContent = 'Details';
          const paramId = route.substring(route.lastIndexOf('/') + 1);
          pageElement.dataset.id = paramId;
        }
    }

    if (!pageElement) return;

    const main = document.querySelector('main');
    main.children[0]?.remove();
    main.appendChild(pageElement);
    window.scrollX = 0;
    window.scrollY = 0;
  },
};

export default Router;
