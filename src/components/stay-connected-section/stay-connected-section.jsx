// Module Imports
import Discord from '../../assets/img/discord-white.svg';
import Facebook from '../../assets/img/facebook-white.svg';
import Twitter from '../../assets/img/twitter-white.svg';
// Helper imports
// Component imports
import { ButtonWithIcon } from '../button-with-icon/button-with-icon';
// Image imports
import SocialIcons from './assets/social-icons.svg';
// Style imports
import style from './stay-connected-section.module.scss';
import classNames from 'classnames';
import { Link } from 'gatsby';
import PropTypes from 'prop-types';
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

/**
 * Stay connected section
 * @param props
 * @returns {*}
 * @constructor
 */
export const StayConnectedSection = (props) => (
    <section className={style.section} id="community">
        <Grid fluid>
            <Row middle="xs">
                <Col
                    xs={10}
                    xsOffset={1}
                    md={6}
                    mdOffset={0}
                    className={style.textCol}>

                    <video autoPlay loop muted playsInline className={style.gif}>
                        <source src='/images/penguin.webm' type="video/webm" />
                    </video>
                    <h2 className={style.title}>Get involved with us</h2>
                    <p>
                        We’ll be posting all of our updates over on our socials
                        so be sure to give us a follow, and join the Discord
                        server to participate 💖 We’ll see you there! ✨
                    </p>
                    <div className={style.buttons}>
                        <a
                            href="https://discord.gg/hackthemidlands"
                            target="_blank"
                            style={{ textDecoration: 'none' }}>
                            <ButtonWithIcon
                                icon={Discord}
                                name="Discord"
                                backgroundColor="#6F87E0">
                                Join Discord
                            </ButtonWithIcon>
                        </a>
                        <a
                            href="https://www.facebook.com/hackthemidlands"
                            target="_blank"
                            style={{ textDecoration: 'none' }}>
                            <ButtonWithIcon
                                icon={Facebook}
                                name="Facebook"
                                backgroundColor="#1878F2">
                                Facebook
                            </ButtonWithIcon>
                        </a>
                        <a
                            href="https://twitter.com/HackTheMidlands"
                            target="_blank"
                            style={{ textDecoration: 'none' }}>
                            <ButtonWithIcon
                                icon={Twitter}
                                name="Twitter"
                                backgroundColor="#1DA1F2">
                                Twitter
                            </ButtonWithIcon>
                        </a>
                    </div>
                </Col>
                <Col
                    xs={6}
                    xsOffset={3}
                    sm={4}
                    smOffset={4}
                    md={4}
                    mdOffset={2}
                    lg={3}
                    lgOffset={3}
                    className={style.imageCol}>
                    <img
                        src={SocialIcons}
                        className={style.icons}
                        alt="Social icon bubbles for Facebook, Instagram, Twitter and Discord"
                    />
                </Col>
            </Row>
        </Grid>
    </section>
);

// Prop definitions
StayConnectedSection.propTypes = {};

// Default props
StayConnectedSection.defaultProps = {};
