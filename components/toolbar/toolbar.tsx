import { useTranslation } from 'next-i18next';
import { serverSideTranslations } from 'next-i18next/serverSideTranslations';
import Link from 'next/link';
import React, { useEffect } from 'react';
import {FiChevronDown, FiFacebook, FiMail, FiPhone, FiTwitter} from 'react-icons/fi'
import ActiveLink from '../active-link';
import './Toolbar.module.scss';

function Toolbar({sticky=true}) {

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
            window.addEventListener('scroll',handleScroll)
        }
    }, []);

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
                    </ul>
                    <ul className="links">
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
                        <li className="dropdown-container">
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
                        </li>
                        <li>
                            <ActiveLink href="/contact-us">
                                <a>{t('contactUs')}</a>
                            </ActiveLink>
                        </li>
                        <li>
                            <button>
                            {t('donate')}
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </section>
    );
}

export default Toolbar;