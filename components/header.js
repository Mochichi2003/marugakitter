import React from "react";
import Link from "next/link";
import styles from "./Header.module.scss";

export default function TopHeader() {
  return (
    <div className={styles.topbar}>
      <Link href="./" className={styles.backtohome}>
        ホームに戻る
      </Link>
    </div>
  );
}
