import React from "react";
import styles from "./AlertMessage.module.css";

const AlertMessage = () => {
  return (
    <div className={styles.alertCover}>
      <p className={styles.alertText}>Contact is already in list!</p>
    </div>
  );
};
export default AlertMessage;
