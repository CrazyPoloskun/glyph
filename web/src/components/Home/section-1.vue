<script setup>
import { RouterLink } from 'vue-router';
</script>

<template>
  <div class="container">
    <div class="text-section">
      <h1 class="text">Создайте свою книгу за минуту</h1>
      <p>
        Ваша история заслуживает воплощения! 
        Всего за несколько минут наш сервис поможет вам:  
        <ol>
          <ul><img src="../../assets/icons/pen.png" width="20px" height="20px" /> Сгенеровать увлекательный текст по вашему сюжету </ul>
          <ul><img src="../../assets/icons/img.png" width="22px" height="22px" /> Создать стильные иллюстрации и обложку</ul>
          <ul><img src="../../assets/icons/translation.png" width="22px" height="22px" /> Перевести ваш текст на множество иностранных языков</ul>
          <ul><img src="../../assets/icons/download.png" width="25px" height="25px" /> Готовый результат экспортировать в форматы PDF и др. </ul>
        </ol>
      </p>
      <div class="line"></div>
      <button class="btn-get-started" href="/text" v-on:click="this.$router.push('text')">Начать творить</button>
    </div>
    <div class="image-section">
      <img class="img-1" src="../../assets/images/show-imgs/img-1.png"/>
      <img class="img-2" src="../../assets/images/show-imgs/img-2.png"/>
      <img class="img-3" src="../../assets/images/show-imgs/img-3.png"/>
      <img class="img-4" src="../../assets/images/show-imgs/img-4.png"/>
      <img class="img-5" src="../../assets/images/show-imgs/img-5.png"/>
      <img class="img-6" src="../../assets/images/show-imgs/img-5.png"/>
      <img class="img-7" src="../../assets/images/show-imgs/img-5.png"/>
      <div class="img-line"></div>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style>

@keyframes type {
  0% {
    width: 0;
  }
}

@keyframes blink {
  50% {
    border-color: transparent;
  }
}

.text {
  width: 29ch;
  border-right: 3px solid;
  animation: blink 1s step-end infinite, type 2.5s steps(29) forwards;
  overflow: hidden;
  white-space: nowrap;
}

.container {
  height: 850px;
  width: 100vw;
  display: flex;
  flex-direction: row;
  justify-content: space-between;
}

.image-section {
  width: 55%;
  display: flex;
  flex-direction: row;
}

.image-section .img-1 {
  width: 45%;
  height: 55%;
  margin-top: 10%;
  transition: all .3s;
}

.image-section .img-1:hover {
  transform: scale(1.1);
}


.image-section .img-2 {
  width: 30%;
  height: 25%;
  margin-top: 12.3%;
  transition: all .3s;
}

.image-section .img-2:hover {
  transform: scale(1.1);
}


.image-section .img-3 {
  width: 44%;
  height: 45%;
  margin-top: 17.5%;
  margin-left: 10%;
  position: absolute;
  transition: all .3s;
}

.image-section .img-3:hover {
  transform: scale(1.1);
}


.image-section .img-4 {
  width: 53%;
  height: 57%;
  position: absolute;
  z-index: -2;
  margin-top: 8%;
  margin-left: 5%;
}

.image-section .img-5 {
  width: 30%;
  height: 10%;
  position: absolute;
  margin-top: 32%;
  margin-left: 6%;
  z-index: -1;
}

.image-section .img-6 {
  width: 30%;
  height: 10%;
  position: absolute;
  margin-top: 9%;
  margin-left: 22%;
  z-index: -1;
}

.image-section .img-7 {
  width: 30%;
  height: 10%;
  position: absolute;
  margin-top: 15%;
  margin-left: 22%;
  z-index: -1;
}


.text-section {
  width: 30%;
  margin-left: 50px;
  margin-top: 120px;
  height: 550px;
  padding: 20px;
  background-size: contain;
  background-repeat: no-repeat;
  background: url('../assets/images/text-section-bg.png');
}

.btn-get-started {
  width: 80%;
  height: 40px;
  margin-top: 50px;
  background-color: rgba(255, 0, 0, 0.2);
  border: none;
  font-size: 25px;
  font-weight: bold;
  cursor: pointer;
  text-decoration: none;
  color: black;
  transition: all .3s;
}

.btn-get-started:hover {
  transform: scale(1.05);
  background-color: rgba(255, 0, 0, 0.4);
}

.text-section p ol, ul {
  font-size: 23px;
  margin-top: 10px;
}

.line {
  width: 80%;
  height: 4px;
  background: black;
  margin-top: 20px;
}

.img-line {
  width: 600px;
  height: 4px;
  background: rgb(0, 0, 0, 0.3);
  position: absolute;
  margin-top: 43%;
  margin-left: 16%;
}

.text-section h1 {
  font-size: 45px;
}

.text-section p {
  font-size: 23px;
  margin-top: 10px;
}
</style>