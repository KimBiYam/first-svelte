<script>
  const cats = [
    { id: "1", name: "Cat 1" },
    { id: "2", name: "Cat 2" },
    { id: "3", name: "Cat 3" },
  ];
</script>

<ul>
  {#each cats as cat}
    <li>
      <p>{cat.name}</p>
    </li>
  {/each}
</ul>
