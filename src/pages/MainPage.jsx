import React, { useState, useEffect } from "react";
import { Button } from "../components/Button";
import { Header } from "../components/Header";
import { TaskRow } from "../components/TaskRow";
import { TaskLabel } from "../components/TaskLabel";
import { TaskForm } from "../components/TaskForm";
import { scheduleJobs } from "../utils/lazyScheduler";
import { lightFormat, addDays } from "date-fns";

export function MainPage() {
    const [tasks, setTasks] = useState([]);
    const [scheduledTasks, setScheduledTasks] = useState([]);

    useEffect(() => {
        console.log(tasks)
    }, [tasks])

    useEffect(() => {
        console.log(scheduledTasks)
    }, [scheduledTasks])

    const createNewTask = (newTask) => {
        const taskList = tasks;
        taskList.push(newTask);

        setTasks([...taskList]);
    }

    const deleteTask = (task) => {
        const index = tasks.indexOf(task);
        const taskList = tasks;
        taskList.splice(index);

        setTasks([...taskList]);
    }

    const createSchedule = () => {
        const currentDay = new Date;

        const taskDayList = [...scheduleJobs(tasks)
            .filter(item => { if (item) return item })
            .map(item => ({
                day: lightFormat(addDays(currentDay, item.dayNum), 'dd/MM/yy'),
                name: item.name
            }))
        ];

        setScheduledTasks([...taskDayList]);
    }


    return (
        <div
            className="font-sans font-normal h-full w-full flex flex-col items-center justify-start gap-6"
        >
            <Header />

            <div className="w-full flex flex-col px-6 lg:w-1/3 lg:p-0 gap-6">
                <TaskForm createTask={createNewTask} />

                <div className="grid grid-cols-3 gap-1">
                    {
                        tasks.map((task, index) => (
                            <TaskLabel
                                index={index}
                                key={index}
                                task={task}
                                onDelete={deleteTask}
                            />
                        ))
                    }
                </div>

                <div className="grid grid-flow-row gap-1">
                    {
                        scheduledTasks.map((task, index) => (
                            <TaskRow
                                key={index}
                                name={task.name}
                                day={task.day}
                            />
                        ))
                    }
                </div>

                {!!tasks.length && <Button text="Agendar tarefas" onClick={createSchedule} />}
            </div>
        </div>
    )
}
