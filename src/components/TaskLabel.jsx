import React from "react";

export const TaskLabel = ({ name, onClose }) => {
    return (
        <div
            className="w-32 bg-purple-700 flex items-center justify-between p-2 gap-4 text-white font-normal text-lg"
        >
            <h3>{name}</h3>
            <button onClick={onClose}>X</button>
        </div>
    )
}
