import BookingForm from "./BookingForm";


function BookingPage ({availableTimes,dispatch, submitForm,bookingError}){
  return (
    <section>
      <h2 className="booking-heading" >
        Reserve a Table
      </h2>

  <BookingForm 
  availableTimes ={availableTimes} 
  dispatch ={dispatch}
  submitForm={submitForm}

  
  />


{bookingError && (
  <p role="alert" style={{ color: "red" }}>
    {bookingError}
  </p>
)}


    </section>
  )









}

export default BookingPage;
