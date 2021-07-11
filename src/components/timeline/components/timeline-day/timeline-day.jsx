// Module Imports
// Helper imports
// Component imports
// Style imports
import style from './timeline-day.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// Image imports

/**
 * Day button for the timeline
 * @param name
 * @param state
 * @param className
 * @param onClick
 * @returns {*}
 * @constructor
 */
export const TimelineDay = ({ name, state, className, onClick }) => (
    <div
        className={classNames([style.day, style[state], className])}
        onClick={onClick}>
        {name}
    </div>
);

// Prop definitions
TimelineDay.propTypes = {
    name: PropTypes.string.isRequired,
    state: PropTypes.oneOf(['inactive', 'active']),
    className: PropTypes.string,
    onClick: PropTypes.func,
};

// Default props
TimelineDay.defaultProps = {
    state: 'inactive',
    className: '',
    onClick: () => null,
};
