<script>
  export let title;
</script>

<a class="card-container w-48 h-48 cursor-pointer flex flex-col justify-center items-center m-2"
href={`/portofolio/${title}`}
>
  <slot></slot>
  <div class="max-w-xs flex flex-col px-4 justify-center items-center">
    <p class="text-sm tracking-wider m-0 mt-2 text-center">{title}</p>
  </div>
</a>

<style>
  .card-container {
    border-radius: 8px;
    box-shadow:4px 4px 18px 3px rgba(0, 0, 0, 0.2);
    background-color: rgba(17, 25, 40, 0.75);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
  }
</style>