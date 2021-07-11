import '../../styles/main.scss';
import Container from '../container/container';
import { Footer } from '../footer/footer';
import Navigation from '../navigation/navigation';
import { Seo } from '../seo/seo';
import PropTypes from 'prop-types';
import React from 'react';

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
