// Module Imports
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Helper imports

// Component imports

// Style imports
import style from './index-intro.module.scss';

// Image imports
import HexGrid from './assets/hex-grid.png';
import PartyGif from '../../assets/gifs/partying_face.gif';
import HeartGif from '../../assets/gifs/sparkling_heart.gif';
import SmileWithHeart from '../../assets/gifs/smiling_face_with_hearts.gif';

/**
 * Index intro component
 * @param title
 * @param body
 * @returns {*}
 * @constructor
 */
export const IndexIntro = ({ title, body }) => (
    <Grid fluid className={style.intro}>
        <Row>
            <Col lg={7} md={9} sm={12} style={{ position: 'relative' }}>
                <img src={HexGrid} className={style.hex} alt="Hexagon grid" />
                <img src={HeartGif} className={style.heartGif} />
            </Col>
        </Row>
        <Row className={style.textBlock}>
            <Col lgOffset={5} lg={6} md={8} mdOffset={4} sm={12} style={{ position: 'relative' }}>
                <img src={PartyGif} className={style.partyGif} alt="Party hat" />
                <img src={SmileWithHeart} className={style.smileHeart} alt="Smiling face with hearts" />
                <h2 className={style.title} dangerouslySetInnerHTML={{ __html: title }} />
                <p className={style.body}>{body}</p>
            </Col>
        </Row>
    </Grid>
);

// Prop definitions
IndexIntro.propTypes = {};

// Default props
IndexIntro.defaultProps = {};
