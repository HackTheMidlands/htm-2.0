import { HeroHeader } from '../components/hero-header/hero-header';
import Layout from '../components/layout/layout';
import style from './team.module.scss';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Grid, Row } from 'react-flexbox-grid';

const Statement = () => {




    return (
        <Layout>
            <HeroHeader height="0" style={{ paddingBottom: '20vw' }}>
                <h1 className={style.title}>Do you fancy a title here</h1>
            </HeroHeader>
            <section className={style.team}>
                <Grid fluid>
                    <Row>
                        <div>
                            <h2>Or down here</h2>
                            <p>
                                IDK, I'm not responsible for the words
                            </p>
                        </div>
                    </Row>
                </Grid>
            </section>
        </Layout>
    );
};

export default Statement;
