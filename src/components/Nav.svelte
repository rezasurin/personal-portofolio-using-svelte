<script>
  import sticky from "../js/sticky.js";
  import { fade, fly, blur } from "svelte/transition";
  import { onMount, onDestroy } from "svelte";
  import { listIcons } from "@iconify/svelte";
  export let showNavBar = true;
  // import {page} from '$app/stores'

  let menus = [
    {
      id: "home",
      page: "Home",
      active: true,
    },
    {
      id: "about-me",
      page: "About me",
      active: false,
    },
    // {
    //   id: "work",
    //   page: "Services",
    //   active: false,
    // },
    {
      id: "portofolio",
      page: "Portofolio",
      active: false,
    },
  ];

  let y;
  $: outerHeight = 0;
  $: current = "";

  function checkRoute(sections) {
    window.onscroll = () => {
      sections.forEach((section) => {
        const sectionTop = section.offsetTop;
        const sectionBottom = sectionTop + section.scrollHeight;
        const viewportTop = window.scrollY;
        const viewportBottom = viewportTop + window.innerHeight;

        if (sectionBottom > viewportTop && sectionTop < viewportBottom) {
          current = section.getAttribute("id");
        }
      });

      if (window.scrollY > y) {
        showNavBar = true;
      } else {
        showNavBar = false;
      }
    };
  }

  onMount(async () => {
    const sections = document.querySelectorAll("section");
    checkRoute(sections);
  });

  onDestroy(() => {
    // window.onscroll = () => {};
  });
</script>

<svelte:window bind:outerHeight bind:scrollY={y} />
<nav
  class:scrolled={showNavBar}
  in:fade={{ delay: 250, duration: 300 }}
  out:fade={{ delay: 250, duration: 300 }}
>
  <div class="hidden md:flex items-center justify-center z-10 ">
    <div
      class="space-x-4 bg-transparent fixed flex justify-center items-center p-4  mt-12 glass-effect md:block"
    >
      <ul class="flex flex-row mt-4">
        {#each menus as menu, i}
          <li>
            <a
              id={menu.id}
              href="#{menu.id}"
              class="block {menu.id} pl-3 text-lg {current == menu.id
                ? 'font-bold'
                : ''} hover:text-xl hover:font-bold  ease-in-out duration-200  text-white"
              >{menu.page}</a
            >
          </li>
        {/each}
      </ul>
    </div>
  </div>
</nav>

<style>
  .gradient-background {
    background: linear-gradient(300deg, deepskyblue, darkviolet, blue);
    background-size: 180% 180%;
    animation: gradient-animation 18s ease infinite;
  }

  .scrolled {
    transform: translate(0, calc(-100% - 1rem));
    scroll-behavior: smooth;
  }
</style>
