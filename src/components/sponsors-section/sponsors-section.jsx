import PartnerMedal from './assets/partner.inline.svg';
import style from './sponsors-section.module.scss';
import { GatsbyImage, StaticImage } from 'gatsby-plugin-image';
import PropTypes from 'prop-types';
import React from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid';

const calculateGridCols = (tier) => tier.map(() => '1fr').join(' ');

const ComingSoon = ({ tier }) => (
    <p className={style.comingSoon}>{tier.slice(0, 1).toUpperCase() + tier.slice(1)} sponsors coming soon!</p>
);

const Sponsors = ({ sponsors, tier }) => {
    if (!!sponsors && sponsors.length > 0) {
        return sponsors.map((sponsor) => (
            <a
                key={sponsor.name}
                href={sponsor.link}
                target="_blank"
                rel="noopener noreferrer">
                {sponsor.image && (
                    <GatsbyImage
                        className={style.sponsorImage}
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
    platinumTier,
    goldTier,
    silverTier,
    bronzeTier,
    digitalTier,
    venueTier,
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
                    <video
                        autoPlay
                        loop
                        muted
                        playsInline
                        className={style.sparkleGif}>
                        <source src="/images/crown.webm" type="video/webm" />
                    </video>
                        <h2>Platinum</h2>
                    </div>
                    <div className={style.platinum}>
                        <Sponsors sponsors={platinumTier} tier="platinum" />
                    </div>
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
            <Row>
                <Col xs={12}>
                    <div className={style.sectionTitle}>
                        <StaticImage
                            src="./assets/venue.png"
                            alt="House"
                            className={style.medal}
                        />
                        <h2>Venue Sponsor & Partner</h2>
                    </div>
                    <div className={style.venue}>
                        <Sponsors sponsors={venueTier} tier="venue" />
                    </div>
                </Col>
            </Row>
            <Row>
                <Col xs={12}>
                    <div className={style.sectionTitle}>
                        <StaticImage
                            src="./assets/digital.png"
                            alt="Digital Medal"
                            className={style.medal}
                        />
                        <h2>Digital</h2>
                    </div>
                    <div className={style.digital}>
                        <Sponsors sponsors={digitalTier} tier="digital" />
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
    venueTier: PropTypes.arrayOf(sponsorPropTypes),
    partners: PropTypes.arrayOf(sponsorPropTypes),
};

// Default props
SponsorsSection.defaultProps = {
    goldTier: null,
    silverTier: null,
    bronzeTier: null,
    digitalTier: null,
    venueTier: null,
    partners: null,
};
