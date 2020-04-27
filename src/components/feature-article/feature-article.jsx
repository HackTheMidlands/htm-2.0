// Module Imports
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import { navigate } from 'gatsby';

// Helper imports

// Component imports
import { ArticleCard } from '../article-card/article-card';
import { Button } from '../button/button';

// Style imports
import style from './feature-article.module.scss';

// Image imports
import WaveImage from './assets/wave.svg';

/**
 * MissionBlock component
 * @param props
 * @returns {*}
 * @constructor
 */
export const FeatureArticle = ({
    title, body, button: { text: buttonText, link: buttonLink }, article: {
        title: articleTitle, image: articleImage, body: articleBody, link: articleLink,
    },
}) => (
    <section className={style.featureSection} style={{ backgroundImage: `url('${WaveImage}')` }}>
        <Grid fluid>
            <Row>
                <Col className={style.textCol} xs={12} lg={4}>
                    <h2 className={style.title}>{ title }</h2>
                    <p className={style.body}>{ body }</p>
                    <Button theme="orange" onClick={() => navigate(buttonLink)}>{ buttonText }</Button>
                </Col>
                <Col className={style.textContent} xs={12} lg={7} lgOffset={1}>
                    <ArticleCard body={articleBody} image={articleImage} title={articleTitle} link={articleLink} />
                </Col>
            </Row>
        </Grid>
    </section>
);

// Prop definitions
FeatureArticle.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    button: PropTypes.shape({
        text: PropTypes.string,
        link: PropTypes.string,
    }),
    article: PropTypes.shape({
        image: PropTypes.string,
        title: PropTypes.string,
        body: PropTypes.string,
        link: PropTypes.string,
    }),
};

// Default props
FeatureArticle.defaultProps = {
    title: 'Read & Learn',
    body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore.',
    button: {
        text: 'Visit Blog',
        link: '/blog',
    },
    article: {
        image: 'https://images.unsplash.com/photo-1556761175-b413da4baf72?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1934&q=80',
        title: 'Helping communities with guided workshops',
        body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusa…',
        link: '/blog',
    },
};
