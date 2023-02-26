<script>
  import Card from "../../components/Card.svelte";
  import CardImage from "../../components/CardImage.svelte";
  import NavBar from "../../components/Nav.svelte";
  import Icon from "@iconify/svelte";

  // import myAva from './assets/images/my-avatar.png'
  import myFoto from "../../assets/images/my-foto-origin.jpg";

  import portoWeb3 from "../../assets/images/pro-web3.png";
  import portoLms from "../../assets/images/pro-lms.png";
  import portoGallery from "../../assets/images/pro-gallery.png";
  import portoEvent from "../../assets/images/pro-event.png";
  import portoFood from "../../assets/images/pro-food.png";

  import * as THREE from "three";
  import { Canvas } from "@threlte/core";
  import * as Threlte from "@threlte/core";
  import * as Extra from "@threlte/extras";

  let meshAva;

  let mouse = { x: 0, y: 0 };
  let scrollY;
  $: outerWidth = 0;
  let cameraBindXMouse = 0;
  let rotate = { x: 0 };

  const dataPorto = [
    {
      title: "Web3",
      src: portoWeb3,
      link: "https://reza-web3.netlify.app/",
      isMobile: false,
    },
    {
      title: "Learning Management System (LMS)",
      src: portoLms,
      link: null,
      isMobile: false,
    },
    {
      title: "Simple Unsplash Gallery",
      src: portoGallery,
      link: "https://unusual-gallery.web.app/",
      isMobile: false,
    },
    {
      title: "Company Event",
      src: portoEvent,
      link: null,
      isMobile: true,
    },
    {
      title: "[UI DESIGN] Food Ordering and Reservation ",
      src: portoFood,
      link: null,
      isMobile: true,
    },
  ];

  const handleClickImage = (event, data) => {
    // if (data) {
    //   window.open(data, '_blank')
    // }
    // let alertContent = document.getElementById('alert-content').classList
    // alertContent.replace("hidden","visible")
    // console.log(alertContent)
  };

  // let camera = new THREE.PerspectiveCamera()

  // if (avatarModel) {
  //   console.log(avatarModel, "<< CHECK")
  // }

  const handleMouseEvent = (event) => {
    cameraBindXMouse = Math.round((event.clientX / outerWidth) * 100);
  };
  export const ssr = false;
</script>

<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com" />
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin />
  <link
    href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap"
    rel="stylesheet"
  />
</svelte:head>

<svelte:window bind:outerWidth bind:scrollY />

<section
  id="home"
  class="flex flex-col  justify-end items-end  md:flex-row md:h-screen md:items-center md:justify-between py-10 px-16 rounded-b-3xl"
  on:mousemove={handleMouseEvent}
>
  <div
    class="flex justify-center  lg:w-[600px] w-full lg:h-[600px] h-96 bg-ed-200 z-20"
  >
    <Threlte.Canvas shadows>
      <Threlte.PerspectiveCamera fov={24} position={{ x: -2, y: 2, z: 8 }}>
        <Threlte.OrbitControls enableDamping />
      </Threlte.PerspectiveCamera>
      <Threlte.AmbientLight color={0xb7cbf4} intensity={1.2} />
      <Threlte.DirectionalLight
        color={0xb7cbf4}
        intensity={1.8}
        shadow
        position={{ x: cameraBindXMouse, y: 10, z: 3 }}
        target={{ x: 12 }}
      />

      <!-- ... -->
      <Extra.GLTF
        url="../assets/my-avatar.glb"
        position={{ x: 0, y: -0.75, z: 0 }}
        castShadow
      />
      <Threlte.Mesh
        position={{ y: -0.75 }}
        geometry={new THREE.CircleGeometry(0.6, 32)}
        rotation={{ x: -90 * (Math.PI / 180) }}
        material={new THREE.MeshStandardMaterial({ color: "white" })}
        receiveShadow
      />
      <!-- ... -->
    </Threlte.Canvas>
    <!-- <img src={myAva} alt="my-photo" class="block w-36 md:w-96 "/> -->
  </div>
  <div>
    <p class="lg:text-6xl text-xl font-bold text-white leading-tight">
      Hi there!
      <br />
      <span
        class="md:text-6xl text-4xl font-charis font-semibold tracking-tight text-white"
      >
        I am Reza Mahendra Surin.
      </span>
    </p>
    <p class="md:text-md text-sm text-white">
      Frontend Developer specializing in React.js, Vue.js, and Next.js.
    </p>

    <div class="fixed left-4 md:top-80 bottom-0">
      <ul>
        <a class="p-2" href="https://linkedin.com/in/rezasurin">
          <Icon icon="feather:linkedin" class="text-white text-2xl" />
        </a>
        <div class="vertical-line " />
      </ul>
    </div>
  </div>
</section>

<section id="about-me" class="md:h-screen py- md:px-16 mx-5 md:mx-0">
  <div
    class="flex md:flex-row flex-col-reverse justify-between mx-10 mb-10 items-center h-full"
  >
    <Card>
      <div class="flex flex-col w-full md:w-4/5">
        <p class="text-2xl font-bold mx-auto text-white">About me</p>
        <p class="text-md tracking-wider m-0 mt-2 text-white">
          A Front-end Developer and also passionate about UI/UX design. An
          outgoing, curious, creative, and hardworking person. Able and eager to
          learn new things for better improvement, love to face new challenges,
          and passionate about what i am doing.
          <br />
        </p>
        <p class="text-md tracking-wider m-0 mt-2 text-white">
          I have a BE in Engineering Physics from <span>
            <a
              href="https://telkomuniversity.ac.id"
              class="text-cyan-400 font-bold"
            >
              Telkom University
            </a>, Indonesia and
          </span>
          a Certificate of Full Stack Javascript Immersive from
          <span>
            <a class="text-cyan-400 font-bold" href="https://hacktiv8.com"
              >Hacktiv8</a
            >, Indonesia.
          </span>
        </p>
      </div>
    </Card>
    <div class=" block">
      <img
        src={myFoto}
        alt="my-photo"
        class="block md:w-80 w-36 mb-5 md:mb-0 rounded-full"
      />
    </div>
  </div>
</section>

<!-- <section id="work" class="h-screen py-16">
    <div class="flex min-h-screen justify-center">
      <div class="flex flex-col w-4/5">
        <p class="text-2xl font-bold mx-auto mt-16">Where I've Worked</p>
        <p class="text-md tracking-wider m-0 mt-2">
          Talented Frontend Developer with 1+ years experience, UI/UX enthusiast. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut doloremque repudiandae excepturi, minima totam reprehenderit explicabo voluptatem delectus ullam quo voluptatum nisi. Excepturi possimus modi nulla laboriosam in repellendus?
        </p>
      </div>
    </div>
  </section> -->

<section id="portofolio" class="mb-20">
  <div class="flex flex-col min-h-screen justify-center items-center px-12">
    <div class="flex flex-col w-11/12 justify-center">
      <p class="text-2xl font-bold mx-auto">Something I've Built</p>
      <p class="text-sm tracking-wider mx-auto mt-2">
        Several projects that I've develop.
      </p>
    </div>
    <div class="flex mt-4 flex-wrap justify-center">
      {#each dataPorto as data}
        <CardImage title={data.title}>
          <img
            src={data.src}
            alt="my-photo"
            id="porto-image"
            on:click|preventDefault={(e) => handleClickImage(e, data.link)}
            class=" {data.isMobile
              ? 'w-12 hover:w-32 '
              : 'w-40 hover:w-72 '} hover:absolute hover:grayscale-0 hover:animate-none grayscale ease-in-out duration-150 animate-pulse"
          />
        </CardImage>
      {/each}
      <!-- <div id="alert-content" class="relative p-12 hidden">
          <p id="alert-text">Warning text</p>
        </div> -->
    </div>
  </div>
</section>

<footer class="py-4">
  <div>
    <p class="text-center font-charis">© 2022 Reza Surin</p>
  </div>
</footer>

<!-- </Layout> -->
<style>
  :root {
    font-family: "Plus Jakarta Sans", sans-serif;
  }

  .bg-gradient {
    background: radial-gradient(
      at var(--bg-size),
      deepskyblue,
      darkviolet,
      blue
    );
    background-size: 180% 180%;
    /* animation: gradient-animation 18s ease infinite; */
  }

  @media (min-width: 480px) {
    h1 {
      max-width: none;
    }

    p {
      max-width: none;
    }
  }

  .fit-to-screen {
    width: 100%;
    min-height: calc(100vh + 20px);
  }

  input[type="text"],
  input[type="password"] {
    font: 14px sans-serif;
    display: block;
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
    border: 0;
    border-bottom: 1px solid rgb(186, 185, 185);
  }
  .gradient-background {
    background: linear-gradient(300deg, deepskyblue, darkviolet, blue);
    background-size: 180% 180%;
    animation: gradient-animation 18s ease infinite;
  }

  .vertical-line::after {
    content: "";
    display: block;
    width: 1px;
    height: 48vh;
    margin: 0px auto;
    background-color: rgb(255, 255, 255);
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
