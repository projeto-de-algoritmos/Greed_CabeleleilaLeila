import React from "react";

export const Input = ({
    label,
    placeholder,
    value,
    setValue,
    mask = (value) => value
}) => {

    return (
        <div className="w-full flex flex-col items-start justify-center gap-2">
            <p className="font-medium text-base text-pink-600">
                {label}
            </p>
            <input
                className="border-2 border-violet-900 rounded p-2 placeholder-opacity-50 text-slate-900 font-medium text-lg font-sans"
                placeholder={placeholder}
                value={value}
                onChange={e => setValue(mask(e.target.value))}
            />
        </div>
    )
}
