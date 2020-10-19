// Module Imports
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Helper imports

// Component imports
import { Video } from '../video/video';

// Style imports
import styles from './live-page-header.module.scss';

// Image imports
import Background from './assets/background.svg';
import HTMVideo from '../../assets/hero-video.mp4';

const sources = [
    {
        src: HTMVideo,
        type: 'video/mp4',
    },
];

/**
 * MissionBlock components
 * @param props
 * @returns {*}
 * @constructor
 */
export const LivePageHeader = (props) => {
    return (
        <header className={styles.header} style={{ backgroundImage: `url(${Background})` }}>

            <div className={styles.video}>
                <h1 className={styles.featureTextTop}>HTM 5.0</h1>
                <Video sources={sources} className={styles.videoComponent} />
                <h1 className={styles.featureTextBottom}>LIVE</h1>
            </div>
        </header>
    );
};

// Prop definitions
LivePageHeader.propTypes = {};

// Default props
LivePageHeader.defaultProps = {};
