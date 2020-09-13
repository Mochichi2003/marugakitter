import React from "react";
import styles from "./conver.module.sass";

function textCov(value) {
  let convertvalues = " ";
  convertvalues = value.split("");
  let retunValue;
  for (const key in convertvalues) {
    retunValue = `${retunValue + convertvalues[key]}\n`;
  }
  console.log(retunValue);

  return `${retunValue}あかさたな`;
}

export default function Converter(props) {
  return <p className={styles.texttoindention}>{textCov(props.value)}</p>;
}
