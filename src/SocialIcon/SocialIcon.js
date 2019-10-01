import React from "react";
import PropTypes from "prop-types";
import fb from "./res/facebook.svg";
import insta from "./res/instagram.svg";
import pinterest from "./res/pinterest.svg";
import share from "./res/share.svg";
import telegram from "./res/telegram.svg";
import twitter from "./res/twitter.svg";
import whatsapp from "./res/whatsapp.svg";

import "./SocialIcon.css";

const SocialIcon = props => {
  const { name, size } = props;

  const social_icons = {
    facebook: fb,
    instagram: insta,
    pinterest: pinterest,
    telegram: telegram,
    twitter: twitter,
    whatsapp: whatsapp,
    other: share
  };

  const icon = social_icons[name] || share;

  return <img src={icon} className={`icon-${size || "md"}`} />;
};

SocialIcon.propTypes = {
  name: PropTypes.string,
  size: PropTypes.oneOf("sm", "md", "lg")
};

export default SocialIcon;
