import axios from "axios";
import Link from "next/link";
import React from "react";
import { FiCalendar, FiMapPin } from "react-icons/fi";
import Footer from "../../components/footer/footer";
import MetaTags from "../../components/meta-tags";
import Toolbar from "../../components/toolbar/toolbar";
import '../../styles/EventsHome.module.scss';
import STRINGS from '../../strings';
import { useState } from "react";
import { useEffect } from "react";
import { getDateString } from "../../utils/functions";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import { useTranslation } from "next-i18next";

function EventsHome({_events}) {

    const [events, setEvents] = useState([]);
    const {t} = useTranslation('toolbar');

    useEffect(() => {
        console.log(_events);
        if (_events.length) {
            setEvents([..._events]);
        }
    }, []);

    return(
        <>
        <MetaTags title="Events" />
        <Toolbar sticky={false} />
        <section id="banner">
            <div className="dark-overlay">
                <div className="wrapper">
                    <p className="section-label">{t('events')}</p>
                </div>
            </div>
        </section>

        <section id="page_body" className="wrapper py-8 md:py-16">
            <div className="row">
                {
                    events.map(event => {
                        return(
                            <div key={"col-" + event._id} className="col-sm-4">
                                <div className="events-card" key={"card" + event._id}>
                                    <img src={process.env.NEXT_PUBLIC_API_URL + event.CoverPhoto.url}  key={"evt-img-" + event._id} alt="" />
                                    <div className="content" key={"content" + event._id}>
                                        <div className="meta-info" key={"meta-info" + event._id}>
                                            <div className="date" key={"cal-icon" + event._id}><FiCalendar />&nbsp;{getDateString(event.StartDate)}</div>
                                            <div className="location" key={"loc-icon" + event._id}><FiMapPin />&nbsp;{event.Location}</div>
                                        </div>
                                        <Link href={`/events/${event._id}`} key={"link-" + event._id}>
                                            <a className="title" key={"link-title-" + event._id}>{event.title}</a>
                                        </Link>
                                        <div className="description" key={"description" + event._id} dangerouslySetInnerHTML={{__html: event.description}}></div>
                                        <div className="action" key={"action-" + event._id}>
                                            <Link href={`/events/${event._id}`} key={"action-link-" + event._id}>
                                                <button className="btn-outline btn-primary" key={"action-btn" + event._id}>Learn more</button>
                                            </Link>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                }
            </div>
        </section>

        <Footer />

        </>
    );
}

export async function getStaticProps({ locale }) {
    // get list of events
    let events;
    try {
        events = await (await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/events`)).data;
    } catch (e) {
        console.log(e);
        events = {}
    }

    // console.log(events);

    return {
        props: {
            _events: events,
            ...(await serverSideTranslations(locale, ['toolbar', 'footer'])),
        }
    }
}

export default EventsHome;