import { useState } from "react";
import "./form-input.css";

const FormInput = ({ label, errMsg, pattern, ...restprops }) => {
  const [focused, setFocused] = useState(false);
  const handleFocus = () => {
    setFocused(true);
  };
  return (
    <div className="mb-4 format">
      <label htmlFor="">
        {label} <span className="text-red-400">*</span>
      </label>
      <div className="mt-1">
        <input
          className="h-10 px-4 w-4/5 border border-gray-400 rounded-md"
          onBlur={handleFocus}
          focused={focused.toString()}
          pattern={pattern}
          {...restprops}
        />
        <span className="text-red-400 text-xs">{errMsg}</span>
      </div>
    </div>
  );
};

export default FormInput;
