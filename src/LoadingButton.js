import React, { Component } from "react";
import PropTypes from "prop-types";

class LoadingButton extends Component {
  static propTypes = {
    children: PropTypes.children,
    disabled: PropTypes.bool,
    loading: PropTypes.bool,
    type: PropTypes.string
  };
  static defaultProps = {
    disabled: false,
    loading: false,
    type: "button"
  };
  render() {
    let { children, disabled, loading, type, ...props } = this.props;
    if (loading) {
      disabled = true;
    }
    return (
      <button disabled={disabled} type={type} {...props}>
        {children}
      </button>
    );
  }
}

export default LoadingButton;
