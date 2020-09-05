// Module Imports
import React from 'react';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import moment from 'moment';

// Helper imports

// Component imports
import { Button } from '../button/button';

// Style imports
import style from './ticket.module.scss';

// Image imports
import TicketEndRight from './assets/ticket-end-right.svg';
import TicketEndLeft from './assets/ticket-end-left.svg';
import TicketActive from './assets/ticket-active.inline.svg';
import TicketLocked from './assets/ticket-locked.inline.svg';
import TicketExternal from './assets/external.inline.svg';

/**
 * Ticket component
 * @param ticketName
 * @param releaseDate
 * @param expireDate
 * @param link
 * @param state
 * @returns {*}
 * @constructor
 */
export const Ticket = ({
    ticketName, releaseDate, expireDate, link, state,
}) => {
    state = expireDate.isBefore(moment()) ? 'finished' : releaseDate.isAfter(moment()) ? 'locked' : state;
    console.log(releaseDate.format())

    /**
     * Navigates the user to the ticket link
     */
    const navigateToLink = () => {
        if (state !== 'locked') {
            window.open(link, '_newtab');
        }
    };

    return (
        <div
            className={classNames([style.ticket, {
                [`${style.locked}`]: state === 'locked',
            }])}
            onClick={navigateToLink}
        >
            <div className={style.ticketBody}>
                <div className={style.icon}>
                    { state === 'active' ? <TicketActive /> : <TicketLocked /> }
                </div>
                <div className={style.ticketInfo}>
                    <p>{ ticketName }</p>
                    <span><p>Releasing: { releaseDate.format('DD/MM/YY@hh:mm a') }</p></span>
                </div>
                <div className={style.external} onClick={navigateToLink}>
                    <TicketExternal />
                </div>
                { ['active', 'sold out', 'finished'].indexOf(state) !== -1
                    && (
                        <div className={classNames([style.pill], {
                            [`${style.live}`]: state === 'active',
                        }, {
                            [`${style.soldOut}`]: state === 'sold out',
                        }, {
                            [`${style.finished}`]: state === 'finished',
                        })}
                        >
                            <p>
                                { state === 'active' ? 'LIVE' : state === 'sold out' ? 'SOLD OUT' : 'FINISHED'}
                            </p>
                        </div>
                    )}
                <div className={style.ticketEndRight} style={{ backgroundImage: `url(${TicketEndRight})` }} />
            </div>
            <div className={style.dashedLine} />
            <div className={style.ticketAction}>
                <div className={style.ticketEndLeft} style={{ backgroundImage: `url(${TicketEndLeft})` }} />
                <Button theme="orange" name="Get tickets" onClick={navigateToLink}>
                    Get tickets
                </Button>
            </div>
        </div>
    );
};

export const ticketPropTypes = {
    ticketName: PropTypes.string.isRequired,
    releaseDate: PropTypes.instanceOf(moment).isRequired,
    expireDate: PropTypes.instanceOf(moment).isRequired,
    link: PropTypes.string.isRequired,
    state: PropTypes.oneOf(['active', 'locked', 'sold out']),
};

// Prop definitions
Ticket.propTypes = {
    ...ticketPropTypes,
};

// Default props
Ticket.defaultProps = {};
