<script>
  const randomPromise = async () => {
    await new Promise((resolve) => setTimeout(resolve, 1000));

    return new Promise((resolve) => {
      if (Math.random() >= 0.5) throw new Error("error");

      resolve(true);
    });
  };

  let promise = randomPromise();

  const handleClick = () => {
    promise = randomPromise();
  };
</script>

<button type="button" on:click={handleClick}>RandomPromise</button>

{#await promise}
  <p>...loading</p>
{:then result}
  <p>result : {result.toString()}</p>
{:catch error}
  <p style="color: red">{error}</p>
{/await}
