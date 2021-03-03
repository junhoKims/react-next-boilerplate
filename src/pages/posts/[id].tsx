import { GetStaticProps, GetStaticPaths } from 'next'
import Head from 'next/head'
import Layout from 'components/Layout'
import Date from 'components/date'
import { getAllPostIds, getPostData } from 'apis/posts'
import utilStyles from 'styles/utils.module.css'

const Post = ({ postData }) => (
  <Layout>
    <Head>
      <title>{postData.title}</title>
    </Head>
    <h1 className={utilStyles.headingXl}>{postData.title}</h1>
    <br />
    <div className={utilStyles.lightText}>
      <Date dateString={postData.date} />
    </div>
  </Layout>
)

export const getStaticPaths: GetStaticPaths = async () => {
  const paths = getAllPostIds()

  return {
    paths,
    fallback: false,
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const postData = getPostData(params.id)

  return {
    props: {
      postData,
    },
  }
}

export default Post
