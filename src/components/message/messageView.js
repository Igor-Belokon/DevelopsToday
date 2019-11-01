import React from "react";
import { connect } from "react-redux";
import { getMessage } from "../../store/selectors/selectors";
import { loadFullMessage } from "../../store/action/message";

import "../../App.css";

class MessageView extends React.Component {
  componentDidMount() {
    this.props.loadFullMessage(this.props.massage.id);
  }
  render() {
    return (
      <div id={this.props.message.id} className="mess-style">
        {this.props.message.title}
        {this.props.message.body}
        {this.props.message.creator}
        {this.props.message.date}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return { message: getMessage(state) };
}

export default connect(
  mapStateToProps,
  { loadFullMessage }
)(MessageView);
