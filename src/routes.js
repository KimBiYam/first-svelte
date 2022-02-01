import Home from "./pages/home.svelte";
import Count from "./pages/count.svelte";
import UpdateArrays from "./pages/updateArrays.svelte";

const routes = {
  "/": Home,
  "/count": Count,
  "/update-arrays": UpdateArrays,
};

export default routes;
