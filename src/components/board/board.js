import React from "react";

import { connect } from "react-redux";
import { getMessage } from "../../store/selectors/selectors";
import { loadMessage } from "../../store/action/message";

import Message from "../message/message";
import MessageView from "../message/messageView";

class Board extends React.Component {
  state = {
    showMessageView: false
  };
  componentDidMount() {
    this.props.loadMessage();
  }
  showFullMessage = () => {
    this.setState({ showMessageView: true });
  };
  render() {
    return (
      <div>
        {this.props.message.map(message => (
          <Message message={message} onClick={this.showFullMessage} />
        ))}
        {this.state.showMessageView &&
          this.props.message.map(message => <MessageView message={message} />)}
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
