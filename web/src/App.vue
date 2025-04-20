<script setup>
import Footer from './components/Home/footer.vue'
</script>

<template>
  <header>
    <div class="img-logo">
      <h1>Glyph<u>.ai</u></h1>
    </div>
    <nav class="nav-links">
      <a class="nav-link" href="/">Главная</a>
      <a class="nav-link" href="/">О проекте</a>
      <a class="nav-link" href="/text">Начало работы</a>
    </nav>
    <div class="hole">
    </div>
  </header>
  <RouterView />
  <Footer />
</template>

<style>
header {
  width: 100%;
  height: 130px;
  background-size: contain;
  background-repeat: no-repeat;
  background-image: url('./assets/images/header.png');
  display: flex;
  flex-direction: row;
}

.nav-links {
  display: flex;
  flex-direction: row;
  justify-content: space-around;
  margin-top: 20px;
  margin-left: 80px;
  width: 50%;
}

.nav-link {
  font-size: 23px;
  font-weight: 500;
  color: black;
  text-decoration: none;
  height: 30px;
  text-decoration: none;
  background-image: linear-gradient(currentColor, currentColor);
  background-position: 0% 100%;
  background-repeat: no-repeat;
  background-size: 0% 4px;
  padding: 2px;
  transition: all .3s;
}

.nav-link:hover {
  background-size: 100% 4px;
  background-color: rgba(0, 0, 0, 0.2);
}


.img-logo {
  width: 200px;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  background-image: url('./assets/images/header-logo.png');
}

.hole {
  width: 200px;
  height: 200px;
  background-size: contain;
  background-repeat: no-repeat;
  display: flex;
  margin-left: 21%;
  transform: rotateZ(90deg);
  background-image: url('./assets/images/header-logo.png');
}

.img-logo h1 {
  font-size: 28px;
  margin: 38px 8px;
}
</style>