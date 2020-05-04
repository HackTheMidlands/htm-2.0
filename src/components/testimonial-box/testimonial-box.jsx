// Module Imports
import React, { useEffect, useState, useRef } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Helper imports

// Component imports

// Style imports
import style from './testimonial-box.module.scss';

// Image imports
import QuoteIcon from './assets/quote.inline.svg';

/**
 * Testimonial box
 * @param image
 * @param name
 * @param source
 * @param body
 * @returns {*}
 * @constructor
 */
export const TestimonialBox = ({
    image, name, source, children: body,
}) => {
    const imageRef = useRef(null);
    useEffect(() => {
        console.dir(imageRef.current);
        imageRef.current.style = {
            transition: 'all 0s ease',
            transform: 'scale(0)',
        };
        setTimeout(() => {
            imageRef.current.style = {
                transition: 'all 1s ease',
                transform: 'scale(1)',
            };
            imageRef.current.style.transition = 'all 1s ease';
            imageRef.current.style.transform = 'scale(1)';
        }, 500);
    });
    return (
        <div className={style.box}>
            <div className={style.quote}><QuoteIcon /></div>
            <header className={style.header}>
                <img ref={imageRef} className={style.image} src={image} alt={`${name} profile picture`} />
                <h4 className={style.name}>{ name }</h4>
                <p className={style.source}>{ source }</p>
            </header>
            <div className={style.content}>
                { body }
            </div>
        </div>
    );
};

// Prop definitions
TestimonialBox.propTypes = {};

// Default props
TestimonialBox.defaultProps = {};
