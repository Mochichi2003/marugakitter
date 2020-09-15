import React from "react";
import { Card, Button, Form } from "react-bootstrap";
import Head from "next/head";
import { locale } from "moment";
import { useRouter } from "next/router";
import styles from "./conver.module.sass";

// 全角　　　　　　　　　　　　　　　全角
function textCov(value) {
  let convertvalues = " ";
  let retunValue = " ";
  value = value.replace(/ー/g, "｜");
  convertvalues = value.split("\n");
  // console.log(convertvalues);

  // 一番文字数が多いものを代入する
  let MoustlongTextCont = 0;
  for (let index = 0; index < convertvalues.length; index++) {
    if (MoustlongTextCont < convertvalues[index].length) {
      MoustlongTextCont = convertvalues[index].length;
    }
  }
  convertvalues = convertvalues.reverse();

  for (let i = 0; i < MoustlongTextCont; i++) {
    // console.log(`substr  = ${convertvalues[0].substr(i, 1)}`);

    for (let index = 0; index < convertvalues.length; index++) {
      // console.log(index);
      // console.log(
      //   `わあああああああ   =  ${
      //     convertvalues[index].substr(i, 1) ||
      //     "びゃあああああああああああああああああ"
      //   }`
      // );
      retunValue += convertvalues[index].substr(i, 1) || "　";
      // for (let index = 0; index < array.length; index++) {
      //   const element = array[index];

      // }
    }
    retunValue += "\n";
  }

  for (let index = 0; index < convertvalues.length; index++) {
    // console.log(index);
    // console.log(convertvalues[index]);
    // for (let index = 0; index < array.length; index++) {
    //   const element = array[index];
    // }
  }

  // 一番文字数が多いものを出力する
  // console.log(`retunValue = ${retunValue}`);
  retunValue = retunValue.slice(1);
  return `${retunValue}`;
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
        style={{ "max-width": "40rem", margin: "20px auto" }}
        className="mb-2"
      >
        <Card.Header>ここに変換されたのが出てくるよ</Card.Header>
        <Card.Body>
          {/* <Card.Title>ツイート内容</Card.Title> */}
          <Card.Text
            className={`${styles.texttoindention} ${styles.card_text}`}
          >
            {/* <Form.Control as="textarea" rows="5" value={textCov(props.value)}/> */}
            <div className={styles.resultView} >
              {textCov(props.value)}
            </div>
          </Card.Text>
          <a
            className={styles.ButtonLink}
            style={{ "text-decoration": "none" }}
            href={`${
              "https://twitter.com/intent/tweet?" + "hashtags="
            }${encodeURIComponent("縦書きくん")}&text=${encodeURIComponent(
              `${`${textCov(props.value)}https://marugakitter.vercel.app/`}\n`
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
        src="https://platform.twitter.com/widgets.js"｜
        charset="utf-8"
      /> */}
    </>
  );
}
