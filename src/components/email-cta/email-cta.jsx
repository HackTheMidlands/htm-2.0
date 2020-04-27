// Module Imports
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Helper imports

// Component imports

// Style imports
import style from './email-cta.module.scss';

// Image imports
import EmailIcon from './assets/email-icon.svg';
import DotGrid from './assets/dot-grid.svg';
import GreenTriangle from './assets/green-triangle.svg';
import CircleImage from './assets/circle.svg';

/**
 * MissionBlock component
 * @param props
 * @returns {*}
 * @constructor
 */
export const EmailCta = (props) => {
    return (
        <div className={style.email}>
            <Grid fluid>
                <Row>
                    <Col xs={12} sm={10} smOffset={1} style={{ position: 'relative' }}>
                        <img src={DotGrid} className={style.dotGrid} alt="Dot grid" />
                        <div className={style.emailBox}>
                            <img className={style.emailIcon} src={EmailIcon} alt="Email icon" />
                            <h2 className={style.title}>Never miss out on new from Us</h2>
                            <input className={style.input} type="text" placeholder="Enter email" />
                            <button className={style.button} type="submit">Subscribe</button>
                        </div>
                        <img src={GreenTriangle} className={style.greenTriangle} alt="Dot grid" />
                        <img src={CircleImage} className={style.circleImage} alt="Dot grid" />
                    </Col>
                </Row>
            </Grid>
        </div>
    );
};

// Prop definitions
EmailCta.propTypes = {};

// Default props
EmailCta.defaultProps = {};
