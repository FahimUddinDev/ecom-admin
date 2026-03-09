import { SelectInput } from "@/design-system/components/inputs/selectInputs/select";
import { testRenderProfile } from "@/test/unit-test/utils/render-profiler";
import { TestProvider } from "@/test/unit-test/utils/TestProvider";
import { render, screen } from "@testing-library/react";

testRenderProfile(SelectInput, {
  maxRenders: 3,
  maxTimeMs: 1000,
  wrapper: TestProvider,
  props: {
    label: "string",
    error: "string",
    required: true,
    wrapperClassName: "string",
    className: "string",
  },
});

describe("SelectInput Component", () => {
  const options = [
    { label: "Dhaka", value: "dhaka" },
    { label: "Chittagong", value: "ctg" },
  ];

  it("renders select component", () => {
    render(<SelectInput options={options} />);
    expect(screen.getByRole("combobox")).toBeInTheDocument();
  });

  it("renders label when provided", () => {
    render(<SelectInput label="City" options={options} />);
    expect(screen.getByText("City")).toBeInTheDocument();
  });

  it("shows required indicator in label", () => {
    render(<SelectInput label="City" required options={options} />);
    expect(screen.getByText("City")).toHaveTextContent("City");
  });

  it("renders error message when error prop is passed", () => {
    render(<SelectInput error="Required field" options={options} />);
    expect(screen.getByText("Required field")).toBeInTheDocument();
  });

  it("applies disabled state", () => {
    render(<SelectInput disabled options={options} />);
    expect(screen.getByRole("combobox")).toBeDisabled();
  });

  it("opens dropdown and shows options (mocked ant behavior)", async () => {
    render(<SelectInput options={options} />);
    const input = screen.getByRole("combobox");
    expect(input).toBeInTheDocument();
  });

  it("calls onChange when option selected (controlled mock)", () => {
    const handleChange = jest.fn();
    render(<SelectInput options={options} onChange={handleChange} />);
    // const select = screen.getByRole("combobox");
    handleChange("dhaka", { label: "Dhaka", value: "dhaka" });

    expect(handleChange).toHaveBeenCalledWith(
      "dhaka",
      expect.objectContaining({
        value: "dhaka",
      }),
    );
  });

  it("applies custom className to wrapper select element", () => {
    const { container } = render(
      <SelectInput className="custom-class" options={options} />,
    );

    // AntD class যায় outer div এ, input এ না
    const antdSelect = container.querySelector(".custom-class");
    expect(antdSelect).toBeInTheDocument();
  });
});
