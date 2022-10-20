import React from 'react';
import moment from 'moment';

// Style import
import style from './live.module.scss';

// Data
import { faqData } from '../data/faq';
import challengeData from '../data/challenges/challenges.json';

// Components
import { LiveHeaderText } from '../components/live-header-text/live-header-text';
import { LiveNavBar } from '../components/live-nav-bar/live-nav-bar';
import { LivePageHeader } from '../components/live-page-header/live-page-header';
// import { LogoStrip } from '../components/logo-strip/logo-strip';
import { LiveCountdown } from '../components/live-countdown/live-countdown';
import { LiveDiscord } from '../components/live-discord/live-discord';
import { Timeline } from '../components/timeline/timeline';
import { LiveFaq } from '../components/live-faq/live-faq';
import { Seo } from '../components/seo/seo';
import { LiveChallenges } from '../components/live-challenges/live-challenges';
import { graphql, useStaticQuery } from 'gatsby'


// Image imports
// import CapitalOne from '../assets/img/logos/white/capital-one.png';
// import Majestic from '../assets/img/logos/white/majestic.png';
// import Northrop from '../assets/img/logos/white/northrop-grumman.png';
// import Kainos from '../assets/img/logos/white/kainos.png';
// import Capgemini from '../assets/img/logos/white/capgemini.png';
// import Bt from '../assets/img/logos/white/bt.png';
// import Fusion from '../assets/img/logos/white/fusion.png';
// import TwentyI from '../assets/img/logos/white/20i.png';
// import Mike from '../assets/img/logos/white/mike.png';
// import ChamberOfCommerce from '../assets/img/logos/white/chamber-of-commerce.png';
// import Bcs from '../assets/img/logos/white/bcs.png';

const dateTo = moment('2022-10-30');

// const companyLogos = [
//     {
//         alt: 'Capital One',
//         url: CapitalOne,
//         link: '',
//     },
//     {
//         alt: 'Majestic',
//         url: Majestic,
//         link: '',
//     },
//     {
//         alt: 'Northrop',
//         url: Northrop,
//         link: '',
//     },
//     {
//         alt: 'Kainos',
//         url: Kainos,
//         link: '',
//     },
//     {
//         alt: 'Capgemini',
//         url: Capgemini,
//         link: '',
//     },
//     {
//         alt: 'Northrop',
//         url: Northrop,
//         link: '',
//     },
//     {
//         alt: 'BT',
//         url: Bt,
//         link: 'https://bt.com',
//     },
//     {
//         alt: 'Fusion',
//         url: Fusion,
//         link: '',
//     },
//     {
//         alt: '20i',
//         url: TwentyI,
//         link: '',
//     },
//     {
//         alt: 'Mike Elsmore',
//         url: Mike,
//         link: '',
//     },
//     {
//         alt: 'Northrop',
//         url: ChamberOfCommerce,
//         link: '',
//     },
//     {
//         alt: 'BCS',
//         url: Bcs,
//         link: '',
//     },
// ];

/**
 * Live page template
 * @param props
 * @returns {*}
 * @constructor
 */
const Live = (props) => {
    const data = useStaticQuery(graphql`
        query LivePageQuery {
            site {
                siteMetadata {
                    eventId: eventId
                }
            }
        }
    `);
return (
    <main className={style.page}>
        <Seo title={`HTM ${data.site.siteMetadata.eventId} Live`} />

        <LiveNavBar />

        <LivePageHeader />

        {/*<section className={style.section}>*/}
        {/*    <LogoStrip logos={companyLogos} />*/}
        {/*</section>*/}


        <section className={style.section}>
            <LiveCountdown countdownToDate={dateTo} />
        </section>

        <section className={style.section} id="discord">
            <LiveHeaderText text="Join Us" />
            <LiveDiscord />
        </section>

        <section className={style.section} id="challenges">
            <LiveHeaderText text="Challenges" />
            <LiveChallenges challenges={challengeData} />
        </section>

        <section className={style.section} id="timeline">
            <LiveHeaderText text="Timeline" />
            <Timeline />
        </section>

        {/*<section className={style.section} id="faq">*/}
        {/*    <LiveFaq cards={faqData} />*/}
        {/*</section>*/}
    </main>
)};

export default Live;
