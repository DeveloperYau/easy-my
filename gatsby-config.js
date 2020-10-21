module.exports = {
  pathPrefix: '/easy-my',
  siteMetadata: {
    title: 'Easy.my',
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: ['src/atoms/styles/'],
      },
    },
    {
      resolve: 'gatsby-plugin-manifest',
      options: {
        name: 'easy-my',
        short_name: 'easy.my',
        start_url: '/',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/images/gatsby-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-offline',
  ],
};
