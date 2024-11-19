<script setup>
const isOpen = ref(false);

const headerRef = ref(null);
const isScrolled = ref(false);

onMounted(() => {
  if (headerRef.value) {
    window.addEventListener("scroll", () => {
      const curr = window.pageYOffSet || document.documentElement.scrollTop;
      isScrolled.value = (curr >= 100);
    });
  }
});
</script>

<template>
  <header ref="headerRef" class="header" :class="[{'is-open': isOpen},{'is-scrolled': isScrolled}]">
    <NuxtLink class="logo-container" to="/"><img src="https://fakeimg.pl/70x60?text=Logo" alt="Zaragoza"></NuxtLink>
    <button class="btn-menu-toggle" :class="{'is-open': isOpen}" @click="isOpen = !isOpen">
      <span />
      <span />
      <span />
    </button>
    <nav class="navbar">
      <ul>
        <li class="nav-item">
          <a class="nav-link active" aria-current="page" href="#">Menu</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Drinks</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">What's New</a>
        </li>
        <li class="nav-item">
          <a class="nav-link" href="#">Events</a>
        </li>
        <!-- <li class="nav-item">
          <a class="nav-link" href="#">Parties</a>
        </li> -->
      </ul>
    </nav>
  </header>
</template>

<style lang="scss" scoped>
$logo-width: rem(70);
$logo-width-sm: rem(50);
header.header {
  width: 100%;
  position: fixed;
  position: sticky;
  top: 0;
  display: flex;
  align-items: center;
  transition: opacity .35s, visibility .35s, height .35s, padding .35s;
  background-color: $gray-400;
  padding: rem(12) rem(16);
  @include bp-md-tablet() {
    padding: rem(16);
    position: sticky;
  }
  &.is-scrolled {
    padding: rem(10) rem(16);
    .logo-container {
      width: $logo-width-sm;
    }
  }
  .logo-container {
    display: block;
    max-width: $logo-width-sm;
    z-index: 9000;
    transition: width .35s;
    @include bp-md-tablet() {
      position: absolute;
      max-width: none;
      width: $logo-width;
      margin: 0 auto;
      left: 0;
      right: 0;
    }
    img {
      display: block;
      width: 100%;
      height: auto;
    }
  }
  .btn-menu-toggle {
    width: rem(30);
    height: rem(30);
    position: relative;
    z-index:2;
    overflow: hidden;
    border: 1px solid transparent;
    background-color: transparent;
    margin-left: auto;
    z-index: 9000;
    @include bp-md-tablet() {
      display: none;
    }
    span {
      width: rem(30);
      height: rem(4);
      position: absolute;
      top: 50%;
      left: 50%;
      border-radius: rem(4);
      transform: translate(-50%, -50%);
      background-color: $gray-600;
      transition: all 0.3s ease-in-out;
      &:nth-of-type(2) {
        top: calc(50% - rem(9));
      }
      &:nth-of-type(3) {
        top: calc(50% + rem(9));
      }
    }
    &.is-open {
      span {
        &:nth-of-type(1) {
          display: none;
        }
        &:nth-of-type(2) {
          top: 50%;
          transform: translate(-50%, 0%) rotate(45deg);  
        }
        &:nth-of-type(3) {
          top: 50%;
          transform: translate(-50%, 0%) rotate(-45deg); 
        }
      }
    }
  }
}

nav.navbar {
  position: fixed;
  background-color: $gray-400;
  top: 0;
  left: 0;
  width: 100%;
  height: 0%;
  opacity: 0;
  transition: opacity .35s, visibility .35s, height .35s;
  z-index: -1;
  @include bp-md-tablet() {
    position: relative;
    opacity: 1;
  }
  > ul {
    display: flex;
    flex-direction: column; // cannot use `inherit` to get the `.navbar`s value
    padding-left: 0;
    margin-bottom: 0;
    list-style: none;
    justify-content: space-around;
    height: 100%;
    padding: rem(64) rem(32);
    @include bp-md-tablet() {
      flex-direction: row;
      padding: 0;
    }
    &::after {
      @include bp-md-tablet() {
        content: '';
        display: block;
        width: $logo-width;
        order: 2;
      }
    }
  }
  li {
    &:nth-of-type(1) {
      order: 1;
    }
    &:nth-of-type(2) {
      order: 2;
    }
    &:nth-of-type(3) {
      order: 3;
    }
    &:nth-of-type(4) {
      order: 4;
    }
    &:nth-of-type(5) {
      order: 5;
    }
  }
  .is-open & {
    opacity: .9;
    visibility: visible;
    height: 100%;
    z-index: 8999;
    li {
      animation: fadeInRight .5s ease forwards;
      animation-delay: .35s;
      &:nth-of-type(2) {
        animation-delay: .4s;
      }
      &:nth-of-type(3) {
        animation-delay: .45s;
      }
      &:nth-of-type(4) {
        animation-delay: .50s;
      }
      &:nth-of-type(5) {
        animation-delay: .55s;
      }
      &:nth-of-type(6) {
        animation-delay: .60s;
      }
    }
  }
}

.nav-item {
  opacity: 0;
  text-align: center;
  @include bp-md-tablet() {
    opacity: 1;
    display: flex;
    width: rem(115);
  }
}
.nav-link {
  display: block;
  width: 100%;
  padding: rem(8);
  font-size: rem(18);
  color: rgba($color: $gray-900, $alpha: 0.65);
  text-decoration: none;
  background: 0 0;
  border: 0;
  transition: color .15s ease-in-out, background-color .15s ease-in-out, border-color .15s ease-in-out, font-size .35s;
  &:hover {
    color: rgba($color: $gray-900, $alpha: 1);
  }
  @include bp-md-tablet() {
    text-align: center;
  }
  .is-scrolled & {
    font-size: rem(16);
  }
}

@keyframes fadeInRight {
  0% {
    opacity: 0;
    left: 20%;
  }
  100% {
    opacity: 1;
    left: 0;
  }
}
</style>
