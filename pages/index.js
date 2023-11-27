import Head from 'next/head'
import Header from '@components/Header'
import Footer from '@components/Footer'

export default function Home() {
  return (
    const pdfPath = '/path/to/yourfile.pdf';
    <div className="container">
      <Head>
        <title>Next.js Starter!</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main>
        <Header title="Welcome to my app!" />
        <p className="description">
          Get started by editing <code>pages/index.js</code>
        </p>
      <iframe
          src={pdfPath}
          width="100%"
          height="600px"
          style={{ border: 'none' }}
        />
      </main>

      <Footer />
    </div>
  )
}
