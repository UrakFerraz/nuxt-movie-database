<template>
  <section>
    <div class="hero">
      <img src="../assets/img/hero.webp" alt="" />
      <div class="text-container">
        <div class="text">
          <div class="mini-heading">Last Movies</div>
          <h1><span>Now</span> Stremaing</h1>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'TheHero',
}
</script>

<style scoped>
section {
  scroll-snap-align: start;
}

.hero {
  height: 400px;
  position: relative;
}
@media (min-width: 750px) {
  .hero {
    height: 500px;
  }

  .hero h1 {
    font-size: 84px;
  }

  .hero .mini-heading {
    font-size: 22px;
  }
}
.hero::after {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  width: 100%;
  background-color: rgba(0, 0, 0, 0.6);
}
.hero img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.hero .text-container {
  z-index: 99;
  position: absolute;
  top: 0;
  margin: 0;
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
}
.hero .text-container .text {
  padding: 0 16px;
  width: 100%;
  max-width: 1400px;
  margin: 0 auto;
}
.hero .mini-heading {
  font-weight: 600;
  font-size: 18px;
  text-transform: uppercase;
  color: #c92502;
  margin-bottom: 8px;
}
.hero h1 {
  color: #fff;
  font-size: 64px;
  font-weight: 200;
  margin-bottom: 8px;
}
.hero h1 span {
  font-weight: 500;
}
.hero .button {
  font-size: 20px;
  align-self: flex-start;
}
@media (max-width: 500px) {
  .hero h1 {
    font-size: 34px;
    line-height: 1.2;
  }
}
</style>

</style>
