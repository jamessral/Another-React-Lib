import React from "react";
import PropTypes from "prop-types";
import "./collapse.css";

class Collapse extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      open: false
    };
    this.togglePanel = this.togglePanel.bind(this);
  }

  togglePanel() {
    this.setState({ open: !this.state.open });
  }

  render() {
    const { headerStyle, bodyStyle, collapseHeader, collapseBody } = this.props;
    return (
      <div>
        <div
          style={headerStyle}
          className="header"
          onClick={e => this.togglePanel(e)}
        >
          {collapseHeader}
        </div>
        {this.state.open ? (
          <div className="content" style={bodyStyle}>
            {collapseBody}
          </div>
        ) : null}
      </div>
    );
  }
}

Collapse.defaultProps = {
  headerStyle: {
    cursor: "pointer",
    padding: 15,
    backgroundColor: "#0089CC",
    color: "#FFF",
    fontFamily: "verdana"
  },
  bodyStyle: {
    padding: 15,
    fontFamily: "verdana",
    fontSize: 14,
    cursor: "pointer"
  },
  text: "e",
  styles: {},
  handleClick: () => {}
};

Collapse.propTypes = {
  headerStyle: PropTypes.shape({
    cursor: PropTypes.string,
    padding: PropTypes.number,
    backgroundColor: PropTypes.string,
    color: PropTypes.string,
    fontFamily: PropTypes.string
  }),
  collapseHeader: PropTypes.any,
  collapseBody: PropTypes.any,
  bodyStyle: PropTypes.shape({
    padding: PropTypes.number,
    fontFamily: PropTypes.string,
    fontSize: PropTypes.number,
    cursor: PropTypes.string
  }),
  text: PropTypes.string,
  styles: PropTypes.object,
  handleClick: PropTypes.func
};

export default Collapse;
