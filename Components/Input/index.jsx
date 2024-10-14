import React from "react";
import { InputContainer, InputStyled } from "./style";

function Input({ label, type, name,value, onChange }) {
  return (
    <InputContainer>
      <label htmlFor={name}>{label}</label>
          <InputStyled id={name} name={name} type={type} value={value} onChange={onChange}/>
          <p>Error</p>
    </InputContainer>
  );
}

export default Input;
