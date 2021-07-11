// Image imports
import HexGrid from './assets/hex-grid.png';
// Helper imports
// Component imports
// Style imports
import style from './index-intro.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { StaticImage } from "gatsby-plugin-image"

/**
 * Index intro components
 * @param title
 * @param body
 * @returns {*}
 * @constructor
 */
export const IndexIntro = ({ title, body }) => (
    <Grid fluid className={style.intro} id="mission">
        <Row>
            <Col lg={7} md={9} sm={12} style={{ position: 'relative' }}>
                <StaticImage src='./assets/hex-grid.png' className={style.hex} alt="Hexagon grid" />
                <img src='/images/webp/sparkling_heart.webp' className={style.heartGif} />
            </Col>
        </Row>
        <Row className={style.textBlock}>
            <Col
                lgOffset={5}
                lg={6}
                md={8}
                mdOffset={4}
                sm={12}
                style={{ position: 'relative' }}>
                <img
                    src='/images/webp/partying_face.webp'
                    className={style.partyGif}
                    alt="Party hat"
                />
                <img
                    src='/images/webp/smiling_face_with_hearts.webp'
                    className={style.smileHeart}
                    alt="Smiling face with hearts"
                />
                <h2
                    className={style.title}
                    dangerouslySetInnerHTML={{ __html: title }}
                />
                <p className={style.body}>{body}</p>
            </Col>
        </Row>
    </Grid>
);

// Prop definitions
IndexIntro.propTypes = {};

// Default props
IndexIntro.defaultProps = {};
