import React from "react";

const floatingnavbar = () => {
  return (
    <div className="navigation">
      <a href="index.html#Home" className="logoxdc">
        <img src="icons/Frame 2 (1).svg" alt="" />
      </a>
      <div className="nav">
        <a href="#Home">Home</a>
        <a href="contact.html">Contact </a>
        <a href="Dev.html#GuessingGame">Dev </a>
      </div>
    </div>
  );
};

export default floatingnavbar;
