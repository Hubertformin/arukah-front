import React from 'react';
import {FiFacebook, FiMail, FiPhone, FiTwitter} from 'react-icons/fi'
import ActiveLink from '../active-link';
import './Toolbar.module.scss';

export function Toolbar() {
    return (
        <aside id="navigation">
            <div className="info-title">
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
                    <ul>
                        <li className="brand">
                            <a href="/" className="brand">
                                <img src="/images/logo.png" />
                            </a>
                        </li>
                    </ul>
                    <ul className="links">
                        <li>
                            <ActiveLink href="/about">
                                <a className="active">About</a>
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink href="/events">
                                <a className="active">Events</a>
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink href="/volunteers">
                                <a className="active">Volunteers</a>
                            </ActiveLink>
                        </li>
                        <li>
                            <ActiveLink href="/contact">
                                <a className="active">Contact Us</a>
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