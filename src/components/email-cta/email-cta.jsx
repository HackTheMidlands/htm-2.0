// Module Imports
import CircleImage from './assets/circle.inline.svg';
import DotGrid from './assets/dot-grid.inline.svg';
// Image imports
import EmailIcon from './assets/email-icon.inline.svg';
import GreenTriangle from './assets/green-triangle.inline.svg';
// Helper imports
// Component imports
// Style imports
import style from './email-cta.module.scss';
import React from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid';

/**
 * MissionBlock components
 * @param props
 * @returns {*}
 * @constructor
 */
export const EmailCta = (props) => {
    return (
        <div className={style.email}>
            <Grid fluid>
                <Row>
                    <Col
                        xs={12}
                        sm={10}
                        smOffset={1}
                        style={{ position: 'relative' }}>
                        <DotGrid className={style.dotGrid} />
                        <div className={style.emailBox}>
                            <EmailIcon className={style.emailIcon} />
                            <h2 className={style.title}>
                                Never miss out on new from Us{' '}
                            </h2>
                            <input
                                className={style.input}
                                type="text"
                                placeholder="Enter email"
                            />
                            <button className={style.button} type="submit">
                                Subscribe
                            </button>
                        </div>
                        <GreenTriangle className={style.greenTriangle} />
                        <CircleImage className={style.circleImage} />
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
