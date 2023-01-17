import { differenceInCalendarDays } from "date-fns";
import React, { useState } from "react";
import { dateMask } from "../utils/inputMask";
import { Button } from "./Button";
import { Calendar } from "./Calendar";
import { Input } from "./Input";

export const TaskForm = ({ createTask }) => {
    const [name, setName] = useState('');
    const [diffInDays, setDiffInDays] = useState('');
    const [selectedDate, setSelectedDate] = useState('');

    const onClick = () => {
        if (name && diffInDays && selectedDate) {
            const [day, month, year] = selectedDate.split('/');
            const futureDate = new Date(parseInt('20'+year), parseInt(month-1), parseInt(day));
            const currentDate = new Date;
            console.log(futureDate, currentDate)

            createTask({
                name,
                diff: parseInt(diffInDays),
                deadline: differenceInCalendarDays(futureDate, currentDate)
            })

            setName('');
            setDiffInDays('');
            setSelectedDate('');
        }
    }

    return (
        <div className="relative w-full lg:border-2 border-violet-900 lg:px-6 pt-4 pb-12 mb-6 lg:rounded-lg">
            <Input
                label="tarefa"
                placeholder="Digite o nome da tarefa..."
                value={name}
                setValue={setName}
            />

            <Input
                label="com entrega para"
                placeholder="Digite data de entrega..."
                value={selectedDate}
                setValue={setSelectedDate}
                mask={dateMask}
            />

            <Input
                label="que demora (em dias)"
                placeholder="Digite a estimativa em dias..."
                value={diffInDays}
                setValue={setDiffInDays}
            />

            <div className="absolute -bottom-7 right-4">
                <Button
                    text="Adicionar tarefa"
                    onClick={onClick}
                />
            </div>
        </div>
    )
}
