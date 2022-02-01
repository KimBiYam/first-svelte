<script>
  const user = {
    loggedIn: false,
  };

  const toggle = () => {
    user.loggedIn = !user.loggedIn;
  };
</script>

<p>User.loggedIn : {user.loggedIn}</p>

{#if user.loggedIn}
  <button on:click={toggle}>Log out</button>
{:else}
  <button on:click={toggle}>Log in</button>
{/if}
