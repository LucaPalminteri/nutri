import React from 'react'

function Meal({meal}) {

    const date = new Date(meal.created_at)

    let monthName = date.toLocaleString("en-US", { month: "long" });
    let dayName = date.toLocaleString("en-US", { weekday: "long" });
    let dayNumber = date.getDay() - 1;
    let hours = date.getHours() - 3;
    let minutes = date.getMinutes();

    let title = ""

    if(hours >= 0 && hours < 10) title = "Breakfast"
    if(hours >= 10 && hours < 12) title = "Breakfast Snack"
    if(hours >= 12 && hours < 14) title = "Lunch"
    if(hours >= 14 && hours < 16) title = "Afterlunch Snack"
    if(hours >= 16 && hours < 19) title = "Afternoon Snack"
    if(hours >= 19 && hours < 21) title = "Night Snack"
    if(hours >= 21 && hours < 24) title = "Dinner"

  return (
    <div className='card'>
        <header className='text'>
            <h4>{title}</h4>
        </header>
        <div className='divider'></div>
        <main className='text'>{meal.description}</main>
        <div className='divider'></div>
        <footer className='text'>
            <span>{dayName} {dayNumber}, {monthName}</span>
            <span>{hours}:{minutes} hs</span>
        </footer>
    </div>
  )
}

export default Meal