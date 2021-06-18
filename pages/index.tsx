import React from 'react'
import { FiCalendar, FiMapPin } from 'react-icons/fi';
import CountDown from '../components/countdown';
import MetaTags from '../components/meta-tags'
import { Toolbar } from '../components/toolbar/toolbar';
import {FaDonate, FaPeopleCarry} from 'react-icons/fa';
import '../styles/Home.module.scss';
import Link from 'next/link';

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

      <aside id="page_body">
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
                <CountDown date={new Date("2021/06/22 16:49:34")} />
              </div>
            </div>
          </div>
          
          <div className="body py-16">
            <div className="wrapper">
              <div className="row">
              <div className="col-sm-6">
                <div className="intro">
                  <h1 className="title">About this event</h1>
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
                    <h2 className="title">Donate</h2>
                    <p className="subtitle">
                      Lorem ipsum dolor sit amet, consectetur adipis purus 
                      efficitur eget. Morbi sagittis mi eros porttitor au.
                    </p>
                    <Link href="/donate/event-1"><a>Donate now</a></Link>
                  </div>
                </div>
                <div className=" desc">
                  <div className="icon px-4">
                    <FaPeopleCarry />
                  </div>
                  <div className="text">
                    <h2 className="title">Volunteer</h2>
                    <p className="subtitle">
                      Lorem ipsum dolor sit amet, consectetur adipis purus 
                      efficitur eget. Morbi sagittis mi eros porttitor au.
                    </p>
                    <Link href="/donate/event-1"><a>Become a Volunteer</a></Link>
                  </div>
                </div>
              </div>
              </div>
            </div>
          </div>
        </section>
      
        <section id="about" className="wrapper py-8 md:py-24">
          <p className="section-label">ABOUT US</p>
          <div className="row">
            <div className="picture  py-6 col-sm-6">
              <img src="/images/about.jpeg" alt="about_arukah" />
            </div>
            <div className="text col-sm-6 py-4 md:py-8">
              <h1 className="title text-2xl font-bold">Who we are</h1>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit. Distinctio, laboriosam in! 
                Consequuntur, dolores praesentium. Aperiam suscipit perspiciatis similique, 
                rem atque, necessitatibus impedit sint, explicabo iste fugit earum 
                laudantium accusamus quo!
              </p>
            </div>
          </div>
        </section>

        <section id="events_section" className="wrapper py-8 md:py-24">
          <div className="flex justify-center">
            <p className="section-label">
              OUR EVENTS
            </p>
          </div>
          <div className="row events-list">
            <div className="col-sm-3">
              <img src="/images/event-one.png" alt="" />
              <div className="meta-info">
                  <div className="date"><FiCalendar />&nbsp;July 20, 2021</div>
                  <div className="location"><FiMapPin />&nbsp;Kumba, Cameroon</div>
              </div>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada dapibus d...
              </p>
              <Link href="/events/1">
                <a>Learn more</a>
              </Link>
            </div>
            <div className="col-sm-3">
              <img src="/images/event-two.jpeg" alt="" />
              <div className="meta-info">
                  <div className="date"><FiCalendar />&nbsp;July 20, 2021</div>
                  <div className="location"><FiMapPin />&nbsp;Kumba, Cameroon</div>
              </div>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada dapibus d...
              </p>
              <Link href="/events/1">
                <a>Learn more</a>
              </Link>
            </div>
            <div className="col-sm-3">
              <img src="/images/event-three.jpeg" alt="" />
              <div className="meta-info">
                  <div className="date"><FiCalendar />&nbsp;July 24, 2021</div>
                  <div className="location"><FiMapPin />&nbsp;Kumba, Cameroon</div>
              </div>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada dapibus d...
              </p>
              <Link href="/events/1">
                <a>Learn more</a>
              </Link>
            </div>
            <div className="col-sm-3">
              <img src="/images/event-four.jpeg" alt="" />
              <div className="meta-info">
                  <div className="date"><FiCalendar />&nbsp;July 30, 2021</div>
                  <div className="location"><FiMapPin />&nbsp;Kumba, Cameroon</div>
              </div>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nam malesuada dapibus d...
              </p>
              <Link href="/events/1">
                <a>Learn more</a>
              </Link>
            </div>
          </div>
        </section>

        <section id="volunteer_section">
          <div className="dark-cover py-8 md:py-16">
            <div className="card-box">
              <h1 className="title">
                BECOME A VOLUNTEER
              </h1>
              <p className="description">
                Lorem ipsum dolor sit amet, consectetur adipiscelit. 
                Nam malesuada dapibus diam, ut fringilla purus efficitur eget imspurings.
              </p>
              <Link href="/work-with-us/volunteers">
                <button className="btn action">
                  JOIN US NOW
                </button>
              </Link>
            </div>
          </div>
        </section>

        <section id="news_section" className="wrapper py-8 md:py-24">
          <div className="flex justify-center">
            <p className="section-label">
              ARUKAH NEWS
            </p>
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
                <a>Learn more</a>
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
                <a>Learn more</a>
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
                <a>Learn more</a>
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
                <a>Learn more</a>
              </Link>
            </div>
          </div>
        </section>

      </aside>

    </>
  )
}
