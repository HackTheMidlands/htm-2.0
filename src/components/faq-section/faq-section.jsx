// Module Imports
// Helper imports
// Component imports
// Style imports
import style from './faq-section.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useState } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';

// Image imports

/**
 * MissionBlock components
 * @param props
 * @returns {*}
 * @constructor
 */
export const FaqSection = ({ questions }) => {
    const [active, setActive] = useState(null);

    /**
     * Open a question and close the others
     * @param index
     */
    const openQuestion = (index) => {
        if (index === active) {
            setActive(null);
            return;
        }
        setActive(index);
    };

    return (
        <section className={style.section} id="faq">
            <Grid fluid>
                <Row>
                    <Col lg={12}>
                        <h2>Frequently Asked Questions</h2>
                    </Col>
                </Row>
                <Row>
                    {questions.map(({ question, answer }, index) => (
                        <Col lg={6} key={index}>
                            <div
                                className={classNames([
                                    style.qa,
                                    {
                                        [`${style.active}`]: index === active,
                                    },
                                ])}>
                                <h4
                                    className={style.question}
                                    onClick={() => openQuestion(index)}>
                                    {question}
                                </h4>
                                <div className={style.hidden}>
                                    <p className={style.body}>{answer}</p>
                                </div>
                            </div>
                        </Col>
                    ))}
                </Row>
            </Grid>
        </section>
    );
};

// Prop definitions
FaqSection.propTypes = {
    questions: PropTypes.arrayOf(
        PropTypes.shape({
            question: PropTypes.string,
            answer: PropTypes.string,
        }),
    ).isRequired,
};

// Default props
FaqSection.defaultProps = {};
