// Module Imports
// Helper imports
// Component imports
// Style imports
import styles from './live-header-text.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

// Image imports

/**
 * MissionBlock components
 * @param text
 * @param style
 * @param className
 * @returns {*}
 * @constructor
 */
export const LiveHeaderText = ({ text, style, className }) => (
    <div className={classNames([styles.container, className])} style={style}>
        <h1 className={styles.back}>{text}</h1>
        <h1 className={styles.main}>{text}</h1>
    </div>
);

// Prop definitions
LiveHeaderText.propTypes = {
    text: PropTypes.string.isRequired,
    style: PropTypes.object,
    className: PropTypes.string,
};

// Default props
LiveHeaderText.defaultProps = {
    style: {},
    className: '',
};
