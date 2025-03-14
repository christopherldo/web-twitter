"use client";

import { useState } from "react";
import {
  faEye,
  faEyeSlash,
  IconDefinition,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

interface InputProps {
  name: string;
  type: string;
  placeholder: string;
  value?: string;
  onChange?: (event: React.ChangeEvent<HTMLInputElement>) => void;
  filled?: boolean;
  icon?: IconDefinition;
  onEnter?: () => void;
  id?: string;
  readOnly?: boolean;
}
export const Input = ({
  name,
  type,
  placeholder,
  value,
  onChange,
  filled,
  icon,
  onEnter,
  id,
  readOnly,
}: InputProps) => {
  const [showPassword, setShowPassword] = useState(false);

  const handleKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === "Enter" && onEnter) {
      onEnter();
    }
  };

  return (
    <div
      className={`has-[:focus]:border-white flex items-center h-14 rounded-3xl border-2 border-gray-700 ${
        filled && "bg-gray-700"
      }`}
    >
      {icon && (
        <FontAwesomeIcon icon={icon} className="ml-4 size-6 text-gray-500" />
      )}
      <input
        id={id}
        className="flex-1 outline-none bg-transparent h-full px-4"
        name={name}
        type={type === "password" && showPassword ? "text" : type}
        placeholder={placeholder}
        value={value}
        onChange={onChange && onChange}
        onKeyUp={handleKeyUp}
        readOnly={readOnly}
      />
      {type === "password" && (
        <FontAwesomeIcon
          icon={showPassword ? faEye : faEyeSlash}
          className="mr-4 size-6 text-gray-500 cursor-pointer"
          onClick={() => setShowPassword(!showPassword)}
        />
      )}
    </div>
  );
};
