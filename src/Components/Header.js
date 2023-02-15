import React from "react";

export default function Header() {
  return (
    <nav className="header-section">
      <img
        src="/images/meme_logo.png"
        alt="meme logo"
        className="header-logo"
      ></img>
      <h1 className="header-heading">MEME GENERATOR</h1>
      <p className="header-text">All-Time Great Memes</p>
    </nav>
  );
}
