<script setup>
    import selectLanguage from '@/components/select-language.vue';
</script>

<template>
  <div class="main">
    <audio class="audio-player" v-bind:src="audioSrc"></audio>
    <div id="snackbar" v-bind:class="tooltip">{{ tooltipMsg }}</div>
    <div class="text-generation-container">
        <div class="text-generation-box">
          <div class="text-generation-prompt-box">
            <div class="ai-nav">
                <button class="active" disabled>Сочинить</button>
                <button v-on:click="this.$router.push('image')">Иллюстрировать</button>
                <button v-on:click="this.$router.push('book')">Сочинить & Иллюстрировать</button>
            </div>

            <h2>Запрос</h2>

            <textarea id="textarea" v-on:input="(e) => {
                    this.charsNum = e.target.value.length,
                    this.textPrompt != '' ? this.wordsNum = e.target.value.split(' ').length : this.wordsNum = 0
            }" placeholder="Ваша идея..." v-model="textPrompt"></textarea>

            <div class="text-prompt-info">  
                <h2 class="charsNum">{{ charsNum }} символов</h2>
                <h2 class="wordsNum">{{ wordsNum }} слов</h2>
            </div>

            <selectLanguage v-model="textLanguage" />

            <select v-model="textType">
              <option value="" selected disabled hidden>Жанр</option>
              <option value="рассказ">Рассказ</option>
              <option value="сказку">Сказка</option>
              <option value="роман">Роман</option>
              <option value="статью">Статья</option>
            </select>

            <select v-model="textLength">
              <option value="" selected disabled hidden>Длинна текста</option>
              <option value="короткий">Короткий</option>
              <option value="средней длинны">Средний</option>
              <option value="длинный">Длинный</option>
            </select>

            <button class="btn-generate-text" v-on:click="generateText">Отправить</button>

            <div class="exports" v-if="isLoading == false && isFullLoaded == true">
            </div>

            <div class="error-box" v-if="isError">
                <img src="../assets/icons/error.png" width="40" height="40" />
                <p>{{ error }}</p>
            </div>
          </div>
          <div class="text-generation-output-box">
            <div class="text-options-menu">
                <div class="text-action-menu-open">
                    <button v-if="isMenu == false" class="text-action-btn" v-on:click="() => {this.isMenu = true}"><img src="../assets/icons/options.png"/></button>
                    <button v-if="isMenu == true" class="text-action-btn" v-on:click="() => {this.isMenu = false}"><img src="../assets/icons/close.png"/></button>
                </div>
                <div v-if="isMenu == true" class="text-action-btns-menu">
                    <button class="text-action-btn" v-on:click="copyToClipBoard"><img src="../assets/icons/copy.png"/></button>
                    <div class="text-action-separator"></div>
                    <button class="text-action-btn" v-if="this.isTTS == false" v-on:click="() => {this.isTTS = true}"><img src="../assets/icons/sound.png"/></button>
                    <button class="text-action-btn" v-if="this.isTTS == true" v-on:click="() => {this.isTTS = false}"><img src="../assets/icons/sound-playing.gif"/></button>
                    <div class="text-action-separator"></div>
                    <button class="text-action-btn" v-on:click="saveTextToFile"><img src="../assets/icons/download.png"/></button>
                </div>
            </div>
            <div v-if="isLoading" class="ghost-box">
                <div class="ghost"></div>
            </div>
            <p>{{ response }}</p>
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
            response: "",
            textType: "",
            textLanguage: "",
            textLength: "",
            isLoading: false,
            isFullLoaded: false,
            isError: false,
            isMenu: false,
            isTTS: false,
            error: "",
            tooltip: "",
            tooltipMsg: "",
            audioPlayer: document.getElementsByClassName("audio-player"),
            audioSrc: "",
            charsNum: 0,
            wordsNum: 0,
            baseUrl: import.meta.env.VITE_BASE_AI_API_URL
        }
    },
    methods: {
        getRandomInt(min, max) {
            min = Math.ceil(min);
            max = Math.floor(max);
            return Math.floor(Math.random() * (max - min + 1)) + min;
        },
        sleep(ms) {
            return new Promise(resolve => setTimeout(resolve, ms));
        },
        copyToClipBoard() {
            navigator.clipboard.writeText(this.response)
            this.tooltipMsg = "Скопировано!"
            this.tooltip = "show"

            setTimeout(() => {
                this.tooltip = ""
            }, 2000)
        },
        saveTextToFile() {
            this.isError = false

            if (this.response == "") {
                this.isError = true
                this.error = "Нет текста для скачивания!"
                return ""
            }

            const blob = new Blob([this.response], { type: 'text/plain' });
            const url = URL.createObjectURL(blob);
            const a = document.createElement('a');
            a.href = url;
            a.download = "text.txt";

            document.body.appendChild(a);

            a.click();

            document.body.removeChild(a);
            URL.revokeObjectURL(url);
        },
        generateText() {
            try {
                this.isError = false

                if (this.textPrompt == "" || this.textType == "" || this.textLanguage == "" || this.length == "" ) {
                    this.isError = true,
                    this.error = "Все поля должны быть заполнены!"
                    return "Все поля должны быть заполнены!"
                }

                this.response = ""
                this.isLoading = true
                this.isFullLoaded = false
                
                fetch(`${this.baseUrl}/generate-story`, {
                    method: "POST",
                    headers: {
                        "Content-Type": "application/json"
                    },
                    body: JSON.stringify({ 
                        query: this.textPrompt,
                        textLang: this.textLanguage,
                        textLength: this.textLength,
                        textType: this.textType
                    }),
                }).then((res) => {
                    console.log(res.json().then((res) => 
                    {               
                        this.data = res.text.split(" ")

                        var thisPosition = 0

                        this.isLoading = false

                        const outputDiv = document.getElementsByClassName("text-generation-output-box")

                        var interval = setInterval(() => {
                            this.response += `${this.data[thisPosition]} `
                            thisPosition += 1
                            outputDiv.scrollTop = outputDiv.scrollHeight;
                            if (thisPosition >= this.data.length) {
                                clearInterval(interval)
                                this.isFullLoaded = true
                            }
                        }, this.getRandomInt(10, 60))    
                    }))
                })
            } catch (error) {
                console.error(error)
            }
        }
    }
}
</script>

<style>
.charsNum {
    font-size: 15px;
    color: rgb(79, 79, 79);
}

.wordsNum {
    font-size: 15px;
    color: rgb(79, 79, 79);
    margin: 0px 20px;
}

.text-prompt-info {
    width: 40%;
    display: flex;
    flex-direction: row;
}

#snackbar {
  visibility: hidden; 
  min-width: 250px; 
  margin-left: -125px; 
  background-color: #333; 
  color: #fff;
  text-align: center; 
  border-radius: 2px; 
  padding: 16px;
  position: fixed; 
  z-index: 1; 
  left: 50%; 
  bottom: 30px; 
}

.textLanguage {
    
}

#snackbar.show {
  visibility: visible;
  -webkit-animation: fadein 0.5s, fadeout 0.5s 2.5s;
  animation: fadein 0.5s, fadeout 0.5s 2.5s;
}

@-webkit-keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@keyframes fadein {
  from {bottom: 0; opacity: 0;}
  to {bottom: 30px; opacity: 1;}
}

@-webkit-keyframes fadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}

@keyframes fadeout {
  from {bottom: 30px; opacity: 1;}
  to {bottom: 0; opacity: 0;}
}

.main {
    height: 50vw;
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

.text-options-menu {
    width: 250px;
    height: 20px;
    display: flex;
    flex-direction: row;
}

.text-action-menu-open {
    width: 30px;
    height: 20px;
    background-color: white;
    display: flex;
    justify-content: space-between;
    align-items: center;
    padding: 10px;
    border-radius: 10px;
}

.text-action-separator {
    width: 4px;
    height: 100%;
    background-color: #CBCBCB;
}

.text-action-btns-menu {
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

.text-action-btn {
    width: 30px;
    height: 30px;
    background-color: transparent;
    border: none;
    cursor: pointer;
    transition: all .3s;
}

.text-action-btn:hover {
    transform: scale(0.9);
}

.text-action-btn img {
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

.text-generation-container {
    display: flex;
    justify-content: center;
    width: 100%;
    height: 41vw;
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

.text-generation-box {
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

.text-generation-output-box {
    height: 100%;
    width: 50%;
    background-color: #DEDEDE;
    border-radius: 10px;
    padding: 10px;
    font-size: 25px;
    overflow: auto;
    overflow-x: hidden;
}

.text-generation-output-box p {
    margin-top: 30px;
}

.text-generation-prompt-box {
    height: 100%;
    width: 40%;
    display: flex;
    flex-direction: column;
}

.text-generation-prompt-box textarea {
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

.text-generation-prompt-box textarea:hover {
    border: 1px solid black;
}


.text-generation-prompt-box select {
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

.text-generation-prompt-box .btn-generate-text {
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

.text-generation-prompt-box h2 {
    margin-top: 10px;
}

.text-generation-prompt-box .btn-generate-text:hover {
    transform: scale(1.03);
}
</style>