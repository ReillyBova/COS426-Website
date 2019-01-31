module.exports = {
    siteMetadata: {
        title: 'COS 426: Computer Graphics (2019) | Princeton University',
        siteUrl: `http://www.cs.princeton.edu/courses/archive/spring19/cos426/`,
        description: `The Princeton University course website for the Spring 2019 term of COS 426: Computer Graphics`,
        keywords: 'COS 426, Princeton, Graphics, Computer Science, Spring 2019'
    },
    plugins: [
        'gatsby-plugin-react-helmet',
        {
          resolve: `gatsby-plugin-manifest`,
          options: {
              name: 'COS 426: Computer Graphics (2019) | Princeton University',
              short_name: 'COS 426',
              start_url: '/',
              background_color: '#221e20',
              theme_color: '#f58025',
              display: 'minimal-ui',
              icon: 'src/images/princeton-favicon.png' // This path is relative to the root of the site.
          }
        },
        'gatsby-plugin-offline'
    ]
};
