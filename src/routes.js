import Home from "./pages/home.svelte";
import Count from "./pages/count.svelte";
import UpdateArrays from "./pages/updateArrays.svelte";
import UseProps from "./pages/useProps.svelte";
import Conditional from "./pages/conditional.svelte";
import EachBlocks from "./pages/eachBlocks.svelte";
import UseAwait from "./pages/useAwait.svelte";
import DomEvents from "./pages/domEvents.svelte";
import Bindings from "./pages/bindings.svelte";

const routes = {
  "/": Home,
  "/count": Count,
  "/update-arrays": UpdateArrays,
  "/use-props": UseProps,
  "/conditional": Conditional,
  "/each-blocks": EachBlocks,
  "/use-await": UseAwait,
  "/dom-events": DomEvents,
  "/bindings": Bindings,
};

export default routes;
