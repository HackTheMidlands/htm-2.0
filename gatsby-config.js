require('dotenv').config({
    path: `.env.${process.env.NODE_ENV}`,
});

const settings = require('./src/data/site.json');

const contentfulConfig = {
    spaceId: process.env.CONTENTFUL_SPACE_ID,
    accessToken: process.env.CONTENTFUL_ACCESS_TOKEN,
};

// if you want to use the preview API please define
// CONTENTFUL_HOST in your environment config
// the `host` property should map to `preview.contentful.com`
// https://www.contentful.com/developers/docs/references/content-preview-api/#/reference/spaces/space/get-a-space/console/js
if (process.env.CONTENTFUL_HOST) {
    contentfulConfig.host = process.env.CONTENTFUL_HOST;
}

const { spaceId, accessToken } = contentfulConfig;

if (!spaceId || !accessToken) {
    throw new Error(
        'Contentful spaceId and the access token need to be provided.',
    );
}

module.exports = {
    siteMetadata: settings.meta,
    plugins: [
        `gatsby-plugin-image`,
        {
            resolve: `gatsby-plugin-sharp`,
            options: {
                defaults: {
                    formats: [`auto`, `webp`],
                    placeholder: `blurred`,
                    quality: 50,
                    breakpoints: [750, 1080, 1366, 1920],
                    backgroundColor: `transparent`,
                    tracedSVGOptions: {},
                    blurredOptions: {},
                    jpgOptions: {},
                    pngOptions: {},
                    webpOptions: {},
                    avifOptions: {},
                },
            },
        },
        `gatsby-transformer-sharp`, // Needed for dynamic images
        'gatsby-plugin-react-helmet',
        {
            resolve: `gatsby-plugin-manifest`,
            options: {
                name: `HackTheMidlands`,
                short_name: `HTM`,
                start_url: `/`,
                background_color: `#eff6ff`,
                theme_color: `#449afd`,
                display: `standalone`,
                icon: 'static/logo.png',

            },
        },
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
        {
            resolve: 'gatsby-source-contentful',
            options: contentfulConfig,
        },
        {
            resolve: 'gatsby-plugin-react-svg',
            options: {
                rule: {
                    include: /\.inline\.svg$/,
                },
            },
        },
        {
            resolve: `gatsby-plugin-gatsby-cloud`,
            options: {
                headers: {
                    "/images/*": [
                        "Cache-Control: public, max-age=31536000, immutable",
                    ],
                }, // option to add more headers. `Link` headers are transformed by the below criteria
                allPageHeaders: [], // option to add headers for all pages. `Link` headers are transformed by the below criteria
                mergeSecurityHeaders: true, // boolean to turn off the default security headers
                mergeLinkHeaders: true, // boolean to turn off the default gatsby js headers
                mergeCachingHeaders: true, // boolean to turn off the default caching headers
                transformHeaders: (headers, path) => headers, // optional transform for manipulating headers under each path (e.g.sorting), etc.
                generateMatchPathRewrites: true, // boolean to turn off automatic creation of redirect rules for client only paths
            },
        },
        `gatsby-plugin-sitemap`
    ],
};
