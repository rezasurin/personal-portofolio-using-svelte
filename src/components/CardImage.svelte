<script>
  export let title;
</script>

<div class="card-container hover:text-blue-500 min-w-[240px] min-h-12 p-8 relative flex flex-col justify-center items-center m-2"

>
  <slot />
</div>

<style>
  .card-container {
    border-radius: 8px;
    box-shadow:4px 4px 18px 3px rgba(0, 0, 0, 0.2);
    background-color: rgba(17, 25, 40, 0.75);
    border-radius: 12px;
    border: 1px solid rgba(255, 255, 255, 0.125);
  }
</style>