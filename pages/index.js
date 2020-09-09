import Head from "next/head";
import styles from "../styles/Home.module.css";
import sass from "../styles/home.module.sass";
import moment from 'moment'

function Nowtime() {
  return (

    <p>
      {moment().format('YYYY/MM/DD hh:mm:ss:SSS')}
      asdddddddddddddddddddd
    </p>

  )
}
class Clocck extends React.Component {
  render() {
    <div>
      <h1>Hello, world!</h1>
      <h2>It is {moment().format('YYYY/MM/DD hh:mm:ss')}.</h2>
    </div>

  }
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>

        <link rel="apple-touch-icon" sizes="180x180" href="/favicons/apple-touch-icon.png" />


        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link rel="mask-icon" href="/favicons/safari-pinned-tab.svg" color="#5bbad5" />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <title>HEY SEY JAPAN</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <main className={styles.main}>
        <Nowtime />
      </main>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
{" "}
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

setInterval(Home, 10);