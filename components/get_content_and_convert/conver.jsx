import React from "react";
import { Card, Button } from "react-bootstrap";
import Head from "next/head";
import styles from "./conver.module.sass";

// 全角　　　　　　　　　　　　　　　全角
function textCov(value) {
  let convertvalues = " ";
  convertvalues = value.split("\n");
  console.log(convertvalues);

  // 一番文字数が多いものを代入する
  let MoustlongTextCont = 0;
  for (let index = 0; index < convertvalues.length; index++) {
    if (MoustlongTextCont < convertvalues[index].length) {
      MoustlongTextCont = convertvalues[index].length;
    }
  }
  let retunValue = " ";
  // 一番文字数が多いものを出力する
  console.log(MoustlongTextCont);
  for (let line = 0; line < convertvalues.length; line++) {
    // 文字数の選択のループ
    // retunValue += convertvalues[convertvalues.length - line - 1];

    console.log(
      `convertvalues[convertvalues.length - line  - 1 ] === ${
        convertvalues[convertvalues.length - line - 1]
      }`
    );

    for (let i = 0; i < MoustlongTextCont; i++) {
      retunValue += convertvalues[convertvalues.length - line - 1]
        .toString()
        .substr(i, 1);
      console.log(
        convertvalues[convertvalues.length - line - 1].toString().substr(i, 1)
      );
      convertvalues[convertvalues.length - line - 1];

      // 行の選択のループ
      // console.log(`i = ${i} line = ${line}`);
      // retunValue +=
    }
    retunValue += "\n";
  }
  console.log(`retunValue = ${retunValue}`);

  // substr を使って切り出す

  let retunValueText;
  for (let index = 0; index < convertvalues.length; index++) {
    const element = convertvalues[index];

    for (const value of convertvalues[index]) {
      console.log(`value  = ${value} Line = ${index}`);

      retunValueText += `${value}Line = ${index}\n`;

      // console.log("convertvalues  = " +convertvalues);
    }
  }
  // console.log(`${retunValueText}あか`);
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
