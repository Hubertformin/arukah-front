import React from 'react';
import Toolbar from "../components/toolbar/toolbar";
import Footer from "../components/footer/footer";
import '../styles/DonatePage.module.scss';
import {serverSideTranslations} from "next-i18next/serverSideTranslations";
import {PayPalButtons, PayPalScriptProvider} from '@paypal/react-paypal-js';
import MetaTags from "../components/meta-tags";

const initialOptions = {
    "client-id": "Aat01TXkgTQgjyTqOt46YlbAi3TFj0rbbN5hcoKrmYHTjhKzzEA1ss0JTpHeKzns6lDqlPhwu87K-xG0",
    currency: "USD",
    intent: "capture"
};
// console.log(process.env.NEXT_PUBLIC_PAYPAL_CLIENT_ID);
function DonatePage() {
    return(
        <>
            <MetaTags title={"Donate"} description={"Donate to our cause"} />
            <Toolbar sticky={false} />
            <section id="banner">
                <div className="dark-overlay">
                    <div className="wrapper">
                        <p className="section-label">Donate</p>
                    </div>
                </div>
            </section>
            <section id="page" className="py-10">
                <div className="wrapper">
                    <div className="row">
                        <div className="col-sm-7">
                            <img className="logo" src="/images/logo_250.png" />
                        </div>
                        <div className="col-sm-5">
                            <PayPalScriptProvider options={initialOptions}>
                                <PayPalButtons />
                            </PayPalScriptProvider>
                        </div>
                    </div>
                </div>
            </section>
            <Footer />
        </>
    );
}

export async function getStaticProps({ locale }) {
    return {
        props: {
            ...(await serverSideTranslations(locale, ['toolbar', 'donate', 'footer'])),
            // Will be passed to the page component as props
        },
    };
}

export default DonatePage;
