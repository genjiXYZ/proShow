<template>
  <div class="home">
   <Parallax />
   <!-- <Cyberpunk /> -->
   <Pro />
    

    <Test />
  </div>
</template>

<script>
// @ is an alias to /src
import Parallax from '@/components/Parallax.vue'
// import Cyberpunk from '@/components/Cyberpunk.vue'
import Pro from '@/components/Pro.vue'
import Test from '@/components/Test.vue'


export default {
  name: 'Home',
  components: {
    Parallax,
    Pro,
    Test
    // Cyberpunk
  }
}
</script>
