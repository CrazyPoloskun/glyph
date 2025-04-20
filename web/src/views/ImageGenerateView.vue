<script setup>
</script>

<template>
    <div class="main">
        <div class="image-generation-container">
            <div class="image-generation-box">
              <div class="image-generation-prompt-box">
                <div class="ai-nav">
                    <button v-on:click="this.$router.push('text')">Сочинить</button>
                    <button class="active" disabled>Иллюстрировать</button>
                    <button v-on:click="this.$router.push('book')">Сочинить & Иллюстрировать</button>
                </div>

                <h2>Запрос</h2>

                <textarea id="textarea" v-on:input="(e) => {
                    this.charsNum = e.target.value.length,
                    this.textPrompt != '' ? this.wordsNum = e.target.value.split(' ').length : this.wordsNum = 0
                }" placeholder="Ваша идея..." v-model="textPrompt"></textarea>

                <div class="image-prompt-info">  
                    <h2 class="charsNum">{{ charsNum }} символов</h2>
                    <h2 class="wordsNum">кол-во слов: {{ wordsNum }}</h2>
                </div>

                <select v-model="imageQuality">
                  <option value="" selected disabled hidden>Качество</option>
                  <option value="15">Низкое</option>
                  <option value="30">Среднее (Рекомендуется)</option>
                  <option value="40">Высокое</option>
                </select>


                <button class="btn-generate-image" v-on:click="generateImage">Отправить</button>

                <div class="error-box" v-if="isError">
                    <img src="../assets/icons/error.png" width="40" height="40" />
                    <p>{{ error }}</p>
                  </div>
              </div>
              <div class="image-generation-output-box ">
                <div class="image-options-menu">
                    <div class="image-action-menu-open">
                        <button v-if="this.isMenu == false" class="image-action-btn" v-on:click="() => {this.isMenu = true}"><img src="../assets/icons/options.png"/></button>
                        <button v-if="this.isMenu == true" class="image-action-btn" v-on:click="() => {this.isMenu = false}"><img src="../assets/icons/close.png"/></button>
                    </div>
                    <div v-if="this.isMenu == true" class="image-action-btns-menu">
                        <button class="image-action-btn" v-on:click="saveImageToFile"><img src="../assets/icons/download.png"/></button>
                    </div>
                </div>
                <div v-if="isLoading" class="ghost-box">
                    <div class="ghost"></div>
                </div>
                <div id="">
                    <img v-if="srcUrl != ''" id="generated-image" v-bind:src="srcUrl" alt="Сгенерированное изображение" width="300" height="300">
                </div>
            </div>
        </div>
    </div>
</div>
</template>
  
<script>
    export default {
      data() {
        return {
            textPrompt: "",
            srcUrl: "",
            imageQuality: "",
            isLoading: false,
            isError: false,
            error: "",
            charsNum: 0,
            wordsNum: 0,
            isMenu: false
        }
      },
      methods: {
            async generateImage() {
                try {
                    this.srcUrl = ""
                    this.isError = false

                    if (this.imageQuality == "" || this.textPrompt == "") {
                        this.isError = true,
                        this.error = "Все поля должны быть заполнены!"
                        return new Exception("Все поля должны быть заполнены!")
                    }

                    if (this.textPrompt.split(" ").length > 100) {
                        this.isError = true,
                        this.error = "Запрос не может быть более 100 символов"
                        return new Exception("Запрос не может быть более 100 символов")
                    }

                    this.isLoading = true

                    const response = await fetch("http://localhost:3000/api/generate-image", {
                        method: "POST",
                        headers: {
                            "Content-Type": "application/json"
                        },
                        body: JSON.stringify({ 
                            query: this.textPrompt,
                        })
                    });

                    if (!response.ok) {
                        throw new Error(`HTTP error! Status: ${response.status}`);
                    }

                    const data = await response.json();

                    if (data.imageUrl) {
                        this.srcUrl = data.imageUrl;
                    } else if (data.error) {
                    } else {
                    }

                    this.isLoading = false
                } catch (error) {
                    console.error("Ошибка:", error);
                    
                }
            },
            async saveImageToFile() {
                this.isError = false

                if (this.response == "") {
                    this.isError = true
                    this.error = "Нет текста для скачивания!"
                    return ""
                }

                const image = await fetch(this.srcUrl)
                const blob = await image.blob()
                const imageURL = URL.createObjectURL(blob)
                const a = document.createElement('a');

                a.href = imageURL;
                a.download = "image.png";

                document.body.appendChild(a);

                a.click();

                document.body.removeChild(a);
                URL.revokeObjectURL(url);
            },
      }
  }
</script>
  
<style>

.main {
    height: 50vw;
}

.image-options-menu {
    width: 50px;
    height: 20px;
    display: flex;
    flex-direction: row;
    position: absolute;
    padding: 10px;
}

.image-action-menu-open {
    width: 30px;
    height: 20px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
}

.image-action-separator {
    width: 4px;
    height: 100%;
    background-color: #CBCBCB;
}

.image-action-btns-menu {
    width: 200px;
    height: 20px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
    margin-left: 10px;
}

.image-action-btn {
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: all .3s;
}

.image-action-btn:hover {
    transform: scale(0.9);
}

.image-action-btn img {
    width: 30px;
    height: 30px;
}

.charsNum {
    font-size: 15px;
    color: rgb(79, 79, 79);
}

.wordsNum {
    font-size: 15px;
    color: rgb(79, 79, 79);
}

.image-prompt-info {
    width: 60%;
    display: flex;
    flex-direction: row;
}

.image-prompt-info h2 {
    width: 100%;
    display: flex;
    flex-direction: row;
}

.error-box {
    width: 100%;
    height: 60px;
    background-color: rgba(255, 0, 0, 0.24);
    margin-top: 20px;
    border-radius: 15px;
    display: flex;
    align-items: center;
}


.error-box p {
    margin-left: 4%;   
    font-size: 25px;
    text-decoration: underline;
}

.error-box img {
    margin-left: 4%;   
}


.ai-nav {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    background-color: rgb(182, 182, 182);
    padding: 10px;
    border-radius: 15px;
}

.ai-nav button {
    padding: 8px;
    border: none;
    background-color: transparent;
    font-size: 15px;
    cursor: pointer;
    width: auto;
}

.ai-nav .active {
    background-color: white;
    color: black;
    border-radius: 10px;
}

#generated-image {
    width: 100%;
    height: 100%;
}

.generation-title {
    background-size: cover;
    background-image: url('../assets/images/h1-text-bg.png');
    background-repeat: no-repeat;
    width: 500px;
    height: 130px;
    display: flex;
    align-items: center;
    justify-content: center;
    margin-left: 6.5%;
}

.generation-title h1 {
    font-size: 36px;
}

.generation-title h1::before {
  content: '';
  background: rgba(255, 0, 0, 0.10);
  position: absolute;
  width: 13%; 
  height: 35px;
  margin-top: 6px;
  z-index: 0;
}

.ghost-box {
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
}

.ghost {
    background-size: cover;
    background-image: url('../assets/images/show-gifs/ghost.gif');
    background-repeat: no-repeat;
    width: 40%;
    height: 40%;
    margin-top: 15%;
}

.image-generation-container {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 41vw;
}

.image-generation-box {
    display: flex;
    justify-content: space-between;
    padding: 20px;
    align-items: center;
    flex-direction: row;
    margin-top: 30px;
    height: 100%;
    width: 80%;
    background-color: white;
    border-radius: 15px;
    box-shadow: 6px 6px 20px 20px rgba(0, 0, 0, 0.4);
}

.image-generation-output-box {
    height: 100%;
    width: 50%;
    background-color: #DEDEDE;
    border-radius: 10px;
    padding: 10px;
    font-size: 25px;
    overflow: auto;
    overflow-x: hidden;
}

.image-generation-prompt-box {
    height: 100%;
    width: 40%;
    display: flex;
    flex-direction: column;
}

.image-generation-prompt-box textarea {
    width: 100%;
    resize: none;
    height: 200px;
    margin-top: 10px;
    font-size: 25px;
    border-radius: 5px;
    outline: none;
    border: 1px solid rgb(79, 79, 79);
    color: rgb(79, 79, 79);
    padding: 10px;
    transition: border .3s;
}

.image-generation-prompt-box textarea:hover {
    border: 1px solid black;
}


.image-generation-prompt-box select {
    height: 40px;
    width: 100%;
    background-color: #DEDEDE;
    outline: none;
    border: none;
    border-radius: 10px;
    font-size: 20px;
    margin-top: 20px;
    padding: 5px 5px;
}

.image-generation-prompt-box .btn-generate-image {
    width: 100%;
    height: 50px;
    margin-top: 20px;
    border: none;
    background-color: black;
    font-size: 25px;
    color: white;
    cursor: pointer;
    transition: all .3s;
}

.image-generation-prompt-box h2 {
    margin-top: 10px;
}

.image-generation-prompt-box .btn-generate-image:hover {
    transform: scale(1.03);
}
</style>