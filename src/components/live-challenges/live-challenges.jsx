// Module Imports
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Helper imports

// Component imports
import { ChallengeCard } from '../challenge-card/challenge-card';

// Style imports
import style from './live-challenges.module.scss';

// Image imports

/**
 * MissionBlock components
 * @param props
 * @returns {*}
 * @constructor
 */
export const LiveChallenges = ({ challenges }) => (
    <div className={style.challenges}>
        <Grid fluid>
            <Row>
                { challenges.map(({
                    name, sponsor, logo, logoBackground, featureImage,
                }) => (
                    <Col lg={4} md={6} sm={12}>
                        <div className={style.challengeItem}>
                            <ChallengeCard image={featureImage} logoBackground={logoBackground} logo={logo} name={name} sponsorName={sponsor} />
                        </div>
                    </Col>
                )) }
            </Row>
        </Grid>

    </div>
);

// Prop definitions
LiveChallenges.propTypes = {
    challenges: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            sponsor: PropTypes.string,
            logo: PropTypes.string,
            logoBackground: PropTypes.string,
            featureImage: PropTypes.string,
        }),
    ).isRequired,
};

// Default props
LiveChallenges.defaultProps = {};
