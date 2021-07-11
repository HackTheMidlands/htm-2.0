import { Button } from '../components/button/button';
import { EmailCta } from '../components/email-cta/email-cta';
import { FeatureArticle } from '../components/feature-article/feature-article';
// Components
import { HeroHeader } from '../components/hero-header/hero-header';
import { IndexFeatures } from '../components/index-features/index-features';
import Layout from '../components/layout/layout';
import { MissionBlock } from '../components/mission-block/mission-block';
import { UpcomingEvents } from '../components/upcoming-events/upcoming-events';
// Styles
import style from './index-old.module.scss';
import { graphql } from 'gatsby';
import get from 'lodash/get';
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Helmet from 'react-helmet';

const events = [
    {
        name: 'HTM 3.0',
        featureImage:
            'https://images.unsplash.com/photo-1587597132606-dbb2322f6660?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
        dateFrom: '24/10/20',
        dateTo: '26/10/20',
        link: '/',
        location: 'Millennium Point',
    },
    {
        name: 'HTM 4.0',
        featureImage:
            'https://images.unsplash.com/photo-1587597132606-dbb2322f6660?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
        dateFrom: '24/10/20',
        dateTo: '26/10/20',
        link: '/',
        location: 'Millennium Point',
    },
    {
        name: 'HTM 5.0',
        featureImage:
            'https://images.unsplash.com/photo-1587597132606-dbb2322f6660?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
        dateFrom: '24/10/20',
        dateTo: '26/10/20',
        link: '/',
        location: 'Millennium Point',
    },
];

const IndexOld = (props) => {
    // Get the site title from the page data
    const siteTitle = get(props, 'data.site.siteMetadata.title');

    return (
        <Layout location={props.location}>
            <div>
                <Helmet title={siteTitle} />

                <HeroHeader className={style.header}>
                    <Grid fluid>
                        <Row center="xs">
                            <Col xs={8}>
                                <h1>
                                    Lorem ipsum dolor sit amet, consetetur
                                    sadipscing elitr
                                </h1>
                                <p>
                                    Lorem ipsum dolor sit amet, consetetur
                                    sadipscing elitr, sed diam nonumy eirmod
                                    tempor invidunt ut labore et dolore magna
                                    aliquyam erat
                                </p>
                                <Button theme="orange">Get involved</Button>
                            </Col>
                        </Row>
                    </Grid>
                </HeroHeader>

                <IndexFeatures />

                <MissionBlock />

                <UpcomingEvents events={events} />

                <EmailCta />

                <FeatureArticle />
            </div>
        </Layout>
    );
};

export default IndexOld;

// export const pageQuery = graphql`
//   query HomeQuery {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//   }
// `;
