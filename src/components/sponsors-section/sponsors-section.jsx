// Module Imports
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Helper imports

// Component imports

// Style imports
import style from './sponsors-section.module.scss';

// Image imports
import GoldMedal from './assets/gold.png';
import BronzeMedal from './assets/bronze.png';
import SilverMedal from './assets/silver.png';
import PartnerMedal from './assets/partner.inline.svg';

const calculateGridCols = (tier) => tier.map(() => '1fr').join(' ');

export const SponsorsSection = ({
    goldTier, silverTier, bronzeTier, partners,
}) => (
    <section className={style.section}>

        <Grid fluid>
            <Row>
                <Col xs={12}>
                    <h2 className={style.title}>Our Sponsors</h2>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <div className={style.sectionTitle}>
                        <img src={GoldMedal} alt="Gold Medal" className={style.medal} />
                        <h2>Gold</h2>
                    </div>
                    <div className={style.gold}>
                        { goldTier.map((sponsor) => (
                            <div>
                                <img src={sponsor.image} alt={sponsor.name} />
                            </div>
                        ))}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <div className={style.sectionTitle}>
                        <img src={SilverMedal} alt="Silver Medal" className={style.medal} />
                        <h2>Silver</h2>
                    </div>
                    <div className={style.silver}>
                        { silverTier.map((sponsor) => (
                          <div>
                              <img src={sponsor.image} alt={sponsor.name} />
                          </div>
                        ))}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <div className={style.sectionTitle}>
                        <img src={BronzeMedal} alt="Bronze Medal" className={style.medal} />
                        <h2>Bronze</h2>
                    </div>
                    <div className={style.bronze} style={{ gridTemplateColumns: bronzeTier.length < 4 ? '1fr '.repeat(bronzeTier.length) : '1fr' }}>
                        { bronzeTier.map((sponsor) => (
                          <div>
                              <img src={sponsor.image} alt={sponsor.name} />
                          </div>
                        ))}
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <div className={style.sectionTitle}>
                        <PartnerMedal className={style.medal} />
                        <h2>Partners</h2>
                    </div>
                    <div className={style.partners}>
                        { partners.map((sponsor) => (
                          <div>
                              <img src={sponsor.image} alt={sponsor.name} />
                          </div>
                        ))}
                    </div>
                </Col>
            </Row>
        </Grid>

    </section>
);

const sponsorPropTypes = PropTypes.shape({
    image: PropTypes.string,
    name: PropTypes.string,
    link: PropTypes.string,
});

// Prop definitions
SponsorsSection.propTypes = {
    goldTier: PropTypes.arrayOf(sponsorPropTypes),
    silverTier: PropTypes.arrayOf(sponsorPropTypes),
    bronzeTier: PropTypes.arrayOf(sponsorPropTypes),
    partners: PropTypes.arrayOf(sponsorPropTypes),
};

// Default props
SponsorsSection.defaultProps = {
    goldTier: null,
    silverTier: null,
    bronzeTier: null,
    partners: null,
};
