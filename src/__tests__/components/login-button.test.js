/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";

import React from "react";
import LoginButton from "../../components/auth0buttons/login-button";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup();
});

test("should render LoginButton component", () => {
  render(<LoginButton />);
  const loginButtonElement = screen.getByTestId("login-btn-1");
  expect(loginButtonElement).toBeInTheDocument();
});
