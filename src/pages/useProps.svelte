<script>
  import FirstComponent from "../components/firstComponent.svelte";
  import Info from "../components/info.svelte";

  const user = {
    name: "ChangHyun",
    age: 29,
    email: "hot9998@naver.com",
  };
</script>

<FirstComponent name="Chang Hyun" />
<FirstComponent />
<Info {...user} />
