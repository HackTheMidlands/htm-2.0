import { HeroHeader } from '../components/hero-header/hero-header';
// Components
import Layout from '../components/layout/layout';
import { TeamCard } from '../components/team-card/team-card';
// Assets
import FireGif from './assets/fire.gif';
// Style
import style from './team.module.scss';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

const Team = () => {
    const data = useStaticQuery(graphql`
        query TeamPageQuery {
            allContentfulTeamMember {
                nodes {
                    nickname
                    name
                    image {
                        gatsbyImageData
                    }
                    position
                }
            }
        }
    `);

    const teamMembers = data.allContentfulTeamMember.nodes;

    return (
        <Layout>
            <HeroHeader style={{ paddingBottom: '20vw' }}>
                <h1 className={style.title}>Meet The Team</h1>
            </HeroHeader>

            <section className={style.team}>
                <Grid fluid>
                    <Row>
                        <Col lg={6} lgOffset={3}>
                            <img src={FireGif} className={style.fire} />
                            <h2 className={style.teamTitle}>
                                We couldn&apos;t do it without these amazing
                                people
                            </h2>
                        </Col>
                    </Row>
                    <Row>
                        {teamMembers.map(
                            ({ image, name, nickname, position }) => (
                                <Col
                                    lg={3}
                                    md={6}
                                    sm={12}
                                    style={{ marginBottom: '20px' }}>
                                    <TeamCard
                                        image={image.gatsbyImageData}
                                        name={name}
                                        nickname={nickname}
                                        position={position}
                                    />
                                </Col>
                            ),
                        )}
                        <Row />
                    </Row>
                </Grid>
            </section>
        </Layout>
    );
};

export default Team;
