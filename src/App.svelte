<script>
  import logo from './assets/svelte.png'
  import Counter from './lib/Counter.svelte'
  import Card from './components/Card.svelte'
  import NavBar from './components/Nav.svelte'
  import myFoto from './assets/images/my-foto-origin.jpg'
  import Nav from './components/Nav.svelte'
  import Particle from './components/Particle.svelte';
  import Icon from '@iconify/svelte';

  import Layout from './components/Layout.svelte'
  let mouse = {x: 0, y: 0}
  let scrollY
  $: outerWidth = 0;

 
</script>


<svelte:head>
  <link rel="preconnect" href="https://fonts.googleapis.com">
  <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
  <link href="https://fonts.googleapis.com/css2?family=Plus+Jakarta+Sans:ital,wght@0,200;0,300;0,400;0,500;0,600;0,700;0,800;1,200;1,300;1,400;1,500;1,600;1,700;1,800&display=swap" rel="stylesheet">
</svelte:head>

<svelte:window  bind:outerWidth bind:scrollY={scrollY}/>

<NavBar />
<Layout bind:mouse={mouse}>

  <div class="flex items-center justify-between p-20 rounded-b-3xl" >
    <!-- <Card>
        <div>
          <h2>Login</h2>
        </div>
        <div style="display: flex; flex-direction: column;">
          <form style="display: flex; flex-direction: column; align-items: start;gap: 2;">
            <div style="display: flex; flex-direction: column; align-items:start;">
              <label for="username" style="margin: 8px 0;">Username</label>
              <input name="username" id="username" type="text" />
            </div>
            <div style="display: flex; flex-direction: column; align-items:start;">
              <label for="password" >Password</label>
              <input name="password" id="password" type="password" />
            </div>
  
          </form>
        </div>
    </Card> -->
  
    <!-- headline -->
    <div>
      <p>{mouse.x+100} ---- {mouse.y} --- {scrollY}</p>
      <p class="text-6xl font-bold text-white leading-tight">
        Hi there!
        <br />
        <span class="text-6xl font-charis font-semibold tracking-tight font-charis text-white">
          I am Reza Mahendra Surin.
        </span>
      </p>
      <p class="text-md text-white">
        Frontend Developer specializing in React.js, Vue.js, and Next.js.
      </p>
  
      <div class="fixed left-4 top-80">
        <ul>
          <a class="p-2">
            <Icon icon="feather:linkedin" class="text-white text-2xl" />
          </a>
          <div class="vertical-line " />
        </ul>
      </div>
      
    </div>
    <div class=" block">
      <img src={myFoto} class="block w-80 h-80 rounded-full"/>
    </div>
  </div>
  
  <section id="section-about-me">
    <div class="flex justify-end mx-20 mb-10">
      <Card>
        <div class="flex flex-col w-4/5">
          <p class="text-2xl font-bold mx-auto ">About me</p>
          <p class="text-md tracking-wider m-0 mt-2 text-white">
            Talented Frontend Developer with 1+ years experience, UI/UX enthusiast.
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut doloremque repudiandae excepturi, minima totam reprehenderit explicabo voluptatem delectus ullam quo voluptatum nisi. Excepturi possimus modi nulla laboriosam in repellendus?
          </p>
        </div>
      </Card>
    </div>
  </section>
  
  <section id="section-work">
    <div class="flex min-h-screen justify-center">
      <div class="flex flex-col w-4/5">
        <p class="text-2xl font-bold mx-auto mt-16">Where I've Worked</p>
        <p class="text-md tracking-wider m-0 mt-2">
          Talented Frontend Developer with 1+ years experience, UI/UX enthusiast. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut doloremque repudiandae excepturi, minima totam reprehenderit explicabo voluptatem delectus ullam quo voluptatum nisi. Excepturi possimus modi nulla laboriosam in repellendus?
        </p>
      </div>
    </div>
  </section>
  
  
  <section id="section-project">
    <div class="flex min-h-screen justify-center">
      <div class="flex flex-col w-4/5">
        <p class="text-2xl font-bold mx-auto mt-16">Something I've Built</p>
        <p class="text-md tracking-wider m-0 mt-2">
          Talented Frontend Developer with 1+ years experience, UI/UX enthusiast. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quod aut doloremque repudiandae excepturi, minima totam reprehenderit explicabo voluptatem delectus ullam quo voluptatum nisi. Excepturi possimus modi nulla laboriosam in repellendus?
        </p>
      </div>
    </div>
  </section>
</Layout>



<style>
  :root {
    font-family: 'Plus Jakarta Sans', sans-serif;
  }

  .bg-gradient {
    background: radial-gradient(at var(--bg-size),deepskyblue,darkviolet,blue);
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

  input[type="text"], input[type="password"] {
    font: 14px sans-serif;
    display: block;
    box-sizing: border-box;
    width: 100%;
    padding: 10px;
    border: 0;
    border-bottom: 1px solid rgb(186, 185, 185);
  }
  .gradient-background {
  background: linear-gradient(300deg,deepskyblue,darkviolet,blue);
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
