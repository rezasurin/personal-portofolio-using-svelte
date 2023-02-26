<script>

import { page } from '$app/stores'

console.log($page.params.name, "<< CHECK PAGE  ")

</script>

<div class="flex justify-center">
  <!-- <div class="glass-effect flex justify-center max-w-2xl p-4 my-4">
    <p class="font-bold text-white md:text-xl text-lg">
      {
        $page.params.name
      }
    </p>
  </div> -->

</div>
<div class="py-8 px-10 flex justify-center">
  <slot />
</div>