import React from 'react';
import { graphql } from 'gatsby';
import { Grid, Row, Col } from 'react-flexbox-grid';
import Helmet from 'react-helmet';
import get from 'lodash/get';
import Img from 'gatsby-image';

// Style import
import style from './hackathon.module.scss';

// Components
import Layout from '../../components/layout/layout.js';
import { HeroHeader } from '../../components/hero-header/hero-header';
import { Button } from '../../components/button/button';
import { Video } from '../../components/video/video';
import { EventIntroStatistics } from '../../components/event-intro-statistics/event-intro-statistics';
import { EventInfo } from '../../components/event-info/event-info';
import { IconCard } from '../../components/icon-card/icon-card';
import { EventLocation } from '../../components/event-location/event-location'

// Image imports
import LocationInfo from './assets/location.inline.svg';
import CalendarIcon from './assets/calendar.inline.svg';
import TimeIcon from './assets/time.svg';
import FoodAndDrinkIcon from './assets/food-and-drink.svg';
import SafeguardingIcon from './assets/safeguarding.svg';
import EntryRequirementsIcon from './assets/entry.svg';

import DemoVideo from '../../components/video/assets/example-video.mp4';

const sources = [
    {
        src: DemoVideo,
        type: 'video/mp4',
    },
];

const eventDetails = [
    {
        icon: TimeIcon,
        title: 'Date & Time',
        body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
    },
    {
        icon: FoodAndDrinkIcon,
        title: 'Food & Drink',
        body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
    },
    {
        icon: SafeguardingIcon,
        title: 'Safeguarding',
        body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
    },
    {
        icon: EntryRequirementsIcon,
        title: 'Entry Requirements',
        body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
    },
];

/**
 * Hackathon template
 * @param props
 * @returns {*}
 * @constructor
 */
const HackathonTemplate = (props) => (
    <Layout>

        <HeroHeader style={{ paddingBottom: '500px' }}>
            <Grid>
                <Row>
                    <Col xs={12} sm={8} smOffset={2}>
                        <h1 className={style.headerTitle}>HTM 5.0</h1>
                        <ul className={style.eventInfoList}>
                            <li className={style.eventInfoListItem}>
                                <LocationInfo />
                                <p>Millennium Point</p>
                            </li>
                            <li className={style.eventInfoListItem}>
                                <CalendarIcon />
                                <p>Saturday 24th - Sunday 25th October, 2020</p>
                            </li>
                        </ul>
                        <div className={style.headerButtons}>
                            <Button theme="orange">Get tickets</Button>
                            <Button theme="whiteSolid">Sponsor</Button>
                        </div>
                    </Col>
                </Row>
            </Grid>
        </HeroHeader>

        <section className={style.featureVideo}>
            <Grid>
                <Row>
                    <Col lg={8} lgOffset={2}>
                        <Video sources={sources} controls={false} />
                    </Col>
                </Row>
            </Grid>
        </section>

        <EventIntroStatistics
            statOne={{ statistic: '300+', text: 'Attendees' }}
            statTwo={{ statistic: '400', text: 'Projects made' }}
        />

        <EventInfo>
            <Grid>
                <Row>
                    <Col lg={10} lgOffset={1}>
                        <Row>
                            { eventDetails.map(({ icon, title, body }) => (
                              <Col sm={12} md={6} className={style.eventDetailItem}>
                                  <IconCard key={title} body={body} icon={icon} title={title} />
                              </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Grid>
        </EventInfo>

        <EventLocation />

    </Layout>
);

export default HackathonTemplate;

// export const pageQuery = graphql`
//   query BlogPostBySlug($slug: String!) {
//     site {
//       siteMetadata {
//         title
//       }
//     }
//     contentfulBlogPost(slug: { eq: $slug }) {
//       title
//       publishDate(formatString: "MMMM Do, YYYY")
//       heroImage {
//         fluid(maxWidth: 1180, background: "rgb:000000") {
//           ...GatsbyContentfulFluid_tracedSVG
//         }
//       }
//       body {
//         childMarkdownRemark {
//           html
//         }
//       }
//     }
//   }
// `;
