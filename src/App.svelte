<script>
  let count = 0;

  const increment = () => {
    count = count + 1;
  };

  const decrement = () => {
    count = count - 1;
  };
</script>

<main>
  <h1>Count : {count}</h1>
  <button type="button" on:click={increment}>Increment</button>
  <button type="button" on:click={decrement}>Decrement</button>
</main>

<style>
</style>
