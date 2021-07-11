// Module Imports
import PropTypes from 'prop-types';
import React from 'react';
import { Helmet } from 'react-helmet';

/**
 * MissionBlock components
 * @param title
 * @returns {*}
 * @constructor
 */
export const Seo = ({ title }) => (
    <Helmet>
        <title>{title}</title>
        <meta name="title" content="HackTheMidlands 5.0" />
        <meta
            name="description"
            content="Usually HackTheMidlands is a 24-hour hackathon, or “creative marathon”, which was founded in 2016. We provide a unique space for hundreds of passionate technologists like you to share their experiences, meet new people and learn something new - gaining valuable skills in the process."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://hackthemidlands.com/" />
        <meta property="og:title" content="HackTheMidlands 5.0" />
        <meta
            property="og:description"
            content="Usually HackTheMidlands is a 24-hour hackathon, or “creative marathon”, which was founded in 2016. We provide a unique space for hundreds of passionate technologists like you to share their experiences, meet new people and learn something new - gaining valuable skills in the process."
        />
        <meta
            property="og:image"
            content="http://hackthemidlands.com/images/hackthemidlands-facebook.jpg"
        />
        <meta property="twitter:card" content="summary_large_image" />
        <meta property="twitter:url" content="https://hackthemidlands.com/" />
        <meta property="twitter:title" content="HackTheMidlands 5.0" />
        <meta
            property="twitter:description"
            content="Usually HackTheMidlands is a 24-hour hackathon, or “creative marathon”, which was founded in 2016. We provide a unique space for hundreds of passionate technologists like you to share their experiences, meet new people and learn something new - gaining valuable skills in the process."
        />
        <meta
            property="twitter:image"
            content="http://hackthemidlands.com/images/hackthemidlands-facebook.jpg"
        />
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
};
