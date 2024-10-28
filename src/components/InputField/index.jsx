/* eslint-disable react/prop-types */
import { useState } from "react";
import { TbEye, TbEyeClosed } from "react-icons/tb";

const InputField = ({ type, placeholder, value, onChange }) => {
  const [showPassword, setShowPassword] = useState(false);

  const togglePasswordVisibility = () => {
    setShowPassword((prevState) => !prevState);
  };

  return (
    <div className="relative w-full">
      <input
        type={showPassword ? "text" : type}
        className={`bg-colorFundo w-full pl-3 py-3 border rounded-sm border-colorBorda text-black placeholder-transparent focus:outline-none 
          ${value ? "pt-5 pb-1" : ""}`}
        value={value}
        onChange={onChange}
        aria-label={placeholder}
      />
      <label
        className={`absolute left-3 text-colorTxt transition-all duration-200 pointer-events-none 
          ${value ? "text-fontmin top-1" : "top-3 text-md"} max-w-[90%] truncate`}
      >
        {placeholder}
      </label>
      {type === "password" && value && (
        <button
          type="button"
          onClick={togglePasswordVisibility}
          className="absolute right-3 top-4"
          aria-label="Toggle password visibility"
        >
          {showPassword ? (
            <TbEye className="text-2xl text-colorTxt" />
          ) : (
            <TbEyeClosed className="text-2xl text-colorTxt" />
          )}
        </button>
      )}
    </div>
  );
};

export default InputField;
