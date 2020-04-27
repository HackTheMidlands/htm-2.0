// Module Imports
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'gatsby';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Helper imports

// Component imports

// Style imports
import style from './footer.module.scss';

// Image imports
import TwitterIcon from './assets/twitter.inline.svg';
import FacebookIcon from './assets/facebook.inline.svg';
import DiscordIcon from './assets/discord.inline.svg';
import InstagramIcon from './assets/instagram.inline.svg';

const socialIcons = [
    {
        name: 'Twitter',
        icon: TwitterIcon,
        link: 'https://twitter.com',
    },
    {
        name: 'Facebook',
        icon: FacebookIcon,
        link: 'https://facebook.com',
    },
    {
        name: 'Discord',
        icon: DiscordIcon,
        link: 'https://discord.com',
    },
    {
        name: 'Instagram',
        icon: InstagramIcon,
        link: 'https://instagram.com',
    },
];

/**
 * MissionBlock component
 * @param props
 * @returns {*}
 * @constructor
 */
export const Footer = (props) => (
    <footer className={style.footer}>
        <Grid>
            <Row between="xs" className={style.header} middle="xs">
                <Col xs className={style.newsletter}>
                    <h4>Join our newsletter</h4>
                </Col>
                <Col xs>
                    <ul className={style.socialIcons}>
                        { socialIcons.map(({ name, icon: Icon, link }) => (
                            <li key={name}>
                                <a href={link} target="_blank">
                                    <Icon className={style.socialIcon} />
                                </a>
                            </li>
                        ))}
                    </ul>
                </Col>
            </Row>
            <Row>
                <Col lg={3}>
                    <h4 className={style.listTitle}>Company</h4>
                    <ul className={style.list}>
                        <li><Link to="/#mission">Mission</Link></li>
                        <li><Link to="/#community">Community</Link></li>
                        <li><Link to="/#events">Events</Link></li>
                        <li><Link to="/blog">Read</Link></li>
                        <li><Link to="/sponsor">Sponsor</Link></li>
                    </ul>
                </Col>
                <Col lg={3}>
                    <h4 className={style.listTitle}>Events</h4>
                    <ul className={style.list}>
                        <li><Link to="/events/htm-5-0">HTM 5.0</Link></li>
                        <li><Link to="/events/local-hack-day">Local Hack Day</Link></li>
                    </ul>
                </Col>
                <Col lg={6}>
                    <h4 className={style.listTitle}>Social</h4>
                </Col>
            </Row>
        </Grid>
    </footer>
);

// Prop definitions
Footer.propTypes = {};

// Default props
Footer.defaultProps = {};
