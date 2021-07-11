// Module Imports
// Types
import { ticketPropTypes } from '../ticket/ticket';
// Helper imports
// Component imports
import { Tickets } from '../tickets/tickets';
import BackgroundShapes from './assets/background-shapes.svg';
// Image imports
import DiagonalLine from './assets/diagonal-line.svg';
import DotGird from './assets/dot-grid.inline.svg';
import GreenCircle from './assets/green-circle.inline.svg';
// Style imports
import style from './tickets-section.module.scss';
import PropTypes from 'prop-types';
import React from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid';

/**
 * Tickets section for display purposes
 * @param tickets
 * @returns {*}
 * @constructor
 */
export const TicketsSection = ({ tickets }) => (
    <section
        id="tickets"
        className={style.section}
        style={{ backgroundImage: `url(${BackgroundShapes})` }}>
        <img
            src={DiagonalLine}
            alt="Diagonal background graphic"
            className={style.diagonal}
        />
        <Grid
            fluid
            style={{
                position: 'relative',
                zIndex: 1,
            }}>
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
    tickets: PropTypes.arrayOf(
        PropTypes.shape({
            ...ticketPropTypes,
        }),
    ).isRequired,
};

// Default props
TicketsSection.defaultProps = {};
