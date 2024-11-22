<script setup>
const hoursBelowRef = ref(null);
const isHoursDelay = ref(true);
onMounted(() => {
  const observer = new IntersectionObserver(
    (entries) => {
      entries.forEach((entry) => {
        if (!entry.isIntersecting) {
          isHoursDelay.value = false;
        }
      });
    },
    {
      threshold: 0.5,
    }
  );

  // observe each element
  if (hoursBelowRef.value) {
    observer.observe(hoursBelowRef.value);
  }
});

useHead({
  title: 'Zaragoza Restaurant & Bar',
  meta: [
    { name: 'description', content: 'Zaragoza Restaurant is a Spanish restaurant focusing on local dishes for the Spanish speaking people.' }
  ],
});
</script>

<template>
  <div class="page-coming-soon">
    <header class="header">
      <img data-aos="zoom-in-down" src="@/assets/img/logo.jpg" alt="Zaragoza" />
    </header>
    <address class="address-banner">
      <a href="https://maps.app.goo.gl/CwyUoHsPZZcfrHww5" target="_blank" data-aos="fade-up" data-aos-delay="150"><IconMarker /> <span>8111 Long Point Rd, Houston,&nbsp;TX&nbsp;77055</span></a>
    </address>
    <main>
      <section class="section-intro" data-aos="fade-right" data-aos-delay="300">
        <h1>Focusing on local reciple for Spanish dishes</h1>
        <p class="lead">Zaragoza Restaurant is a Spanish restaurant focusing on local dishes for the Spanish speaking people.</p>
      </section>
      <section class="section-contact" data-aos="fade-left" data-aos-delay="450">
        <h2>Contact us</h2>
        <p class="lead"><IconPhone /><a href="tel:1234567890">662-382-8409</a></p>
        <p class="lead"><IconMail /><a href="mailto:CarlostabSantana@outlook.com">CarlostabSantana@outlook.com</a></p>
      </section>
      <section ref="hoursRef" class="section-hours" data-aos="fade-right" :data-aos-delay="isHoursDelay ? '600': '0'">
        <h2>Hours</h2>
        <p class="lead">Monday 11AM - 7PM<br >
          Tuesday 11AM - 8PM<br />
          Wednesday 11AM - 8PM<br />
          Thursday 11AM - 10PM<br />
          Friday 10AM - MIDNIGHT<br />
          Saturday 10AM - 11PM<br />
          Sunday 11AM - 10PM</p>
      </section>
      <div ref="hoursBelowRef"></div>
    </main>
    <footer class="footer">
      <div>Copyright &copy; {{ new Date().getFullYear() }}. All Rights Reserved.</div>
    </footer>
  </div>
</template>

<style lang="scss" scoped>
.page-coming-soon {
  overflow: hidden;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  section {
    padding: rem(16) rem(32);
    // max-width: rem(1024);
    margin: 0 auto;
    > * {
      max-width: rem(1024);
      margin-left: auto;
      margin-right: auto;
    }
    h1, h2 {
      text-wrap: balance;
    }
    &:not(:last-of-type) {
      border-bottom: 2px solid $tomato;
    }
    &:nth-child(2n) {
      // background-color: $medlar;
    }
    svg {
      display: inline-block;
      fill: currentColor;
      width: 1em;
      margin-right: 1em;
    }
  }
}
header.header {
  text-align: center;
  background-color: $medlar;
  img {
    display: block;
    max-width: 400px;
    width: 100%;
    height: auto;
    margin-left: auto;
    margin-right: auto;
  }
}
.address-banner {
  font-family: $headings-font-family;
  padding: rem(32);
  text-align: center;
  background-color: $azure;
  color: $white;
  // text-wrap: balance;
  svg {
    display: block;
    fill: currentColor;
    margin-right: 1em;
  }
  span {
    display: block;
  }
  a {
    display: flex;
    text-decoration: none;
    align-items: center;
    justify-content: center;
  }
}
footer.footer {
  margin-top: auto;
  padding: rem(32);
  text-align: center;
  background-color: $azure;
  color: $white;
  font-size: rem(14);
}
</style>