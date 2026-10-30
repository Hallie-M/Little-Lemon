import { render, screen, fireEvent } from "@testing-library/react";
import BookingForm from "./BookingForm";
import { initializeTimes, updateTimes } from "./Main";




test("displays the Choose date label", () => {
  render(<BookingForm availableTimes={[]} dispatch={() => {}} />);

  const dateLabel = screen.getByText("Choose date");

  expect(dateLabel).toBeInTheDocument();
});


test("initializeTimes gets available times from the API", () => {
  global.fetchAPI = jest.fn(() => ["17:00", "18:00"]);

  const times = initializeTimes();

  expect(global.fetchAPI).toHaveBeenCalledWith(expect.any(Date));
  expect(times).toEqual(["17:00", "18:00"]);

  delete global.fetchAPI;
});

test("updateTimes gets times for the selected date", () => {
  global.fetchAPI = jest.fn(() => ["19:00", "20:00"]);

  const result = updateTimes([], {
    type: "UPDATE_TIMES",
    date: "2026-10-30",
  });

  expect(global.fetchAPI).toHaveBeenCalledWith(
    new Date("2026-10-30")
  );

  expect(result).toEqual(["19:00", "20:00"]);

  delete global.fetchAPI;
});




test("allows the reservation form to be submitted", () => {
  const mockSubmit = jest.fn();

  render(<BookingForm availableTimes={["17:00"]} dispatch={() => {}} />);

  const submitButton = screen.getByRole("button", {
    name: /make your reservation/i,
  });

  fireEvent.change(screen.getByLabelText("Choose date"), {
    target: { value: "2026-10-30" },
  });

  expect(screen.getByLabelText("Choose date")).toHaveValue("2026-10-30");

  fireEvent.click(submitButton);
});





