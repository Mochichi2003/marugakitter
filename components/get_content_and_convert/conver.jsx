import React from "react";
import { Card, Button } from "react-bootstrap";
import Head from "next/head";
import styles from "./conver.module.sass";

function textCov(value) {
  let convertvalues = " ";
  convertvalues = value.split("\n");
  console.log(convertvalues);
  let retunValue = "🤔";

  let retunValueText;
  for (let index = 0; index < convertvalues.length; index++) {
    const element = convertvalues[index];

    for (const value of convertvalues[index]) {
      console.log(`value  = ${value} Line = ${index}`);

      retunValueText += `${value }Line = ${index}\n`;

      // console.log("convertvalues  = " +convertvalues);
    }
  }
  console.log(`${retunValueText}あか`);
  // console.log(retunValue);

  return `${convertvalues}`;
}

export default function Converter(props) {
  return (
    <>
      {/* <p className={styles.texttoindention}>{textCov(props.value)}</p> */}
      <Head>
        <script
          async
          src="https://platform.twitter.com/widgets.js"
          charset="utf-8"
        />
      </Head>
      <Card
        // bg={variant.toLowerCase()}
        bg="light"
        // key={idx}
        // // text={variant.toLowerCase() === "light" ? "dark" : "white"}
        style={{ "max-width": "40rem", margin: "0 auto" }}
        className="mb-2"
      >
        <Card.Header>ツイート内容</Card.Header>
        <Card.Body>
          {/* <Card.Title>ツイート内容</Card.Title> */}
          <Card.Text
            className={`${styles.texttoindention} ${styles.card_text}`}
          >
            {textCov(props.value)}
          </Card.Text>
          <a
            className={styles.ButtonLink}
            style={{ "text-decoration": "none" }}
            href={`${
              "https://twitter.com/intent/tweet?" + "hashtags="
            }${encodeURIComponent("縦書きなのだ")}&text=${encodeURIComponent(
              `${textCov(props.value)}\nhttps://twitter.com/home`
            )}`}
          >
            <Button
              variant="primary"
              size="lg"
              block
              className={styles.ButtonLink}
            >
              ツイートする
            </Button>
            {/* {`${props.value}をツイートする`} */}
          </a>
        </Card.Body>
      </Card>

      {/* <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      /> */}
    </>
  );
}
