import React from "react";

import "./Nav.scss";

import { BsBook, BsMoon, BsFillMoonFill } from "react-icons/bs";
import { BiChevronDown } from "react-icons/bi";

class Nav extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isHover: false,
    };

    this.onMouseEnterHandler = this.onMouseEnterHandler.bind(this);
    this.onMouseLeaveHandler = this.onMouseLeaveHandler.bind(this);
  }

  onMouseEnterHandler() {
    this.setState({
      isHover: true,
    });
  }

  onMouseLeaveHandler() {
    this.setState({
      isHover: false,
    });
  }

  render() {
    return (
      <div className="container-nav">
        <BsBook className="logo" />
        <div className="left-side">
          <div className="font-selector">
            <p>Serif</p>
            <BiChevronDown className="drop-down" />
          </div>
          <div className="dash"></div>
          <div
            className="dark-mode"
            onMouseEnter={this.onMouseEnterHandler}
            onMouseLeave={this.onMouseLeaveHandler}
          >
            {this.state.isHover ? (
              <div>
                <BsFillMoonFill className="moon" />
              </div>
            ) : (
              <div>
                <BsMoon className="moon-outline" />
              </div>
            )}
          </div>
        </div>
      </div>
    );
  }
}

export default Nav;
