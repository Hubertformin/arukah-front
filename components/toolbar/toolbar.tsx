import { useTranslation } from 'next-i18next';
import SlideToggle from "react-slide-toggle";
import Link from 'next/link';
import React, { useEffect } from 'react';
import {FiChevronDown, FiFacebook, FiMail, FiMenu, FiPhone, FiTwitter} from 'react-icons/fi'
import ActiveLink from '../active-link';
import './Toolbar.module.scss';
import { useState } from 'react';

function Toolbar({sticky=true}) {

    const [toggleMenu, setToggleMenu] = useState(false);

    const { t } = useTranslation('toolbar');

    const [scrolled, setScrolled]=React.useState(false);
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
        if (sticky) {
            window.addEventListener('scroll',handleScroll);
        }
    }, []);

    function toggleMenuFn() {
        setToggleMenu(!toggleMenu)
    }

    return (
        <section id="navigation" className={(scrolled || !sticky) ? 'scrolled' : ''}>
            <div className="info">
                <div className="wrapper flex justify-between">
                    <p className="info-text">{t('title')}</p>
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
                        <li>
                            <Link href="/">
                                <div className="brand">
                                <img src="/images/logo_250.png" />
                                <div className="brand-name">
                                    <h2 className="title">Arukah</h2>
                                    <h4 className="subtitle">GLOBAL FOUNDATION</h4>
                                </div>
                                </div>
                            </Link>
                        </li>
                        <li className="menu md:hidden" onClick={toggleMenuFn}>
                            <FiMenu />
                        </li>
                    </ul>
                    <ul className="links">
                        <NavLinks t={t} />
                    </ul>
                </div>
                <SlideToggle 
                        toggleEvent={toggleMenu}
                        collapsed={true}
                    >
                        {({ setCollapsibleElement }) => (
                            <div className="my-collapsible">
                                <ul id="sm_links"
                                    className="my-collapsible__content"
                                    ref={setCollapsibleElement}
                                >
                                    <NavLinks t={t} />
                                </ul>
                            </div>
                        )}
                    </SlideToggle>
            </nav>
        </section>
    );
}

function NavLinks({t}) {
    return(
        <>
        <li>
            <ActiveLink href="/about">
                <a>{t('about')}</a>
            </ActiveLink>
        </li>
        <li>
            <ActiveLink href="/events">
                <a>{t('events')}</a>
            </ActiveLink>
        </li>
        <li>
            <ActiveLink href="/work-with-us">
                <a>{t('workWithUs')}</a>
            </ActiveLink>
        </li>
        <li>
            <ActiveLink href="/volunteers">
                <a>{t('volunteers')}</a>
            </ActiveLink>
        </li>
        {/* <li>
            <ActiveLink href="/contact-us">
                <a>{t('contactUs')}</a>
            </ActiveLink>
        </li> */}
        <li>
            <button>
                {t('donate')}
            </button>
        </li>
        </>
    );
}

export default Toolbar;

{/* <li className="dropdown-container">
                            <div className="dropdown">
                                <a>{t('workWithUs')}&nbsp;<FiChevronDown /></a>
                                <ul className="dropdown-content">
                                    <li>
                                        <ActiveLink href="/careers">
                                            <a className="active">{t('careers')}</a>
                                        </ActiveLink>
                                    </li>
                                    <li>
                                        <ActiveLink href="/volunteers">
                                            <a>{t('volunteers')}</a>
                                        </ActiveLink>
                                    </li>
                                </ul>
                            </div>
                        </li> */}