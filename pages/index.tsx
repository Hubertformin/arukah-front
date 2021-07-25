import React from 'react'
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import CountDown from '../components/countdown';
import MetaTags from '../components/meta-tags'
import { Toolbar } from '../components/toolbar/toolbar';
import {FaDonate, FaPeopleCarry} from 'react-icons/fa';
import '../styles/Home.module.scss';
import Link from 'next/link';
import Footer from '../components/footer/footer';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import { useTranslation } from 'next-i18next';

function Home() {

  const { t } = useTranslation('home');

  return (
    <>
      <MetaTags title="Welcome" description="Arukah global foundation, home of all places to be" />
      <Toolbar />
      <section className="banner">
        <div className="dark-wrapper">
          <div className="text-container wrapper">
            <h1 className="title">{t('welcome')}</h1>
            <button className="btn">{t('LearnMore')}</button>
          </div>
        </div>
      </section>

      <section id="page_body">
        <section id="upcoming_section">
          <div className="wrapper">
            <div className="header">
              <div className="info">
                <h1 className="title">EDUCATION FOR KUMBA KIDS</h1>
                <div className="action">
                  <div className="date"><FiCalendar />&nbsp;June 14, 2021 - July 05, 2021</div>
                  <div className="location"><FiMapPin />&nbsp;Kumba, Cameroon</div>
                </div>
              </div>
              <div className="countdown">
                <CountDown 
                  date={new Date("2021/08/22 16:49:34")}
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
                <div className="intro">
                  <h1 className="title">{t('aboutThisEvent')}</h1>
                  <p className="subtitle">
                    Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ad alias 
                    consectetur laborum modi laboriosam? Dignissimos suscipit minima 
                    dolorem reprehenderit animi id cumque, adipisci placeat eius. 
                    Quasi ab rem adipisci eos?
                  </p>
                
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
              <img src="/images/about.jpeg" alt="about_arukah" />
            </div>
            <div className="text col-sm-6 py-4 md:py-8">
              <h1 className="title text-2xl font-bold">{t('whoWeAre')}</h1>
              <p>{t('aboutUsText')}</p>
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada dapibus d...
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada dapibus d...
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada dapibus d...
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada dapibus d...
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
              <Link href="/work-with-us/volunteers">
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada dapibus d...
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada dapibus d...
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada dapibus d...
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
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada dapibus d...
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
                  <div className="col-sm-5">
                    <input type="email" placeholder={t('emailAddress')} className="a_input" />
                  </div>
                  <div className="col-sm-5">
                  <input type="text" placeholder={t('firstName')} className="a_input" />
                  </div>
                  <div className="col-sm-2">
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
  return {
    props: {
      ...(await serverSideTranslations(locale, ['common', 'home'])),
      // Will be passed to the page component as props
    },
  };
}

export default Home;

