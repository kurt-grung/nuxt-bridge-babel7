<!-- components/BridgeComponent.vue -->
<template>
  <div>
    <h1>{{ title }}</h1>
    <p>This is a component in Nuxt Bridge.</p>
  </div>
</template>

<script>
export default {
  data() {
    return {
      title: 'Hello from BridgeComponent'
    };
  }
};
</script>

<style scoped>
h1 {
  color: blue;
}
</style>