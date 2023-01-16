import React from "react";

export const TaskRow = ({ name, periods }) => {
    return (
        <div
            className="w-full flex items-center justify-between text-violet-900 font-medium text-xl border-b border-violet-900 py-4"
        >
            <h2>{name}</h2>
            <h2>{periods.length > 1 ? `${periods[0]}` : `${periods[0] - periods[1]}`}</h2>
        </div>
    )
}
