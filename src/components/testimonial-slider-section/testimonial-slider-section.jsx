// Module Imports
// Image imports
import { TestimonialBox } from '../testimonial-box/testimonial-box';
import Wave from './assets/wave.svg';
// Helper imports
// Component imports
// Style imports
import style from './testimonial-slider-section.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState, useEffect } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

/**
 * MissionBlock components
 * @param props
 * @returns {*}
 * @constructor
 */
export const TestimonialSliderSection = ({ title, testimonials }) => {
    const [activeIndex, setActiveIndex] = useState(0);

    // Generate a random number for bubble one
    const bubbleNumberOne = () => Math.floor(Math.random() * 50) + 50;

    // Generate a random number for the second bubble
    const bubbleNumberTwo = () => Math.floor(Math.random() * 50) + 75;

    // Generate the border css property
    const generateBorder = (func) =>
        `${func()}% ${func()}% ${func()}% / ${func()}% ${func()}% ${func()}%`;

    useEffect(() => {
        const interval = setInterval(() => {
            const index =
                activeIndex === testimonials.length - 1 ? 0 : activeIndex + 1;
            setActiveIndex(index);
        }, 5000);

        return () => {
            clearInterval(interval);
        };
    });

    const body = testimonials[activeIndex].body;

    return (
        <section className={style.section}>
            <img className={style.wave} src={Wave} alt="Wave" />
            <Grid fluid style={{ zIndex: 1, position: 'relative' }}>
                <Row>
                    <Col lg={4}>
                        <TestimonialBox
                            name={testimonials[activeIndex].name}
                            source={testimonials[activeIndex].source}
                            image={testimonials[activeIndex].image}>
                            {body}
                        </TestimonialBox>
                    </Col>
                    <Col lg={6} lgOffset={1}>
                        <h2>{title}</h2>
                        <ul className={style.peopleList}>
                            {testimonials.map(({ name, image }, index) => (
                                <li
                                    className={classNames([
                                        style.person,
                                        {
                                            [`${style.active}`]:
                                                index === activeIndex,
                                        },
                                    ])}
                                    style={{
                                        '--bubble':
                                            generateBorder(bubbleNumberOne),
                                        '--bubble-two':
                                            generateBorder(bubbleNumberTwo),
                                    }}
                                    onClick={() => setActiveIndex(index)}
                                    key={name}>
                                    <img src={image} alt={name} />
                                </li>
                            ))}
                        </ul>
                    </Col>
                </Row>
            </Grid>
        </section>
    );
};

// Prop definitions
TestimonialSliderSection.propTypes = {
    title: PropTypes.string,
    testimonials: PropTypes.arrayOf(
        PropTypes.shape({
            name: PropTypes.string,
            source: PropTypes.string,
            image: PropTypes.string,
            body: PropTypes.string,
        }),
    ).isRequired,
};

// Default props
TestimonialSliderSection.defaultProps = {
    title: 'We provide everything you need to explore and create awesome projects',
};
