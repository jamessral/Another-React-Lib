import React from "react";
import PropTypes from "prop-types";
import "./ProgressBar.css";

const ProgressBar = ({
  containerStyle,
  containerClassName,
  fillColor,
  progress
}) => (
  <div style={containerStyle} className={`progress-bar ${containerClassName}`}>
    <div
      className="fill"
      style={{ background: fillColor, width: `${progress}%` }}
    />
  </div>
);

ProgressBar.propTypes = {
  progress: PropTypes.number,
  containerStyle: PropTypes.any,
  fillColor: PropTypes.string,
  containerClassName: PropTypes.string
};

ProgressBar.defaultProps = {
  progress: 2,
  containerStyle: {},
  fillColor: "red",
  containerClassName: ""
};

export default ProgressBar;
