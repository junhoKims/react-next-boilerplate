import { useState, useEffect } from 'react'
import { GetStaticProps } from 'next'
import Link from 'next/link'
import Head from 'next/head'
import { useRouter } from 'next/router'
import Button from '@material-ui/core/Button'
import Layout, { siteTitle } from 'components/Layout'
import Date from 'components/date'
import { getSortedPostsData } from 'apis/posts'
import utilStyles from 'styles/utils.module.css'

const Home = ({ allPostsData, isLoading }) => {
  const router = useRouter()
  const [loading, setLoading] = useState(isLoading)

  useEffect(() => {
    const random = Math.floor(Math.random() * 1000) + 1

    setTimeout(() => setLoading(false), random)
  }, [])

  return (
    <Layout home>
      <Head>
        <title>{siteTitle}</title>
      </Head>
      {loading ? (
        <div>loading</div>
      ) : (
        <section className={`${utilStyles.headingMd} ${utilStyles.padding1px}`}>
          <h2 className={utilStyles.headingLg}>Blog</h2>
          <ul className={utilStyles.list}>
            {allPostsData.map(({ id, date, title }) => (
              <li className={utilStyles.listItem} key={id}>
                <div>{title}</div>
                <small className={utilStyles.lightText}>
                  <Date dateString={date} />
                </small>
                <br />
                <Button
                  variant='contained'
                  color='primary'
                  onClick={() => router.push(`/posts/${id}`)}
                >
                  Hello World
                </Button>
              </li>
            ))}
          </ul>
        </section>
      )}
    </Layout>
  )
}

export const getStaticProps: GetStaticProps<{}> = async () => {
  const allPostsData = getSortedPostsData()
  const isLoading = true

  return {
    props: {
      allPostsData,
      isLoading,
    },
  }
}

export default Home
