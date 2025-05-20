"use client"
import React from "react";
import { useState, useEffect } from "react";


export default function Calendar(props) {

  const months = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"]


  function getDaysInMonth(month, year) {
    return new Date(year, month, 0).getDate()
  }

  const today = new Date();

  const [selectedDay, setSelectedDay] = useState(today.getDate());
  const [selectedMonth, setSelectedMonth] = useState(today.getMonth());
  const [selectedYear, setSelectedYear] = useState(today.getFullYear());

  const selectDate = (day, month, year) => {
    if (day === null) return;
    setSelectedDay(day);
    setSelectedMonth(month);
    setSelectedYear(year);

    // Also update parent props if needed
    props.setSelectedDate(day);
    props.setMonth(month + 1);
    props.setYear(year);
  };

  const [currentMonth, setCurrentMonth] = useState(new Date().getMonth());
  const [currentYear, setCurrentYear] = useState(new Date().getFullYear());
  const [date, setDate] = useState(new Date().getDate());


  const nextMonth = () => {
    if (currentMonth === 11) {
      setCurrentMonth(0)
      setCurrentYear(currentYear + 1);
    }
    else {
      setCurrentMonth(currentMonth + 1);
    }
  }

  const prevMonth = () => {

    if (currentMonth === 0) {

      setCurrentMonth(11)
      setCurrentYear(currentYear - 1);


    } else {
      setCurrentMonth(currentMonth - 1)
    }

  }


  const nextYear = () => {
    setCurrentYear(currentYear + 1)
  }


  const prevYear = () => {
    setCurrentYear(currentYear - 1)
  }


  //for finding the day on which month will starts
  //Thursday for May 2025

  const startDay = new Date(currentYear, currentMonth, 1).getDay();


  function generateCalendarGrid(month, year) {
    const daysInMonth = getDaysInMonth(month + 1, year);
    const startDay = (new Date(year, month, 1).getDay() + 6) % 7;

    const totalCells = startDay + daysInMonth;
    const weeks = [];

    let currentDay = 1;

    for (let i = 0; i < Math.ceil(totalCells / 7); i++) {
      const week = [];

      for (let j = 0; j < 7; j++) {
        const cellIndex = i * 7 + j;

        if (cellIndex < startDay || currentDay > daysInMonth) {
          week.push(null); // empty cell
        } else {
          week.push(currentDay);
          currentDay++;
        }
      }

      weeks.push(week);
    }

    return weeks;
  }













  return (

    <>

      <p className='text-center mt-5 xl:mt-10'>Saturday</p>
      <h2 className='text-white text-2xl font-bold text-center'>{`${months[currentMonth]} ${date}, ${currentYear}`}</h2>


      <div  >
        <div className="flex justify-between mt-5 items-center">

          <div className="ml-10 flex gap-3">
            <button className="cursor-pointer hover:bg-white/25 xl:p-1" onClick={prevMonth}><img src="left.svg" alt="" /></button>
            <p>{`${months[currentMonth]}`}</p>
            <button className="cursor-pointer hover:bg-white/25 xl:p-1" onClick={nextMonth}><img src="right.svg" alt="" /></button>
          </div>



          <div className="mr-10 flex gap-3">
            <button onClick={prevYear} className="cursor-pointer hover:bg-white/25 xl:p-1"><img src="left.svg" alt="" /></button>
            <p>{`${currentYear}`}</p>
            <button onClick={nextYear} className="cursor-pointer hover:bg-white/25 xl:p-1"><img src="right.svg" alt="" /></button>
          </div>


        </div>


        <div className="flex items-center w-full  justify-center mx-auto my-5 ">
          <div className="  text-white rounded-lg shadow-xl w-full md:max-w-md">
            {/* Header */}


            {/* Week Days */}
            <ul className="flex justify-between px-6 py-4 2xl:py-8 font-semibold text-sm text-white">
              <li>MON</li>
              <li>TUE</li>
              <li>WED</li>
              <li>THU</li>
              <li>FRI</li>
              <li>SAT</li>
              <li>SUN</li>


            </ul>

            {/* Weeks */}
            <div className="flex flex-col gap-4 md:gap-6 2xl:gap-10 px-6 pb-6">

              {generateCalendarGrid(currentMonth, currentYear).map((week, i) => (
                <div key={i} className="flex justify-between">
                  {week.map((day, j) => (

                    <button
                      onClick={() => selectDate(day, currentMonth, currentYear)}
                      key={j}
                      className={`w-10 h-10 text-sm font-medium cursor-pointer flex items-center justify-center transition-colors duration-200
  ${day &&
                          selectedDay === day &&
                          selectedMonth === currentMonth &&
                          selectedYear === currentYear
                          ? 'bg-teal-300 text-black rounded-full'
                          : !selectedDay &&
                            day === today.getDate() &&
                            currentMonth === today.getMonth() &&
                            currentYear === today.getFullYear()
                            ? 'bg-teal-300 text-black rounded-full'
                            : 'text-white'
                        }
`}
                    >
                      {day || ""}
                    </button>

                  ))}
                </div>
              ))}





            </div>



          </div>
        </div>

      </div>
    </>

  );
}
