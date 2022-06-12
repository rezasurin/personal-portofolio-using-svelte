<script>
  export let mouse = {x: 0, y: 0}
  let scrollY
  $: outerWidth = 0;

  const handleMouseEvent = (event) => {
    mouse.x = Math.round(event.clientX / outerWidth * 100)
    mouse.y = Math.round(event.clientY / outerWidth * 100)
  }
</script>


<svelte:window  bind:outerWidth bind:scrollY={scrollY}/>

<div on:mousemove={handleMouseEvent} style:--degree="{Math.random()*20+scrollY}deg" class="bg-gradient fit-to-screen ">
  <div>{mouse.x}</div>
  <slot></slot>
</div>

<style>
  .bg-gradient {
  background: linear-gradient(var(--degree),deepskyblue,darkviolet,blue);
  background-size: 180% 180%;
  animation: gradient-animation 18s ease infinite;
}

@keyframes gradient-animation {
  0% {
    background-position: 0% 50%;
  }
  50% {
    background-position: 100% 50%;
  }
  100% {
    background-position: 0% 50%;
  }
}
</style>