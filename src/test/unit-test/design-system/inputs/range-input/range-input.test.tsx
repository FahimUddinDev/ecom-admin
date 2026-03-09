import RangeInput from "@/design-system/components/inputs/range-input/range-input";
import { testRenderProfile } from "@/test/unit-test/utils/render-profiler";
import { TestProvider } from "@/test/unit-test/utils/TestProvider";

testRenderProfile(RangeInput, {
  maxRenders: 3,
  maxTimeMs: 1000,
  wrapper: TestProvider,
  props: {
    label: "string",
    min: 1,
    max: 500,
    step: 3,
    value: [10, 400],
    defaultValue: [10, 400],
    onChange: (value: [number, number]) => {
      console.log(value);
    },
    className: "string",
    disabled: false,
  },
});
