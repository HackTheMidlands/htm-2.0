import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import classNames from 'classnames';
import PropTypes from 'prop-types';

import style from './hero-header.module.scss';
import DefaultHeroImage from './assets/default-hero.jpg';
import WaveBottomImage from './assets/wave.svg';
import ShapeBackgroundImage from './assets/shape-background.svg';

export const HeroHeader = ({
    children, image, height, className,
}) => (
    <header className={classNames([style.header, className])} style={{ height, backgroundImage: `url('${image}')` }}>
        <img src={ShapeBackgroundImage} className={style.shapeBackground} alt="Shape background" />
        <Grid fluid>
            <Row>
                <Col xs={12} style={{ zIndex: 1 }}>
                    { children }
                </Col>
            </Row>
        </Grid>
        <img src={WaveBottomImage} className={style.wave} alt="Wave at bottom" />
    </header>
);

HeroHeader.propTypes = {
    children: PropTypes.any.isRequired,
    image: PropTypes.string,
    height: PropTypes.string,
    className: PropTypes.string,
};

HeroHeader.defaultProps = {
    image: DefaultHeroImage,
    height: 'auto',
    className: '',
};
