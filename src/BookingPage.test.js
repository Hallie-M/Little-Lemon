
import { render, screen } from "@testing-library/react";
import "@testing-library/jest-dom";
import BookingPage from "./BookingPage";

test("Displays an error message when a booking fails", () => {
  render(
    <BookingPage
      availableTimes={["17:00"]}
      dispatch={() => {}}
      submitForm={() => {}}
      bookingError="We couldn't complete your reservation. Please try again."
    />
  );

  const errorMessage = screen.getByRole("alert");

  expect(errorMessage).toHaveTextContent(
    "We couldn't complete your reservation. Please try again."
  );
});

test("Does not display an error when there is no booking error", () => {
  render(
    <BookingPage
      availableTimes={["17:00"]}
      dispatch={() => {}}
      submitForm={() => {}}
      bookingError=""
    />
  );

  expect(screen.queryByRole("alert")).not.toBeInTheDocument();
});
