import { HeroHeader } from '../components/hero-header/hero-header';
import Layout from '../components/layout/layout';
import style from './team.module.scss';
import React from 'react';
import { Grid, Row } from 'react-flexbox-grid';
import Logo from '../../static/logo.png';


const Statement = () => {




    return (
        <Layout>
            <HeroHeader height="0" style={{ paddingBottom: '20vw' }}>
                <h1 className={style.title}>Statement on the Status of HackTheMidlands 8.0  📢</h1>
            </HeroHeader>
            <section className={style.team}>
                <Grid fluid>
                    <Row>
                        <div>
                            <p>Hey Everyone! 🦄 </p>
                            <p>
                                We’re putting this out to give y’all an update about HackTheMidlands 8.0, and the future of HackTheMidlands on the whole. In advance, we know this isn’t the same kind of peppy and upbeat message we love to put out here at HackTheMidlands, but we want to be as candid and transparent as possible with everyone who has made HackTheMidlands so awesome over the last eight years.
                            </p>
                            <p>
                                We started HackTheMidlands with the dream of putting together a super chill and welcoming event that was open to anyone - not just university students - following on from some incredible experiences that we, as organisers, had at similar events like Hack24 and HackTheHolidays. Since we started, we have not only put on 7 great hackathons, and navigated the difficulties of running online during the pandemic, but also had the incredible opportunity to watch some of our attendees grow year-to-year, and delight each and every one of you with wacky antics, werewolf, code in the dark, and silly little squeaky rubber ducks. We wouldn’t change it for the world.
                            </p>
                            <p>
                                Unfortunately since we started back in 2016, things have changed. The cost of putting on a hackathon has ballooned, and the recent freeze in hiring in tech has meant that community events across the spectrum - from meetups to conferences, and everything in between, are feeling the squeeze in getting sponsorship. Despite our best efforts this year, and reaching out to hundreds of potential sponsors, we don’t even have a third of what we’d need to run in December. It’s because of this, and a few other factors we’ll go through in a second, that <span style={{ fontWeight: "bold" }}>we have - with a heavy heart - made the decision to cancel HackTheMidlands 8.0</span> ☔
                            </p>
                            <p>
                                To those of you that have already grabbed tickets, and the wonderful sponsors that have already reached out to support us - thank you so much. We wouldn’t have ever been able to do what we have without you over the years, and we’re immensely grateful for that. HackTheMidlands is, and always will be, a community made up of all of the fantastic people that get involved in all capacities 💖
                            </p>
                            <p>
                                Cancelling the event isn’t a decision that we’ve taken lightly, but we can’t in good conscience put on an event that compromises that quality, safety, and delight that we’ve strove to deliver to y’all since the beginning. Further, we felt that it was important that we make this decision now in order to minimise the disruption to everyone involved, well in advance of the event.
                            </p>
                            <p>
                                This isn’t the end for HackTheMidlands though! We’re really happy to announce that ✨ <span style={{ fontWeight: "bold" }}> we’ll be looking at evolving HackTheMidlands </span> ✨, with the intention of putting on smaller hackathons and similar events with that same chill vibe and welcoming environment that we’ve tried to create in the past. Some of these will be similar, whilst we imagine some of these might be a little more outside the box.
                            </p>
                            <p>
                                Not only that, but we’re super excited to announce that we’ll be looking to provide support for events in the local space, as well as sharing our experiences to wider hacker/events communities. Since launching in 2016, we’ve been fortunate to work with some fantastic partners, grow our own supply of equipment and assets for running events, and learned a tremendous amount along the way. We really hope that these can play just a small part in making other events that little bit more delightful. Expect more news on this in the coming weeks and months - we’ll keep y’all updated 💖
                            </p>
                            <p>
                                Thanks again to everyone that has been a part of our wonderful community thus far - we can’t wait to see what you (and us) all get up to in the coming years, and it’d be a delight to have y’all along for the ride 🎉
                            </p>
                            <p>
                                All the best, and we look forward to seeing all of you at stuff we get up to in the future - keep in touch!
                            </p>
                            <p>
                                <div style={{display: "flex"}}> 
                                    <span>                                   
                                        <img
                                            src={Logo}
                                            alt="HackTheMidlands logo"
                                            className={style.logo}
                                            style={{width:'90px', margin: "5px"}}
                                        />
                                    </span>
                                    <span style={{ fontWeight: "bold", marginTop: "25px", marginLeft: "15px" }}> Tom, Liam, Helena, and the HackTheMidlands Team 💖 </span>
                                </div>
                            </p>
                        </div>
                    </Row>
                </Grid>
            </section>
        </Layout>
    );
};

export default Statement;
