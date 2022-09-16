import { HeroHeader } from '../components/hero-header/hero-header';
import Layout from '../components/layout/layout';
import style from './team.module.scss';
import { graphql, useStaticQuery } from 'gatsby';
import React from 'react';
import { Grid, Row } from 'react-flexbox-grid';

const Team = () => {
    const data = useStaticQuery(graphql`
        query SafeguardingPageQuery {
            allContentfulSafeguardingDocument {
                nodes {
                    title
                    file {
                        title
                        file {
                            url
                        }
                    }
                    form
                }
            }
        }
    `);

    const docs = data.allContentfulSafeguardingDocument.nodes.filter(node => !node.form);
    const forms = data.allContentfulSafeguardingDocument.nodes.filter(node => node.form);

    return (
        <Layout>
            <HeroHeader height="0" style={{ paddingBottom: '20vw' }}>
                <h1 className={style.title}>Safeguarding</h1>
            </HeroHeader>
            <section className={style.team}>
                <Grid fluid>
                    <Row>
                        <div>
                            <h2>Safeguarding information</h2>
                            <p>
                                If you're an under-18 wanting to attend the event,
                                we'd be happy to have you! However, we do need some
                                additional information so we can fulfill our
                                safeguarding obligations.
                            </p>
                            <p>
                                You can find more information about our policies here:
                            </p>
                            <ul>
                                {docs.map((doc) => (
                                    <li>
                                        {doc.title} — <a href={doc.file.file.url}>{doc.file.title}</a>
                                    </li>
                                ))}
                            </ul>
                            <p>
                                See the forms below for what information we require from you:
                            </p>
                            <ul>
                                {forms.map((doc) => (
                                    <li>
                                        {doc.title} — <a href={doc.file.file.url}>{doc.file.title}</a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </Row>
                </Grid>
            </section>
        </Layout>
    );
};

export default Team;
