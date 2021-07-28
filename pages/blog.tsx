import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";
import Footer from "../components/footer/footer";
import MetaTags from "../components/meta-tags";
import Toolbar from "../components/toolbar/toolbar";

function BlogHome() {
  return (
    <>
      <MetaTags title="Blog" />
      <Toolbar sticky={true} />
      <section id="page_body">

      </section>
      <Footer />
    </>
  );
}

export async function getStaticProps({ locale }) {
    return {
      props: {
        ...(await serverSideTranslations(locale, ['toolbar', 'blog', 'footer'])),
        // Will be passed to the page component as props
      },
    };
}

export default BlogHome;