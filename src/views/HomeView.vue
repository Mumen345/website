<template>
  <div class="home">
    <HelloWorld />
    <SliderComponent />
    <GreachPrivate />
  </div>
</template>

<script>
// @ is an alias to /src
import GreachPrivate from '@/components/GreachPrivate.vue';
import HelloWorld from '@/components/HelloWorld.vue'
import SliderComponent from '@/components/SliderComponent.vue';

export default {
  name: 'HomeView',
  components: {
    HelloWorld,
    SliderComponent,
    GreachPrivate
}
}
</script>
