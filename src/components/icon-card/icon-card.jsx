// Module Imports
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Helper imports

// Component imports

// Style imports
import style from './icon-card.module.scss';

// Image imports

/**
 * MissionBlock component
 * @param props
 * @returns {*}
 * @constructor
 */
export const IconCard = ({ icon, title, body }) => (
    <div className={style.iconCard}>
        <img className={style.icon} src={icon} alt={title} />
        <h4 className={style.title}>{ title }</h4>
        <p className={style.body}>{ body }</p>
    </div>
);

// Prop definitions
IconCard.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
};

// Default props
IconCard.defaultProps = {};
