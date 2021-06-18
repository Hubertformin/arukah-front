import React, { useEffect } from 'react';
import {FiChevronDown, FiFacebook, FiMail, FiPhone, FiTwitter} from 'react-icons/fi'
import ActiveLink from '../active-link';
import './Toolbar.module.scss';

export function Toolbar() {

    const [scrolled,setScrolled]=React.useState(false);
    const handleScroll=() => {
        const offset=window.scrollY;
        if(offset > 200 ){
          setScrolled(true);
        }
        else{
            setScrolled(false);
        }
    }

    useEffect(() => {
        window.addEventListener('scroll',handleScroll)
    }, []);

    return (
        <aside id="navigation" className={scrolled ? 'scrolled' : ''}>
            <div className="info">
                <div className="wrapper flex justify-between">
                    <p className="info-text">Welcome to Arukah</p>
                    <div className="icons">
                        <ul>
                            <li><FiMail />&nbsp;info@arukahglobal.org</li>
                            <li><FiPhone />&nbsp;(602) 56 78 94</li>
                            <li><FiFacebook /></li>
                            <li><FiTwitter /></li>
                        </ul>
                    </div>
                </div>
            </div>
            <nav id="nav_bar">
                <div className="wrapper nav">
                    <ul className="brand-links">
                        <li className="brand">
                            <a href="/" className="brand">
                                <img src="/images/logo.png" />
                            </a>
                        </li>
                    </ul>
                    <ul className="links">
                        <li>
                            <ActiveLink href="/about">
                                <a>About</a>
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink href="/events">
                                <a>Events</a>
                            </ActiveLink>
                        </li>
                        <li>
                            <div className="dropdown">
                                <a>Work with us&nbsp;<FiChevronDown /></a>
                                <ul className="dropdown-content">
                                    <li>
                                        <ActiveLink href="/careers">
                                            <a className="active">Careers</a>
                                        </ActiveLink>
                                    </li>
                                    <li>
                                        <ActiveLink href="/volunteers">
                                            <a>Volunteers</a>
                                        </ActiveLink>
                                    </li>
                                </ul>
                            </div>
                        </li>
                        <li>
                            <ActiveLink href="/contact-us">
                                <a>Contact Us</a>
                            </ActiveLink>
                        </li>
                        <li>
                            <button>
                                Donate
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </aside>
    );
}