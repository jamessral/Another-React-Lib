import React from "react";
import PropTypes from "prop-types";

const Form = props => {
  return (
    <form>
      {props.fields.map((Field, index) => (
        <Field key={index} />
      ))}
    </form>
  );
};

Form.propTypes = {
  fields: PropTypes.array.isRequired
};

export default Form;
