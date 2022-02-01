<script>
  let numbers = [1, 2, 3, 4];

  const addNumber = () => {
    numbers = [...numbers, numbers.length + 1];
  };

  $: sum = numbers.reduce((total, number) => total + number, 0);
</script>

<p>{numbers.join(" + ")} = {sum}</p>

<button on:click={addNumber}>Add a number</button>
