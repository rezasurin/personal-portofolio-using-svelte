<script>
  import { portoDetail } from "../../../stores";

  let porto

  portoDetail.subscribe(value => {
    porto = value
  })

  console.log(porto, "<< CEK PORTO DETAIL")
</script>

<!-- <div> -->
  
  <div class="w-4/6 p- rounded-lg h-auto bg-white h-screen">
    <iframe src="{porto?.notionUrl}"
    style="width: 100%; height: 100%; border: 0; padding: 0" class="bg-white rounded-lg"></iframe>

  </div>
<!-- </div> -->