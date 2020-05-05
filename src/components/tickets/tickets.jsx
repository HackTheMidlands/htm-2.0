// Module Imports
import React from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import classNames from 'classnames';
import PropTypes from 'prop-types';

// Helper imports

// Component imports
import { Ticket, ticketPropTypes } from '../ticket/ticket';

// Style imports
import style from './tickets.module.scss';

// Image imports


/**
 * Collate singular tickets
 * @param tickets
 * @returns {*}
 * @constructor
 */
export const Tickets = ({ tickets }) => (
    <div className={style.tickets}>
        { tickets.map((ticket) => (
            <div className={style.ticket}>
                <Ticket key={ticket.ticketName} {...ticket} />
            </div>
        ))}
    </div>
);

// Prop definitions
Tickets.propTypes = {
    tickets: PropTypes.arrayOf(PropTypes.shape({
        ...ticketPropTypes,
    })).isRequired,
};

// Default props
Tickets.defaultProps = {};
