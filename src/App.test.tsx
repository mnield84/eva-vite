import { describe, it, expect } from "vitest";
import { render, screen } from "@testing-library/react";
import axios from "axios";
import userEvent from "@testing-library/user-event";
import { QueryClient, QueryClientProvider } from "react-query";
import App from "./App";

const queryClient = new QueryClient();

describe("App", () => {
  it("Create user to be in document", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    );
    expect(screen.getByText("Create user")).toBeInTheDocument();
  });

  it("renders the form inputs", () => {
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    );

    expect(screen.getByLabelText("First name (required)")).toBeInTheDocument();
    expect(screen.getByLabelText("Last name (required)")).toBeInTheDocument();
    expect(screen.getByLabelText("Age (required)")).toBeInTheDocument();
    expect(screen.getByLabelText("Email (required)")).toBeInTheDocument();
  });

  it("submits the form", async () => {
    render(
      <QueryClientProvider client={queryClient}>
        <App />
      </QueryClientProvider>
    );

    const firstNameInput = screen.getByLabelText("First name (required)");
    const lastNameInput = screen.getByLabelText("Last name (required)");
    const ageInput = screen.getByLabelText("Age (required)");
    const emailInput = screen.getByLabelText("Email (required)");
    const submitButton = screen.getByRole("button", { name: "Create user" });

    // Fill in the form fields
    userEvent.type(firstNameInput, "John");
    userEvent.type(lastNameInput, "Doe");
    userEvent.type(ageInput, "25");
    userEvent.type(emailInput, "john.doe@example.com");

    // Submit the form
    userEvent.click(submitButton);
  });
  it("should fetch user data", async () => {
    const response = await axios.get(
      "https://mockend.com/api/pgilgunn/coding-test/users"
    );
    const users = response.data;

    expect(response.status).toBe(200);
    expect(users.length).toBeGreaterThan(0);
  });
});
