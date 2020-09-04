// Module Imports
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Helper imports

// Component imports

// Style imports
import style from './button-with-icon.module.scss';

// Image imports

/**
 * MissionBlock component
 * @param props
 * @returns {*}
 * @constructor
 */
export const ButtonWithIcon = ({
    name, icon, color, backgroundColor, border, children, onClick,
}) => (
    <button className={style.button} onClick={onClick} style={{ color, backgroundColor, border }}>
        <img src={icon} alt={name} className={style.icon} />
        <div className={style.divider} style={{ backgroundColor: color }} />
        <p className={style.text} style={{ color }}>{ children }</p>
    </button>
);

// Prop definitions
ButtonWithIcon.propTypes = {
    name: PropTypes.string.isRequired,
    icon: PropTypes.string.isRequired,
    color: PropTypes.string,
    backgroundColor: PropTypes.string,
    border: PropTypes.string,
    onClick: PropTypes.func,
};

// Default props
ButtonWithIcon.defaultProps = {
    color: 'white',
    backgroundColor: '#FF7365',
    onClick: () => null,
    border: 'none',
};
