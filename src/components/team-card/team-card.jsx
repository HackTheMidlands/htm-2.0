// Module Imports
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { GatsbyImage } from "gatsby-plugin-image"
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Helper imports

// Component imports

// Style imports
import style from './team-card.module.scss';

// Image imports

/**
 * MissionBlock components
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
            <GatsbyImage className={style.image} alt={name} image={image} />
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
    image: PropTypes.object.isRequired,
    name: PropTypes.string.isRequired,
    nickname: PropTypes.string,
    position: PropTypes.string,
};

// Default props
TeamCard.defaultProps = {
    nickname: null,
    position: null,
};
