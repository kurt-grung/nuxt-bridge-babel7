<!-- components/BridgeComponent.vue -->
<template>
  <div class="component">
    <h1>Vue2 / Bridge</h1>
    <h3>{{ title }}</h3>
    <p>Component using the Options API</p>
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
.component {
    margin-bottom: 2em;
}
</style>