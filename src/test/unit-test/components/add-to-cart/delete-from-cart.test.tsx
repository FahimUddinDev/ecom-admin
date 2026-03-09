import DeleteFromCart from "@/components/add-to-cart/delete-from-cart";
import { testRenderProfile } from "../../utils/render-profiler";
import { TestProvider } from "../../utils/TestProvider";

testRenderProfile(DeleteFromCart, {
  maxRenders: 3,
  maxTimeMs: 1000,
  wrapper: TestProvider,
  props: {
    isActive: true,
    closeModal: () => {},
  },
});
