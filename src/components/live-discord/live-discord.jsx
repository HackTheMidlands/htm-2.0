// Module Imports
// Image imports
import Background from './assets/background.svg';
// Helper imports
// Component imports
// Style imports
import styles from './live-discord.module.scss';
import React from 'react';

/**
 * Live Discord components
 * @param props
 * @returns {*}
 * @constructor
 */
export const LiveDiscord = (props) => (
    <div className={styles.discord}>
        <div
            className={styles.background}
            style={{ backgroundImage: `url(${Background})` }}
        />
        <iframe
            src="https://discordapp.com/widget?id=304313295165325323&theme=dark"
            width="350"
            height="300"
            frameBorder="0"
            sandbox="allow-popups allow-popups-to-escape-sandbox allow-same-origin allow-scripts"
            className={styles.iFrame}
        />
    </div>
);

// Prop definitions
LiveDiscord.propTypes = {};

// Default props
LiveDiscord.defaultProps = {};
