import { PasswordInput } from "@/design-system/components/inputs/password-input/password-input";
import { testRenderProfile } from "@/test/unit-test/utils/render-profiler";
import { TestProvider } from "@/test/unit-test/utils/TestProvider";
import { render, screen, fireEvent } from "@testing-library/react";
import React from "react";

testRenderProfile(PasswordInput, {
  maxRenders: 3,
  maxTimeMs: 1000,
  wrapper: TestProvider,
  props: {
    label: "string",
    error: "string",
    required: true,
    wrapperClassName: "string",
  },
});

describe("PasswordInput Component", () => {
  it("renders input with type password by default", () => {
    render(<PasswordInput />);

    const input = screen.getByRole("textbox");
    console.log(input);
    expect(input).toHaveAttribute("type", "password");
  });

  it("renders label when provided", () => {
    render(<PasswordInput label="Password" id="pass" />);

    expect(screen.getByText("Password")).toBeInTheDocument();
  });

  it("shows required asterisk when required prop is true", () => {
    render(<PasswordInput label="Password" required />);

    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("toggles password visibility when button clicked", () => {
    render(<PasswordInput />);

    const input = screen.getByRole("textbox");
    console.log({ input });
    const toggleBtn = screen.getByLabelText("Toggle password visibility");
    expect(input).toHaveAttribute("type", "password");

    fireEvent.click(toggleBtn);
    expect(input).toHaveAttribute("type", "text");

    fireEvent.click(toggleBtn);
    expect(input).toHaveAttribute("type", "password");
  });

  it("renders error message when error prop passed", () => {
    render(<PasswordInput error="Password is required" />);

    expect(screen.getByText("Password is required")).toBeInTheDocument();
  });

  it("applies error border class when error exists", () => {
    render(<PasswordInput error="error" />);

    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("border-red-new");
  });

  it("forwards additional input props correctly", () => {
    render(<PasswordInput placeholder="Enter pass" />);

    expect(screen.getByPlaceholderText("Enter pass")).toBeInTheDocument();
  });

  it("supports ref forwarding", () => {
    const ref = React.createRef<HTMLInputElement>();

    render(<PasswordInput ref={ref} />);

    expect(ref.current).toBeInstanceOf(HTMLInputElement);
  });
});
