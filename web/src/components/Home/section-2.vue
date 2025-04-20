<script setup>
</script>

<template>
  <div class="container-2">
    <div class="bg">
        <div class="title">
            <h1 class="text-typing">Наши инструменты</h1>
        </div>
        <div class="info-cards">
            <div class="info-cards-row">
                <div class="bg-item-1"></div>
                <div class="bg-item-2"></div>
                <div class="bg-item-3"></div>
                <div class="bg-item-4"></div>
                <div class="bg-item-5"></div>
                <div class="bg-item-6"></div>
                <div class="bg-item-7"></div>
                <div class="bg-item-8"></div>
                <div class="bg-item-9"></div>
                <div class="bg-item-10"></div>
                <div class="info-card">
                    <h3 class="text-bg-black">Генератор истроий</h3>
                    <div class="info-card-text">
                        <p>
                            Создавайте уникальные сюжеты за секунды! Просто введите идею — ИИ напишет захватывающую историю в любом жанре. Настройте героев, стиль и повороты сюжета. Готовый текст + иллюстрации. Идеально для писателей, геймдизайнеров и сторителлинга.
                        </p>
                    </div>
                </div>
                <div class="info-card">
                    <h3 class="text-bg-blue">Генератор иллюстраций</h3>
                    <div class="info-card-text">
                        <p>
                            Превращайте текст в визуальные образы! Наш ИИ создаст стильные иллюстрации по вашему описанию. Выбирайте стиль — от акварели до цифрового арта. Идеально для книг, комиксов и презентаций. Ваши слова — наше искусство. Кратко, мощно, с акцентом на пользу и простоту.
                        </p>
                    </div>
                </div>
            </div>
            <div class="info-cards-row">
                <div class="info-card">
                    <h3 class="text-bg-purple">ИИ-писатель</h3>
                    <div class="info-card-text">
                        <p>
                            Ваш личный соавтор для создания ярких текстов! Генерирует сюжеты, диалоги и целые главы по вашему запросу. Поддерживает любые жанры — от фэнтези до научной фантастики. Адаптирует стиль под ваши нужды, помогает преодолеть творческий кризис и предлагает неожиданные повороты.   
                        </p>
                    </div>
                </div>
                <div class="info-card">
                    <h3 class="text-bg-green">Переводчик</h3>
                    <div class="info-card-text">
                        <p>
                            Превращайте ваши произведения в мультиязычные бестселлеры! Наш переводчик сохраняет стиль и эмоции оригинала, адаптируя текст для читателей из разных стран. Поддерживает 20+ языков, включая редкие. Идеально для книг, статей и сценариев. 
                        </p>
                    </div>
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

.container-2 {
  height: 1280px;
  width: 100vw;
  display: flex;
  align-items: center;
  flex-direction: column;
  background-size: cover;
  background-image: url('../../assets/images/bg.png');
  background-repeat: no-repeat;
}

.bg {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    flex-direction: column;
    background-size: cover;
    background-image: url('../../assets/images/bg-2.png');
    background-repeat: no-repeat;
}

.bg-item-1 {
    background-size: cover;
    position: absolute;
    background-image: url('../../assets/images/text-section-bg.png');
    background-repeat: no-repeat;
    width: 800px;
    height: 380px;
    z-index: -1;
    margin-left: 25%;
    margin-top: 3%;
}

.bg-item-2 {
    background-size: cover;
    position: absolute;
    background-image: url('../../assets/images/text-section-bg.png');
    background-repeat: no-repeat;
    width: 450px;
    height: 350px;
    z-index: -1;
    margin-right: 55%;
    margin-top: 12%;
}

.bg-item-3 {
    background-size: cover;
    position: absolute;
    background-image: url('../../assets/images/bg-item-men.png');
    background-repeat: no-repeat;
    width: 300px;
    height: 150px;
    z-index: -1;
    margin-top: 7%;
}

.bg-item-4 {
    background-size: cover;
    position: absolute;
    background-image: url('../../assets/images/bg-item-volna.png');
    background-repeat: no-repeat;
    width: 600px;
    height: 350px;
    z-index: -1;
    margin-right: 65%;
    margin-top: 32%;
}

.bg-item-5 {
    background-size: cover;
    position: absolute;
    background-image: url('../../assets/images/bg-item-book.png');
    background-repeat: no-repeat;
    width: 180px;
    height: 150px;
    z-index: -1;
    margin-left: 83%;
    margin-top: 39%;
}

.bg-item-6 {
    background-size: cover;
    position: absolute;
    background-image: url('../../assets/images/bg-item-typo-text.png');
    background-repeat: no-repeat;
    width: 40%;
    height: 70px;
    z-index: -1;
    margin-top: 55%;
}

.bg-item-7 {
    background-size: cover;
    position: absolute;
    background-image: url('../../assets/images/show-imgs/img-5.png');
    background-repeat: no-repeat;
    width: 450px;
    height: 120px;
    margin-left: 80%;
    margin-top: 5%;
    z-index: -1;
}

.bg-item-8 {
    background-size: cover;
    position: absolute;
    background-image: url('../../assets/images/show-imgs/img-5.png');
    background-repeat: no-repeat;
    width: 450px;
    height: 120px;
    margin-left: 80%;
    margin-top: 11%;
    z-index: -1;
}

.bg-item-9 {
    background-size: cover;
    position: absolute;
    background-image: url('../../assets/images/show-imgs/img-5.png');
    background-repeat: no-repeat;
    width: 450px;
    height: 120px;
    margin-right: 80%;
    margin-top: 31%;
    z-index: -1;
}

.bg-item-10 {
    background-size: cover;
    position: absolute;
    background-image: url('../../assets/images/show-imgs/img-5.png');
    background-repeat: no-repeat;
    width: 450px;
    height: 120px;
    margin-right: 80%;
    margin-top: 35%;
    z-index: -1;
}

.text-bg-black::before {
    content: '';
    background: rgba(0, 0, 0, 0.15);
    position: absolute;
    width: 19%; 
    margin-top: 10px; 
    height: 30px;
    z-index: 0;
}

.text-bg-purple::before {
    content: '';
    background: rgba(100, 0, 94, 0.10);
    position: absolute;
    width: 19%;
    margin-top: 10px; 
    height: 30px;
    z-index: 0;
}

.text-bg-blue::before {
    content: '';
    background: rgba(12, 85, 87, 0.10);
    position: absolute;
    width: 19%;
    margin-top: 10px; 
    height: 30px;
    z-index: 0;
}

.text-bg-green::before {
    content: '';
    background: rgba(95, 255, 66, 0.10);
    position: absolute;
    width: 19%;
    margin-top: 10px; 
    height: 30px;
    z-index: 0;
}

.info-cards {
    width: 100%;
}

.info-cards-row {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    width: 100%;
    margin-top: 20px;
}

.info-card {
    width: 40%;
    height: 400px;
}

.info-card h3 {
    font-size: 40px;
    font-weight: bold;
    margin-left: 10%;
    z-index: 1;
}

.info-card-text {
    width: 100%;
    height: 70%;
    background-size: cover;
    background-image: url('../../assets/images/info-card-text.png');
    background-repeat: no-repeat;
}

.info-card-text p {
    width: 500px;
    margin-left: 6%;
    margin-top: 4%;
    position: absolute;
    font-size: 20px;
}

.title {
    background-size: cover;
    background-image: url('../../assets/images/h1-text-bg.png');
    background-repeat: no-repeat;
    width: 40%;
    height: 15%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.title h1 {
    font-size: 55px;
    z-index: 1;
}

.title h1::before {
    content: '';
    background: rgba(255, 73, 73, 0.15);
    position: absolute;
    margin-top: 20px;
    width: 19%; 
    height: 40px;
    z-index: 0;
}
</style>