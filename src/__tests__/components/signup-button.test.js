/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";

import React from "react";
import SignupButton from "../../components/auth0buttons/signup-button";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup();
});
test("should render SignupButton component", () => {
  render(<SignupButton />);
  const signupButtonElement = screen.getByTestId("signup-btn-1");
  expect(signupButtonElement).toBeInTheDocument();
});
