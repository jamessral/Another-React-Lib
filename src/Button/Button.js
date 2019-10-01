import React from "react";
import PropTypes from "prop-types";
import "./button.css";

/**
 * Simple Button
 * Render a button
 * E.g.:
 * ```html
 * <Button buttonColor='red' text='my button text' size='small' styles={} handleClick={() => yourClickFunctionHere()} />
 * ```
 */
const Button = props => {
  let { buttonColor, text, size, styles, handleClick } = props;
  return (
    <button
      style={styles}
      onClick={handleClick}
      className={`${buttonColor} ${size} button`}
    >
      {text}
    </button>
  );
};

Button.defaultProps = {
  /**
   * Button color. Can be any valid color
   */
  buttonColor: "red",
  text: "Text goes here",
  /**
   * Button size. Possible values can by ['small', 'medium', 'large']
   */
  size: "small",
  styles: {},
  /**
   * OnClick event handler
   */
  handleClick: () => {}
};

Button.propTypes = {
  buttonColor: PropTypes.string,
  text: PropTypes.string,
  size: PropTypes.oneOf("small", "medium", "large"),
  styles: PropTypes.object,
  handleClick: PropTypes.func
};

export default Button;
