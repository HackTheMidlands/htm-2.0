// Module Imports
// Helper imports
// Component imports
// Style imports
import style from './icon-card.module.scss';
import PropTypes from 'prop-types';
import React from 'react';

// Image imports

/**
 * MissionBlock components
 * @param props
 * @returns {*}
 * @constructor
 */
export const IconCard = ({ icon, title, body, colour }) => (
    <div className={style.iconCard}>
        <img
            className={style.icon}
            src={icon}
            alt={title}
            style={{ boxShadow: `0 3px 25px ${colour}` }}
        />
        <h4 className={style.title}>{title}</h4>
        <p className={style.body} dangerouslySetInnerHTML={{ __html: body }} />
    </div>
);

// Prop definitions
IconCard.propTypes = {
    icon: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    body: PropTypes.string.isRequired,
    colour: PropTypes.string.isRequired,
};

// Default props
IconCard.defaultProps = {};
