// Module Imports
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import PropTypes from 'prop-types';

// Types
import { ticketPropTypes } from '../ticket/ticket';

// Helper imports

// Component imports
import { Tickets } from '../tickets/tickets';

// Style imports
import style from './tickets-section.module.scss';

// Image imports
import DiagonalLine from './assets/diagonal-line.svg';
import BackgroundShapes from './assets/background-shapes.svg';
import DotGird from './assets/dot-grid.inline.svg';
import GreenCircle from './assets/green-circle.inline.svg';

/**
 * Tickets section for display purposes
 * @param tickets
 * @returns {*}
 * @constructor
 */
export const TicketsSection = ({ tickets }) => (
    <section id="tickets" className={style.section} style={{ backgroundImage: `url(${BackgroundShapes})` }}>
        <img src={DiagonalLine} alt="Diagonal background graphic" className={style.diagonal} />
        <Grid fluid style={{ position: 'relative', zIndex: 1 }}>
            <Row>
                <Col lg={12}>
                    <h2 className={style.title}>Tickets</h2>
                </Col>
                <Col lg={12}>
                    <DotGird className={style.dotGrid} />
                    <GreenCircle className={style.greenCircle} />
                    <Tickets tickets={tickets} />
                </Col>
            </Row>
        </Grid>
    </section>

);

// Prop definitions
TicketsSection.propTypes = {
    tickets: PropTypes.arrayOf(PropTypes.shape({
        ...ticketPropTypes,
    })).isRequired,
};

// Default props
TicketsSection.defaultProps = {};
