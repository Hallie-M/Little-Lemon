import { useState } from "react";

function BookingForm({ availableTimes, dispatch, submitForm }) {


  const [date, setDate] = useState("");
  const [time, setTime] = useState("17:00");
  const [guests, setGuests] = useState(2);
  const [occasion, setOccasion] = useState("Birthday");



  return (
    <form onSubmit={(e) => {
  e.preventDefault();






  if (submitForm) {
    submitForm({ date, time, guests, occasion });
  }
}}>

      <h2>Book a Table</h2>

      <label htmlFor="res-date">Choose date</label>
      <input
        type="date"
        required
        id="res-date"
        value={date}
          onChange={(e) => {
          setDate(e.target.value);
          dispatch({
            type: "UPDATE_TIMES",
            date: e.target.value
          });
        }}

      />



      <label htmlFor="res-time">Choose Time</label>
      <select
        id="res-time"
        value={time}
        onChange={(e) => setTime(e.target.value)}
      >
        {availableTimes.map((availableTime) => (
          <option key={availableTime} value={availableTime}>
            {availableTime}
          </option>
        ))}

      </select>

      <label htmlFor="guests">Number of Guest</label>
      <input
        type="number"
        required
        id="guests"
        min="1"
        max="10"
        value={guests}
        onChange={(e) => setGuests(Number(e.target.value))}
      />

      <label htmlFor="occasion">Choose Occasion</label>
      <select
        id="occasion"
        value={occasion}
        onChange={(e) => setOccasion(e.target.value)}
      >
        <option>Birthday</option>
        <option>Anniversary</option>
      </select>

      <input type="submit" value="Make Your Reservation" />




  
</form>




  );
}

export default BookingForm;
