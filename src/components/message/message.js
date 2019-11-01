import React from "react";
import { connect } from "react-redux";
import { getMessage } from "../../store/selectors/selectors";
import { putCards } from "../../store/action/cards";
import "../../style.css";

class Card extends React.Component {
  render() {
    return (
      <div data-block-id={this.props.message.id} key={this.props.message.id}>
        {this.props.message.title}
        {this.props.message.body}
        {this.props.message.creator}
        {this.props.message.date}
      </div>
    );
  }
}
function mapStateToProps(state) {
  return { cards: getMessage(state) };
}
export default connect(
  mapStateToProps,
  { putCards }
)(Card);
//
//
