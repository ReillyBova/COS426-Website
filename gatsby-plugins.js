module.exports = [
    // Global navbar and footer sit above pages
    {
        resolve: `gatsby-plugin-layout`,
        options: {
            component: require.resolve(
                `./src/components/SiteLayout/SiteLayout.jsx`
            ),
        },
    },
    // Material UI
    'gatsby-plugin-top-layout',
    `gatsby-plugin-material-ui`,
    // Search Engine Optimization (SEO)
    'gatsby-plugin-react-helmet',
    {
        resolve: 'gatsby-plugin-manifest',
        options: {
            name: 'COS 426: Computer Graphics (2020) | Princeton University',
            short_name: 'COS 426',
            start_url: '/',
            background_color: '#221e20',
            theme_color: '#f58025',
            display: 'minimal-ui',
            icon: 'static/favicon.png',
        },
    },
    // Path shortcuts when importing
    {
        resolve: 'gatsby-plugin-module-resolver',
        options: {
            root: './src', // <- will be used as a root dir
            aliases: {
                branding: './assets/branding', // <- will become ./src/assets/branding
                images: './assets/images', // <- will become ./src/assets/images
                components: './components', // <- will become ./src/components
                content: './content', // <- will become ./src/content
                scenes: './scenes', // <- will become ./src/scenes
                shaders: './shaders', // <- will become ./src/scenes
                utils: './utils', // <- will become ./src/utils
            },
        },
    },
    // Image support
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    // Markdown support
    {
        resolve: `gatsby-transformer-remark`,
        options: {
            plugins: [
                {
                    resolve: 'gatsby-remark-smartypants',
                    options: {
                        dashes: 'oldschool',
                    },
                },
                {
                    resolve: `gatsby-remark-images`,
                    options: {
                        maxWidth: 960,
                    },
                },
            ],
        },
    },
    // Written (markdown) content filesystem for queries
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `content`,
            path: `${__dirname}/src/content`,
        },
    },
    {
        resolve: `gatsby-source-filesystem`,
        options: {
            name: `images`,
            path: `${__dirname}/src/assets/images`,
        },
    },
    // Sitemap generation
    'gatsby-plugin-sitemap',
];
