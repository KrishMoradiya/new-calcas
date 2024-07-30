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
      name: '@frontity/wp-source',
      state: {
        source: {
          url: 'http://localhost/calcas-frontend-project/wp-json',
        },
      },
    },
    '@frontity/tiny-router',
    '@frontity/html2react',
  ],
};

export default settings;
