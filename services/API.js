const API = {
  url: '/data/menu.json',
  fetchMenu: async () => {
    try {
      const response = await fetch(this.url);
      return await response.json();
    } catch (error) {
      console.error('Error while fetching menu: ', error);
    }
  },
};

export default API;
