<script>

import { page } from '$app/stores'

console.log($page.params.name, "<< CHECK PAGE  ")

</script>

<div class="pt-10 px-10">
 this is layout for detail page
  <slot />
</div>