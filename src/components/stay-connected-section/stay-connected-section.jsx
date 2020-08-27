// Module Imports
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Helper imports

// Component imports

// Style imports
import style from './stay-connected-section.module.scss';

// Image imports
import SocialIcons from './assets/social-icons.svg';
import Penguin from '../../assets/gifs/penguin.gif';

/**
 * Stay connected section
 * @param props
 * @returns {*}
 * @constructor
 */
export const StayConnectedSection = (props) => (
    <section className={style.section}>
        <Grid fluid>
            <Row middle="xs">
                <Col xs={10} xsOffset={1} md={6} mdOffset={0} className={style.textCol}>
                    <img src={Penguin} className={style.gif} />
                    <h2 className={style.title}>Stay up to date with us</h2>
                    <p>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua.</p>
                </Col>
                <Col xs={6} xsOffset={3} sm={4} smOffset={4} md={4} mdOffset={2} lg={3} lgOffset={3} className={style.imageCol}>
                    <img src={SocialIcons} className={style.icons} alt="Social icon bubbles for Facebook, Instagram, Twitter and Discord" />
                </Col>
            </Row>
        </Grid>

    </section>
);

// Prop definitions
StayConnectedSection.propTypes = {};

// Default props
StayConnectedSection.defaultProps = {};
