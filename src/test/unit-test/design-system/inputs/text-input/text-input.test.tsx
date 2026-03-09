import { TextInput } from "@/design-system/components/inputs/text-input/text-input";
import { testRenderProfile } from "@/test/unit-test/utils/render-profiler";
import { TestProvider } from "@/test/unit-test/utils/TestProvider";
import { render, screen, fireEvent } from "@testing-library/react";

testRenderProfile(TextInput, {
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

describe("TextInput Component", () => {
  it("renders input element", () => {
    render(<TextInput id="name" />);
    expect(screen.getByRole("textbox")).toBeInTheDocument();
  });

  it("renders label when provided", () => {
    render(<TextInput id="email" label="Email" />);
    expect(screen.getByText("Email")).toBeInTheDocument();
  });

  it("shows required asterisk when required is true", () => {
    render(<TextInput id="username" label="Username" required />);
    expect(screen.getByText("*")).toBeInTheDocument();
  });

  it("renders error message when error prop is passed", () => {
    render(<TextInput id="phone" error="Invalid phone" />);
    expect(screen.getByText("Invalid phone")).toBeInTheDocument();
  });

  it("applies error class to input when error exists", () => {
    render(<TextInput id="age" error="Required" />);
    const input = screen.getByRole("textbox");
    expect(input).toHaveClass("border-red-new");
  });

  it("forwards value and allows typing", () => {
    render(<TextInput id="city" />);
    const input = screen.getByRole("textbox") as HTMLInputElement;

    fireEvent.change(input, { target: { value: "Dhaka" } });
    expect(input.value).toBe("Dhaka");
  });

  it("accepts and applies custom className", () => {
    render(<TextInput id="country" className="custom-class" />);
    expect(screen.getByRole("textbox")).toHaveClass("custom-class");
  });

  it("associates label with input via htmlFor", () => {
    render(<TextInput id="password" label="Password" />);
    const label = screen.getByText("Password");
    expect(label).toHaveAttribute("for", "password");
  });
});
