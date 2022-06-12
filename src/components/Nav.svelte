
<script>
  import sticky from '../js/sticky.js';
  import {fade, fly, blur} from 'svelte/transition'
  import {onMount, onDestroy} from 'svelte'
  export let showNavBar = true;

    
    let y;
    $: outerHeight = 0

    onMount(() => {
        window.onscroll = () => {
            if (window.scrollY > y) {
              showNavBar = true
            } else {
              showNavBar = false
            }
        }
    })
    
    onDestroy(() => {
        window.onscroll = () => {}
    })

    function scrollIntoView({ target }) {
		const el = document.querySelector(target.getAttribute('href'));
		if (!el) return;
    el.scrollIntoView({
      behavior: 'smooth'
    });
  }
</script>
<svelte:window  bind:outerHeight bind:scrollY={y}/>
<nav
class:scrolled={showNavBar}
in:fade="{{delay: 250, duration: 300}}"
out:fade="{{delay: 250, duration: 300}}"
>
  <div class="hidden md:flex items-center justify-center z-10 ">
    <div class="space-x-4 bg-transparent fixed flex justify-center items-center p-4  mt-12 glass-effect">
      <a href="#section-about-me" on:click|preventDefault={scrollIntoView} class="text-lg hover:text-xl ease-in-out duration-200 font-bold text-white">About me</a>
      <a href="#section-work" on:click|preventDefault={scrollIntoView} class="text-lg hover:text-xl ease-in-out duration-200 font-medium text-white">Portofolio</a>
      <a href="#section-project" on:click|preventDefault={scrollIntoView} class="text-lg hover:text-xl ease-in-out duration-200 font-medium text-white">Services</a>
    </div>
  </div>
</nav>

<style>

.gradient-background {
  background: linear-gradient(300deg,deepskyblue,darkviolet,blue);
  background-size: 180% 180%;
  animation: gradient-animation 18s ease infinite;
}

.scrolled {
    transform: translate(0,calc(-100% - 1rem));
}
</style>