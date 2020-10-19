// Module Imports
import React, { useEffect, useState } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import moment from 'moment';

// Helper imports

// Component imports

// Style imports
import styles from './live-countdown.module.scss';

// Image imports

/**
 * Live countdown components
 * @param props
 * @returns {*}
 * @constructor
 */
export const LiveCountdown = ({ countdownToDate }) => {
    const [countdown, setCountdown] = useState({
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0,
    });

    const calculateCountdownValues = () => {
        const current = moment();
        const currentUnix = current.unix();
        const diffTime = countdownToDate.unix() - currentUnix;
        const duration = moment.duration(diffTime, 'seconds');
        setCountdown({
            days: duration.days(),
            hours: duration.hours(),
            minutes: duration.minutes(),
            seconds: duration.seconds(),
        });
    };

    useEffect(() => {
        const countdownInterval = setInterval(calculateCountdownValues, 1000);

        return () => {
            clearInterval(countdownInterval);
        };
    }, [countdownToDate]);

    return (
        <Grid fluid>
            <Row>
                <Col xl={12}>
                    <h3 className={styles.title}>Event Begins In</h3>
                </Col>
            </Row>
            <Row>
                <Col lg={8} lgOffset={2} md={12} mdOffset={0}>
                    <div className={styles.countdown}>
                        <div className={styles.days}>
                            <h1>{ countdown.days }</h1>
                            <p>Days</p>
                        </div>
                        <div className={styles.hours}>
                            <h1>{ countdown.hours }</h1>
                            <p>Hours</p>
                        </div>
                        <div className={styles.minutes}>
                            <h1>{ countdown.minutes }</h1>
                            <p>Minutes</p>
                        </div>
                        <div className={styles.seconds}>
                            <h1>{ countdown.seconds }</h1>
                            <p>Seconds</p>
                        </div>
                    </div>
                </Col>
            </Row>
        </Grid>
    );
};

// Prop definitions
LiveCountdown.propTypes = {
    countdownToDate: PropTypes.instanceOf(moment).isRequired,
};

// Default props
LiveCountdown.defaultProps = {};
