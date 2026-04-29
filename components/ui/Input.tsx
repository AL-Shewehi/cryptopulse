import React from "react";
import { UseFormRegisterReturn } from "react-hook-form";

const Input = ({
  id,
  label,
  type = "text",
  placeholder,
  required = false,
  register,
  error,
}: {
  id: string;
  label: string;
  type?: string;
  placeholder: string;
  required?: boolean;
  register?: UseFormRegisterReturn;
  error?: string;
}) => {
  return (
    <div className="flex flex-col gap-1 w-full">
      {label && (
        <label
          htmlFor={id}
          className="block text-sm font-medium text-muted-foreground"
        >
          {label}
        </label>
      )}
      <input
        type={type}
        id={id}
        className=" p-2 w-full border border-border rounded-md"
        required={required}
        placeholder={placeholder}
        {...register}
      />
      {error && <p className="text-xs text-red-400 mt-1">{error}</p>}
    </div>
  );
};

export default Input;
