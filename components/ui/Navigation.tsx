import React from "react";

const Navigation = () => {
  return (
    <div>
      <div className="navigation flex justify-between items-center text-2xl">
        <a href="index.html#Home" className="logoxdc">
          <img src="icons/Frame 2 (1).svg" alt="img" />
        </a>
        <div className=" nav">
          <a className=" font-mono" href="/app">
            Home
          </a>
          <a className=" font-mono" href="contact.html">
            Contact{" "}
          </a>
          <a className=" font-mono" href="Dev.html#GuessingGame">
            Dev{" "}
          </a>
        </div>
        <div className="w-1"></div>
      </div>
    </div>
  );
};

export default Navigation;
