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


test("Guests input has a maximum of 10", () => {
  render(
    <BookingForm
      availableTimes={["17:00"]}
      dispatch={() => {}}
    />
  );

  const guestsInput = screen.getByLabelText("Number of Guests");

  expect(guestsInput).toHaveAttribute("max", "10");
});


test("Guests input has a minimum of 1", () => {
  render(
    <BookingForm
      availableTimes={["17:00"]}
      dispatch={() => {}}
    />
  );

  const guestsInput = screen.getByLabelText("Number of Guests");

  expect(guestsInput).toHaveAttribute("min", "1");
});


test("Date input is required", () => {
  render(
    <BookingForm
      availableTimes={["17:00"]}
      dispatch={() => {}}
    />
  );

  const dateInput = screen.getByLabelText("Choose date");

  expect(dateInput).toBeRequired();
});

test("Time selection is required", () => {
  render(
    <BookingForm
      availableTimes={["17:00"]}
      dispatch={() => {}}
    />
  );

  const timeInput = screen.getByLabelText("Choose Time");

  expect(timeInput).toBeRequired();
});

test("Occasion selection is required", () => {
  render(
    <BookingForm
      availableTimes={["17:00"]}
      dispatch={() => {}}
    />
  );

  const occasionInput = screen.getByLabelText("Choose Occasion");

  expect(occasionInput).toBeRequired();
});

test("Form is invalid when guests exceed 10", () => {
  render(
    <BookingForm
      availableTimes={["17:00"]}
      dispatch={() => {}}
    />
  );

  const guestsInput = screen.getByLabelText("Number of Guests");

  fireEvent.change(guestsInput, {
    target: { value: "11" },
  });

  expect(guestsInput.validity.rangeOverflow).toBe(true);
});

test("Form is invalid when guests are below 1", () => {
  render(
    <BookingForm
      availableTimes={["17:00"]}
      dispatch={() => {}}
    />
  );

  const guestsInput = screen.getByLabelText("Number of Guests");

  fireEvent.change(guestsInput, {
    target: { value: "0" },
  });

  expect(guestsInput.validity.rangeUnderflow).toBe(true);
});

test("Submits the form with valid reservation details", () => {
  const mockSubmit = jest.fn();

  render(
    <BookingForm
      availableTimes={["17:00"]}
      dispatch={() => {}}
      submitForm={mockSubmit}
    />
  );

  fireEvent.change(screen.getByLabelText("Choose date"), {
    target: { value: "2026-11-15" },
  });

  fireEvent.click(
    screen.getByRole("button", { name: /make your reservation/i })
  );

  expect(mockSubmit).toHaveBeenCalledWith({
    date: "2026-11-15",
    time: "17:00",
    guests: 2,
    occasion: "Birthday",
  });
});

test("Does not submit when guests exceed 10", () => {
  const mockSubmit = jest.fn();

  render(
    <BookingForm
      availableTimes={["17:00"]}
      dispatch={() => {}}
      submitForm={mockSubmit}
    />
  );

  fireEvent.change(screen.getByLabelText("Choose date"), {
    target: { value: "2026-11-15" },
  });

  fireEvent.change(screen.getByLabelText("Number of Guests"), {
    target: { value: "11" },
  });

  fireEvent.click(
    screen.getByRole("button", { name: /make your reservation/i })
  );

  expect(mockSubmit).not.toHaveBeenCalled();
});

test("Does not submit when guests are below 1", () => {
  const mockSubmit = jest.fn();

  render(
    <BookingForm
      availableTimes={["17:00"]}
      dispatch={() => {}}
      submitForm={mockSubmit}
    />
  );

  fireEvent.change(screen.getByLabelText("Choose date"), {
    target: { value: "2026-11-15" },
  });

  fireEvent.change(screen.getByLabelText("Number of Guests"), {
    target: { value: "0" },
  });

  fireEvent.click(
    screen.getByRole("button", { name: /make your reservation/i })
  );

  expect(mockSubmit).not.toHaveBeenCalled();
});





