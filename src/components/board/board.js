import React from "react";
import "../../style.css";
import { connect } from "react-redux";
import { getMessage } from "../../store/selectors/selectors";
import { loadMessage } from "../../store/action/cards";

import { Message } from "../message/message";

class Board extends React.Component {
  componentDidMount() {
    this.props.loadMessage();
  }
  render() {
    return (
      <div>
        {this.props.message.map(message => (
          <Message message={message}></Message>
        ))}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { message: getMessage(state) };
}

export default connect(
  mapStateToProps,
  { loadMessage }
)(Board);
//
