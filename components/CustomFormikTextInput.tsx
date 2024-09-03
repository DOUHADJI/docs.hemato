import { Field, FormikErrors, FormikTouched } from "formik";
import React, { FunctionComponent } from "react";
import { IconType } from "react-icons";

interface CustomTextInputProps {
    name: string;
    label?: string;
    placeholder?: string;
    errors: FormikErrors<any>;
    touched: FormikTouched<any>;
    type?: string;
    min?: number;
    required?: boolean;
    isDisabled?: boolean;
    uppercase?: boolean;
    icon  : IconType
}

const CustomFormikTextInput: FunctionComponent<CustomTextInputProps> = ({
    name,
    label,
    placeholder,
    errors,
    touched,
    type = "text",
    min,
    required = false,
    isDisabled = false,
    uppercase = false,
    icon : Icon
}) => {
    const error = errors[name];
    const isTouched = touched[name];

    return (
        <>
            <div className="flex flex-col w-full py-2">
                <div className="p-1 text-md font-semibold truncate">
                    {label}{" "}
                    <span className="text-danger text-lg">
                        {" "}
                        {required ? "*" : null}{" "}
                    </span>
                </div>
                <div className="flex w-full">
                    <div className={`flex bg-blue-100 py-2 px-4 items-center justify-center border-y border-l border-gray-400 text-sm  ${
                        error && isTouched
                            ? "border-red-500"
                            : "border-gray-400"
                    }  ${!error && isTouched ? "border-green-500" : null}
                        `}>
                        <Icon />
                    </div>
                    <input
                    disabled={isDisabled}
                    type={type ? type : "text"}
                    min={min}
                    className={` w-full bg-white text-gray-600 border border-gray-400 text-sm  ${
                        error && isTouched
                            ? "border-red-500"
                            : "border-gray-400"
                    }  ${!error && isTouched ? "border-green-500" : null} ${
                        isDisabled ? "bg-blue-100" : null
                    } ${uppercase ? "uppercase" : null}`}
                    placeholder={placeholder}
                    name={name}
                />
                </div>

                {error && isTouched ? (
                    <div className="text-red-500 text-sm">
                        {error as string}
                    </div>
                ) : null}
            </div>
        </>
    );
};

export default CustomFormikTextInput;
