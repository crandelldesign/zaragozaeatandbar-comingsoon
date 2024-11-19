<script setup>
const isComingSoon = ref(true);
</script>

<template>
  <div class="layout-container">
    <AppHeader v-if="!isComingSoon" />
    <slot />
    <AppFooter v-if="!isComingSoon" />
  </div>
</template>
