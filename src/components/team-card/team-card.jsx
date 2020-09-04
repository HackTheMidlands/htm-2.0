// Module Imports
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Helper imports

// Component imports

// Style imports
import style from './team-card.module.scss';

// Image imports

/**
 * MissionBlock component
 * @param image
 * @param name
 * @param nickname
 * @param position
 * @returns {*}
 * @constructor
 */
export const TeamCard = ({
    image, name, nickname, position,
}) => (
    <div className={style.card}>
        <div className={style.imageWrapper}>
            <img className={style.image} alt={name} src={image} />
        </div>
        <div className={style.meta}>
            <p className={style.name}>{ name }</p>
            { position && <p className={style.position}>{ position }</p> }
            { nickname && <p className={style.nickname}>{ nickname }</p> }
        </div>
    </div>
);

// Prop definitions
TeamCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    nickname: PropTypes.string,
    position: PropTypes.string,
};

// Default props
TeamCard.defaultProps = {
    nickname: null,
    position: null,
};
