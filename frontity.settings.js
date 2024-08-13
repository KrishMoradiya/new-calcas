const settings = {
  name: 'calcasfrontend',
  state: {
    frontity: {
      url: 'http://localhost/calcas-frontend-project/',
      title: 'Test Frontity Blog',
      description: 'WordPress installation for Frontity development',
    },
  },
  packages: [
    {
      name: 'calcas-theme',
    },
    {
      name: '@frontity/wp-source',
      state: {
        source: {
          api: 'http://localhost/calcas-frontend-project/wp-json',
        },
      },
    },
    '@frontity/tiny-router',
    '@frontity/html2react',
  ],
};

export default settings;
