import Head from "next/head";
import moment from "moment";
import React from "react";
import { Button, Container } from "react-bootstrap";
import styles from "../styles/Home.module.css";
// import WmIQ65qoWWhcGKf from "../styles/Home.module.scss";

function Nowtime() {
  return (
    <p>
      {moment().format("YYYY/MM/DD hh:mm:ss:SSS")}
      asdddddddddddddddddddd
    </p>
  );
}

function asdfievbeosk() {
  return moment().format("YYYY/MM/DD hh:mm:ss:SSS");
}
function Clocck() {
  return (
    <div>
      <h1>Hello, world!</h1>
      <h2>
        Now time is
        {asdfievbeosk()}
      </h2>
    </div>
  );
  // render() {
  //   <div>
  //     <h1>Hello, world!</h1>
  //     <h2>
  //       It is
  //       {moment().format("YYYY/MM/DD hh:mm:ss")}
  //     </h2>
  //   </div>;
  // }
}

setInterval(asdfievbeosk, 10);

class Clock extends React.Component {
  constructor(props) {
    super(props);
    this.state = { date: this.nowtime() };
  }

  componentDidMount() {
    this.timerID = setInterval(() => this.tick(), 10);
  }

  nowtime() {
    return moment().format("YYYY/MM/DD hh:mm:ss:S");
  }

  componentWillUnmount() {
    clearInterval(this.timerID);
  }

  tick() {
    this.setState({
      date: this.nowtime(),
    });
  }

  render() {
    return (
      <div>
        <h1>Hello, world!</h1>
        <h2>
          Now time is
          {this.state.date}
        </h2>
      </div>
    );
  }
}

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />
        <link
          rel="stylesheet"
          href="https://maxcdn.bootstrapcdn.com/bootstrap/4.5.0/css/bootstrap.min.css"
          integrity="sha384-9aIt2nRpC12Uk9gS9baDl411NQApFmC26EwAOH8WgZl5MYYxFfc+NcPb1dKGj7Sk"
          crossOrigin="anonymous"
        />
        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <title>HEY SEY JAPAN</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Container className={styles.main}>
        <Nowtime />
        <Clocck />
        <Clock />
        <Button variant="primary" size="lg" block>
          ボタンだぞー
        </Button>
      </Container>

      <footer className={styles.footer}>
        <a
          href="https://vercel.com?utm_source=create-next-app&utm_medium=default-template&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by
          <img src="/vercel.svg" alt="Vercel Logo" className={styles.logo} />
        </a>
      </footer>
    </div>
  );
}

setInterval(Home, 10);
