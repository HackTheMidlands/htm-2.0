// Module Imports
import { StatBubbles } from '../stat-bubbles/stat-bubbles';
// Types
import { statPropTemplate } from '../stat-bubbles/stat-bubbles';
// Helper imports
// Component imports
// Style imports
import style from './event-intro-statistics.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

// Image imports

/**
 * Event intro with statistics block
 * @param title
 * @param body
 * @param statOne
 * @param statTwo
 * @returns {*}
 * @constructor
 */
export const EventIntroStatistics = ({ title, body, statOne, statTwo }) => (
    <section id="event-welcome-and-statistics" className={style.intro}>
        <Grid fluid>
            <Row>
                <Col md={12} lg={6} className={style.textCol}>
                    <h2 className={style.title}>{title}</h2>
                    <p className={style.body}>{body}</p>
                </Col>
                <Col md={12} lg={5} lgOffset={1} className={style.bubblesCol}>
                    <StatBubbles statOne={statOne} statTwo={statTwo} />
                </Col>
            </Row>
        </Grid>
    </section>
);

// Prop definitions
EventIntroStatistics.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    statOne: statPropTemplate,
    statTwo: statPropTemplate,
};

// Default props
EventIntroStatistics.defaultProps = {
    title: 'Learn, build and share your amazing ideas in a welcoming community',
    body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.',
    statOne: {
        statistic: '300+',
        text: 'Attendees',
    },
    statTwo: {
        statistic: '400',
        text: 'Projects made',
    },
};
