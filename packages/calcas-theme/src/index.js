import Root from './components';

const calcasTheme = {
  name: 'calcas-theme',
  roots: {
    theme: Root,
  },
  state: {
    theme: {
      autoPrefetch: "in-view",
      menu: [],
      menuUrl:'calcas-menu',
      fetchMenu: async({state,libraries}) => {
        try {
          const response = await libraries.source.api.get({
            endpoint: `/menus/v1/menus/${state.theme.menuUrl}/`,
          });
          const postData = await response.json();
          state.theme.menu = postData.items;
        } catch (error) {
          console.error('Failed to fetch menu:', error);
        }
      },
      isMobileMenuOpen: false,
      featured: {
        showOnList: false,
        showOnPost: false,
      },
    },
  },
  actions: {
    theme: {},
  },
};

export default calcasTheme;
