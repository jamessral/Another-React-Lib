import React, { useState } from "react";
import PropTypes from "prop-types";
import "./tab.css";

const Tabs = ({ children = [], defaultTab = 0 }) => {
  if (!children.length) children = [children];

  const [activeTab, setActiveTab] = useState(children[defaultTab]);
  const [tabIndex, setTabIndex] = useState(defaultTab);
  const toggleTab = index => {
    setTabIndex(index);
    setActiveTab(children[index]);
  };

  return (
    <div className="tabs-container">
      <div className="tabs-control">
        {children &&
          children.map((tab, index) => (
            <div
              key={`${tab.props.title}-${index}`}
              className={`tab-title ${index === tabIndex && "active"}`}
              onClick={() => toggleTab(index)}
            >
              {tab.props.title || `Tab${index}`}
            </div>
          ))}
      </div>
      <div className="tab-view">
        {children &&
          React.cloneElement(activeTab, {
            tab: activeTab
          })}
      </div>
    </div>
  );
};

Tabs.propTypes = {
  children: PropTypes.children,
  defaultTab: PropTypes.number
};

export default Tabs;
