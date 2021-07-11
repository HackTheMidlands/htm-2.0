// Module Imports
// Helper imports
// Component imports
// Style imports
import styles from './logo-strip.module.scss';
import PropTypes from 'prop-types';
import React from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid';

// Image imports

/**
 * Logo strip components
 * @param props
 * @returns {*}
 * @constructor
 */
export const LogoStrip = ({ logos }) => (
    <div className={styles.strip}>
        <Grid fluid>
            <Row>
                {logos.map(({ alt, url, link }) => (
                    <Col key={alt} lg={2} md={4} sm={6} xs={12}>
                        <a
                            href={link}
                            target="_blank"
                            rel="noopener noreferrer">
                            <img src={url} alt={alt} className={styles.logo} />
                        </a>
                    </Col>
                ))}
            </Row>
        </Grid>
    </div>
);

// Prop definitions
LogoStrip.propTypes = {
    logos: PropTypes.arrayOf(
        PropTypes.shape({
            alt: PropTypes.string,
            url: PropTypes.string,
            link: PropTypes.string,
        }),
    ).isRequired,
};

// Default props
LogoStrip.defaultProps = {};
