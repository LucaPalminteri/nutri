import React from 'react'

function Meal({meal}) {

    const date = new Date(meal.created_at)

    let monthName = date.toLocaleString("en-US", { month: "long" });
    let dayName = date.toLocaleString("en-US", { weekday: "long" });
    let dayNumber = date.getDay() - 1;
    let hours = date.getHours() - 3;
    let minutes = date.getMinutes();

  return (
    <div className='card'>
        <header className='text'>header</header>
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