import { useTranslation } from "next-i18next";
import Link from "next/link";
import React from "react";
import { FiMail, FiPhone } from "react-icons/fi";
import './Footer.module.scss';

function Footer() {
    const {t} = useTranslation('footer');

    return (
        <footer id="Footer" className="py-8 md:py-16">
            <div className="wrapper">
                <div className="row">
                    <div className="brand col-sm-3">
                        {/* <h1 className="title">Arukah</h1>
                        <h2 className="subtitle">GLOBAL FOUNDATION</h2> */}
                        <img src="/images/logo_250.png" alt="" />
                    </div>
                    <div className="col-sm-5">
                        <p className="section-label">
                            {t('navigate')}
                        </p>
                        <div className="flex justify-between">
                            <ul className="links">
                                <li>
                                    <Link href=""><a>{t('home')}</a></Link>
                                </li>
                                <li>
                                    <Link href=""><a>{t('events')}</a></Link>
                                </li>
                                <li>
                                    <Link href=""><a>{t('volunteer')}</a></Link>
                                </li>
                            </ul>
                            <ul className="links">
                                <li>
                                    <Link href=""><a>{t('donate')}</a></Link>
                                </li>
                                <li>
                                    <Link href=""><a>{t('privacy')}</a></Link>
                                </li>
                                <li>
                                    <Link href=""><a>{t('termsOfUse')}</a></Link>
                                </li>
                            </ul>
                        </div>
                    </div>
                    <div className="col-sm-4">
                        <p className="section-label">
                        {t('contact')}
                        </p>
                        <ul className="links">
                            <li><a href="/"><FiMail />&nbsp;contact@arukahglobal.com</a></li>
                            <li><a href="/"><FiPhone />&nbsp;+237 689 00 00 00</a></li>
                        </ul>
                    </div>
                </div>

                <div className="copyright py-8">
                    <p className="wrapper">
                    &copy; 2021 ARUKAH GLOBAL FOUNDATION. ALL RIGHTS RESERVED
                    </p>
                </div>
            
            </div>
        </footer>
    )
}

export default Footer;