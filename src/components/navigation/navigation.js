// Components
import styles from './navigation.module.scss';
import { Link } from 'gatsby';
import { StaticImage } from 'gatsby-plugin-image';
import React from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid';

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
        <a
            className={styles.badge}
            id="mlh-trust-badge"
            href="https://mlh.io/eu?utm_source=eu-hackathon&utm_medium=TrustBadge&utm_campaign=2024-season&utm_content=blue" 
            target="_blank" rel="noreferrer"
        >
            <img
                src="https://s3.amazonaws.com/logged-assets/trust-badge/2024/mlh-trust-badge-2024-blue.svg"
                alt="Major League Hacking 2024 Hackathon Season"
                style={{ width: '100%' }}
            />
        </a>
        <Grid fluid>
            <Row
                between="xs"
                middle="xs"
                style={{
                    marginLeft: '3vw',
                    marginRight: '3vw',
                }}>
                <Col>
                    <Link to="/">
                        <StaticImage
                            src="../../assets/img/HTM_Main_Transparent.png"
                            alt="Logo"
                            className={styles.logo}
                        />
                    </Link>
                </Col>
                {/* <Col style={{ display: 'flex', justifyContent: 'center' }}> */}
                {/*    <ul className={styles.navigationList}> */}
                {/*        { navigationItems.map(({ displayName, routerLink, link }) => ( */}
                {/*            <li className={styles.navigationItem} key={displayName}> */}
                {/*                { routerLink && ( */}
                {/*                    <Link to={link}>{displayName}</Link> */}
                {/*                )} */}
                {/*                { !routerLink && ( */}
                {/*                    <a href={link} target="_self">{displayName}</a> */}
                {/*                )} */}
                {/*            </li> */}
                {/*        )) } */}
                {/*    </ul> */}
                {/* </Col> */}
                {/* <Col> */}
                {/*     <div className={styles.button}> */}
                {/*         <a href="https://www.eventbrite.co.uk/e/hackthemidlands-50-tickets-111222359070" target="_blank"> */}
                {/*             <Button theme="orange" size="small"> */}
                {/*                 Get Tickets */}
                {/*             </Button> */}
                {/*         </a> */}
                {/*     </div> */}
                {/* </Col> */}
            </Row>
        </Grid>
    </nav>
);

export default Navigation;
