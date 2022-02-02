<script>
  import Outer from "../components/domEvents/Outer.svelte";

  let m = { x: 0, y: 0 };

  const handleMousemove = (event) => {
    m.x = event.clientX;
    m.y = event.clientY;
  };

  const handleMessage = (event) => {
    alert(event.detail.text);
  };
</script>

<div on:mousemove={handleMousemove} class="box">
  The mouse position is {m.x} , {m.y}
</div>

<Outer on:myEvent={handleMessage} />

<style>
  .box {
    width: 50%;
    height: 50%;
    border: 1px solid black;
  }
</style>
