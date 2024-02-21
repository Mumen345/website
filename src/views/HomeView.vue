<template>
  <div class="home">
    <HelloWorld />
    <SliderComponent />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from '@/components/HelloWorld.vue'
import SliderComponent from '@/components/SliderComponent.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    SliderComponent
}
}
</script>
