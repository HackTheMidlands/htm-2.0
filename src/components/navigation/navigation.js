import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import { Link } from 'gatsby';
import styles from './navigation.module.scss';
import Logo from '../../assets/img/logo.png';

// Components
import { Button } from '../button/button';

const navigationItems = [
    {
        displayName: 'Home',
        routerLink: true,
        link: '/',
    },
    {
        displayName: 'Mission',
        routerLink: true,
        link: '/',
    },
    {
        displayName: 'Community',
        routerLink: true,
        link: '/',
    },
    {
        displayName: 'Events',
        routerLink: true,
        link: '/',
    },
    {
        displayName: 'Read',
        routerLink: true,
        link: '/',
    },
    {
        displayName: 'Sponsor',
        routerLink: true,
        link: '/sponsor-us',
    },
];

const Navigation = () => (
    <Grid>
        <Row>
            <Col xs={12}>
                <nav role="navigation" className={styles.navigation}>

                    <img className={styles.logo} src={Logo} alt="Logo" />

                    <ul className={styles.navigationList}>
                        { navigationItems.map(({ displayName, routerLink, link }) => (
                            <li className={styles.navigationItem}>
                                { routerLink && (
                                    <Link to={link}>{displayName}</Link>
                                )}
                                { !routerLink && (
                                    <a href={link} target="_self">{displayName}</a>
                                )}
                            </li>
                        )) }
                    </ul>

                    <div className={styles.button}>
                        <Button theme="whiteOutline">
                            See events
                        </Button>
                    </div>
                </nav>
            </Col>
        </Row>
    </Grid>
);

export default Navigation;
