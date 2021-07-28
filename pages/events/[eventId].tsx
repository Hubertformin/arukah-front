import axios from "axios";
import Link from "next/link";
import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import Footer from "../../components/footer/footer";
import MetaTags from "../../components/meta-tags";
import Toolbar from "../../components/toolbar/toolbar";
import STRINGS from "../../strings";
import '../../styles/Event.module.scss';
import { getDateString } from "../../utils/functions";

function Event({_event}) {

    const [event, setEvent] = useState({
        title: "",
        CoverPhoto: {url: ""},
        StartDate: "",
        Location: "",
        description: ""

    });

    useEffect(() => {
        setEvent(_event);
    }, []);

    return(
        <>
        <MetaTags title={event.title} />
        <Toolbar sticky={false} />
        <section id="banner">
            <div className="dark-overlay">
                <div className="wrapper">
                    <p className="section-label">{event.title}</p>
                </div>
            </div>
        </section>

        <aside id="page_body" className="wrapper event-body">
            <div className="row">
                <div className="col-sm-8">
                    <div className="tile">
                        <div className="img-cover">
                                <img src={STRINGS.apiURL + event?.CoverPhoto?.url}  alt="" />
                        </div>
                        <div className="action">
                            <div className="meta">
                                <ul>
                                    <li><FiCalendar />&nbsp;{getDateString(event?.StartDate)}</li>
                                    <li><FiMapPin />&nbsp;{event?.Location}</li>
                                </ul>
                            </div>
                            <div className="buttons">
                                <button className="btn">DONATE</button>
                            </div>
                        </div>
                    </div>

                    <section className="article">
                        <h1 className="title">
                            {event?.title}
                        </h1>

                        <div className="content">{event?.description}</div>
                    </section>
                </div>
                <div className="col-sm-4">
                <div className="upcoming-section">
                    <h1 className="section-title">UPCOMING EVENTS</h1>
                    <div className="upcoming-evt-card">
                        <img src="/images/event-four.jpeg" alt="" />
                        <div className="meta-info">
                            <div className="date"><FiCalendar />&nbsp;July 30, 2021</div>
                            <div className="location"><FiMapPin />&nbsp;Kumba, Cameroon</div>
                        </div>
                        <h2 className="title">HELPING ORPHANS</h2>
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada dapibus d...
                        </p>
                        <Link href="/events/1">
                            <a>Learn more</a>
                        </Link>
                    </div>

                    <div className="upcoming-evt-card">
                        <img src="/images/event-three.jpeg" alt="" />
                        <div className="meta-info">
                            <div className="date"><FiCalendar />&nbsp;July 30, 2021</div>
                            <div className="location"><FiMapPin />&nbsp;Kumba, Cameroon</div>
                        </div>
                        <h2 className="title">HELPING ORPHANS</h2>
                        <p className="description">
                            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada dapibus d...
                        </p>
                        <Link href="/events/1">
                            <a>Learn more</a>
                        </Link>
                    </div>
                </div>
                </div>
            </div>

            <div className="help-card">
                <h1 className="title">INTERESTED IN THEIS EVENT?</h1>
                <div className="actions flex space-between">
                    <button className="btn mr-4">DONATE</button>
                    <button className="btn-outline">BECOME A VOLUNTEER</button>
                </div>
            </div>
        </aside>

        <Footer />
        </>
    );
}

export async function getServerSideProps(ctx) {
    try {
        // get event by Id
        const event = await axios.get(`${STRINGS.apiURL}/events/${ctx.params.eventId}`);
        // console.log(event);

        return {
            props: {
                _event: event.data
            }
        }

    } catch (error) {
       console.log(error); 
       return {
           props: {
               _event: null
           }
       }
    }
}

export default Event;