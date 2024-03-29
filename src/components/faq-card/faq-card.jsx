// Module Imports
// Helper imports
// Component imports
// Style imports
import style from './faq-card.module.scss';
import PropTypes from 'prop-types';
import React from 'react';

// Image imports

/**
 * FAQ Card Component
 * @param title
 * @param body
 * @returns {*}
 * @constructor
 */
export const FaqCard = ({ title, body }) => (
    <div className={style.card}>
        <p className={style.number}>Q</p>
        <p className={style.title}> {title}</p>
        <div className={style.body}
        dangerouslySetInnerHTML={{    __html: body,  }}/>
    </div>
);

// Prop definitions
FaqCard.propTypes = {
    number: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
};

// Default props
FaqCard.defaultProps = {};
