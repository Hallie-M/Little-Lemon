
/* global fetchAPI, submitAPI */

import ConfirmedBooking from "./ConfirmedBooking";
import { Routes, Route, useNavigate } from "react-router-dom";
import BookingPage from "./BookingPage";
import HomePage from "./HomePage";
import { useReducer } from "react";


export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};


export const updateTimes = (state, action) => {
  return fetchAPI(new Date(action.date));
};




function Main() {

  const navigate = useNavigate();


  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    undefined,
    initializeTimes
  );


const submitForm = (formData) => {
  const success = submitAPI(formData);





  if (success) {
    navigate("/confirmed");
  }
};


  return (
    <main>

      <Routes>
        <Route path="/" element={<HomePage />} />
        <Route
          path="/booking"
          element={<BookingPage
            availableTimes={availableTimes}
            dispatch={dispatch}
            submitForm={submitForm}

          />}
        />
        <Route
          path="/confirmed"
          element={<ConfirmedBooking />}
        />
      </Routes>
    </main>
  )
}

export default Main;


