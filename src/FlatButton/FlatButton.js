import React from "react";
import PropTypes from "prop-types";
import "./button.css";

const FlatButton = props => {
  let { buttonColor, text, size, styles, handleClick } = props;
  return (
    <button
      style={styles}
      onClick={handleClick}
      className={`${buttonColor} ${size} flat-button`}
    >
      {text}
    </button>
  );
};

FlatButton.defaultProps = {
  buttonColor: "red",
  text: "e",
  size: "small",
  styles: {},
  handleClick: () => {}
};

FlatButton.propTypes = {
  buttonColor: PropTypes.string,
  text: PropTypes.string,
  size: PropTypes.oneOf(["small", "medium", "large"]),
  styles: PropTypes.object,
  handleClick: PropTypes.func
};

export default FlatButton;
