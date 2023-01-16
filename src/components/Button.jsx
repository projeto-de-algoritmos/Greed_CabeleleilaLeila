import React from "react";

export const Button = ({ text, onClick }) => {
    return (
        <button
            className="flex items-center justify-center bg-violet-900 text-white font-semibold text-base py-4 px-6 rounded-full"
            onClick={onClick}
        >
            {text}
        </button>
    )
}
