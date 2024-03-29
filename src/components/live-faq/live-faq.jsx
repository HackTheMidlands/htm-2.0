// Module Imports
import { FaqCard } from '../faq-card/faq-card';
// Helper imports
// Component imports
import { LiveHeaderText } from '../live-header-text/live-header-text';
// Image imports
import Background from './assets/background.svg';
// Style imports
import style from './live-faq.module.scss';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import React, { useEffect, useRef } from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid';

export const LiveFaq = ({ cards }) => {
    const gridRef = useRef(null);
    const initialLoad = useRef(true);

    useEffect(() => {
        if (initialLoad.current && gridRef.current) {
            let Masonary;
            if (typeof window !== 'undefined') {
                Masonary = require('masonry-layout');
            }
            new Masonary(gridRef.current, {
                itemSelector: '.masonary-item',
            });
            initialLoad.current = false;
        }
    }, []);

    return (
        <div
            className={style.liveFaq}
            style={{ backgroundImage: `url(${Background})` }}>
            <Grid fluid>
                <Row>
                    <Col lg={2}>
                        <LiveHeaderText text="FAQ" />
                    </Col>
                    <Col lg={9} lgOffset={1}>
                        <div
                            className={classNames([style.cardWrapper])}
                            ref={gridRef}>
                            {cards.map(({ title, body }, index) => (
                                <div
                                    key={`${title}_${index}`}
                                    className={classNames([
                                        'masonary-item',
                                        style.item,
                                    ])}>
                                    <FaqCard
                                        key={`${title}_${index}`}
                                        title={title}
                                        body={body}
                                        number={index + 1}
                                    />
                                </div>
                            ))}
                        </div>
                    </Col>
                </Row>
            </Grid>
        </div>
    );
};

// Prop definitions
LiveFaq.propTypes = {
    cards: PropTypes.arrayOf(
        PropTypes.shape({
            title: PropTypes.string,
            body: PropTypes.string,
        }),
    ).isRequired,
};

// Default props
LiveFaq.defaultProps = {};
