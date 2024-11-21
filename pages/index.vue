<template>
  <div class="page-coming-soon">
    <header class="header">
      <img src="@/assets/img/logo.jpg" alt="Zaragoza" />
    </header>
    <address class="address-banner">
      <IconMarker /> 8111 Long Point Rd, Houston, TX 77055
    </address>
    <main>
      <section class="section-intro">
        <h1>Focusing on local reciple for Spanish dishes</h1>
        <p class="lead">Zaragoza Restaurant is a Spanish restaurant focusing on local dishes for the Spanish speaking people.</p>
      </section>
      <section class="section-contact">
        <h2>Contact us</h2>
        <p class="lead"><a href="tel:1234567890">662-382-8409</a></p>
        <p class="lead"><a href="mailto:CarlostabSantana@outlook.com">CarlostabSantana@outlook.com</a></p>
      </section>
      <section class="section-hours">
        <h2>Hours</h2>
        <p>Monday 11AM - 7PM<br >
          Tuesday 11AM - 8PM<br />
          Wednesday 11AM - 8PM<br />
          Thursday 11AM - 10PM<br />
          Friday 10AM - MIDNIGHT<br />
          Saturday 10AM - 11PM<br />
          Sunday 11AM - 10PM</p>
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.page-coming-soon {
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
    &:not(:last-child) {
      border-bottom: 2px solid $tomato;
    }
    &:nth-child(2n) {
      // background-color: $medlar;
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
  svg {
    fill: currentColor;
  }
}
</style>