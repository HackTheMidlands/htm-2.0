// Helper imports
// Component imports
import { Button } from '../button/button';
// Image imports
import SponsorImage from './assets/sponsor-graphic.png';
// Style imports
import style from './sponsor-cta.module.scss';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid';

/**
 * MissionBlock components
 * @param props
 * @returns {*}
 * @constructor
 */
export const SponsorCta = (props) => (
    <section id="sponsor-cta" className={style.section}>
        <Grid fluid>
            <Row middle="xs">
                <Col
                    sm={10}
                    smOffset={1}
                    md={6}
                    mdOffset={0}
                    className={style.textCol}>
                    <h2 className={style.title}>
                        Fancy sponsoring something special and showing some{' '}
                        <span>
                            <video
                                autoPlay
                                loop
                                muted
                                playsInline
                                className={style.hearts}>
                                <source
                                    src="/images/revolving_hearts.webm"
                                    type="video/webm"
                                />
                            </video>
                        </span>
                        ?
                    </h2>
                    <p>
                        Without the help of our sponsors HackTheMidlands simply
                        would not be possible. Our sponsors are wonderful, have
                        loads of experience and are here to help! We will be
                        releasing more sponsors as we get closer to the event,
                        and if you're interested in becoming a sponsor for
                        HackTheMidlands then please register your interest below
                    </p>
                    <a href="/sponsorship.pdf" target="_blank">
                        <Button theme="orange" name="Sponsor sign up">
                            Sponsor us
                        </Button>
                    </a>
                </Col>
                <Col
                    sm={10}
                    smOffset={1}
                    md={6}
                    mdOffset={0}
                    lg={5}
                    lgOffset={1}
                    className={style.imageCol}>
                    <StaticImage
                        src="./assets/sponsor-graphic.png"
                        alt="Illustration of two people using a computer"
                        className={style.image}
                    />
                </Col>
            </Row>
        </Grid>
    </section>
);

// Prop definitions
SponsorCta.propTypes = {};

// Default props
SponsorCta.defaultProps = {};
