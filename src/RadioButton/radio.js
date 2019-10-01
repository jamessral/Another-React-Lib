import React from "react";
import PropTypes from "prop-types";

const RadioContext = React.createContext();

export const Radio = props => {
  const { name, selectedValue, onChange } = React.useContext(RadioContext);
  const optional = {};
  if (selectedValue !== undefined) {
    optional.checked = props.value === selectedValue;
  }
  if (typeof onChange === "function") {
    optional.onChange = onChange.bind(null, props.value);
  }
  return (
    <div>
      <input
        {...props}
        role="radio"
        aria-checked={optional.checked}
        type="radio"
        name={name}
        {...optional}
      />
      <label>{props.value}</label>
    </div>
  );
};

Radio.propTypes = {
  value: PropTypes.any
};

export class RadioGroup extends React.Component {
  static propTypes = {
    children: PropTypes.children,
    name: PropTypes.string,
    selectedValue: PropTypes.any,
    onChange: PropTypes.func
  };

  getContext() {
    const { name, selectedValue, onChange } = this.props;
    return {
      name,
      selectedValue,
      onChange
    };
  }
  render() {
    const { children, ...rest } = this.props;
    return (
      <form role="radiogroup" {...rest}>
        <RadioContext.Provider value={this.getContext}>
          {children}
        </RadioContext.Provider>
      </form>
    );
  }
}
