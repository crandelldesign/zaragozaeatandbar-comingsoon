<template>
  <header class="header">
    <NuxtLink class="logo-container" to="/"><img src="https://fakeimg.pl/200x200" alt="Zaragoza"></NuxtLink>
  </header>
</template>

<style lang="scss" scoped>
header.header {
  display: flex;
  .logo-container {
    display: block;
    max-width: rem(175);
    img {
      width: 100%;
      height: auto;
    }
  }
}
</style>