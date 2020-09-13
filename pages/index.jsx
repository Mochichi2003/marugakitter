import Head from "next/head";
import moment from "moment";
import React from "react";
import { Button, Container, Form } from "react-bootstrap";

// import WmIQ65qoWWhcGKf from "../styles/Home.module.scss";
import Link from "next/link";
import styles from "../styles/main.module.sass";
// 自分で作ったcomponentを入れていくところ
import TopHeader from "../components/header";
import Converter from "../components/get_content_and_convert/conver";

function asdfievbeosk() {
  return moment().format("YYYY/MM/DD hh:mm:ss:SSS");
}
class Iputform extends React.Component {
  FormInputValue() {
    setInterval(() => {
      console.log(`${this.state.name}あああああああああああああああ`);
    }, 424);
  }

  constructor(props) {
    super(props);
    this.state = {
      name: "入力するところでえええ",
    };
  }

  handleNameChange(name) {
    this.setState({ name });
  }

  render() {
    let textareaVlue;
    return (
      <>
        <Form className={styles.form}>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>入力するところ</Form.Label>
            <Form.Control
              as="textarea"
              rows="5"
              value={this.state.name}
              onChange={(e) => this.handleNameChange(e.target.value)}
            />
            <p className={styles.white_space}>{this.state.name}</p>
            <Converter className={styles.white_space} value={this.state.name} />
          </Form.Group>
        </Form>
      </>
    );
  }
}

setInterval(asdfievbeosk, 10);

export default function Home() {
  return (
    <div className={styles.container}>
      <Head>
        <link
          rel="apple-touch-icon"
          sizes="180x180"
          href="/favicons/apple-touch-icon.png"
        />

        <link rel="manifest" href="/favicons/site.webmanifest" />
        <link
          rel="mask-icon"
          href="/favicons/safari-pinned-tab.svg"
          color="#5bbad5"
        />
        <meta name="msapplication-TileColor" content="#da532c" />
        <meta name="theme-color" content="#ffffff" />

        <title>丸書きったー</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopHeader />
      {/* <TopHeader /> */}

      <Container className={styles.main}>
        <Iputform />

        <Link href="/post">
          <Button variant="primary" size="lg" block>
            ツイートする
          </Button>
        </Link>
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

// setInterval(Home, 10);
