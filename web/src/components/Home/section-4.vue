<script setup>
</script>

<template>
  <div class="container-4">
    <div class="bg">
        <div class="bg-section-4-item-1"></div>
        <div class="bg-section-4-item-2"></div>
        <div class="bg-section-4-item-3"></div>
        <div class="bg-section-4-item-4"></div>
        <div class="bg-section-4-item-5"></div>
        <div class="bg-section-4-item-6"></div>
        <div class="bg-section-4-item-7"></div>
        <div class="bg-section-4-item-8"></div>
        <div class="bg-section-4-cat"></div>
        <div class="start-creating">
          <h1>Начните творить с <b class="logo-animate">GLYPH</b> прямо сейчас!</h1>
        </div>
        <button class="btn-get-started-2" v-on:click="this.$router.push('text')">
          Начать работу
        </button>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style>
.container-4 {
  height: 1000px;
  width: 100vw;
  background-size: cover;
  background-image: url('../../assets/images/bg.png');
  background-repeat: no-repeat;
}

.logo-animate {
  background-size: 200% auto;
  font-size: 40px;
  background: #00F2FF;
  background: linear-gradient(to right, #007bff 0%, #3538ff 50%, #ff46c5 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  font-family: "Shapiro";
  animation: gradientAnimation 4s infinite;
  animation-direction: alternate;
  background-size: 300% 100%;
}


.btn-get-started-2 {
  width: 500px;
  height: 70px;
  margin-top: 32%;
  background-color: rgba(255, 0, 0, 0.2);
  border: none;
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  color: black;
  transition: all .3s;
}

.btn-get-started-2:hover {
  transform: scale(1.05);
  background-color: rgba(255, 0, 0, 0.6);
}


.bg-section-4-item-1 {
  background-size: cover;
  position: absolute;
  background-image: url('../../assets/images/show-imgs/img-5.png');
  background-repeat: no-repeat;
  width: 450px;
  height: 120px;
  margin-right: 80%;
  margin-top: 8%;
  z-index: -1;
}

.bg-section-4-item-2 {
  background-size: cover;
  position: absolute;
  background-image: url('../../assets/images/show-imgs/img-5.png');
  background-repeat: no-repeat;
  width: 450px;
  height: 120px;
  margin-right: 80%;
  margin-top: 12%;
  z-index: -1;
}

.bg-section-4-item-3 {
  background-size: cover;
  position: absolute;
  background-image: url('../../assets/images/show-imgs/img-5.png');
  background-repeat: no-repeat;
  width: 450px;
  height: 120px;
  margin-left: 80%;
  margin-top: 8%;
  z-index: -1;
}

.bg-section-4-item-4 {
  background-size: cover;
  position: absolute;
  background-image: url('../../assets/images/show-imgs/img-5.png');
  background-repeat: no-repeat;
  width: 450px;
  height: 120px;
  margin-left: 80%;
  margin-top: 12%;
  z-index: -1;
}

.bg-section-4-item-5 {
  background-size: cover;
  position: absolute;
  background-image: url('../../assets/images/show-arrows/arrow1.png');
  background-repeat: no-repeat;
  width: 300px;
  height: 300px;
  margin-left: 37%;
  margin-top: 34%;
}

.bg-section-4-item-6 {
  background-size: cover;
  position: absolute;
  background-image: url('../../assets/images/show-arrows/arrow3.png');
  background-repeat: no-repeat;
  width: 300px;
  height: 300px;
  margin-right: 35%;
  margin-top: 33%;
}

.bg-section-4-item-7 {
  background-size: cover;
  position: absolute;
  background-image: url('../../assets/images/show-arrows/arrow4.png');
  background-repeat: no-repeat;
  width: 350px;
  height: 300px;
  margin-right: 51%;
  margin-top: 14%;
}

.bg-section-4-item-8 {
  background-size: cover;
  position: absolute;
  background-image: url('../../assets/images/show-arrows/arrow2.png');
  background-repeat: no-repeat;
  width: 300px;
  height: 300px;
  margin-left: 50%;
  margin-top: 15%;
}

.bg-section-4-cat {
  background-size: cover;
  position: absolute;
  background-image: url('../../assets/images/show-gifs/cat.gif');
  background-repeat: no-repeat;
  width: 300px;
  height: 300px;
  margin-right: 80%;
  margin-top: 45%;
  cursor: pointer;
}

.start-creating {
  background-size: cover;
  position: absolute;
  background-image: url('../../assets/images/start-creating.png');
  background-repeat: no-repeat;
  width: 60%;
  height: 300px;
  margin-top: 5%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.start-creating h1 {
  font-size: 50px;
}

</style>