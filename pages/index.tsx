import React from 'react';
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import CountDown from '../components/countdown';
import MetaTags from '../components/meta-tags';
import Toolbar from '../components/toolbar/toolbar';
import {FaDonate, FaPeopleCarry} from 'react-icons/fa';
import '../styles/Home.module.scss';
import Link from 'next/link';
import Footer from '../components/footer/footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';
import axios from 'axios';
import { getDateString } from '../utils/functions';

function Home({cms, events}) {
  // console.log(cms);

  const { t } = useTranslation('home');

  return (
    <>
      <MetaTags title={t('title')} description={t('aboutUsText')} />
      <Toolbar />
      <section className="banner">
        <div className="dark-wrapper">
          <div className="text-container wrapper">
            <h1 className="title">{cms.home_banner.title}</h1>
            <div className="description">{cms.home_banner.description}</div>
            <Link href="/about">
              <button className="btn">{t('LearnMore')}</button>
            </Link>
          </div>
        </div>
      </section>

      <section id="page_body">
        <section id="upcoming_section">
          <div className="wrapper">
            <div className="header">
              <div className="info mb-6 md:mb-0">
                <h1 className="title">{events[0].title}</h1>
                <div className="action">
                  <div className="date"><FiCalendar />&nbsp;{getDateString(events[0].StartDate)} - {getDateString(events[0].EndDate)}</div>
                  <div className="location"><FiMapPin />&nbsp;{events[0].Location}</div>
                </div>
              </div>
              <div className="countdown">
                <CountDown 
                  date={new Date(events[0].StartDate)}
                  localeText={{
                    days: t('counter.days'),
                    hours: t('counter.hours'),
                    minutes: t('counter.mins'),
                    seconds: t('counter.secs')
                  }} 
                />
              </div>
            </div>
          </div>
          
          <div className="body py-16">
            <div className="wrapper">
              <div className="row">
              <div className="col-sm-6">
                <div className="intro mb-6 md:mb-0">
                  <h1 className="title">{t('aboutThisEvent')}</h1>
                  <p className="subtitle" dangerouslySetInnerHTML={{__html: events[0].description.slice(0, 400) + '..'}}></p>
                
                </div>
              </div>
              <div className="col-sm-6">
                <div className="desc mb-16">
                  <div className="icon px-4">
                    <FaDonate />
                  </div>
                  <div className="text">
                    <h2 className="title">{t('donate.label')}</h2>
                    <p className="subtitle">{t('donate.description')}</p>
                    <Link href="/donate/event-1"><a>{t('donate.action')}</a></Link>
                  </div>
                </div>
                <div className=" desc">
                  <div className="icon px-4">
                    <FaPeopleCarry />
                  </div>
                  <div className="text">
                    <h2 className="title">{t('volunteer.label')}</h2>
                    <p className="subtitle">{t('volunteer.description')}</p>
                    <Link href="/donate/event-1"><a>{t('volunteer.action')}</a></Link>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>
      
        <section id="about" className="wrapper py-8 md:py-24">
          <p className="section-label">{t('aboutUsLabel')}</p>
          <div className="row">
            <div className="picture  py-6 col-sm-6">
              <img src={process.env.NEXT_PUBLIC_API_URL+ cms.about_section.about_image.url} alt="about_arukah" />
            </div>
            <div className="text col-sm-6 py-4 md:py-8">
              <h1 className="title text-2xl font-bold">{t('whoWeAre')}</h1>
              <p className="about-text">{cms.about_section.about_arukah}</p>
            </div>
          </div>
        </section>

        <section id="events_section" className="wrapper py-8 md:py-24">
          <div className="flex justify-center">
            <p className="section-label">{t('ourEventsLabel')}</p>
          </div>
          <div className="row events-list">
            <div className="col-sm-3">
              <img src="/images/event-one.png" alt="" />
              <div className="meta-info">
                  <div className="date"><FiCalendar />&nbsp;July 20, 2021</div>
                  <div className="location"><FiMapPin />&nbsp;Kumba, Cameroon</div>
              </div>
              <h2 className="title">EDUCATION FOR KUMBA KIDS</h2>
              <p className="description">
                Arukah Global Foundation is working to ensure that every child receives a good quality 
                education...
              </p>
              <Link href="/events/1">
                <a>{t('learnMore')}</a>
              </Link>
            </div>
            <div className="col-sm-3">
              <img src="/images/event-two.jpeg" alt="" />
              <div className="meta-info">
                  <div className="date"><FiCalendar />&nbsp;July 20, 2021</div>
                  <div className="location"><FiMapPin />&nbsp;Kumba, Cameroon</div>
              </div>
              <h2 className="title">YELLOW FEVER VACCINATION</h2>
              <p className="description">
                Yellow fever (YF) outbreaks continue, have expanded into new areas and threaten large populations...
              </p>
              <Link href="/events/1">
                <a>{t('learnMore')}</a>
              </Link>
            </div>
            <div className="col-sm-3">
              <img src="/images/event-three.jpeg" alt="" />
              <div className="meta-info">
                  <div className="date"><FiCalendar />&nbsp;July 24, 2021</div>
                  <div className="location"><FiMapPin />&nbsp;Kumba, Cameroon</div>
              </div>
              <h2 className="title">MALARIA CAMPAIGN</h2>
              <p className="description">
                In 2019, nearly half of the world's population was at risk of malaria. Most malaria cases...
              </p>
              <Link href="/events/1">
                <a>{t('learnMore')}</a>
              </Link>
            </div>
            <div className="col-sm-3">
              <img src="/images/event-four.jpeg" alt="" />
              <div className="meta-info">
                  <div className="date"><FiCalendar />&nbsp;July 30, 2021</div>
                  <div className="location"><FiMapPin />&nbsp;Kumba, Cameroon</div>
              </div>
              <h2 className="title">HELPING ORPHANS</h2>
              <p className="description">
                Arukah is committed to providing hope, health and security to abused, abandoned and neglected children...
              </p>
              <Link href="/events/1">
                <a>{t('learnMore')}</a>
              </Link>
            </div>
          </div>
        </section>

        <section id="volunteer_section">
          <div className="dark-cover py-8 md:py-16">
            <div className="card-box">
              <h1 className="title">{t('becomeAVolunteer')}</h1>
              <p className="description">{t('becomeAVolunteerText')}</p>
              <Link href="/work-with-us/">
                <button className="btn action">{t('joinUsNow')}</button>
              </Link>
            </div>
          </div>
        </section>

        <section id="news_section" className="wrapper py-8 md:py-24">
          <div className="flex justify-center">
            <p className="section-label">{t('arukahNews')}</p>
          </div>
          <div className="row events-list">
            <div className="col-sm-3">
              <img src="/images/news-one.jpeg" alt="" />
              <div className="meta-info">
                  <div className="date"><FiCalendar />&nbsp;July 20, 2021</div>
              </div>
              <p className="description">
                Advanced technologies have been used to solve a long-standing mystery about why some...
              </p>
              <Link href="/events/1">
                <a>{t('learnMore')}</a>
              </Link>
            </div>
            <div className="col-sm-3">
              <img src="/images/news-two.jpeg" alt="" />
              <div className="meta-info">
                  <div className="date"><FiCalendar />&nbsp;July 20, 2021</div>
              </div>
              <p className="description">
                A multinational research group has been the first to show the excellent activity...
              </p>
              <Link href="/events/1">
                <a>{t('learnMore')}</a>
              </Link>
            </div>
            <div className="col-sm-3">
              <img src="/images/news-three.jpeg" alt="" />
              <div className="meta-info">
                  <div className="date"><FiCalendar />&nbsp;July 24, 2021</div>
              </div>
              <p className="description">
                An oral prodrug developed by a team of scientists led by Binghe Wang...
              </p>
              <Link href="/events/1">
                <a>{t('learnMore')}</a>
              </Link>
            </div>
            <div className="col-sm-3">
              <img src="/images/news-four.jpeg" alt="" />
              <div className="meta-info">
                  <div className="date"><FiCalendar />&nbsp;July 30, 2021</div>
              </div>
              <p className="description">
                A new study has been published in Science Advances that exploits proteomics ...
              </p>
              <Link href="/events/1">
                <a>{t('learnMore')}</a>
              </Link>
            </div>
          </div>
        </section>

        <section id="news_letters" className="bg-gray-400">
          <div className="wrapper py-6">
            <div className="row">
              <div className="col-sm-4">
                <h2 className="text-xl font-bold capitalize">{t('subscribeToNewsLetters')}</h2>
              </div>
              <div className="col-sm-8">
                <div className="row">
                  <div className="col-sm-5 mb-4 md:mb-0">
                    <input type="email" placeholder={t('emailAddress')} className="a_input" />
                  </div>
                  <div className="col-sm-5 mb-4 md:mb-0">
                  <input type="text" placeholder={t('firstName')} className="a_input" />
                  </div>
                  <div className="col-sm-2 mb-6 md:mb-0">
                    <button className="btn capitalize">{t('submit')}</button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>
      </section>

      <Footer/>

    </>
  )
}

export async function getStaticProps({ locale }) {
  const isoDate = new Date().toISOString();
  // get cms content
  // get events sorted by date
  const [cms_req, events_req] = await Promise.all([
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/home-page?_locale=${locale}`),
    axios.get(`${process.env.NEXT_PUBLIC_API_URL}/events?StartDate_gt=${isoDate}&_sort=StartDate:ASC`)
  ]);
  return {
    props: {
      ...(await serverSideTranslations(locale, ['home', 'toolbar'])),
      cms: cms_req.data,
      events: events_req.data
      // Will be passed to the page component as props
    },
  };
}

export default Home;

