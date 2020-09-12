import React from "react";

function textCov(value) {
  let convertvalues = null;
  convertvalues = value.split("");
  let retunValue;
  for (const key in convertvalues) {
    retunValue = `${retunValue + convertvalues[key]}\n`;
  }
  console.log(retunValue);

  return `${retunValue}あかさたな`;
}

export default function Converter(props) {
  return <>{textCov(props.value)}</>;
}
