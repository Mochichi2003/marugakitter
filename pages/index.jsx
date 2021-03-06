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
      name: "",
    };
  }

  handleNameChange(name) {
    this.setState({
      name,
    });
  }

  render() {
    let textareaVlue;
    return (
      <>
        <Form className={(styles.form, "p-1")}>
          <Form.Group controlId="exampleForm.ControlTextarea1">
            <Form.Label>ここに入力すると</Form.Label>
            <Form.Control
              placeholder="ここに入力すると"
              as="textarea"
              rows="5"
              value={this.state.name}
              onChange={(e) => this.handleNameChange(e.target.value)}
            />
            {/* <p className={styles.white_space}>{this.state.name}</p> */}
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

        <meta name="twitter:card" content="summary" />
        <meta name="twitter:site" content="@Mochi_749" />
        <meta name="twitter:creator" content="@Mochi_749" />
        <meta property="og:url" content="https://marugakitter.vercel.app/" />
        <meta property="og:title" content="縦書きくん" />
        <meta
          property="og:description"
          content="入力した文字を縦書きに変換してTweetできるアプリです"
        />
        <meta
          property="og:image"
          content="https://marugakitter.vercel.app/favicons/縦書きったーアイコン.png"
        />

        <title>縦書きくん</title>
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <TopHeader />
      {/* <TopHeader /> */}

      <Container className={styles.main}>
        <Iputform />
      </Container>

      <footer className={styles.footer}>
        <a
          href="https://twitter.com/Mochi_749"
          target="_blank"
          rel="noopener noreferrer"
        >
          Powered by Mochi
        </a>
      </footer>
    </div>
  );
}

// setInterval(Home, 10);
