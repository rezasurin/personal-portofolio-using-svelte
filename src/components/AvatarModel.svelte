<script>
  import { onMount } from 'svelte'
  import { GLTFLoader } from 'three/examples/jsm/loaders/GLTFLoader'
  import myAvatar from '../assets/my-avatar.glb'
  import * as SC from 'svelte-cubed'

  let myAvatarModel = null

  function loadGLTF () {
    const loader = new GLTFLoader()
    return loader.loadAsync(myAvatar)

  }

  onMount(() => {
    loadGLTF().then(_myAvatarModel => myAvatarModel = _myAvatarModel)
    if (myAvatarModel) {
  
      console.log(myAvatarModel, "<< MY AVA")
    }
  })



</script>

{#if myAvatarModel}
  <SC.Primitive
  object={myAvatarModel.scene}
  scale={[.5,.5,.5]}
  />
{/if}


<style>

</style>