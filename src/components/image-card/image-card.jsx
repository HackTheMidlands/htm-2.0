// Module Imports
// Helper imports
// Component imports
// Style imports
import style from './image-card.module.scss';
import PropTypes from 'prop-types';
import React from 'react';
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

// Default props
ImageCard.defaultProps = {
    name: uniqud('image-card'),
    headerStyle: {},
    overlay: null,
};
