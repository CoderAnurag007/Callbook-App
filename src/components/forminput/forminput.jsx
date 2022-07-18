import React from "react";

const FormInput = (props) => {
  const { inputOptions } = props;
  return (
    <>
      <input {...inputOptions} />
    </>
  );
};
export default FormInput;
