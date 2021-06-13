import React from 'react'
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import CountDown from '../components/countdown';
import MetaTags from '../components/meta-tags'
import { Toolbar } from '../components/toolbar/toolbar';
import '../styles/Home.module.scss';

export default function Home() {
  return (
    <>
      <MetaTags title="Welcome" description="Arukah global foundation, home of all places to be" />
      <Toolbar />
      <section className="banner">
        <div className="dark-wrapper">
          <div className="text-container wrapper">
            <h1 className="title">
              WE HELP THOUSANDS OF CHILDREN GET ACCESS TO GOOD EDUCATION, 
              NOW WE NEED YOUR HELP.
            </h1>
            <button className="btn">
              LEARN MORE
            </button>
          </div>
        </div>
      </section>

      <section id="page_body" className="wrapper">
        <div id="upcoming_section">
          <div className="header">
            <div className="info">
              <h1 className="title">EDUCATION FOR KUMBA KIDS</h1>
              <div className="action">
                <div className="date"><FiCalendar />&nbsp;June 14, 2021 - July 05, 2020</div>
                <div className="location"><FiMapPin />&nbsp;Kumba, Cameroon</div>
              </div>
            </div>
            <div className="countdown">
              <CountDown date={new Date("2021/06/22 16:49:34")} />
            </div>
          </div>
        </div>
      </section>

    </>
  )
}
