import React from "react";

function FormField({
  lableName,
  type,
  name,
  placeholder,
  value,
  changeHandler,
  isSurpiiseMe,
  SurpiiseMeHandler,
}) {
  return (
    <>
      <div className="flex item-center gap-2 mb-1">
        <lable htmlFor={name} className="block text-base text-white">
          {lableName}
        </lable>
      </div>
      <div className="relative">
        <input
          type={type}
          id={name}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={changeHandler}
          required
          className=" mb-6 ease-in-out duration-300 bg-transparent focus-visible:bg-transparent  border border-slate-300 text-white w-full font-normal max-w-xl	 text-base rounded-xl focus:ring-[#9333ea] focus:border-[#9333ea] active:bg-transparent focus:bg-transparent outline-none block p-3 max-md:max-w-full	"
        />
        {isSurpiiseMe && (
          <div className=" absolute bg-[#090C25] top-1/3 -right-3 transform -translate-x-1/4 -translate-y-1/2 border-l-4	border-l-[#090C25] 	">
            <button
              type="button"
              onClick={SurpiiseMeHandler}
              className="ease-in duration-200 text-sm text-white/60 bg-indigo-800/50 py-1 px-2 rounded hover:bg-indigo-800 hover:text-white"
            >
              RANDOM
            </button>
          </div>
        )}
      </div>
    </>
  );
}

export default FormField;
