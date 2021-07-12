import PartnerMedal from './assets/partner.inline.svg';
import style from './sponsors-section.module.scss';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid';

const calculateGridCols = (tier) => tier.map(() => '1fr').join(' ');

const ComingSoon = ({ tier }) => (
    <p className={style.comingSoon}>More {tier} sponsors coming soon!</p>
);

const Sponsors = ({ sponsors, tier }) => {
    if (sponsors.length > 0) {
        return sponsors.map((sponsor) => (
            <a
                key={sponsor.name}
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer">
                {sponsor.image && (
                    <GatsbyImage
                        alt={sponsor.name}
                        image={sponsor.image.gatsbyImageData}
                    />
                )}
            </a>
        ));
    } else {
        return <ComingSoon tier={tier} />;
    }
};

export const SponsorsSection = ({
    goldTier,
    silverTier,
    bronzeTier,
    digitalTier,
    partners,
}) => (
    <section className={style.section}>
        <Grid fluid>
            <Row>
                <Col xs={12}>
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className={style.sparkleGif}>
                        <source src="/images/sparkles.webm" type="video/webm" />
                    </video>
                    <h2 className={style.title}>Our Sponsors</h2>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <div className={style.sectionTitle}>
                        <StaticImage
                            src="./assets/gold.png"
                            alt="Gold Medal"
                            className={style.medal}
                        />
                        <h2>Gold</h2>
                    </div>
                    <div className={style.gold}>
                        <Sponsors sponsors={goldTier} tier="gold" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <div className={style.sectionTitle}>
                        <StaticImage
                            src="./assets/silver.png"
                            alt="Silver Medal"
                            className={style.medal}
                        />
                        <h2>Silver</h2>
                    </div>
                    <div className={style.silver}>
                        <Sponsors sponsors={silverTier} tier="silver" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <div className={style.sectionTitle}>
                        <StaticImage
                            src="./assets/bronze.png"
                            alt="Bronze Medal"
                            className={style.medal}
                        />
                        <h2>Bronze</h2>
                    </div>
                    <div
                        className={style.bronze}
                        style={{
                            gridTemplateColumns:
                                bronzeTier.length < 4
                                    ? '1fr '.repeat(bronzeTier.length)
                                    : '1fr',
                        }}>
                        <Sponsors sponsors={bronzeTier} tier="bronze" />
                    </div>
                </Col>
            </Row>
            {/*<Row>*/}
            {/*    <Col xs={12}>*/}
            {/*        <div className={style.sectionTitle}>*/}
            {/*            <img src={DigitalMedal} alt="Digital Medal" className={style.medal} />*/}
            {/*            <h2>Digital</h2>*/}
            {/*        </div>*/}
            {/*        <div className={style.bronze} style={{ gridTemplateColumns: bronzeTier.length < 4 ? '1fr '.repeat(bronzeTier.length) : '1fr' }}>*/}
            {/*            { digitalTier.length > 0 && digitalTier.map((sponsor) => (*/}
            {/*                <div>*/}
            {/*                    <a href={sponsor.link} target="_blank" rel="noopener noreferrer">*/}
            {/*                        <img src={sponsor.image} alt={sponsor.name} />*/}
            {/*                    </a>*/}
            {/*                </div>*/}
            {/*            ))}*/}
            {/*            { digitalTier.length === 0 && (*/}
            {/*              <ComingSoon tier="digital" />*/}
            {/*            )}*/}
            {/*        </div>*/}
            {/*    </Col>*/}
            {/*</Row>*/}
            <Row>
                <Col xs={12}>
                    <div className={style.sectionTitle}>
                        <PartnerMedal className={style.medal} />
                        <h2>Partners</h2>
                    </div>
                    <div className={style.partners}>
                        <Sponsors sponsors={partners} tier="partner" />
                    </div>
                </Col>
            </Row>
        </Grid>
    </section>
);

const sponsorPropTypes = PropTypes.shape({
    image: PropTypes.object,
    name: PropTypes.string,
    link: PropTypes.string,
});

// Prop definitions
SponsorsSection.propTypes = {
    goldTier: PropTypes.arrayOf(sponsorPropTypes),
    silverTier: PropTypes.arrayOf(sponsorPropTypes),
    bronzeTier: PropTypes.arrayOf(sponsorPropTypes),
    digitalTier: PropTypes.arrayOf(sponsorPropTypes),
    partners: PropTypes.arrayOf(sponsorPropTypes),
};

// Default props
SponsorsSection.defaultProps = {
    goldTier: null,
    silverTier: null,
    bronzeTier: null,
    partners: null,
    digitalTier: null,
};
