// Module Imports
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import classNames from 'classnames';
import PropTypes, { shape } from 'prop-types'

// Helper imports

// Component imports

// Style imports
import style from './index-features.module.scss';

// Image imports
import LearnIcon from './assets/learn.svg';
import BuildIcon from './assets/build.svg';
import ShareIcon from './assets/share.svg';
import Shapes from './assets/shapes.svg';
import DotGrid from './assets/dot-grid.svg';

/**
 * IndexFeatures components
 * @param props
 * @returns {*}
 * @constructor
 */
export const IndexFeatures = (props) => {
    const features = [
        {
            icon: LearnIcon,
            title: 'Learn',
            body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elit',
        },
        {
            icon: BuildIcon,
            title: 'Build',
            body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elit',
        },
        {
            icon: ShareIcon,
            title: 'Share',
            body: 'Lorem ipsum dolor sit amet, consetetur sadipscing elit',
        },
    ];

    return (
        <section id="features" className={style.features} style={{ backgroundImage: `url('${Shapes}')` }}>
            <Grid fluid>
                <Row center="sm" className={style.header}>
                    <Col xs={12} sm={6} style={{ position: 'relative' }}>
                        <h2 className={style.sectionTitle}>We’re committed to inspiring young minds</h2>
                        <img src={DotGrid} className={style.dotGrid} />
                    </Col>
                </Row>
                <Row around="sm">
                    { features.map(({ icon, title, body }) => (
                        <Col xs={12} sm={6} md={3} lg={2} key={title}>
                            <div className={style.feature}>
                                <img src={icon} alt={title} className={style.icon} />
                                <h4 className={style.title}>{title}</h4>
                                <p className={style.body}>{body}</p>
                            </div>
                        </Col>
                    )) }
                </Row>
            </Grid>
        </section>
    );
};

// Prop definitions
IndexFeatures.propTypes = {};

// Default props
IndexFeatures.defaultProps = {};
