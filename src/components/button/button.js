import React from "react";
import { connect } from "react-redux";
import { addComent } from "../../store/action/message";
class ComentButton extends React.Component {
  addComent = () => {
    this.props.addComent(this.props.id);
    console.log("card deleted");
  };

  render() {
    return (
      <div className="cardButton" onClick={this.addComent}>
        Add Coment
      </div>
    );
  }
}
export default connect(
  null,
  { deleteCards }
)(ComentButton);
