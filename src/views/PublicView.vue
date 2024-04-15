<template>
    <div>
      <PublicviewHero />
      <PublicsecondScreen />
    </div>
  </template>
  
  <script>
  import PublicviewHero from '@/components/PublicviewHero.vue';
  import PublicsecondScreen from '@/components/PublicsecondScreen.vue';
  export default {
      components: {
        PublicviewHero,
          PublicsecondScreen,
      },
  }
  </script>
  
  <style>
  
  </style>