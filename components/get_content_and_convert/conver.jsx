import React from "react";
import { Card } from "react-bootstrap";
import Head from "next/head";
import styles from "./conver.module.sass";

function textCov(value) {
  let convertvalues = " ";
  convertvalues = value.split("");
  let retunValue = "🤔";
  for (const key in convertvalues) {
    retunValue = `${retunValue + convertvalues[key]}\n`;
  }
  // console.log(retunValue);

  return `${retunValue.slice(2)}`;
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
        // key={idx}
        // // text={variant.toLowerCase() === "light" ? "dark" : "white"}
        style={{ width: "18rem" }}
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
        </Card.Body>
      </Card>

      <a
        href={`${
          "https://twitter.com/intent/tweet?" + "hashtags="
        }${encodeURIComponent("縦書きなのだ")}&original_referer=${
          location.href
        }&text=${encodeURIComponent(textCov(props.value))}`}
      >
        {`${props.value}をツイートする`}
      </a>
      {/* <script
        async
        src="https://platform.twitter.com/widgets.js"
        charset="utf-8"
      /> */}
    </>
  );
}
// https://twitter.com/intent/tweet?hashtags=%E3%82%8F%E3%81%82%E3%81%82%E3%81%82%E3%81%82%E3%81%84%E3%81%84%E3%81%84%E3%81%84%E3%81%84%2C&original_referer=http%3A%2F%2Flocalhost%3A3300%2F&ref_src=twsrc%5Etfw&related=Mochi_749&text=%E3%81%9F%0A%E3%81%A6%0A%E3%81%8C%0A%E3%81%8D%0A%E3%81%A0%0A%E3%82%88%0A%E3%83%BC%0A%E3%83%BC%0A%E3%83%BC%0A%E3%83%BC%0A%E3%83%BC%0A%E3%83%BC%0A%E3%83%BC%0A%E3%83%BC%0A%E3%83%BC%0A%E3%83%BC%0A%E3%83%BC%0A%E3%83%BC%0A%E3%83%BC%0A%E3%83%BC%0A%E3%83%BC%0A&tw_p=tweetbutton
