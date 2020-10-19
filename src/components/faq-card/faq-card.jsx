// Module Imports
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Helper imports

// Component imports

// Style imports
import style from './faq-card.module.scss';

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
        <p className={style.title}> { title }</p>
        <p className={style.body}>{ body }</p>
    </div>
);

// Prop definitions
FaqCard.propTypes = {
    number: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
};

// Default props
FaqCard.defaultProps = {
};
