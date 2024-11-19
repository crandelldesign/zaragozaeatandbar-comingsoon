<template>
  <div class="page-coming-soon">
    <header class="header">
      <img src="@/assets/img/logo.jpg" alt="Zaragoza" />
    </header>
    <address class="address-banner">
      <IconMarker /> 2000 Brush St, Detroit, MI 48226
    </address>
    <main>
      <section class="section-intro">
        <h1>A Slogan or Brief Heading</h1>
        <p>Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.</p>
      </section>
      <section class="section-contact">
        <h2>Contact Us</h2>
        <div><a href="tel:1234567890">123-456-7890</a></div>
      </section>
      <section class="section-hours">
        <h2>Hours</h2>
        <p>Tuesday to Thursday 4PM-9PM<br />
          Friday & Saturday 4PM - 10PM<br />
          Sunday 11AM-9PM</p>
      </section>
    </main>
  </div>
</template>

<style lang="scss" scoped>
.page-coming-soon {
  section {
    padding: rem(16) rem(32);
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
  background-color: $cinder;
  color: $medlar;
  svg {
    fill: currentColor;
  }
}
</style>