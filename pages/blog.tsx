import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import React from "react";

function BlogHome() {

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