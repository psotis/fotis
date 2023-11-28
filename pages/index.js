import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
      <iframe
  
          src={"https://rawcdn.githack.com/psotis/fotis/main/cv.pdf"}
          width="1000px"
          height="700px"
          style={{ border: 'none' }}
        />
      </main>

      <Footer />
    </div>
  )
}
