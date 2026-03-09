import { RatingInput } from "@/design-system/components/rating/rating";
import { testRenderProfile } from "../../utils/render-profiler";
import { TestProvider } from "../../utils/TestProvider";

testRenderProfile(RatingInput, {
  maxRenders: 3,
  maxTimeMs: 1000,
  wrapper: TestProvider,
  props: {
    className: "string",
    starBg: "string",
    starColor: "string",
    starHoverScale: "string",
  },
});
