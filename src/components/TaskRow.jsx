import React from "react";

export const TaskRow = ({ name, day }) => {
    return (
        <div
            className="w-full flex items-center justify-between text-violet-900 font-medium text-xl border-b border-violet-900 py-4"
        >
            <h2>{name}</h2>
            <h2>{day}</h2>
        </div>
    )
}
