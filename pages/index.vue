<template>
  <div class="container">
    
    <div>
      <logo />
      <h1 class="title">
        nuxt-migration
      </h1>
      <h2 class="subtitle">
        Nuxt2 converted to Bridge
      </h2>
      <div class="links">
        <a
          href="https://nuxt.com/docs/migration/overview"
          target="_blank"
          class="button--green"
        >
          Migration Documentation
        </a>
        <a
          href="https://nuxt.com/docs/getting-started/upgrade"
          target="_blank"
          class="button--grey"
        >
          Upgrade Guide
        </a>
      </div>

      <!-- Bridge component -->
      <BridgeComponent />

      <!-- Vue3 component -->
      <Vue3Component />
      
      <h3 class="nuxt-comparison-title">
        Nuxt Comparisons
      </h3>

      <p>
        In the table below, there is a quick comparison between Nuxt versions:
      </p>

      <img src="~/assets/comparisons.jpg" alt="nuxt comparison" class="nuxt-comparisons" />

    </div>
  </div>
</template>

<script>
import Logo from '~/components/Logo.vue'
import BridgeComponent from '~/components/Bridge.vue';
import Vue3Component from '~/components/Vue3.vue'

export default {
  components: {
    Logo,
    BridgeComponent,
    Vue3Component
  }
}
</script>

<style>
.container {
  margin: 0 auto;
  min-height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
}

.title {
  font-family: 'Quicksand', 'Source Sans Pro', -apple-system, BlinkMacSystemFont,
    'Segoe UI', Roboto, 'Helvetica Neue', Arial, sans-serif;
  display: block;
  font-weight: 300;
  font-size: 100px;
  color: #35495e;
  letter-spacing: 1px;
  font-size: 60px;
}

h1 {
  font-size: 24px;
}

h3 {
  font-size: 17px;
}

.subtitle {
  font-weight: 300;
  font-size: 24px;
  color: #526488;
  word-spacing: 5px;
  padding-bottom: 15px;
}

.links {
  padding-top: 15px;
  margin-bottom: 2em;
}

.nuxt-comparison-title {
  margin-top: 15px;
}

.nuxt-comparisons {
  max-width: 100%;
  width: 50%;
  height: auto;
  margin-top: 20px;
  margin-bottom: 20px;
  border-radius: 15px;
}

</style>
