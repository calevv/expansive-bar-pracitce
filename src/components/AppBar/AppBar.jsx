import React, { useState } from "react";
import styles from "./AppBar.module.css";

const AppBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const toggleSearch = () => {
    setIsOpen((prev) => !prev);
  };
  //setIsOpen(!isOpen);는 버그가 생길 수 있음

  return (
    <div>
      <div className={styles.appbar}>
        <button onClick={toggleSearch}>{isOpen ? "닫기" : "열기"}</button>
      </div>
      <div
        className={
          isOpen
            ? `${styles.expansiveBar} ${styles.active}`
            : styles.expansiveBar
        }
      >
        {isOpen && (
          <div style={{ padding: "16px" }}>
            <input
              type="text"
              placeholder="검색어를 입력하세요"
              style={{ width: "100%" }}
            />
          </div>
        )}
      </div>
    </div>
  );
};

export default AppBar;
