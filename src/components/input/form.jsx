import React from "react";
import Input from "./input.component";

function FormField({ name, ...rest }) {
  return (
    <form>
      <Input id={name} name={name} {...rest} />
    </form>
  );
}
export default FormField;
