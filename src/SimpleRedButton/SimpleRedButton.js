import React from "react";
import PropTypes from "prop-types";
import "./simpleredbutton.css";

const SimpleRedButton = props => {
  return (
    <button className="red-button" onClick={props.handleClick}>
      {props.text}
    </button>
  );
};

SimpleRedButton.defaultProps = {
  text: "Click here",
  handleClick: () => {}
};

SimpleRedButton.propTypes = {
  text: PropTypes.string,
  handleClick: PropTypes.func
};

export default SimpleRedButton;
