<script>
  let scoops = 1;
  let flavours = ["Mint choc chip"];

  const size = ["One scoop", "Two scoops", "Three scoops"];
  const menu = ["Cookies and cream", "Mint choc chip", "Raspberry ripple"];

  function join(flavours) {
    if (flavours.length === 1) return flavours[0];
    return `${flavours.slice(0, -1).join(", ")} and ${
      flavours[flavours.length - 1]
    }`;
  }
</script>

<h2>Size</h2>

{#each size as scoop, i}
  <label>
    <input type="radio" bind:group={scoops} name="scoops" value={i} />
    {scoop}
  </label>
{/each}

<h2>Flavours</h2>

{#each menu as flavour}
  <label>
    <input
      type="checkbox"
      bind:group={flavours}
      name="flavours"
      value={flavour}
    />
    {flavour}
  </label>
{/each}

{#if flavours.length === 0}
  <p>Please select at least one flavour</p>
{:else if flavours.length > scoops}
  <p>Can't order more flavours than scoops!</p>
{:else}
  <p>
    You ordered {scoops}
    {scoops === 1 ? "scoop" : "scoops"}
    of {join(flavours)}
  </p>
{/if}
