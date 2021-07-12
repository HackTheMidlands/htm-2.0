// Module Imports
// Helper imports
// Component imports
// Style imports
import style from './stat-bubbles.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';

// Image imports

const StatBubble = ({ statistic, text, type }) => (
    <div className={classNames([style.bubble, style[type]])}>
        <p className={style.stat}>{statistic}</p>
        <p className={style.text}>{text}</p>
    </div>
);

/**
 * MissionBlock components
 * @param props
 * @returns {*}
 * @constructor
 */
export const StatBubbles = ({ statOne, statTwo }) => (
    <div className={style.container}>
        <ul className={style.bubbles}>
            <li className={style.statOne}>
                <StatBubble
                    statistic={statOne.statistic}
                    text={statOne.text}
                    type="solid"
                />
            </li>
            <li className={style.statTwo}>
                <StatBubble
                    statistic={statTwo.statistic}
                    text={statTwo.text}
                    type="outline"
                />
            </li>
        </ul>
    </div>
);

// Template for stat bubble
export const statPropTemplate = PropTypes.shape({
    statistic: PropTypes.string,
    text: PropTypes.string,
});

// Prop definitions
StatBubbles.propTypes = {
    statOne: statPropTemplate.isRequired,
    statTwo: statPropTemplate.isRequired,
};

// Default props
StatBubbles.defaultProps = {};

StatBubble.propTypes = {
    statistic: PropTypes.string.isRequired,
    text: PropTypes.string.isRequired,
    type: PropTypes.oneOf(['solid', 'outline']).isRequired,
};

StatBubble.defaultProps = {};
