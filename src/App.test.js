import { render, screen } from '@testing-library/react';
import App from './App';
import { BrowserRouter } from "react-router-dom";



test("displays the Little Lemon heading", () => {
  global.fetchAPI = jest.fn(() => ["17:00", "18:00"]);

  render(
    <BrowserRouter>
      <App />
    </BrowserRouter>
  );

  const heading = screen.getByRole("heading", {
    level: 1,
    name: /little lemon/i,
  });

  expect(heading).toBeInTheDocument();

  delete global.fetchAPI;
});


 




