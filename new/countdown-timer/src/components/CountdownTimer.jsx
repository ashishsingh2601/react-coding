import React, {useState} from 'react'
import useTimer from '../hooks/use-timer';

const CountdownTimer = () => {
    const { days, hours, minutes, seconds } = useTimer("2099-01-26T06:00:00");

    const [selectedDate, setSelectedDate] = useState("");

    const currentDate = new Date().toISOString().split('T')[0];

    const handleDateChange = (event) => {
      setSelectedDate(event.target.value);
    };

    console.log(selectedDate)
    const [year, month, day] = selectedDate.split("-");

    const deadline = new Date(year, month - 1, day); 
    console.log(deadline)
    // const deadlineISO = deadline.toISOString();
    // console.log(deadlineISO);   



  return (
    <div>
      <label htmlFor="selectedDate">Select a Date:</label>
      <input
        type="date"
        id="selectedDate"
        name="selectedDate"
        value={selectedDate} // Bind the value to the state
        min={currentDate} 
        onChange={handleDateChange} // Handle changes
      />
      <p>Selected Date: {selectedDate}</p>
      <div>
        {days.toFixed().toString().padStart(2, "0")} : {" "}
        {hours.toFixed().toString().padStart(2, "0")} :{" "}
        {minutes.toFixed().toString().padStart(2, "0")} :{" "}
        {seconds.toFixed().toString().padStart(2, "0")}
      </div>
    </div>
  )
}

export default CountdownTimer