// Module Imports
import DiagonalLine from './assets/diaganol-line.svg';
import GreenCircle from './assets/green-circle.inline.svg';
import LocationMarker from './assets/location-marker.inline.svg';
// Image imports
import MapImage from './assets/map.jpg';
import ArrowRightIcon from './assets/orange-arrow-right.inline.svg';
import PinkTriangle from './assets/pink-triangle.inline.svg';
import StationIcon from './assets/station.inline.svg';
// Helper imports
// Component imports
// Style imports
import style from './event-location.module.scss';
import PropTypes from 'prop-types';
import React from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid';

/**
 * MissionBlock components
 * @param props
 * @returns {*}
 * @constructor
 */
export const EventLocation = ({ title, address, nearbyStations }) => (
    <section className={style.section}>
        <img src={DiagonalLine} className={style.diagonalLine} alt="Line" />
        <Grid
            fluid
            style={{
                position: 'relative',
                zIndex: 1,
            }}>
            <Row>
                <Col xs={12}>
                    <h3 className={style.title}>{title}</h3>
                </Col>
            </Row>
            <Row bottom="lg">
                <Col lg={8} style={{ position: 'relative' }}>
                    <img
                        className={style.map}
                        src={MapImage}
                        alt="HTM location on map"
                    />
                    <div className={style.planJourney}>
                        <a
                            href="https://goo.gl/maps/pAThZ8JpXXYJUnwy6"
                            target="_blank">
                            <p>Plan my journey</p>
                            <ArrowRightIcon />
                        </a>
                    </div>
                    <PinkTriangle className={style.triangle} />
                    <GreenCircle className={style.circle} />
                </Col>
                <Col lg={3} lgOffset={1}>
                    <ul className={style.locationInfo}>
                        <li className={style.locationItem}>
                            <LocationMarker className={style.icon} />
                            <p>{address}</p>
                        </li>
                        {nearbyStations.map((station) => (
                            <li className={style.locationItem} key={station}>
                                <StationIcon className={style.icon} />
                                <p
                                    dangerouslySetInnerHTML={{
                                        __html: station,
                                    }}
                                />
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>
        </Grid>
    </section>
);

// Prop definitions
EventLocation.propTypes = {
    title: PropTypes.string,
    address: PropTypes.string,
    nearbyStations: PropTypes.arrayOf(PropTypes.string),
};

// Default props
EventLocation.defaultProps = {
    title: 'Find us',
    address: 'Millennium Point, Curzon St, Birmingham, B4 7XG',
    nearbyStations: [
        'Birmingham New St <br>1 mile (15 minute walk)',
        'Birmingham Moor St <br>0.7 mile (11 minute walk)',
    ],
};
