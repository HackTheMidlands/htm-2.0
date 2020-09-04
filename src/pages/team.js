import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

// Components
import Layout from '../components/layout/layout';
import { HeroHeader } from '../components/hero-header/hero-header';
import { TeamCard } from '../components/team-card/team-card';

// Style
import style from './team.module.scss';

// Assets
import FireGif from './assets/fire.gif';

// Team Pictures
import AlexW from './assets/htm-people/alex.jpg';
import Charlie from './assets/htm-people/CharliedeFreitas.jpg';
import DanielS from './assets/htm-people/DanielSpencer.jpg';
import Fraser from './assets/htm-people/FraserWade.jpg';
import Helena from './assets/htm-people/HelenaBower.jpg';
import Hugh from './assets/htm-people/HughWells.jpg';
import Jon from './assets/htm-people/jon.jpg';
import JonK from './assets/htm-people/JonKingsley.jpg';
import Justin from './assets/htm-people/JustinChadwell.jpg';
import Liam from './assets/htm-people/LiamSorta.jpg';
import Likkan from './assets/htm-people/LikkanChung.jpg';
import Tom from './assets/htm-people/TomGoodman.jpg';
import Will from './assets/htm-people/WillRussell.jpg';

const teamMembers = [
    {
        image: Tom,
        name: 'Tom Goodman',
        nickname: 'Boss Man',
        position: 'CEO / Lead Organiser',
    },
    {
        image: Liam,
        name: 'Liam Sorta',
        nickname: 'Bigger Boss Man',
        position: 'CMO / Delight Lead',
    },
    {
        image: Helena,
        name: 'Helena Bower',
        nickname: 'The True HTM Overlord',
        position: 'COO / Publicity Lead',
    },
    {
        image: Charlie,
        name: 'Charlie de Freitas',
        nickname: 'Scary Questions Boi',
        position: 'Logistics Lead',
    },
    {
        image: AlexW,
        name: 'Alex Wiley',
        nickname: 'Website Genie',
        position: 'Creative Lead',
    },
    {
        image: Justin,
        name: 'Justin Chadwell',
        nickname: '1337 H4cKerM4N',
        position: 'Web and CTF Lead',
    },
    {
        image: Will,
        name: 'Will Russell',
        nickname: 'Dongle Boi',
        position: 'Outreach and Engagement Lead',
    },
    {
        image: Fraser,
        name: 'Fraser Wade',
        nickname: 'Mesh Router Fanatic',
        position: 'Networking Lead',
    },
    {
        image: JonK,
        name: 'Jon Kingsley',
        nickname: 'Theatre Kid',
        position: 'Stage Manager',
    },
    {
        image: DanielS,
        name: 'Daniel Spencer',
        nickname: 'Lord of the Bots',
        position: 'Web and AV',
    },
    {
        image: Likkan,
        name: 'Likkan Chung',
        nickname: 'Count Tweetula',
        position: 'Publicity Officer',
    },
    {
        image: Jon,
        name: 'Jon Freer',
        nickname: 'Stream God',
        position: 'Stream Content / Production',
    },
    {
        image: Hugh,
        name: 'Hugh Wells',
        nickname: 'King Crab',
        position: 'Logistics',
    },
];

const Team = () => (
    <Layout>
        <HeroHeader style={{ paddingBottom: '20vw' }}>
            <h1 className={style.title}>Meet The Team</h1>
        </HeroHeader>

        <section className={style.team}>
            <Grid fluid>
                <Row>
                    <Col lg={6} lgOffset={3}>
                        <img src={FireGif} className={style.fire} />
                        <h2 className={style.teamTitle}>We couldn&apos;t do it without these amazing people</h2>
                    </Col>
                </Row>
                <Row>
                    { teamMembers.map(({
                        image, name, nickname, position,
                    }) => (
                        <Col lg={3} md={6} sm={12} style={{ marginBottom: '20px' }}>
                            <TeamCard image={image} name={name} nickname={nickname} position={position} />
                        </Col>
                    ))}
                    <Row />
                </Row>
            </Grid>
        </section>

    </Layout>
);

export default Team;
