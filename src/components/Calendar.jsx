import React from 'react';
import { format, isSameDay, isSameMonth, addMonths, subMonths, formatISO } from 'date-fns'
import { takeMonth } from '../modules/calendar';

const WeekNames = () => {
    return <tr>
        {
            ['D', 'S', 'T', 'Q', 'Q', 'S', 'S'].map(
                (dayName) => (
                    <td className='text-pink-600 font-medium'>
                        {dayName}
                    </td>
                ),
            )
        }
    </tr>
}


export const Calendar = ({ selectedDate, setSelectedDate }) => {
    const monthDic = {
        January: 'Janeiro',
        February: 'Fevereiro',
        March: 'Março',
        April: 'Abril',
        May: 'Maio',
        June: 'Junho',
        July: 'Julho',
        August: 'Agosto',
        September: 'Setembro',
        October: 'Outubro',
        November: 'Novembro',
        December: 'Dezembro',
    };

    const MonthlyCalendar = () => {
        const data = takeMonth(selectedDate)();

        return (
            <div className='bg-white flex flex-col items-center justify-between p-4 border-2 border-violet-900 rounded-lg'>
                <h1 className='text-violet-900 text-xs font-semibold'>{format(selectedDate, 'yyyy')}</h1>

                <div className='flex w-full items-center justify-between'>
                    <button
                        onClick={() => {
                            setSelectedDate(subMonths(selectedDate, 1))
                        }}
                        className='font-semibold text-lg'
                    >
                        {"<"}
                    </button>

                    <h1 className='text-lg font-semibold'>{monthDic[format(selectedDate, 'MMMM')]}</h1>

                    <button
                        onClick={() => {
                            setSelectedDate(addMonths(selectedDate, 1))
                        }}
                        className='font-semibold text-lg'
                    >
                        {">"}
                    </button>
                </div>

                <table cellSpacing={0} className="items-center justify-center">
                    <WeekNames />
                    {
                        data.map((week) => (
                            <tr>
                                {
                                    week.map(
                                        (day) => {
                                            return (
                                                <td
                                                    className={`w-9 h-9 items-center justify-center cursor-pointer ${isSameDay(day, selectedDate) ? 'bg-pink-600 text-white' : ''}`}
                                                    onClick={() => {
                                                        setSelectedDate(day)
                                                        console.log(formatISO(day).slice(0, 10))
                                                    }}
                                                >
                                                    {isSameMonth(day, selectedDate) ? (format(day, 'dd')) : (" ")}
                                                </td>
                                            )
                                        }

                                    )
                                }
                            </tr>
                        ))
                    }
                </table>
            </div>
        );
    }

    return (
        <div>
            <MonthlyCalendar />
        </div>
    );
}