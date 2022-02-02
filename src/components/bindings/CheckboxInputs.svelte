<script>
  let checked = false;
</script>

<label>
  <input type="checkbox" bind:checked />
  Check
</label>

{#if checked}
  <p>is checked!</p>
{:else}
  <p>is not checked!</p>
{/if}

<button disabled={!checked}> Button </button>
