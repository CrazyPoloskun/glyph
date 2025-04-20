<script setup>
import selectLanguage from '@/components/select-language.vue';
</script>

<template>
  <div class="main">
    <div class="book-generation-container" v-if="isGenerating == false">
        <div class="book-generation-box">
          <div class="book-generation-prompt-box">
            <div class="ai-nav">
                <button v-on:click="this.$router.push('text')" >Сочинить</button>
                <button v-on:click="this.$router.push('image')">Иллюстрировать</button>
                <button class="active" disabled>Сочинить & Иллюстрировать</button>
            </div>

            <h2>Тема I главы</h2>
            <textarea placeholder="Ваша идея..." v-model="textPromptChapter1"></textarea>

            <h2>Тема II главы</h2>
            <textarea placeholder="Ваша идея..." v-model="textPromptChapter2"></textarea>

            <h2>Тема III главы</h2>
            <textarea placeholder="Ваша идея..." v-model="textPromptChapter3"></textarea>

            <selectLanguage v-model="textLanguage" />

            <button class="btn-generate-book" v-on:click="generateBook">Отправить</button>

            <div class="error-box" v-if="isError">
                <img src="../assets/icons/error.png" width="40" height="40" />
                <p>{{ error }}</p>
            </div>
          </div>
        </div>
    </div>
    <div v-if="this.isGenerating == true" class="book-generation-output">
        <div class="actions">
            <button class="action-back" v-on:click="() => {this.isGenerating = false}"><img src="../assets/icons/arrow-back.png" height="40" width="40" /></button>
        </div>
        <div class="book-output-section book-output-margin">
            <div class="book-output-text">
                <p v-if="isLoadingText == false">{{ text1 }}</p>
                <div v-if="isLoadingText" class="pen-box">
                    <div class="pen"></div>
                </div>
            </div>
            <div class="book-output-separator"></div>
            <div class="book-output-img">
                <img v-if="isLoadingImgs == false" v-bind:src="img1src" alt="">
                <div v-if="isLoadingImgs" class="ghost-box">
                    <div class="ghost"></div>
                </div>
            </div>
        </div>
        <div class="book-output-section book-output-margin">
            <div class="book-output-img">
                <img v-if="isLoadingImgs == false" v-bind:src="img2src" alt="">
                <div v-if="isLoadingImgs" class="ghost-box">
                    <div class="ghost"></div>
                </div>
            </div>
            <div class="book-output-separator"></div>
            <div class="book-output-text">
                <p v-if="isLoadingText == false">{{ text2 }}</p>
                <div v-if="isLoadingText" class="pen-box">
                    <div class="pen"></div>
                </div>
            </div>
        </div>
        <div class="book-output-section book-output-margin">
            <div class="book-output-text">
                <p v-if="isLoadingText == false">{{ text3 }}</p>
                <div v-if="isLoadingText" class="pen-box">
                    <div class="pen"></div>
                </div>
            </div>
            <div class="book-output-separator"></div>
            <div class="book-output-img">
                <img v-if="isLoadingImgs == false" v-bind:src="img3src" alt="">
                <div v-if="isLoadingImgs" class="ghost-box">
                    <div class="ghost"></div>
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
            textPromptChapter1: "",
            textPromptChapter2: "",
            textPromptChapter3: "",
            textLanguage: "",
            isError: false,
            error: "",
            isGenerating: false,
            isLoadingText: false,
            isLoadingImgs: false,
            text1: "",
            text2: "",
            text3: "",
            img1src: "",
            img2src: "",
            img3src: "",
            data: [],
            baseUrl: import.meta.env.VITE_BASE_AI_API_URL
        }
    },
    methods: {
        async generateBook() {
            this.isLoadingImgs = false 
            this.isLoadingText = false 
            this.isError = false

            if (this.textPromptChapter1 == "" || this.textPromptChapter2 == "" || this.textPromptChapter3 == "" || this.textType == "" || this.textLanguage == "") {
                this.isError = true
                this.error = "Все поля должны быть заполнены!"
                return new Exception("Все поля должны быть заполнены!")
            }

            this.isGenerating = true
            this.isLoadingText = true 
            this.isLoadingImgs = true 

            await this.generateText(this.textPromptChapter1, this.textType, this.textLanguage).then((res) => {
                this.data = res.split(" ")

                var thisPosition = 0

                var interval = setInterval(() => {
                    this.text1 += `${this.data[thisPosition]} `
                    thisPosition += 1
                    if (thisPosition >= this.data.length) {
                        clearInterval(interval)
                    }
                }, this.getRandomInt(10, 60))    
            })

            await this.generateText(this.textPromptChapter2, this.textType, this.textLanguage).then((res) => {
                this.data = res.split(" ")

                var thisPosition = 0

                var interval = setInterval(() => {
                    this.text2 += `${this.data[thisPosition]} `
                    thisPosition += 1
                    if (thisPosition >= this.data.length) {
                        clearInterval(interval)
                    }
                }, this.getRandomInt(10, 60))  
            })

            await this.generateText(this.textPromptChapter3, this.textType, this.textLanguage).then((res) => {
                this.data = res.split(" ")

                var thisPosition = 0

                var interval = setInterval(() => {
                    this.text3 += `${this.data[thisPosition]} `
                    thisPosition += 1
                    if (thisPosition >= this.data.length) {
                        clearInterval(interval)
                    }
                }, this.getRandomInt(10, 60))  
            })

            this.isLoadingText = false

            await this.generateImage(this.text1).then((res) => {
                this.img1src = res
            })

            await this.generateImage(this.text2).then((res) => {
                this.img2src = res
            })

            await this.generateImage(this.text3).then((res) => {
                this.img3src = res
            })
            
            this.isLoadingImgs = false
        },
        getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        },
        generateText(textPrompt, textType, textLanguage) {
            try {

                if (textPrompt == "" || textPrompt == "" || textPrompt == "") {
                }
                
                return fetch(`${this.baseUrl}/generate-story`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ 
                        query: textPrompt,
                        textLang: textLanguage,
                        textLength: "",
                        textType: textType
                    }),
                }).then((res) => {
                   return res.json().then((res) => { return res.text })
                })
            } catch (error) {
                console.error(error)
            }
        },
        async generateImage(textPrompt) {
            try {
                if (textPrompt == "") {
                    this.isError = true,
                    this.error = "Все поля должны быть заполнены!"
                    return new Exception("Все поля должны быть заполнены!")
                }

                const response = await fetch(`${this.baseUrl}/generate-image`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ 
                        query: textPrompt,
                    })
                });

                if (!response.ok) {
                    throw new Error(`HTTP error! Status: ${response.status}`);
                }
                const data = await response.json();

                if (data.imageUrl) {
                    return data.imageUrl;
                }

            } catch (error) {
                console.error("Ошибка:", error);
                
            }
        },
    }
}
</script>
  
<style>
    .main {
        min-height: 1800px;
        display: flex;
        align-items: center;
    }

    .actions {
        width: 98.5%;
        height: 40px;
    }

    .actions .action-back {
        height: 100%;
        border: none;
        background-color: transparent;
        cursor: pointer;
        transition: all .3s;
    }

    .actions .action-back:hover {
        transform: scale(0.9);
    }

    .book-generation-output {
        display: flex;
        padding: 20px;
        align-items: center;
        flex-direction: column;
        margin-top: 30px;
        min-height: 1280px;
        width: 80%;
        background-color: white;
        border-radius: 15px;
        box-shadow: 6px 6px 20px 20px rgba(0, 0, 0, 0.4);
        margin-bottom: 50px;
    }

    .book-output-section {
        height: 480px;
        width: 98.5%;
        padding: 10px 10px;
        display: flex;
        justify-content: space-between;
        flex-direction: row;
    }

    .book-output-margin {
        margin-top: 20px;
    }

    .book-output-text {
        width: 48%;
        height: 100%;
        border-radius: 15px;
    }

    .book-output-text p {
        width: 100%;
        height: 100%;
        overflow-x: none;
        overflow-y: scroll;
        font-size: 20px;
    }

    .book-output-img {
        width: 48%;
        height: 100%;
        background-color: #686868;
        border-radius: 15px;
    }

    .book-output-img img {
        width: 100%;
        height: 100%;
    }

    .book-output-separator {
        height: 480px;
        width: 4px;
        background-color: #a1a1a1;
        border-radius: 20px;
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

    .book-options-menu {
        width: 250px;
        height: 20px;
        display: flex;
        flex-direction: row;
    }

    .book-action-menu-open {
        width: 30px;
        height: 20px;
        background-color: white;
        display: flex;
        justify-content: space-between;
        align-items: center;
        padding: 10px;
        border-radius: 10px;
    }

    .book-action-separator {
        width: 4px;
        height: 100%;
        background-color: #CBCBCB;
    }

    .book-action-btns-menu {
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

    .book-action-btn {
        width: 30px;
        height: 30px;
        background-color: transparent;
        border: none;
        cursor: pointer;
        transition: all .3s;
    }

    .book-action-btn:hover {
        transform: scale(0.9);
    }

    .book-action-btn img {
        width: 30px;
        height: 30px;
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

    .pen-box {
        width: 100%;
        height: 100%;
        display: flex;
        justify-content: center;
    }

    .pen {
        background-size: cover;
        background-image: url('../assets/images/show-gifs/pen.gif');
        background-repeat: no-repeat;
        width: 40%;
        height: 40%;
        margin-top: 15%;
    }

    .book-generation-container {
        display: flex;
        justify-content: center;
        width: 100%;
        height: 50vw;
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

    .book-generation-box {
        display: flex;
        padding: 20px;
        align-items: center;
        flex-direction: column;
        margin-top: 30px;
        height: 70%;
        width: 80%;
        background-color: white;
        border-radius: 15px;
        box-shadow: 6px 6px 20px 20px rgba(0, 0, 0, 0.4);
    }

    .book-generation-prompt-box {
        height: 100%;
        width: 80%;
        display: flex;
        flex-direction: column;
    }

    .book-generation-prompt-box textarea {
        width: 100%;
        resize: none;
        height: 150px;
        margin-top: 10px;
        font-size: 25px;
        border-radius: 5px;
        outline: none;
        border: 1px solid rgb(79, 79, 79);
        color: rgb(79, 79, 79);
        padding: 10px;
        transition: border .3s;
    }

    .book-generation-prompt-box textarea:hover {
        border: 1px solid black;
    }


    .book-generation-prompt-box select {
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

    .book-generation-prompt-box .btn-generate-book {
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
  
    .book-generation-prompt-box h2 {
        margin-top: 10px;
    }

    .book-generation-prompt-box .btn-generate-book:hover {
        transform: scale(1.03);
    }
</style>