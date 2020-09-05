// Module Imports
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { navigate } from 'gatsby';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Helper imports

// Component imports
import { Button } from '../button/button';

// Style imports
import style from './sponsor-cta.module.scss';

// Image imports
import HeartImage from './assets/heart.inline.svg';
import SponsorImage from './assets/sponsor-graphic.png';
import RevolvingHearts from '../../assets/gifs/revolving_hearts.gif';

/**
 * MissionBlock component
 * @param props
 * @returns {*}
 * @constructor
 */
export const SponsorCta = (props) => (
    <section className={style.section}>
        <Grid fluid>
            <Row middle="xs">
                <Col sm={10} smOffset={1} md={6} mdOffset={0} className={style.textCol}>
                    <h2 className={style.title}>Fancy sponsoring something special and showing some <span><img src={RevolvingHearts} className={style.hearts} /></span>?</h2>
                    <p>Without the help of our sponsors HackTheMidlands simply would not be possible. Our sponsors are wonderful, have loads of experience and are here to help! We will be releasing more sponsors as we get closer to the event, and if you're interested in becoming a sponsor for HackTheMidlands 2020 then please register your interest below</p>
                    <a href="/sponsorship.pdf" target="_blank">
                        <Button theme="orange" name="Sponsor sign up">Sponsor us</Button>
                    </a>
                </Col>
                <Col sm={10} smOffset={1} md={6} mdOffset={0} lg={5} lgOffset={1} className={style.imageCol}>
                    <img src={SponsorImage} alt="Illustration of two people using a computer" className={style.image} />
                </Col>
            </Row>
        </Grid>
    </section>
);

// Prop definitions
SponsorCta.propTypes = {};

// Default props
SponsorCta.defaultProps = {};