// Module Imports
import React, { useEffect, useRef } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

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
    const firstLoad = useRef(true);

    const initTwitch = () => {
        new window.Twitch.Player("twitch-embed", {
            width: '100%',
            height: '100%',
            channel: 'htm_live',
        });
    };

    useEffect(() => {
        if (firstLoad.current && typeof window !== 'undefined' && window.Twitch) {
            initTwitch();
            firstLoad.current = false;
        }
    }, []);
    return (
        <header className={styles.header} style={{ backgroundImage: `url(${Background})` }}>
            <div className={styles.video}>
                <h1 className={styles.featureTextTop}>HTM 5.0</h1>
                <div className={styles.embed}>
                    <div id="twitch-embed" style={{ height: '100%' }} />
                </div>
                <h1 className={styles.featureTextBottom}>LIVE</h1>
            </div>
        </header>
    );
};

// Prop definitions
LivePageHeader.propTypes = {};

// Default props
LivePageHeader.defaultProps = {};
