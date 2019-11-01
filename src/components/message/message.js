import React from "react";
import { connect } from "react-redux";

import "../../App.css";

class Message extends React.Component {
  render() {
    return (
      <div id={this.props.message.id} className="mess-style">
        {this.props.message.title}
      </div>
    );
  }
}

export default connect()(Message);
//
//
