<template>
    <div>
      <PrivateHero />
      <PublicsecondScreen />
    </div>
  </template>
  
  <script>
  import PrivateHero from '@/components/PrivateHero.vue';
  import PublicsecondScreen from '@/components/PublicsecondScreen.vue';
  export default {
      components: {
          PrivateHero,
          PublicsecondScreen,
      },
  }
  </script>
  
  <style>
  
  </style>