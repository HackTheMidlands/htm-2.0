import PartyFace from '../assets/gifs/partying_face.gif';
import HTMVideo from '../assets/hero-video.mp4';
import Discord from '../assets/img/discord-white.svg';
import { ButtonWithIcon } from '../components/button-with-icon/button-with-icon';
import { Button } from '../components/button/button';
import { EventInfo } from '../components/event-info/event-info';
import { EventIntroStatistics } from '../components/event-intro-statistics/event-intro-statistics';
import { EventLocation } from '../components/event-location/event-location';
import { FaqSection } from '../components/faq-section/faq-section';
import { HeroHeader } from '../components/hero-header/hero-header';
import { IconCard } from '../components/icon-card/icon-card';
import { IndexIntro } from '../components/index-intro/index-intro';
// Components
import Layout from '../components/layout/layout.js';
import { SponsorCta } from '../components/sponsor-cta/sponsor-cta';
import { SponsorsSection } from '../components/sponsors-section/sponsors-section';
import { StayConnectedSection } from '../components/stay-connected-section/stay-connected-section';
import { TestimonialSliderSection } from '../components/testimonial-slider-section/testimonial-slider-section';
import { TicketsSection } from '../components/tickets-section/tickets-section';
import DemoVideo from '../components/video/assets/example-video.mp4';
import { Video } from '../components/video/video';
import CalendarIcon from './assets/calendar.inline.svg';
import DiscordSquareIcon from './assets/discord-square.svg';
import EntryRequirementsIcon from './assets/entry.svg';
import FoodAndDrinkIcon from './assets/food-and-drink.svg';
// Image imports
import LocationInfo from './assets/location.inline.svg';
import SafeguardingIcon from './assets/safeguarding.svg';
import TimeIcon from './assets/time.svg';
// Style import
import style from './index.module.scss';
import { Link, graphql, useStaticQuery } from 'gatsby';
import moment from 'moment';
import React, { useEffect } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import withReactContent from 'sweetalert2-react-content';

const poster = '/images/cover.jpg';

const intro = {
    title: '<mark>Learn</mark>, <mark>build</mark> and <mark>share</mark> your amazing ideas in a welcoming community',
    body: 'Usually HackTheMidlands is a 24-hour hackathon, or “creative marathon”, which was founded in 2016. We provide a unique space for hundreds of passionate technologists like you to share their experiences, meet new people and learn something new - gaining valuable skills in the process.',
};

const EventDetails = ({ eventStart, eventEnd }) => {
    const details = [
        {
            icon: TimeIcon,
            title: 'Date & Time',
            body: `The event will run online via Discord between the ${moment(
                eventStart,
            ).format('Do')} - ${moment(eventEnd).format(
                'Do MMMM YYYY',
            )}. Don\'t miss out!`,
            colour: 'rgba(165, 254, 162, .5)',
        },
        {
            icon: DiscordSquareIcon,
            title: 'Participate with Discord',
            body: 'We’re running this years event through discord. Make sure to <a style="color: #7289DA" href="https://discord.gg/hackthemidlands" target="_blank">join the server</a> to get involved.',
            colour: 'rgba(114, 137, 218, .5)',
        },
        // {
        //     icon: SafeguardingIcon,
        //     title: 'Safeguarding',
        //     body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
        // },
        // {
        //     icon: EntryRequirementsIcon,
        //     title: 'Entry Requirements',
        //     body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor.',
        // },
    ];
    return (
        <EventInfo>
            <Grid>
                <Row>
                    <Col lg={10} lgOffset={1}>
                        <Row>
                            {details.map(({ icon, title, body, colour }) => (
                                <Col
                                    sm={12}
                                    md={6}
                                    className={style.eventDetailItem}
                                    key={title}>
                                    <IconCard
                                        key={title}
                                        body={body}
                                        icon={icon}
                                        title={title}
                                        colour={colour}
                                    />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Grid>
        </EventInfo>
    );
};

const testimonials = [
    {
        name: 'Mark Kingham',
        source: 'Hack 2019',
        image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=2250&q=80',
        body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',
    },
    {
        name: 'Greg Walls',
        source: 'Hack 2019',
        image: 'https://images.unsplash.com/photo-1549068106-b024baf5062d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',
    },
    {
        name: 'Ed Whitworth',
        source: 'Hack 2019',
        image: 'https://images.unsplash.com/photo-1552072805-2a9039d00e57?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=934&q=80',
        body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet',
    },
];

const gold = [];

const silver = [];

const bronze = [];

const digital = [];

const partners = [];

const tickets = [];

/**
 * Hackathon template
 * @param props
 * @returns {*}
 * @constructor
 */
const Index = (props) => {
    const data = useStaticQuery(graphql`
        query IndexPageQuery {
            site {
                siteMetadata {
                    eventStart: eventStart
                    eventEnd: eventEnd
                }
            }
            contentfulPage(ref: { eq: "index" }) {
                title
                video {
                    secure_url
                }
            }
            allContentfulQa {
                nodes {
                    question
                    answer {
                        answer
                    }
                }
            }
        }
    `);
    const qa = data.allContentfulQa.nodes.map(({question, answer}) => ({ question, 'answer': answer.answer}));
            console.log(qa);
    const { title, video } = data.contentfulPage;
    const sources = [
        {
            src: video[0].secure_url,
            type: 'video/mp4',
        },
    ];

    const { eventStart, eventEnd } = data.site.siteMetadata;
    return (
        <Layout>
            <HeroHeader>
                <Grid>
                    <Row>
                        <Col xs={12} sm={10} smOffset={1}>
                            <h1 className={style.headerTitle}>{title}</h1>
                            <ul className={style.eventInfoList}>
                                <li className={style.eventInfoListItem}>
                                    <LocationInfo />
                                    <p>Virtual Event</p>
                                </li>
                                <li className={style.eventInfoListItem}>
                                    <CalendarIcon />
                                    <p>
                                        {moment(eventStart).format('dddd Do')} -{' '}
                                        {moment(eventEnd).format(
                                            'Do MMMM YYYY',
                                        )}
                                    </p>
                                </li>
                            </ul>
                            <div className={style.headerButtons}>
                                {/*<Link to="/live" target="_blank"> */}
                                {/* <Button theme="orange">View Live Page</Button> */}
                                {/* </Link> */}
                                {/* <a href="https://www.eventbrite.co.uk/e/hackthemidlands-50-tickets-111222359070" target="_blank"> */}
                                {/*    <Button theme="orange">Get tickets</Button> */}
                                {/* </a> */}
                                {/* <a href="/sponsorship.pdf" target="_blank"> */}
                                {/*    <Button theme="whiteSolid">Sponsor</Button> */}
                                {/* </a> */}
                                <a
                                    href="https://discord.gg/kx9azme"
                                    target="_blank"
                                    style={{ textDecoration: 'none' }}>
                                    <ButtonWithIcon
                                        icon={Discord}
                                        name="Discord"
                                        backgroundColor="#6F87E0"
                                        border="2px solid #4f66bd">
                                        Join Discord
                                    </ButtonWithIcon>
                                </a>
                            </div>
                        </Col>
                    </Row>
                </Grid>
            </HeroHeader>

            <section className={style.featureVideo}>
                <Grid>
                    <Row>
                        <Col lg={8} lgOffset={2}>
                            <Video
                                sources={sources}
                                poster={poster}
                                controls={false}
                            />
                        </Col>
                    </Row>
                </Grid>
            </section>

            {/* <EventIntroStatistics */}
            {/*    statOne={{ statistic: '300+', text: 'Attendees' }} */}
            {/*    statTwo={{ statistic: '400', text: 'Projects made' }} */}
            {/* /> */}

            <IndexIntro title={intro.title} body={intro.body} />

            <EventDetails eventStart={eventStart} eventEnd={eventEnd} />

            {/* <EventLocation /> */}

            {/* <TestimonialSliderSection testimonials={testimonials} /> */}

            <SponsorsSection
                goldTier={gold}
                silverTier={silver}
                bronzeTier={bronze}
                digitalTier={digital}
                partners={partners}
            />

            <SponsorCta />

            {/* <TicketsSection tickets={tickets} /> */}

            <FaqSection questions={qa} />

            <StayConnectedSection />
        </Layout>
    );
};

export default Index;
