// Module Imports
// Helper imports
// Component imports
// Style imports
import style from './image-card.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import uniqud from 'uniqid';

// Image imports

/**
 * Image card component
 * @param name
 * @param image
 * @param children
 * @param headerStyle
 * @returns {*}
 * @constructor
 */
export const ImageCard = ({
    name,
    image,
    children,
    componentStyle,
    headerStyle,
    overlay,
}) => (
    <article className={style.imageCard} style={componentStyle}>
        <div className={style.header} style={headerStyle}>
            <img src={image} className={style.image} alt={name} />
            {overlay && (
                <div
                    className={style.overlay}
                    style={{ backgroundColor: overlay }}
                />
            )}
        </div>
        <div className={style.content}>{children}</div>
    </article>
);

// Prop definitions
ImageCard.propTypes = {
    name: PropTypes.string,
    image: PropTypes.string.isRequired,
    children: PropTypes.string.isRequired,
    headerStyle: PropTypes.object,
    overlay: PropTypes.string,
};

// Default props
ImageCard.defaultProps = {
    name: uniqud('image-card'),
    headerStyle: {},
    overlay: null,
};
