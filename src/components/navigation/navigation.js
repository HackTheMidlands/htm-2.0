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


    <nav role="navigation" className={styles.navigation}>

        <Grid fluid>
            <Row between="xs" middle="xs" style={{ marginLeft: 0, marginRight: 0 }}>
                <Col>
                    <img className={styles.logo} src={Logo} alt="Logo" />
                </Col>
                {/*<Col style={{ display: 'flex', justifyContent: 'center' }}>*/}
                {/*    <ul className={styles.navigationList}>*/}
                {/*        { navigationItems.map(({ displayName, routerLink, link }) => (*/}
                {/*            <li className={styles.navigationItem} key={displayName}>*/}
                {/*                { routerLink && (*/}
                {/*                    <Link to={link}>{displayName}</Link>*/}
                {/*                )}*/}
                {/*                { !routerLink && (*/}
                {/*                    <a href={link} target="_self">{displayName}</a>*/}
                {/*                )}*/}
                {/*            </li>*/}
                {/*        )) }*/}
                {/*    </ul>*/}
                {/*</Col>*/}
                <Col>
                    <div className={styles.button}>
                        <Button theme="orange" size="small">
                            Get Tickets
                        </Button>
                    </div>
                </Col>
            </Row>
        </Grid>

    </nav>
);

export default Navigation;
