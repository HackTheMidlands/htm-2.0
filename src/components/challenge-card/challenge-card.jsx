// Module Imports
// Helper imports
// Component imports
import { ImageCard } from '../image-card/image-card';
// Image imports
// Style imports
import style from './challenge-card.module.scss';
import PropTypes from 'prop-types';
import React from 'react';

/**
 * Card for challenges
 * @param image
 * @param logo
 * @param logoBackground
 * @param name
 * @param sponsorName
 * @param description
 * @returns {*}
 * @constructor
 */
export const ChallengeCard = ({
    image,
    logo,
    logoBackground,
    name,
    sponsorName,
}) => (
    <ImageCard
        image={image}
        headerStyle={{ height: '190px' }}
        overlay="#3B66FA"
        componentStyle={{ height: '100%' }}>
        <div className={style.logo} style={{ backgroundColor: logoBackground }}>
            <img src={logo} alt={sponsorName} />
        </div>
        <h4 className={style.eventName}>{name}</h4>
    </ImageCard>
);

// Prop definitions
ChallengeCard.propTypes = {
    image: PropTypes.string.isRequired,
    logo: PropTypes.string.isRequired,
    logoBackground: PropTypes.string.isRequired,
    name: PropTypes.string.isRequired,
    sponsorName: PropTypes.string.isRequired,
};

// Default props
ChallengeCard.defaultProps = {};
