/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";

import React from "react";
import LogoutButton from "../../components/auth0buttons/logout-button";
import { render, screen, cleanup } from "@testing-library/react";

afterEach(() => {
  cleanup();
});

test("should render LogoutButton component", () => {
  render(<LogoutButton />);
  const logoutButtonElement = screen.getByTestId("logout-btn-1");
  expect(logoutButtonElement).toBeInTheDocument();
});
