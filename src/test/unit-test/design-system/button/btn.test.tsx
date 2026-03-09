import { Button } from "@/design-system/components/button/btn";
import { testRenderProfile } from "../../utils/render-profiler";
import { TestProvider } from "../../utils/TestProvider";

testRenderProfile(Button, {
  maxRenders: 3,
  maxTimeMs: 1000,
  wrapper: TestProvider,
  props: {
    variant: "primary",
    size: "sm",
    className: "",
  },
});
