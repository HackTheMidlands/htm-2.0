import { timelineData } from '../../data/timeline';
import { TimelineDay } from './components/timeline-day/timeline-day';
import { TimelineItem } from './components/timeline-item/timeline-item';
import { TimelineTime } from './components/timeline-time/timeline-time';
import style from './timeline.module.scss';
import { graphql, useStaticQuery } from 'gatsby';
import moment from 'moment';
import React, { useEffect, useMemo, useRef, useState } from 'react';
import { Col, Grid, Row } from 'react-flexbox-grid';
import useSWR from 'swr';

/**
 * MissionBlock components
 * @param props
 * @returns {*}
 * @constructor
 */
export const Timeline = (props) => {
    const host_regex = /(?:Host: )(.*$)/m;

    const wrapper = useRef(null);
    const track = useRef(null);

    const [activeDay, setActiveDay] = useState(null);
    const [spaceBetweenPoints, setSpaceBetweenPoints] = useState(500);
    const [days, setDays] = useState([]);
    const [timelineEvents, setTimelineEvents] = useState([]);
    const [trackHeight, setTrackHeight] = useState(0);
    const [noEvents, setNoEvents] = useState(false);

    const data = useStaticQuery(graphql`
        query TimelineQuery {
            site {
                siteMetadata {
                    googleCalendarId: googleCalendarId
                    googleCalendarApiKey: googleCalendarApiKey
                    eventStartString: eventStart
                    eventEndString: eventEnd
                }
            }
        }
    `);

    const {
        googleCalendarApiKey, // gcp key restricted to the calendar api and requests from https://hackthemidlands.com
        googleCalendarId,
        eventStartString,
        eventEndString,
    } = data.site.siteMetadata;
    const startTime = new Date(eventStartString)
    const endTime = new Date(eventEndString)

    const { data: gcalTimelineData } = useSWR(
        'calendar-events',
        async () => {
            let out = await fetch(
                `https://www.googleapis.com/calendar/v3/calendars/${googleCalendarId}/events?key=${googleCalendarApiKey}`,
            )
                .then((resp) => {
                    if (resp.ok) {
                        return resp.json();
                    } else {
                        return {};
                    }
                })
                .then((json) => {
                        return json.items.filter(event => {
                            const sTime = new Date(event.start.dateTime)
                            return sTime >= startTime && sTime <= endTime
                        }).reduce((timeline, event) => {
                        const owner =
                            event.description !== undefined
                                ? event.description.match(host_regex)[1]
                                : '';
                        const time = moment(
                            event.start.dateTime,
                            'YYYY-MM-DDTHH:mm:ssZZ',
                        ).format('HH:mm');
                        const endTime = moment(
                            event.end.dateTime,
                            'YYYY-MM-DDTHH:mm:ssZZ',
                        ).format('HH:mm');
                        const event_data = {
                            id: event.id,
                            name: event.summary,
                            time,
                            endTime,
                            owner,
                        };
                        const day = moment(event.start.dateTime).format('dddd');
                        if (day in timeline) {
                            timeline[day].events.push(event_data);
                        } else {
                            timeline[day] = {
                                name: day,
                                date: moment(event.start.dateTime).format(
                                    'DD/MM/YY',
                                ),
                                events: [event_data],
                            };
                        }
                        return timeline;
                    }, {});
                })
                .catch((e) => {
                    console.log('error...');
                    console.log(e);
                });
            return out;
        },
        {
            initialData: timelineData,
            revalidateOnMount: true,
        },
    );

    /**
     * Get the events for a specific day
     * @param today
     * @param date
     * @returns {[{owner: string, name: string, time: string}, {owner: string, name: string, time: string}, {owner: string, name: string, time: string}] | ({owner: string, name: string, time: string}|{owner: string, name: string, time: string}|{owner: string, name: string, time: string}|{owner: string, name: string, time: string}|{owner: string, name: string, time: string})[] | *[]}
     */
    const getEventsForDay = ({ today, date }) => {
        const todayDate = today ? moment() : moment(date, 'DD/MM/YY');
        const daysData = Object.values(gcalTimelineData);
        return (
            daysData.find((day) =>
                todayDate.isSame(moment(day.date, 'DD/MM/YY'), 'day'),
            )?.events || []
        );
    };

    const renderTimelineItem = (events) =>
        useMemo(() => {
            setNoEvents(events.length === 0);
            return events.map(({ id, name, time, endTime, owner }) => {
                if (activeDay) {
                    const { date } = activeDay;
                    const currentDay = moment(activeDay.date, 'DD/MM/YY');
                    const currentTime = currentDay.startOf('hour');
                    const startOfDay = currentDay.startOf('day');
                    const eventTime = moment(
                        `${date} ${time}`,
                        'DD/MM/YY HH:mm',
                    );
                    const eventDiff = eventTime.diff(startOfDay, 'hours', true);
                    const sameTime = eventTime.diff(currentTime, 'hours');
                    const state = sameTime === 0 ? 'active' : 'inactive';
                    const transforms = {
                        'Talk: Clean Concise Collaborative Code (Inspire)': 90,
                        'Talk: Intro to APIs: How to use Capital One Developer API (Learn)': 150,
                        'Talk: Figma Basics: How to create an Interactive UI (Learn)': 150,
                        'Talk: A first look at OpenStreetMaps (Learn)': 150,
                        'Snyk Mini-CTF (Learn)': 180

                    }
                    return (
                        <div
                            key={id}
                            className={style.item}
                            style={{
                                transform: `translate(${
                                    eventDiff * spaceBetweenPoints
                                }px,${
                                    transforms[name] || 0
                                }px)`,
                            }}>
                            <TimelineItem
                                time={time}
                                endTime={endTime}
                                owner={owner}
                                name={name}
                                state={state}
                            />
                        </div>
                    );
                }
                return null;
            });
        }, [timelineEvents, activeDay]);

    const onDayClicked = ({ key, state, date }) => {
        if (state === 'inactive') {
            const newDays = days.map((d) => {
                if (d.key === key) {
                    setActiveDay(d);
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
        setNoEvents(timelineDays.length === 0);
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
    }, [gcalTimelineData]);

    useEffect(() => {
        if (track.current) {
            let maxHeight = 0;
            const children = Array.from(track.current.children);
            children.forEach((child) => {
                const height = child.offsetHeight;
                if (height > maxHeight) {
                    maxHeight = height;
                }
            });
            setTrackHeight(maxHeight);
        }
        if (wrapper.current) {
            const now = moment().hour();
            wrapper.current.scroll({
                top: 0,
                left: now * spaceBetweenPoints,
                behavior: 'smooth',
            });
        }
    }, [timelineEvents]);

    const sortDays = (day1, day2) =>
        moment(day1.date, 'DD/MM/YY').unix() -
        moment(day2.date, 'DD/MM/YY').unix();

    return (
        <div className={style.timeline}>
            <Grid fluid>
                <Row>
                    <Col lg={12}>
                        <div className={style.days}>
                            {days
                                .sort(sortDays)
                                .map(({ key, name, state, date }) => (
                                    <TimelineDay
                                        key={name}
                                        name={name}
                                        state={state}
                                        className={style.day}
                                        onClick={() =>
                                            onDayClicked({
                                                key,
                                                state,
                                                date,
                                            })
                                        }
                                    />
                                ))}
                        </div>
                    </Col>
                </Row>
                <Row>
                    <Col lg={12}>
                        {noEvents && (
                            <div className={style.noEvents}>
                                <video autoPlay loop muted playsInline>
                                    <source
                                        src="/images/eyes.webm"
                                        type="video/webm"
                                    />
                                </video>
                                <h3>I can&apos;t find any events...</h3>
                            </div>
                        )}
                        <div className={style.wrapper} ref={wrapper}>
                            <div
                                className={style.track}
                                ref={track}
                                style={{ height: trackHeight }}>
                                {renderTimelineItem(timelineEvents)}
                            </div>
                            <TimelineTime
                                spaceBetween={spaceBetweenPoints}
                                currentDay={
                                    activeDay &&
                                    moment(activeDay.date, 'DD/MM/YY').isSame(
                                        moment(),
                                        'day',
                                    )
                                }
                            />
                        </div>
                        <p className={style.adjust}>
                            Timezones are adjusted to your local time{' '}
                        </p>
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
