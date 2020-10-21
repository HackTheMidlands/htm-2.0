// Module Imports
import React, { useEffect, useState } from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import moment from 'moment';

// Helper imports

// Component imports

// Style imports
import style from './timeline-time.module.scss';

// Image imports

/**
 * Timeline time track at bottom of timeline
 * @param spaceBetween
 * @param currentDay
 * @returns {*}
 * @constructor
 */
export const TimelineTime = ({ spaceBetween, currentDay }) => {
    const [times, setTimes] = useState([]);
    const [currentHour, setCurrentHour] = useState(0);

    useEffect(() => {
        const t = [];
        for (let i = 0; i <= 24; i++) {
            t.push(`${i <= 9 ? `0${i}` : i}:00`);
        }
        setTimes(t);
        const now = moment();
        setCurrentHour(now.hour());
    }, []);

    return (
        <div className={style.timeTrack}>
            <div className={style.line} />
            { currentDay && (<div className={style.activeLine} style={{ left: currentHour * spaceBetween }} />) }
            { times.map((time) => (
                <div
                    key={time}
                    className={classNames([style.time, {
                        [`${style.active}`]: currentHour === parseInt(time.split(':')[0], 10) && currentDay,
                    }])}
                >
                    <div className={style.ball} />
                    { time }
                </div>
            ))}
        </div>
    );
};

// Prop definitions
TimelineTime.propTypes = {
    spaceBetween: PropTypes.number,
    currentDay: PropTypes.bool,
};

// Default props
TimelineTime.defaultProps = {
    spaceBetween: 300,
    currentDay: false,
};
