<!-- components/Bridge.vue -->
<template>
  <div class="component">
    <h1>✅ Vue2 / Bridge</h1>
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
    border: 1px solid black;
    margin: 2em;
    padding: 2em;
    border-radius: 15px;
    max-width: 400px;
    width: 100%;
    margin: 0 auto;
    margin-bottom: 2em;
}
</style>