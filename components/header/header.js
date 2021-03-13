import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import HamburgerMenu from "react-hamburger-menu";
import React from "react";

class Header extends React.Component {
  constructor(props) {
    super(props);
    this.state = { open: false };
  }

  handleClick() {
    this.setState({
      open: !this.state.open,
    });
  }
  render() {
    return (
      <div>
        <header>
          <div className="left">
            <a href="./">Pedro Trincheiras</a>
          </div>
          <div className="right">
            <a className="icon" href="https://github.com/PedroTrincheiras" target="_blank">
              <FontAwesomeIcon icon={faGithub} />
            </a>
            <a className="icon" href="https://www.linkedin.com/in/pedrotrincheiras" target="_blank">
              <FontAwesomeIcon icon={faLinkedin} />
            </a>
            <HamburgerMenu
              className="hmenu"
              isOpen={this.state.open}
              menuClicked={this.handleClick.bind(this)}
              width={30}
              height={30}
              strokeWidth={3}
              rotate={0}
              color="white"
              borderRadius={50}
              animationDuration={0.5}
            />
          </div>
        </header>
        <spam className={this.state.open ? "dropmenu active" : "dropmenu"}>
          <nav>
            <a className={this.state.open ? "active" : ""} href = "#projects" onClick={this.handleClick.bind(this)}>PROJECTS</a>
            <a className={this.state.open ? "active" : ""} href = "#certifications" onClick={this.handleClick.bind(this)}>CERTIFICATIONS</a>
            <a className={this.state.open ? "active" : ""} href = "#skills" onClick={this.handleClick.bind(this)}>SKILLS</a>
            <a className={this.state.open ? "active" : ""} href = "#contacts" onClick={this.handleClick.bind(this)}>CONTACTS</a>
          </nav>
        </spam>
      </div>
    );
  }
}

export default Header;
