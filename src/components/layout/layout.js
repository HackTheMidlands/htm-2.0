import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import main from '../../styles/main.scss';
import Container from '../container/container';
import Navigation from '../navigation/navigation';
import { Footer } from '../footer/footer';


const Layout = (props) => {
    const { title } = props;

    const { location, children } = props;
    let header;

    let rootPath = '/';
    if (typeof __PREFIX_PATHS__ !== 'undefined' && __PREFIX_PATHS__) {
        rootPath = `${__PATH_PREFIX__}/`;
    }

    return (
        <Container>
            <Helmet>
                <title>{title}</title>
                <title>HackTheMidlands 5.0</title>
                <meta name="title" content="HackTheMidlands 5.0" />
                <meta name="description" content="Usually HackTheMidlands is a 24-hour hackathon, or “creative marathon”, which was founded in 2016. We provide a unique space for hundreds of passionate technologists like you to share their experiences, meet new people and learn something new - gaining valuable skills in the process." />
                <meta property="og:type" content="website" />
                <meta property="og:url" content="https://hackthemidlands.com/" />
                <meta property="og:title" content="HackTheMidlands 5.0" />
                <meta property="og:description" content="Usually HackTheMidlands is a 24-hour hackathon, or “creative marathon”, which was founded in 2016. We provide a unique space for hundreds of passionate technologists like you to share their experiences, meet new people and learn something new - gaining valuable skills in the process." />
                <meta property="og:image" content="http://hackthemidlands.com/images/hackthemidlands-facebook.jpg" />
                <meta property="twitter:card" content="summary_large_image" />
                <meta property="twitter:url" content="https://hackthemidlands.com/" />
                <meta property="twitter:title" content="HackTheMidlands 5.0" />
                <meta property="twitter:description" content="Usually HackTheMidlands is a 24-hour hackathon, or “creative marathon”, which was founded in 2016. We provide a unique space for hundreds of passionate technologists like you to share their experiences, meet new people and learn something new - gaining valuable skills in the process." />
                <meta property="twitter:image" content="http://hackthemidlands.com/images/hackthemidlands-facebook.jpg" />
            </Helmet>
            <Navigation />
            {children}
            <Footer />
        </Container>
    );
};
export default Layout;

Layout.propTypes = {
    title: PropTypes.string,
};

Layout.defaultProps = {
    title: 'HackTheMidlands',
};
