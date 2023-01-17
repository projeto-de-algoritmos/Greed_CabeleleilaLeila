import React from "react";

export const TaskLabel = ({ index, task, onDelete }) => {
    return (
        <div
            className={`${index % 2 ? 'bg-violet-900' : 'bg-pink-600'} flex items-center justify-between p-2 gap-4 text-white font-normal text-lg`}
        >
            <h3>{task.name}</h3>
            <button onClick={() => onDelete(task)}>X</button>
        </div>
    )
}
