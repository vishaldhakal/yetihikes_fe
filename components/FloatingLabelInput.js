import React from "react";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import {
  Select,
  SelectTrigger,
  SelectValue,
  SelectContent,
  SelectItem,
} from "@/components/ui/select";

const FloatingLabelInput = ({
  id,
  label,
  type = "text",
  value,
  onChange,
  required,
  options,
  ...props
}) => {
  const inputClasses =
    "block w-full px-4 pt-6 pb-1 text-sm font-light text-black bg-gray-50 border border-gray-200 rounded-md appearance-none peer placeholder:text-transparent focus:outline-none focus:border-transparent";

  const labelClasses =
    "absolute text-xs font-light text-gray-600 duration-300 transform -translate-y-3 scale-75 top-4 z-10 origin-[0] left-4 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-3 peer-focus:text-gray-700";

  const renderInput = () => {
    switch (type) {
      case "select":
        return (
          <Select {...props}>
            <SelectTrigger className={inputClasses}>
              <SelectValue placeholder={label} />
            </SelectTrigger>
            <SelectContent>
              {options?.map((option) => (
                <SelectItem key={option.value} value={option.value}>
                  {option.label}
                </SelectItem>
              ))}
            </SelectContent>
          </Select>
        );
      case "date":
      case "number":
      case "text":
      default:
        return (
          <Input
            id={id}
            type={type}
            className={inputClasses}
            value={value}
            onChange={onChange}
            required={required}
            placeholder={label}
            {...props}
          />
        );
    }
  };

  return (
    <div className="relative">
      {renderInput()}
      <Label htmlFor={id} className={labelClasses}>
        {label}
      </Label>
    </div>
  );
};

export default FloatingLabelInput;
