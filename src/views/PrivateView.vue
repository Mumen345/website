<template>
  <div>
    <PrivateHero />
    <PrivatescreenSecond />
    <ProcessigComponent />
  </div>
</template>

<script>
import PrivateHero from '@/components/PrivateHero.vue';
import PrivatescreenSecond from '@/components/PrivatescreenSecond.vue';
import ProcessigComponent from '@/components/ProcessigComponent.vue';
export default {
    components: {
        PrivateHero,
        PrivatescreenSecond,
        ProcessigComponent,
    },
}
</script>

<style>

</style>