import React from "react";
import PropTypes from "prop-types";
import "./Avatar.css";
import defaultAvatar from "./user.svg";
/**
 * Render a rounded user avatar
 * E.g.:
 * ```html
 * <Avatar src='https://pickaface.net/gallery/avatar/unr_test_161024_0535_9lih90.png' />
 * ```
 */
const Avatar = props => {
  const { src, alt } = props;

  return <img src={src} className="img-avatar" alt={alt} />;
};

Avatar.defaultProps = {
  src: defaultAvatar,
  alt: "user avatar"
};

Avatar.propTypes = {
  alt: PropTypes.string,
  src: PropTypes.string
};

export default Avatar;
