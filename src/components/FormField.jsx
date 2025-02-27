/* eslint-disable react/prop-types */
import { Controller } from "react-hook-form";

const FormField = ({ control, lable, name, type, Component, placeholder }) => {
  return (
    <div className="mt-4">
      <p className="mb-1 text-[18px] text-dark-100">{lable}</p>
      <Controller
        name={name}
        control={control}
        render={({ field: { onChange, value, name } }) => {
          return (
            <Component
              onChange={onChange}
              value={value}
              name={name}
              type={type}
              control={control}
              placeholder={placeholder}
            />
          );
        }}
      />
    </div>
  );
};

export default FormField;
