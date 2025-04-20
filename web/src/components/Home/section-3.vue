<script setup>
</script>

<template>
  <div class="container-3">
    <div class="bg">
        <div class="section-3-title">
            <h1>Применение</h1>
        </div>
        <div class="show-gif-cards">
            <div class="show-gif-card-row">
                <div class="bg-section-3-item-1"></div>
                <div class="bg-section-3-item-2"></div>
                <div class="bg-section-3-item-3"></div>
                <div class="bg-section-3-item-4"></div>
                <div class="bg-section-3-item-5"></div>
                <div class="bg-section-3-item-6"></div>
                <div class="show-gif-card">
                    <img src="../../assets/images/show-gifs/gif-1.gif" alt="">
                    <h3 class="text-bg-purple">Визуализация идей</h3>
                    <p>
                        Превращайте абстрактные замыслы в яркие образы! Наш инструмент создает мудборды, интеллект-карты и скетчи по вашему описанию. Автоматически подбирает цветовые палитры, стили и референсы. Идеально для писателей, дизайнеров и сценаристов.
                    </p>
                </div>
                <div class="show-gif-card">
                    <img src="../../assets/images/show-gifs/gif-2.gif" alt="">
                    <h3 class="text-bg-purple">Создание обложек</h3>
                    <p>
                        Ваша история заслуживает воплощения! Всего за несколько минут наш сервис поможет вам:  Сгенеровать увлекательный текст по вашему сюжету Создать стильные иллюстрации и обложку  Перевести ваш текст на множество иностранных языков Готовый результат экспортировать в форматы PDF и др.
                    </p>
                </div>
            </div>
            <div class="show-gif-card-row ">
                <div class="show-gif-card">
                    <img src="../../assets/images/show-gifs/gif-3.gif" alt="">
                    <h3 class="text-bg-purple">Помощь в учёбе</h3>
                    <p>
                        Автоматизируйте учебный процесс с нашим ИИ-ассистентом! Генерируйте рефераты, конспекты и научные статьи по заданной теме. Инструмент анализирует источники, проверяет уникальность и оформляет работу по ГОСТу. Учитесь эффективнее — успевайте больше!
                    </p>
                </div>
                <div class="show-gif-card">
                    <img src="../../assets/images/show-gifs/gif-4.gif" alt="">
                    <h3 class="text-bg-purple">Озвучка текста</h3>
                    <p>
                        Превращайте письменный текст в живую речь за секунды! Наш сервис предлагает реалистичное озвучивание с эмоциями и правильными интонациями. Выбирайте из 50+ голосов на 20 языках — от нейтрального диктора до характерного персонажа. Идеально для аудиокниг, подкастов и обучающих материалов. 
                    </p>
                </div>
            </div>
        </div>
    </div>
  </div>
</template>

<script>

export default {

}
</script>

<style>
.container-3 {
  height: 1480px;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  background-image: url('../../assets/images/bg.png');
  background-repeat: no-repeat;
}

.bg-section-3-item-1 {
    background-size: cover;
    position: absolute;
    background-image: url('../../assets/images/show-imgs/img-5.png');
    background-repeat: no-repeat;
    width: 450px;
    height: 120px;
    margin-right: 80%;
    margin-top: 5%;
    z-index: -1;
}

.bg-section-3-item-2 {
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

.bg-section-3-item-3 {
    background-size: cover;
    position: absolute;
    background-image: url('../../assets/images/show-imgs/img-5.png');
    background-repeat: no-repeat;
    width: 450px;
    height: 120px;
    margin-left: 80%;
    margin-top: 43%;
    z-index: -1;
}

.bg-section-3-item-4 {
    background-size: cover;
    position: absolute;
    background-image: url('../../assets/images/show-imgs/img-5.png');
    background-repeat: no-repeat;
    width: 450px;
    height: 120px;
    margin-left: 80%;
    margin-top: 50%;
    z-index: -1;
}

.bg-section-3-item-5 {
    background-size: cover;
    position: absolute;
    background-image: url('../../assets/images/heart-blue.png');
    background-repeat: no-repeat;
    width: 100px;
    height: 80px;
    margin-right: 90%;
    margin-top: 22%;
    z-index: -1;
}

.bg-section-3-item-6 {
    background-size: cover;
    position: absolute;
    background-image: url('../../assets/images/heart-yellow.png');
    background-repeat: no-repeat;
    width: 100px;
    height: 80px;
    margin-left: 92%;
    margin-top: 35%;
    z-index: -1;
}

.show-gif-cards {
    width: 100%;
}

.show-gif-card-row {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    margin-top: 20px;
}

.show-gif-card {
    width: 40%;
    height: 600px;
}

.show-gif-card  img {
    width: 700px;
    height: 401px;
}

.show-gif-card  h3 {
    font-size: 40px;
    font-weight: bold;
    z-index: 1;
}

.show-gif-card-text p {
    width: 500px;
    margin-left: 6%;
    margin-top: 4%;
    position: absolute;
    font-size: 20px;
}

.section-3-title {
    background-size: cover;
    background-image: url('../../assets/images/h1-text-bg.png');
    background-repeat: no-repeat;
    width: 45%;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.section-3-title h1 {
    font-size: 55px;
    z-index: 1;
}

.section-3-title h1::before {
    content: '';
    background: rgba(95, 255, 66, 0.10);
    position: absolute;
    margin-top: 20px;
    width: 13%; 
    height: 40px;
    z-index: 0;
}
</style>