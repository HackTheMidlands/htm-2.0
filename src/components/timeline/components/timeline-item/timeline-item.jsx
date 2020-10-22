// Module Imports
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Helper imports

// Component imports

// Style imports
import style from './timeline-item.module.scss';

// Image imports

/**
 * Timeline item box
 * @param name
 * @param time
 * @param endTime
 * @param owner
 * @param state
 * @returns {*}
 * @constructor
 */
export const TimelineItem = ({
    name, time, endTime, owner, state,
}) => (
    <div className={classNames([style.timelineItem, style[state]])}>
        <h3 className={style.name}>{ name }</h3>
        <p className={style.time}>{ time } - { endTime }</p>
        <p className={style.owner}>{ owner }</p>
    </div>
);

// Prop definitions
TimelineItem.propTypes = {
    name: PropTypes.string.isRequired,
    time: PropTypes.string.isRequired,
    endTime: PropTypes.string.isRequired,
    owner: PropTypes.string.isRequired,
    state: PropTypes.oneOf(['active', 'inactive']),
};

// Default props
TimelineItem.defaultProps = {
    state: 'inactive',
};
