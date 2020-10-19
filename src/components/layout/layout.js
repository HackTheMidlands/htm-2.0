import React from 'react';
import { Link } from 'gatsby';
import { Helmet } from 'react-helmet';
import PropTypes from 'prop-types';
import main from '../../styles/main.scss';
import Container from '../container/container';
import Navigation from '../navigation/navigation';
import { Footer } from '../footer/footer';
import { Seo } from '../seo/seo'


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
            <Seo />
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
