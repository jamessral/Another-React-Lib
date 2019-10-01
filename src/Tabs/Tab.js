import React from "react";
import PropTypes from "prop-types";

const Tab = ({ tab }) => {
  return (
    <div>
      <tab.props.component />
    </div>
  );
};

Tab.propTypes = {
  tab: PropTypes.any
};

export default Tab;
