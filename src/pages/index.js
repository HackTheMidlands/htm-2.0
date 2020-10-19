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
import { ButtonWithIcon } from '../components/button-with-icon/button-with-icon';
import Discord from '../assets/img/discord-white.svg';

const sources = [
    {
        src: HTMVideo,
        type: 'video/mp4',
    },
];

const poster = '/images/cover.jpg';

const intro = {
    title: '<mark>Learn</mark>, <mark>build</mark> and <mark>share</mark> your amazing ideas in a welcoming community',
    body: 'Usually HackTheMidlands is a 24-hour hackathon, or “creative marathon”, which was founded in 2016. We provide a unique space for hundreds of passionate technologists like you to share their experiences, meet new people and learn something new - gaining valuable skills in the process.',
};

const eventDetails = [
    {
        icon: TimeIcon,
        title: 'Date & Time',
        body: 'The event will run online via Discord between the 22nd - 26th October 2020. Don\'t miss out!',
        colour: 'rgba(165, 254, 162, .5)',
    },
    {
        icon: DiscordSquareIcon,
        title: 'Participate with Discord',
        body: 'We’re running this years event through discord. Make sure to <a style="color: #7289DA" href="https://discord.com/invite/kx9azme" target="_blank">join the server</a> to get involved.',
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
        image: '/sponsors/majestic.png',
        name: 'Majestic',
        link: 'https://majestic.com',
    },
    {
        image: 'https://upload.wikimedia.org/wikipedia/commons/thumb/9/98/Capital_One_logo.svg/1200px-Capital_One_logo.svg.png',
        name: 'Capital One',
        link: 'https://capitalone.com',
    },
    // {
    //     image: 'https://www.bjss.com/wp-content/uploads/BJSS-870x460.png',
    //     name: 'BJSS',
    //     link: 'https://bjss.com',
    // },
];

const silver = [
    {
        image: '/sponsors/northrop-grumman.png',
        name: 'Northrop Grumman',
        link: 'https://www.northropgrumman.com/',
    },
    {
        image: '/sponsors/20i.svg',
        name: '20i',
        link: 'https://www.20i.com/',
    },
    {
        image: '/sponsors/capgemini.png',
        name: 'Capgemini',
        link: 'https://www.capgemini.com/',
    },
];

const bronze = [
    {
        image: '/sponsors/fusion-meetup.png',
        name: 'Fusion Meetup',
        link: 'https://www.meetup.com/Fusion-Technology-Meetup-Birmingham/',
    },
    {
        image: 'https://raw.githubusercontent.com/ukmadlz/ukmadlz.github.io/02bab2c5e1b57f67adf916c234a63e4de27a5e02/assets/images/mike-elsmore.svg',
        name: 'Mike Elsmore',
        link: 'https://elsmore.me/',
    },
];

const digital = [];

const partners = [
    {
        image: 'https://static.mlh.io/brand-assets/logo/official/mlh-logo-color.svg',
        name: 'sponsor',
        link: 'https://mlh.io',
    },
];

const tickets = [
    {
        ticketName: 'HTM 2020 Virtual',
        releaseDate: moment('07/09/2020 12:00:00', 'DD/MM/YYYY hh:mm:ss'),
        expireDate: moment().add(2, 'months'),
        state: 'active',
        link: 'https://www.eventbrite.co.uk/e/hackthemidlands-50-tickets-111222359070',
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
        question: 'Can Under 18s Attend?',
        answer: 'YES! Anyone is welcome at the event, and we’ll be ensuring that the Discord is a safe and friendly environment for everyone 🥰',
    },
    {
        question: 'What do I need?',
        answer: 'A computer 💻, a Discord account 👾, and a passion to get involved 🔥 We’d recommend a headset to communicate with your team, but that’s not essential! 🎧',
    },
    {
        question: 'What if I don\'t know how to code?\n',
        answer: 'That is not a problem! A great way to learn how to code is by attending a hackathon 👩‍💻 It\'s an event for like-minded people to share what they are interested in and teach each-other what they are passionate about, whether it\'s coding, electronics or anything else you want to know about 💡 You never know what new skill you might pick up! You can also ask specific questions to our mentors and other participants in the Discord server 🙋 We’re all here to help!\n',
    },
    {
        question: 'I don\'t have a team\n',
        answer: 'Don\'t worry! Many people don\'t have a team when they turn up to a hackathon. We have a dedicated channel on our Discord server (#looking-for-team) where people are looking for teams, and teams are looking for members, and we’ll be running an icebreaker session 🧊 to help you find teams on the day👋',
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
        <Seo />
        <HeroHeader>
            <Grid>
                <Row>
                    <Col xs={12} sm={10} smOffset={1}>
                        <h1 className={style.headerTitle}>HackTheMidlands 5.0</h1>
                        <ul className={style.eventInfoList}>
                            <li className={style.eventInfoListItem}>
                                <LocationInfo />
                                <p>Virtual Event</p>
                            </li>
                            <li className={style.eventInfoListItem}>
                                <CalendarIcon />
                                <p>Thursday 22nd - Sunday 25th October, 2020</p>
                            </li>
                        </ul>
                        <div className={style.headerButtons}>
                            <a href="https://www.eventbrite.co.uk/e/hackthemidlands-50-tickets-111222359070" target="_blank">
                                <Button theme="orange">Get tickets</Button>
                            </a>
                            <a href="/sponsorship.pdf" target="_blank">
                                <Button theme="whiteSolid">Sponsor</Button>
                            </a>
                            <a href="https://discord.gg/kx9azme" target="_blank" style={{ textDecoration: 'none' }}>
                                <ButtonWithIcon icon={Discord} name="Discord" backgroundColor="#6F87E0" border="2px solid #4f66bd">Join Discord</ButtonWithIcon>
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
                        <Video sources={sources} poster={poster} controls={false} />
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

        <SponsorsSection goldTier={gold} silverTier={silver} bronzeTier={bronze} digitalTier={digital} partners={partners} />

        <SponsorCta />

        <TicketsSection tickets={tickets} />

        <FaqSection questions={qa} />

        <StayConnectedSection />

    </Layout>
);

export default Index;
