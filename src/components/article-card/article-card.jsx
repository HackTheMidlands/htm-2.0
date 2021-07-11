// Module Imports
// Helper imports
// Component imports
import { ImageCard } from '../image-card/image-card';
// Style imports
import style from './article-card.module.scss';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';

// Image imports

/**
 * MissionBlock components
 * @param props
 * @returns {*}
 * @constructor
 */
export const ArticleCard = ({ image, title, body, link }) => (
    <ImageCard image={image}>
        <h4 className={style.title}>{title}</h4>
        <p>{body}</p>
        <Link to={link} className={style.link}>
            Read More
        </Link>
    </ImageCard>
);

// Prop definitions
ArticleCard.propTypes = {
    image: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

// Default props
ArticleCard.defaultProps = {};
