
/* global fetchAPI, submitAPI */

import ConfirmedBooking from "./ConfirmedBooking";
import { Routes, Route, useNavigate } from "react-router-dom";
import BookingPage from "./BookingPage";
import HomePage from "./HomePage";
import { useReducer, useState } from "react";


export const initializeTimes = () => {
  const today = new Date();
  return fetchAPI(today);
};


export const updateTimes = (state, action) => {
  return fetchAPI(new Date(action.date));
};




function Main() {

  const navigate = useNavigate();
  const [bookingError, setBookingError] = useState("");
  // const [isSubmitting, setIsSubmitting] = useState(false);



  const [availableTimes, dispatch] = useReducer(
    updateTimes,
    undefined,
    initializeTimes
  );



  const submitForm = (formData) => {
    setBookingError("");

    const success = submitAPI(formData);

    if (success) {
      navigate("/confirmed");
    } else {
      setBookingError(
        "We couldn't complete your reservation. Please try again."
      );
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
            bookingError={bookingError}

          />}
        />
        <Route
          path="/confirmed"
          element={<ConfirmedBooking />}
        />
      </Routes>
    </main>
  )
};

export default Main;


