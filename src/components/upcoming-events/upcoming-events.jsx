// Module Imports
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Helper imports

// Component imports
import { EventCard } from '../event-card/event-card';

// Style imports
import style from './upcoming-events.module.scss';

// Image imports
import Wave from './assets/wave.svg';
import ShapeBackground from './assets/header-shapes.svg';
import MailFlyingImage from './assets/flying-mail.svg';
import WavyLineImage from './assets/wavy-line.svg';

const calculateColWidth = (arrayLength, breakpoint) => {
    if (breakpoint === 'lg') {
        if (arrayLength > 2) {
            return 4;
        }
        if (arrayLength === 2) {
            return 6;
        }
        if (arrayLength < 2) {
            return 8;
        }
    }

    if (breakpoint === 'md') {
        if (arrayLength > 2) {
            return 6;
        }
        if (arrayLength === 2) {
            return 6;
        }
        if (arrayLength < 2) {
            return 8;
        }
    }
};

/**
 * MissionBlock component
 * @param props
 * @returns {*}
 * @constructor
 */
export const UpcomingEvents = ({ title, events }) => (
    <section className={style.section} style={{ backgroundImage: `url('${ShapeBackground}')` }}>
        <img src={MailFlyingImage} className={style.flyingMail} alt="Flying mail" />
        <img src={WavyLineImage} className={style.wavyLine} alt="Flying mail" />
        <img src={Wave} className={style.wave} alt="Wave background" />
        <Grid fluid>
            <Row>
                <Col xs={12} lg={4} lgOffset={4}>
                    <h2 className={style.title}>{ title }</h2>
                </Col>
            </Row>
            <Row>
                { events.map(({
                    name, featureImage, dateFrom, dateTo, location, link,
                }, index, array) => (
                    <Col
                        key={name}
                        xs={12}
                        sm={12}
                        md={calculateColWidth(array.length, 'md')}
                        mdOffset={array.length === 1 ? 2 : 0}
                        lg={calculateColWidth(array.length, 'lg')}
                        lgOffset={array.length === 1 ? 2 : 0}
                        style={{ zIndex: 2 }}
                    >
                        <EventCard
                            name={name}
                            location={location}
                            dateFrom={dateFrom}
                            dateTo={dateTo}
                            link={link}
                            image={featureImage}
                        />
                    </Col>
                ))}
            </Row>
        </Grid>
    </section>
);

// Prop definitions
UpcomingEvents.propTypes = {
    title: PropTypes.string,
    events: PropTypes.arrayOf(PropTypes.shape({
        name: PropTypes.string,
        dateFrom: PropTypes.string,
        dateTo: PropTypes.string,
        location: PropTypes.string,
        link: PropTypes.string,
        featureImage: PropTypes.string,
    })).isRequired,

};

// Default props
UpcomingEvents.defaultProps = {
    title: 'Upcoming events',
};
