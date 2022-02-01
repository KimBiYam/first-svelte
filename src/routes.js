import Home from "./pages/home.svelte";
import Count from "./pages/count.svelte";
import UpdateArrays from "./pages/updateArrays.svelte";
import UseProps from "./pages/useProps.svelte";
import Conditional from "./pages/conditional.svelte";

const routes = {
  "/": Home,
  "/count": Count,
  "/update-arrays": UpdateArrays,
  "/use-props": UseProps,
  "/conditional": Conditional,
};

export default routes;
