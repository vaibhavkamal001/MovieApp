import React from "react";

const Input = React.forwardRef((props, ref) => {
  return (
    <div className="mt-6">
      <label
        className="block text-sm font-medium leading-5 text-white"
        htmlFor={props?.labelData?.htmlFor}
      >
        {props?.labelData?.name}
      </label>
      <div className="mt-1 relative rounded-md shadow-sm">
        <input
          ref={ref}
          {...props.inputData}
          className="appearance-none block w-full px-3 py-2 border border-gray-300 rounded-md placeholder-gray-400 focus:outline-none focus:shadow-outline-blue focus:border-blue-300 transition duration-150 ease-in-out sm:text-sm sm:leading-5"
        />
        <div
          className={
            props.isValid
              ? "hidden absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
              : "absolute inset-y-0 right-0 pr-3 flex items-center pointer-events-none"
          }
        >
          <svg
            className="h-5 w-5 text-red-500"
            fill="currentColor"
            viewBox="0 0 20 20"
          >
            <path
              fillRule="evenodd"
              d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7 4a1 1 0 11-2 0 1 1 0 012 0zm-1-9a1 1 0 00-1 1v4a1 1 0 102 0V6a1 1 0 00-1-1z"
              clipRule="evenodd"
            ></path>
          </svg>
        </div>
      </div>
    </div>
  );
});
export default Input;
