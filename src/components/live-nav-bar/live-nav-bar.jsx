// Module Imports
// Image imports
import Logo from '../../assets/img/logo.png';
// Helper imports
// Component imports
// Style imports
import styles from './live-nav-bar.module.scss';
import { Link } from 'gatsby';
import React, { useEffect, useState } from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid';

/**
 * MissionBlock components
 * @param props
 * @returns {*}
 * @constructor
 */
export const LiveNavBar = (props) => {
    const [navScrolled, setNavScrolled] = useState(false);

    const onScroll = () => {
        const yOffset = window.pageYOffset;
        // Set to true if the scroll offset is > 100
        setNavScrolled(yOffset > 100);
    };

    useEffect(() => {
        // Trigger on scroll on page load
        onScroll();

        // Add on scroll listener
        window.addEventListener('scroll', onScroll);

        return () => {
            window.removeEventListener('scroll', onScroll);
        };
    }, []);
    return (
        <div className={styles.container}>
            <Grid fluid>
                <Row>
                    <Col xs={12}>
                        <nav
                            className={styles.nav}
                            style={{
                                paddingTop: navScrolled ? '10px' : null,
                                paddingBottom: navScrolled ? '10px' : null,
                            }}>
                            <ul className={styles.left}>
                                <li className={styles.leftItem}>
                                    <Link
                                        to="/live#challenges"
                                        style={{ textDecoration: 'none' }}>
                                        Challenges
                                    </Link>
                                </li>
                                <li className={styles.leftItem}>
                                    <Link
                                        to="/live#timeline"
                                        style={{ textDecoration: 'none' }}>
                                        Timeline
                                    </Link>
                                </li>
                            </ul>
                            <div className={styles.logo}>
                                <Link to="/">
                                    <img
                                        src={Logo}
                                        alt="HackTheMidlands logo"
                                        className={styles.logo}
                                        style={{
                                            width: navScrolled
                                                ? '90px'
                                                : '120px',
                                        }}
                                    />
                                </Link>
                            </div>
                            <ul className={styles.right}>
                                <li className={styles.rightItem}>
                                    <Link
                                        to="/live#discord"
                                        style={{ textDecoration: 'none' }}>
                                        Discord
                                    </Link>
                                </li>
                                <li className={styles.rightItem}>
                                    <Link
                                        to="/live#faq"
                                        style={{ textDecoration: 'none' }}>
                                        FAQ
                                    </Link>
                                </li>
                            </ul>
                        </nav>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
};

// Prop definitions
LiveNavBar.propTypes = {};

// Default props
LiveNavBar.defaultProps = {};
