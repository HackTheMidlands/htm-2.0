// Module Imports
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

/**
 * MissionBlock components
 * @param title
 * @param description
 * @param image
 * @param url
 * @returns {*}
 * @constructor
 */
export const Seo = ({ title, description, image, url }) => (
    <Helmet
        htmlAttributes={{
            lang: 'en',
        }}
        titleTemplate={`%s | ${title}`}>
        <title>{title}</title>
        <meta name="title" content={title} />
        <meta name="description" content={description} />
        <meta property="og:type" content="website" />
        <meta property="og:url" content={url} />
        <meta property="og:title" content={title} />
        <meta property="og:description" content={description} />
        <meta property="og:image" content={image} />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content={url} />
        <meta property="twitter:title" content={title} />
        <meta property="twitter:description" content={description} />
        <meta property="twitter:image" content={image} />
        <link rel="shortcut icon" href="/images/favicon.ico" />
    </Helmet>
);

// Prop definitions
Seo.propTypes = {
    title: PropTypes.string,
};

// Default props
Seo.defaultProps = {
    title: 'HackTheMidlands',
    description:
        'Usually HackTheMidlands is a 24-hour hackathon, or “creative marathon”, which was founded in 2016. We provide a unique space for hundreds of passionate technologists like you to share their experiences, meet new people and learn something new - gaining valuable skills in the process.',
    image: 'https://hackthemidlands.com/images/hackthemidlands-facebook.jpg',
    url: 'https://hackthemidlands.com/',
};
