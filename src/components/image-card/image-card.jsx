// Module Imports
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import uniqud from 'uniqid';

// Helper imports

// Component imports

// Style imports
import style from './image-card.module.scss';

// Image imports

/**
 * MissionBlock components
 * @param props
 * @returns {*}
 * @constructor
 */
export const ImageCard = ({ name, image, children }) => (
    <article className={style.imageCard}>
        <div className={style.header}>
            <img src={image} className={style.image} alt={name} />
        </div>
        <div className={style.content}>
            { children }
        </div>
    </article>
);

// Prop definitions
ImageCard.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
};

// Default props
ImageCard.defaultProps = {
    name: uniqud('image-card'),
};
