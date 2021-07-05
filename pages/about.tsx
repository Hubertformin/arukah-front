import React from 'react';
import MetaTags from '../components/meta-tags';
import { Toolbar } from '../components/toolbar/toolbar';

function About() {
    return(
        <>
            <MetaTags title="About Us" />
            <Toolbar sticky={false} />
            <section id="banner">
                <div className="dark-overlay">
                    <div className="wrapper">
                        <p className="section-label">ABOUT US</p>
                    </div>
                </div>
            </section>

            <section id="page_body" className="wrapper">

            </section>
        </>
    );
}

export default About;