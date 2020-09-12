import React from "react";
import Link from "next/link";
import { Container } from "react-bootstrap";
import styles from "./Header.module.scss";

export default function TopHeader() {
  return (
    <div className={styles.topbar}>
      <Container>
        <Link href="/" className={styles.backtohome}>
          {/* <a> */}
          <p className={styles.home}>Home</p>
          {/* </a> */}

          {/* <Home2 className={styles.backtohomeicon} size="20" color="#f00" /> */}
        </Link>
      </Container>

      {/* <main>{children}</main> */}
    </div>
  );
}
