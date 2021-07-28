import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import Footer from "../components/footer/footer";
import Toolbar from "../components/toolbar/toolbar";

function CareersPage() {
    return (
        <>
            <Toolbar sticky={false} />
            <section id="banner">
                <div className="dark-overlay">
                    <div className="wrapper">
                        <p className="section-label">CAREERS</p>
                    </div>
                </div>
            </section>
            <section id="page_body"></section>
            <Footer />
        </>
    );
}

export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ['toolbar', 'careers', 'footer'])),
        // Will be passed to the page component as props
      },
    };
}

export default CareersPage;