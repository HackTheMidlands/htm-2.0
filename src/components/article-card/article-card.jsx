// Module Imports
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'gatsby';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Helper imports

// Component imports
import { ImageCard } from '../image-card/image-card';

// Style imports
import style from './article-card.module.scss';

// Image imports

/**
 * MissionBlock component
 * @param props
 * @returns {*}
 * @constructor
 */
export const ArticleCard = ({
    image, title, body, link,
}) => (
    <ImageCard image={image}>
        <h4 className={style.title}>{ title }</h4>
        <p>{ body }</p>
        <Link to={link} className={style.link}>Read More</Link>
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
