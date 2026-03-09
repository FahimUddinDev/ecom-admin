import VerifyCodeInput from "@/design-system/components/verify-otp/verify-codeInput";
import { testRenderProfile } from "../../utils/render-profiler";
import { TestProvider } from "../../utils/TestProvider";

testRenderProfile(VerifyCodeInput, {
  maxRenders: 3,
  maxTimeMs: 1000,
  wrapper: TestProvider,
  props: {
    length: 6,
    value: "string",
    onChange: (value: string) => {
      console.log(value);
    },
    disabled: false,
    autoFocus: true,
    className: "string",
    inputClassName: "string",
  },
});
