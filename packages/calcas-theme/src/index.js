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
      menuUrl: "",
      isMobileMenuOpen: false,
      featured: {
        showOnList: true,
        showOnPost: true,
      },
    },
  },
  actions: {
    theme: {},
  },
};

export default calcasTheme;
