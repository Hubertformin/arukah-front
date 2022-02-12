import axios from "axios";
import { serverSideTranslations } from "next-i18next/serverSideTranslations";
import '../../styles/BlogDetail.module.scss';
import React from "react";
import Footer from "../../components/footer/footer";
import MetaTags from "../../components/meta-tags";
import Toolbar from "../../components/toolbar/toolbar";

function BlogDetail({article}) {
    console.log(article)
  return (
    <>
      <MetaTags title={article.title || 'Blog'} />
      <Toolbar sticky={false} />
      <section id="page_body">
          <img id="cover_image" src={process.env.NEXT_PUBLIC_API_URL + article.coverImage.url } alt="" />
        <section id="article_content">{article.content}</section>
      </section>
      <Footer />
    </>
  );
}

export async function getServerSideProps({ locale, params }) {
    try {

        const article_req = await axios.get(`${process.env.NEXT_PUBLIC_API_URL}/blog/${params.id}`);

        return {
            props: {
                ...(await serverSideTranslations(locale, ['toolbar', 'blog', 'footer'])),
                // Will be passed to the page component as props
                article: article_req.data
            },
        };
    } catch (e) {
        return {
            props: {
                ...(await serverSideTranslations(locale, ['toolbar', 'blog', 'footer'])),
                // Will be passed to the page component as props
                article: null
            },
        };
    }
}

export default BlogDetail;