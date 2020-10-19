import React from 'react';
import moment from 'moment';

// Style import
import style from './live.module.scss';

// Data
import { faqData } from '../data/faq';

// Components
import { LiveHeaderText } from '../components/live-header-text/live-header-text';
import { LiveNavBar } from '../components/live-nav-bar/live-nav-bar';
import { LivePageHeader } from '../components/live-page-header/live-page-header';
import { LogoStrip } from '../components/logo-strip/logo-strip';
import { LiveCountdown } from '../components/live-countdown/live-countdown';
import { LiveDiscord } from '../components/live-discord/live-discord';
import { Timeline } from '../components/timeline/timeline';
import { LiveFaq } from '../components/live-faq/live-faq';
import { Seo } from '../components/seo/seo';


// Image imports
import CapitalOne from '../assets/img/logos/white/capital-one.png';
import Majestic from '../assets/img/logos/white/majestic.png';
import Northrop from '../assets/img/logos/white/northrop-grumman.png';
import Kainos from '../assets/img/logos/white/kainos.png';
import Capgemini from '../assets/img/logos/white/capgemini.png';

const dateTo = moment('2020-10-22');

const companyLogos = [
    {
        alt: 'Capital One',
        url: CapitalOne,
        link: '',
    },
    {
        alt: 'Majestic',
        url: Majestic,
        link: '',
    },
    {
        alt: 'Northrop',
        url: Northrop,
        link: '',
    },
    {
        alt: 'Kainos',
        url: Kainos,
        link: '',
    },
    {
        alt: 'Capgemini',
        url: Capgemini,
        link: '',
    },
    {
        alt: 'Other',
        url: Northrop,
        link: '',
    },
];

/**
 * Live page template
 * @param props
 * @returns {*}
 * @constructor
 */
const Live = (props) => {
    return (
        <main className={style.page}>
            <Seo title="HTM 5.0 Live" />

            <LiveNavBar />

            <LivePageHeader />

            <section className={style.section}>
                <LogoStrip logos={companyLogos} />
            </section>


            <section className={style.section}>
                <LiveCountdown countdownToDate={dateTo} />
            </section>

            <section className={style.section}>
                <LiveHeaderText text="Join Us" />
                <LiveDiscord />
            </section>

            <section className={style.section}>
                <LiveHeaderText text="Challenges" />
            </section>

            <section className={style.section}>
                <LiveHeaderText text="Timeline" />
                <Timeline />
            </section>

            <section className={style.section}>
                <LiveFaq cards={faqData} />
            </section>
        </main>
    );
};

export default Live;
