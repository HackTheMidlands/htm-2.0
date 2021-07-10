require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

const settings = require('./src/data/site.json');

// const contentfulConfig = {
//     spaceId: process.env.CONTENTFUL_SPACE_ID,
//     accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
// };

// if you want to use the preview API please define
// CONTENTFUL_HOST in your environment config
// the `host` property should map to `preview.contentful.com`
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
// if (process.env.CONTENTFUL_HOST) {
//     contentfulConfig.host = process.env.CONTENTFUL_HOST;
// }

// const { spaceId, accessToken } = contentfulConfig;

// if (!spaceId || !accessToken) {
//     throw new Error(
//         'Contentful spaceId and the access token need to be provided.',
//     );
// }

module.exports = {
    siteMetadata: settings.meta,
    // pathPrefix: '/gatsby-contentful-starter',
    plugins: [
        // 'gatsby-transformer-remark',
        // 'gatsby-transformer-sharp',
        'gatsby-plugin-react-helmet',
        // 'gatsby-plugin-sharp',
    {
      resolve: `gatsby-plugin-sass`,
      options: {
       cssLoaderOptions: {
         esModule: false,
         modules: {
           namedExport: false,
         },
       },
     },
    },
        // {
        //     resolve: 'gatsby-source-contentful',
        //     options: contentfulConfig,
        // },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /\.inline\.svg$/,
                },
            },
        },
        // {
            // resolve: 'gatsby-plugin-google-analytics',
            // options: {
                // trackingId: 'UA-177286572-1',
            // },
        // },
        // 'gatsby-optional-chaining',
        // {
            // resolve: 'gatsby-plugin-load-script',
            // options: {
                // src: 'https://player.twitch.tv/js/embed/v1.js',
            // },
        // },
    ],
};
