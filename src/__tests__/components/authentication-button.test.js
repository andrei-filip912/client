/**
 * @jest-environment jsdom
 */
import "@testing-library/jest-dom";

import React from "react";
import AuthenticationButton from "../../components/auth0buttons/authentication-button";
import { render, screen, cleanup } from "@testing-library/react";
import { useAuth0 } from "@auth0/auth0-react";

afterEach(() => {
  cleanup();
});

//mocking user
const user = {
  email: "johndoe@me.com",
  email_verified: true,
  sub: "google-oauth2|12345678901234",
};

//mocking auth 0
jest.mock("@auth0/auth0-react");
useAuth0
.mockReturnValue({
  isAuthenticated: true,
  user,
  logout: jest.fn(),
  loginWithRedirect: jest.fn(),
  getAccessTokenWithPopup: jest.fn(),
  getAccessTokenSilently: jest.fn(),
  getIdTokenClaims: jest.fn(),
  loginWithPopup: jest.fn(),
  isLoading: false,
})
  .mockReturnValueOnce({
    isAuthenticated: false,
    user,
    logout: jest.fn(),
    loginWithRedirect: jest.fn(),
    getAccessTokenWithPopup: jest.fn(),
    getAccessTokenSilently: jest.fn(),
    getIdTokenClaims: jest.fn(),
    loginWithPopup: jest.fn(),
    isLoading: false,
  });

test("should render LoginButton if there is no logged in user", () => {
  render(<AuthenticationButton />);
  const loginButtonElement = screen.getByTestId("login-btn-1");
  expect(loginButtonElement).toBeInTheDocument();
});

test("should render LogoutButton if there is a logged in user", () => {
  render(<AuthenticationButton />);
  const loginButtonElement = screen.getByTestId("logout-btn-1");
  expect(loginButtonElement).toBeInTheDocument();
});

test("should render AuthenticationButton component", () => {
  render(<AuthenticationButton />);
  const authButtonElement = screen.getByTestId("auth-btn-1");
  expect(authButtonElement).toBeInTheDocument();
});
