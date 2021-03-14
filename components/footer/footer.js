import React from "react";

function Footer() {
  var d = new Date().getFullYear();
  return (
    <footer>
      <p>Made by Pedro Trincheiras<span>.</span></p>
      <small>Copyright &copy; {d}, Pedro Trincheiras. All rights reserved.</small>
    </footer>
  );
}

export default Footer;
