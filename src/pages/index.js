import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import moment from 'moment';

// Style import
import style from './index.module.scss';

// Components
import Layout from '../components/layout/layout.js';
import { HeroHeader } from '../components/hero-header/hero-header';
import { Button } from '../components/button/button';
import { Video } from '../components/video/video';
import { EventIntroStatistics } from '../components/event-intro-statistics/event-intro-statistics';
import { EventInfo } from '../components/event-info/event-info';
import { IconCard } from '../components/icon-card/icon-card';
import { EventLocation } from '../components/event-location/event-location';
import { TestimonialSliderSection } from '../components/testimonial-slider-section/testimonial-slider-section';
import { SponsorsSection } from '../components/sponsors-section/sponsors-section';
import { SponsorCta } from '../components/sponsor-cta/sponsor-cta';
import { TicketsSection } from '../components/tickets-section/tickets-section';
import { FaqSection } from '../components/faq-section/faq-section';
import { StayConnectedSection } from '../components/stay-connected-section/stay-connected-section';
import { IndexIntro } from '../components/index-intro/index-intro'

// Image imports
import LocationInfo from './assets/location.inline.svg';
import CalendarIcon from './assets/calendar.inline.svg';
import TimeIcon from './assets/time.svg';
import DiscordSquareIcon from './assets/discord-square.svg';
import FoodAndDrinkIcon from './assets/food-and-drink.svg';
import SafeguardingIcon from './assets/safeguarding.svg';
import EntryRequirementsIcon from './assets/entry.svg';

import DemoVideo from '../components/video/assets/example-video.mp4';
import HTMVideo from '../assets/hero-video.mp4';

const sources = [
    {
        src: HTMVideo,
        type: 'video/mp4',
    },
];

const intro = {
    title: '<mark>Learn</mark>, <mark>build</mark> and <mark>share</mark> your amazing ideas in a welcoming community',
    body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum.'
};

const eventDetails = [
    {
        icon: TimeIcon,
        title: 'Date & Time',
        body: 'The event will run online via Discord between the 24th - 26th October 2020. Make sure to be around!',
        colour: 'rgba(165, 254, 162, .5)',
    },
    {
        icon: DiscordSquareIcon,
        title: 'Participate with Discord',
        body: 'We’re running this years event through discord. Make sure to <a style="color: #7289DA" href="https://google.com/join">join the server</a> to get involved.',
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

const gold = [
    {
        image: 'https://www.bjss.com/wp-content/uploads/BJSS-870x460.png',
        name: 'sponsor',
        link: '/',
    },
    {
        image: 'https://www.bjss.com/wp-content/uploads/BJSS-870x460.png',
        name: 'sponsor',
        link: '/',
    },
];

const silver = [
    {
        image: 'https://upload.wikimedia.org/wikipedia/en/thumb/a/ab/Webroot_logo.svg/6752px-Webroot_logo.svg.png',
        name: 'sponsor',
        link: '/',
    },
    {
        image: 'https://mastersofscale.com/wp-content/uploads/2019/06/capital-one-logo-transparent.png',
        name: 'sponsor',
        link: '/',
    },
    {
        image: 'https://www.bjss.com/wp-content/uploads/BJSS-870x460.png',
        name: 'sponsor',
        link: '/',
    },
    {
        image: 'https://www.bjss.com/wp-content/uploads/BJSS-870x460.png',
        name: 'sponsor',
        link: '/',
    },
];

const bronze = [
    {
        image: 'data:image/png;base64,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',
        name: 'sponsor',
        link: '/',
    },
    {
        image: 'data:image/png;base64,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',
        name: 'sponsor',
        link: '/',
    },
    {
        image: 'https://www.pngfind.com/pngs/m/9-95396_mlb-logo-png-major-league-hacking-logo-transparent.png',
        name: 'sponsor',
        link: '/',
    },
    {
        image: '',
        name: 'sponsor',
        link: '/',
    },
];

const partners = [
    {
        image: 'https://www.pngfind.com/pngs/m/9-95396_mlb-logo-png-major-league-hacking-logo-transparent.png',
        name: 'sponsor',
        link: '/',
    },
];

const tickets = [
    {
        ticketName: 'HTM 2020 Virtual',
        releaseDate: moment().subtract(30, 'days'),
        expireDate: moment().add(10, 'days'),
        state: 'active',
        link: 'https://google.com',
    },
    // {
    //     ticketName: 'Wave Two',
    //     releaseDate: moment().subtract(10, 'days'),
    //     expireDate: moment().subtract(1, 'days'),
    //     state: 'active',
    //     link: 'https://google.com',
    // },
    // {
    //     ticketName: 'Wave Three',
    //     releaseDate: moment().subtract(2, 'days'),
    //     expireDate: moment().add(30, 'days'),
    //     state: 'active',
    //     link: 'https://google.com',
    // },
];

const qa = [
    {
        question: 'What is HackTheMidlands?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas maecenas pharetra. Scelerisque felis imperdiet proin fermentum leo vel orci porta. Amet consectetur adipiscing elit ut aliquam purus. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Sed pulvinar proin gravida hendrerit. Scelerisque eu ultrices vitae auctor eu. Nullam vehicula ipsum a arcu cursus vitae. Vivamus at augue eget arcu dictum varius duis at consectetur. Nec ultrices dui sapien eget mi proin sed libero. Vel fringilla est ullamcorper eget. Hendrerit dolor magna eget est lorem ipsum dolor. Quisque id diam vel quam elementum pulvinar etiam non. Bibendum est ultricies integer quis auctor.',
    },
    {
        question: 'What is HackTheMidlands?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas maecenas pharetra. Scelerisque felis imperdiet proin fermentum leo vel orci porta. Amet consectetur adipiscing elit ut aliquam purus. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Sed pulvinar proin gravida hendrerit. Scelerisque eu ultrices vitae auctor eu. Nullam vehicula ipsum a arcu cursus vitae. Vivamus at augue eget arcu dictum varius duis at consectetur. Nec ultrices dui sapien eget mi proin sed libero. Vel fringilla est ullamcorper eget. Hendrerit dolor magna eget est lorem ipsum dolor. Quisque id diam vel quam elementum pulvinar etiam non. Bibendum est ultricies integer quis auctor.',
    },
    {
        question: 'What is HackTheMidlands?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas maecenas pharetra. Scelerisque felis imperdiet proin fermentum leo vel orci porta. Amet consectetur adipiscing elit ut aliquam purus. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Sed pulvinar proin gravida hendrerit. Scelerisque eu ultrices vitae auctor eu. Nullam vehicula ipsum a arcu cursus vitae. Vivamus at augue eget arcu dictum varius duis at consectetur. Nec ultrices dui sapien eget mi proin sed libero. Vel fringilla est ullamcorper eget. Hendrerit dolor magna eget est lorem ipsum dolor. Quisque id diam vel quam elementum pulvinar etiam non. Bibendum est ultricies integer quis auctor.',
    },
    {
        question: 'What is HackTheMidlands?',
        answer: 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Netus et malesuada fames ac turpis egestas maecenas pharetra. Scelerisque felis imperdiet proin fermentum leo vel orci porta. Amet consectetur adipiscing elit ut aliquam purus. Tincidunt praesent semper feugiat nibh sed pulvinar proin gravida. Sed pulvinar proin gravida hendrerit. Scelerisque eu ultrices vitae auctor eu. Nullam vehicula ipsum a arcu cursus vitae. Vivamus at augue eget arcu dictum varius duis at consectetur. Nec ultrices dui sapien eget mi proin sed libero. Vel fringilla est ullamcorper eget. Hendrerit dolor magna eget est lorem ipsum dolor. Quisque id diam vel quam elementum pulvinar etiam non. Bibendum est ultricies integer quis auctor.',
    },
];

/**
 * Hackathon template
 * @param props
 * @returns {*}
 * @constructor
 */
const Index = (props) => (
    <Layout>

        <HeroHeader>
            <Grid>
                <Row>
                    <Col xs={12} sm={10} smOffset={1}>
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

        {/*<EventIntroStatistics*/}
        {/*    statOne={{ statistic: '300+', text: 'Attendees' }}*/}
        {/*    statTwo={{ statistic: '400', text: 'Projects made' }}*/}
        {/*/>*/}

        <IndexIntro title={intro.title} body={intro.body} />

        <EventInfo>
            <Grid>
                <Row>
                    <Col lg={10} lgOffset={1}>
                        <Row>
                            { eventDetails.map(({ icon, title, body, colour }) => (
                                <Col sm={12} md={6} className={style.eventDetailItem} key={title}>
                                    <IconCard key={title} body={body} icon={icon} title={title} colour={colour} />
                                </Col>
                            ))}
                        </Row>
                    </Col>
                </Row>
            </Grid>
        </EventInfo>

        {/*<EventLocation />*/}

        {/*<TestimonialSliderSection testimonials={testimonials} />*/}

        <SponsorsSection goldTier={gold} silverTier={silver} bronzeTier={bronze} partners={partners} />

        <SponsorCta />

        <TicketsSection tickets={tickets} />

        <FaqSection questions={qa} />

        <StayConnectedSection />

    </Layout>
);

export default Index;
