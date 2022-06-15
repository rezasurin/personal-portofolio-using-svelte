<script>
  import sticky from "../js/sticky.js";
  import { fade, fly, blur } from "svelte/transition";
  import { onMount, onDestroy } from "svelte";
  import { listIcons } from "@iconify/svelte";
  export let showNavBar = true;

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
  let selected = menus[0];
  let selectedIndex = 0;
  const sections = document.querySelectorAll("section");

  let y;
  $: outerHeight = 0;

  onMount(() => {
    window.onscroll = () => {
      let current = "";
      // console.log(document.querySelectorAll("nav div ul li a"));
      sections.forEach((section) => {
        // console.log(current)
        const sectionTop = section.offsetTop;
        if (window.scrollY >= sectionTop - 20) {
          // console.log(section.getAttribute("id"), sectionTop, window.scrollY)
          current = section.getAttribute("id")
        }
      });
      // menus.forEach((menu, idx) => {
      //       if (menu.id == current ) {
      //         menu.active = true
      //       } else {
      //         console.log(menu.id)

      //         menu.active = false
      //       }
      //     })
      document.querySelectorAll("nav div ul li a").forEach(menu => {
        menu.classList.remove('font-bold')
        if (menu.classList.contains(current)) {
          menu.classList.add("font-bold");
        } 
        // console.log(menu.classList.contains(current))
      })

      if (window.scrollY > y) {
        showNavBar = true;
      } else {
        showNavBar = false;
      }
    };
  });

  onDestroy(() => {
    window.onscroll = () => {};
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
              id={i}
              href="#{menu.id}"
              class="block {menu.id} pl-3 text-lg hover:text-xl hover:font-bold  ease-in-out duration-200  text-white">{menu.page}</a
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
