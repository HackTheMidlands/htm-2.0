// Module Imports
import EventImage from '../../assets/img/event-pictures/workshop.jpg';
import DotGrid from './assets/dot-grid.svg';
import GreenCircleLarge from './assets/green-circle-large-glow.svg';
import GreenTriangle from './assets/green-triangle-glow.svg';
import OrangeSquare from './assets/orange-square.svg';
// Image imports
import WaveBackground from './assets/wave.svg';
// Helper imports
// Component imports
// Style imports
import style from './mission-block.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

/**
 * Mission block
 * @param title
 * @param body
 * @param image
 * @param statistics
 * @returns {*}
 * @constructor
 */
export const MissionBlock = ({ title, body, image, statistics }) => (
    <section
        className={style.mission}
        style={{ backgroundImage: `url('${WaveBackground}')` }}>
        <Grid fluid className={style.grid}>
            <Row>
                <Col
                    xs={12}
                    md={10}
                    mdOffset={1}
                    lg={5}
                    lgOffset={0}
                    className={style.textCol}
                    style={{ position: 'relative' }}>
                    <img
                        src={OrangeSquare}
                        alt="Orange square"
                        className={style.orangeSquare}
                    />
                    <img
                        src={GreenTriangle}
                        alt="Green triangle"
                        className={style.greenTriangle}
                    />
                    <h2 className={style.title}>{title}</h2>
                    <p className={style.body}>{body}</p>
                </Col>
                <Col
                    xs={12}
                    md={10}
                    mdOffset={1}
                    lg={6}
                    lgOffset={1}
                    className={style.imageCol}>
                    <div className={style.image}>
                        <img
                            src={GreenCircleLarge}
                            alt="Green circle"
                            className={style.greenCircleLarge}
                        />
                        <img
                            className={style.featureImage}
                            src={image}
                            alt="Mission image"
                        />
                        <img
                            src={DotGrid}
                            alt="Dot grid overlay"
                            className={style.dotGrid}
                        />
                    </div>
                    <ul className={style.statistics}>
                        {statistics.map((stat) => (
                            <li key={stat} className={style.statisticItem}>
                                {stat}
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>
        </Grid>
    </section>
);

// Prop definitions
MissionBlock.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    image: PropTypes.string,
    statistics: PropTypes.arrayOf(PropTypes.string),
};

// Default props
MissionBlock.defaultProps = {
    title: 'Creating a safe and inclusive place for all',
    body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    image: EventImage,
    statistics: [
        '5 Annual Hackathons',
        '1,000 + Hackers Attended',
        '150+ Projects Created',
    ],
};
