// Module Imports
// Helper imports
// Component imports
import { ImageCard } from '../image-card/image-card';
import CalendarIcon from './assets/calendar.svg';
// Image imports
import LocationIcon from './assets/location.svg';
// Style imports
import style from './event-card.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

/**
 * MissionBlock components
 * @param props
 * @returns {*}
 * @constructor
 */
export const EventCard = ({
    image,
    name,
    dateFrom,
    dateTo,
    location,
    link,
}) => (
    <ImageCard image={image}>
        <h4 className={style.eventName}>{name}</h4>
        <ul className={style.details}>
            <li className={style.listItem}>
                <img
                    className={style.icon}
                    src={LocationIcon}
                    alt="Location icon"
                />
                <p>{dateFrom}</p>
            </li>
            <li className={style.listItem}>
                <img
                    className={style.icon}
                    src={CalendarIcon}
                    alt="Location icon"
                />
                <p>{location}</p>
            </li>
        </ul>
    </ImageCard>
);

// Prop definitions
EventCard.propTypes = {
    image: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    dateFrom: PropTypes.string.isRequired,
    dateTo: PropTypes.string.isRequired,
    location: PropTypes.string.isRequired,
    link: PropTypes.string.isRequired,
};

// Default props
EventCard.defaultProps = {};
