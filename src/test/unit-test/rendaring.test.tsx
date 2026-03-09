import Hero from "@/components/heros/hero";
import { testRenderProfile } from "./utils/render-profiler";
import { TestProvider } from "./utils/TestProvider";

testRenderProfile(Hero, {
  maxRenders: 3,
  maxTimeMs: 1000,
  wrapper: TestProvider,
  //   props: {
  //     name: "Fahim",
  //   },
});
