import React from "react";

export const ProfData = ({ handleChange, formErrors }) => {
  return (
    <div className="flex flex-col gap-3">
      <div className="flex flex-col gap-2">
        <p className="text-[14px] font-semibold">
          Date of birth <span className="text-red-500">*</span>
        </p>
        <input
          className="w-full border border-gray-300 rounded-lg h-11 pl-3"
          type="Date"
          placeholder="--/--/--"
          onChange={handleChange}
          name="date"
          style={{
            borderColor: formErrors.date ? "red" : undefined,
          }}
        />
        <p className="text-red-500 text-[14px] font-normal">
          {formErrors.date}
        </p>
      </div>
      <div className="flex flex-col gap-2">
        <p className="text-[14px] font-semibold">
          Profile image <span className="text-red-500">*</span>
        </p>
        <div className="bg-gray-100 w-full h-45 rounded-lg flex justify-center items-center ">
          <input
            type="file"
            name="profileImage"
            onChange={handleChange}
            style={{
              borderColor: formErrors.profileImage ? "red" : undefined,
            }}
          />
        </div>
        <p className="text-red-500 text-[14px] font-normal">
          {formErrors.profileImage}
        </p>
      </div>
    </div>
  );
};
