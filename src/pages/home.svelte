<script>
  import { link } from "svelte-spa-router";
</script>

<main>
  <ul>
    <li>
      <a href="/count" use:link>Count</a>
    </li>
    <li>
      <a href="/update-arrays" use:link>UpdateArrays</a>
    </li>
    <li>
      <a href="/use-props" use:link>UseProps</a>
    </li>
    <li>
      <a href="/conditional" use:link>Conditional</a>
    </li>
    <li>
      <a href="/each-blocks" use:link>EachBlocks</a>
    </li>
    <li>
      <a href="/use-await" use:link>UseAwait</a>
    </li>
    <li>
      <a href="/dom-events" use:link>DomEvents</a>
    </li>
  </ul>
</main>
