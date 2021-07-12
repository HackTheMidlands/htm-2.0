// Image imports
import DiagonalLine from './assets/diagonal-line.svg';
// Helper imports
// Component imports
// Style imports
import style from './event-info.module.scss';
import classNames from 'classnames';
import { StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid';

/**
 * MissionBlock components
 * @param props
 * @returns {*}
 * @constructor
 */
export const EventInfo = ({ title, body, children }) => (
    <section className={style.eventSection}>
        <img src={DiagonalLine} className={style.line} alt="Diagonal line" />
        <Grid
            fluid
            style={{
                zIndex: 1,
                position: 'relative',
            }}>
            <Row>
                <Col lg={5} className={style.textCol}>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className={style.unicornGif}>
                        <source src="/images/unicorn.webm" type="video/webm" />
                    </video>
                    <h2 className={style.title}>{title}</h2>
                    <p>
                        During the event, people aged 14+ of all skill levels
                        (you don't have to be a professional or a student! Just
                        be lovely, passionate and interested in tech!) will come
                        together to share ideas, and create new and awesome
                        projects! (Not sure what a hackathon is? MLH have a
                        great explanation{' '}
                        <a
                            href="https://mlh.io/faq#what-is-a-hackathon"
                            target="_blank" rel="noreferrer">
                            here
                        </a>
                        ).{' '}
                    </p>
                </Col>
                <Col lg={7} className={style.imageCol}>
                    <Row>
                        <Col md={12} lg={5} className={style.imageColOne}>
                            <StaticImage
                                src="assets/event-pic-one.jpg"
                                className={style.image}
                                alt="Pic one"
                            />
                            <StaticImage
                                src="assets/event-pic-two.jpg"
                                className={classNames([
                                    style.image,
                                    style.imageTwo,
                                ])}
                                alt="Pic two"
                            />
                        </Col>
                        <Col md={12} lg={7}>
                            <StaticImage
                                src="assets/event-pic-three.jpg"
                                className={classNames([
                                    style.image,
                                    style.imageThree,
                                ])}
                                alt="Pic two"
                            />
                        </Col>
                    </Row>
                </Col>
            </Row>
        </Grid>
        <div className={style.content}>{children}</div>
    </section>
);

// Prop definitions
EventInfo.propTypes = {
    title: PropTypes.string,
    body: PropTypes.string,
    children: PropTypes.any,
};

// Default props
EventInfo.defaultProps = {
    title: 'The event',
    body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam erat, sed diam voluptua. At vero eos et accusam et justo duo dolores et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est Lorem ipsum dolor sit amet.',
    children: null,
};
