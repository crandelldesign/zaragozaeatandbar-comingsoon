<template>
  <div class="site-container">
    <NuxtLayout>
      <NuxtPage />
    </NuxtLayout>
  </div>
</template>

<style lang="scss">
@import "~/assets/scss/root.scss";
@import "~/assets/scss/reboot.scss";

body #__nuxt {
  min-height: 100%;
  > .site-container, > .site-container > .layout-container {
    min-height: 100vh;
  }
}
</style>
