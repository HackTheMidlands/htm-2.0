// Module Imports
import React, { useEffect, useState, useRef, useMemo } from 'react';
import { Grid, Row, Col } from 'react-flexbox-grid';
import classNames from 'classnames';
import PropTypes from 'prop-types';
import moment from 'moment';
import { graphql, useStaticQuery } from 'gatsby';
import useSWR from 'swr';

// Helper imports

// Component imports
import { TimelineDay } from './components/timeline-day/timeline-day';
import { TimelineItem } from './components/timeline-item/timeline-item';
import { TimelineTime } from './components/timeline-time/timeline-time';

// Style imports
import style from './timeline.module.scss';

// Image imports

import { timelineData } from '../../data/timeline';

/**
 * MissionBlock components
 * @param props
 * @returns {*}
 * @constructor
 */
export const Timeline = props => {
    const data = useStaticQuery(graphql`
        query TimelineQuery {
            site {
                siteMetadata {
                    googleCalendarId: googleCalendarId
                    googleCalendarApiKey: googleCalendarApiKey
                }
            }
        }
    `);

    const {
        googleCalendarApiKey, // gcp key restricted to the calendar api and requests from https://hackthemidlands.com
        googleCalendarId,
    } = data.site.siteMetadata;

    const { data: gcalTimelineData } = useSWR(
        'calendar-events',
        async () => {
            let out = await fetch(
                `https://www.googleapis.com/calendar/v3/calendars/${googleCalendarId}/events?key=${googleCalendarApiKey}`
            )
                .then(resp => {
                    if (resp.ok) {
                        return resp.json();
                    } else {
                        return {};
                    }
                })
                .then(json => {
                    return json.items.reduce((timeline, event) => {
                        const event_data = {
                            name: event.summary,
                            time: moment(event.start.dateTime).format('HH:MM'),
                            owner: event.summary,
                        };
                        const day = moment(event.start.dateTime).format('dddd');
                        if (day in timeline) {
                            timeline[day].events.push(event_data);
                        } else {
                            timeline[day] = {
                                name: day,
                                date: moment(event.start.dateTime).format(
                                    'DD/MM/YY'
                                ),
                                events: [event_data],
                            };
                        }
                        return timeline;
                    }, {});
                })
                .catch((e) => {
                    console.log('error...');
                    console.error(e);
                });
            return out;
        },
        {
            initialData: timelineData,
            revalidateOnMount: true
        }
    );

    const wrapper = useRef(null);
    const track = useRef(null);

    const [activeDay, setActiveDay] = useState(null);
    const [spaceBetweenPoints, setSpaceBetweenPoints] = useState(300);
    const [days, setDays] = useState([]);
    const [timelineEvents, setTimelineEvents] = useState([]);
    const [trackHeight, setTrackHeight] = useState(0);

    /**
     * Get the events for a specific day
     * @param today
     * @param date
     * @returns {[{owner: string, name: string, time: string}, {owner: string, name: string, time: string}, {owner: string, name: string, time: string}] | ({owner: string, name: string, time: string}|{owner: string, name: string, time: string}|{owner: string, name: string, time: string}|{owner: string, name: string, time: string}|{owner: string, name: string, time: string})[] | *[]}
     */
    const getEventsForDay = ({ today, date }) => {
        const todayDate = today ? moment() : moment(date, 'DD/MM/YY');
        const daysData = Object.values(gcalTimelineData);
        return daysData.find((day) => todayDate.isSame(moment(day.date, 'DD/MM/YY'), 'day'))?.events || [];
    };

    const renderTimelineItem = (events) => useMemo(() => events.map(({ name, time, owner }) => {
        if (activeDay) {
        console.log('render event', name, time, owner)
            const { date } = activeDay;
            const currentDay = moment(activeDay.date, 'DD/MM/YY');
            const currentTime = currentDay.startOf('hour');
            const startOfDay =currentDay.startOf('day');
            const eventTime = moment(`${date} ${time}`, 'DD/MM/YY HH:mm');
            const eventDiff = eventTime.diff(startOfDay, 'hours');
            const sameTime = eventTime.diff(currentTime, 'hours');
            const state = sameTime === 0 ? 'active' : 'inactive';
            return (
                <div
                    key={name}
                    className={style.item}
                    style={{ transform: `translateX(${eventDiff * spaceBetweenPoints}px)` }}
                >
                    <TimelineItem time={time} owner={owner} name={name} state={state} />
                </div>
            );
        }
        return null;
    }), [timelineEvents, activeDay]);

    const onDayClicked = ({ key, state, date }) => {
        if (state === 'inactive') {
            const newDays = days.map((d) => {
                if (d.key === key) {
                    setActiveDay(d)
                    d.state = 'active';
                } else {
                    d.state = 'inactive';
                }
                return d;
            });
            setDays(newDays);
            setTimelineEvents(getEventsForDay({ date }));
        }
    };

    useEffect(() => {
            let timelineDays = Object.keys(gcalTimelineData);
            timelineDays = timelineDays.map((day) => {
                const { name, date, events } = gcalTimelineData[day];
                const parsedDate = moment(date, 'DD/MM/YY');
                const isSameDay = moment().isSame(parsedDate, 'day');
                if (isSameDay) {
                    setActiveDay(gcalTimelineData[day]);
                    setTimelineEvents(events);
                }
                return {
                    key: day,
                    name,
                    state: isSameDay ? 'active' : 'inactive',
                    date,
                };
            });
            setDays(timelineDays);

    }, [gcalTimelineData])

    useEffect(() => {
        if (track.current) {
            let maxHeight = 0;
            const children = Array.from(track.current.children);
            children.forEach((child) => {
                const height = child.offsetHeight;
                if (height > maxHeight) {
                    maxHeight = height;
                }
            })
            setTrackHeight(maxHeight);
        }
            if (wrapper.current) {
                const now = moment().hour();
                wrapper.current.scroll(now * spaceBetweenPoints, 0);
            }

    }, [timelineEvents]);

    return (
        <div className={style.timeline}>

            <Grid fluid>

                <Row>
                    <Col lg={12}>
                        <div className={style.days}>
                            { days.map(({ key, name, state, date }) => (
                                <TimelineDay
                                    key={name}
                                    name={name}
                                    state={state}
                                    className={style.day}
                                    onClick={() => onDayClicked({ key, state, date })}
                                />
                            ))}
                        </div>
                    </Col>
                </Row>

                <Row>
                    <Col lg={12}>
                        <div className={style.wrapper} ref={wrapper}>
                            <div className={style.track} ref={track} style={{ height: trackHeight }}>
                                { renderTimelineItem(timelineEvents) }
                            </div>
                            <TimelineTime />
                        </div>
                    </Col>
                </Row>

            </Grid>

        </div>
    );
};

// Prop definitions
Timeline.propTypes = {};

// Default props
Timeline.defaultProps = {};
