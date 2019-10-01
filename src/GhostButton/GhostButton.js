import React from "react";
import PropTypes from "prop-types";
import "./GhostButton.css";

const GhostButton = props => {
  const { buttonColor, text, size, styles, handleClick } = props;
  return (
    <button
      style={styles}
      onClick={handleClick}
      className={`${buttonColor} ${size} ghost-button`}
    >
      {text}
    </button>
  );
};

GhostButton.defaultProps = {
  buttonColor: "blue",
  text: "Text goes here",
  size: "small",
  styles: {},
  handleClick: () => {}
};

GhostButton.propTypes = {
  buttonColor: PropTypes.string,
  text: PropTypes.string,
  size: PropTypes.string,
  styles: PropTypes.object,
  handleClick: PropTypes.func
};

export default GhostButton;
