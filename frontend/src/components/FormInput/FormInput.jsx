import React from "react";
import "./FormInput.css";

const FormInput = (props) => {
  const { label, type, placeholder, onChange } = props;

  return (
    <div className="input-form-container">
      <label>{label}</label>
      <input type={type} placeholder={placeholder} onChange={onChange} />
    </div>
  );
};

export default FormInput;
