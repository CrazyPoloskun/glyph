<script setup>
</script>

<template>
  <footer class="footer">
    <div class="footer-info">
        <h2 class="powered-by">POWERED BY <b class="team-name">BALDEZHNYE DUCKS</b> TEAM & <b class="company-name">DDPlanet</b></h2>
        <h3 class="citat"> <b class="citat-text">"And let your code change the world"</b> - Tula Hack 2025</h3>
        <h4 class="copyright">©copyright 2025-2026 ALL RIGHTS RESERVED</h4>
    </div>
  </footer>
</template>

<script>

export default {

}
</script>

<style>
@keyframes gradientAnimation {
  0% {
    background-position: 0;
  }
  to {
    background-position: 100%;
  }
}

.footer {
  height: 180px;
  width: 100vw;
  display: flex;
  background-color: black;
}

.footer-info {
    height: 100%;
}

.citat {
    color: rgba(255, 255, 255, 0.619);
    font-size: 20px;
    margin-top: 10px;
    margin-left: 30px;
    font-family: "Shapiro";
}

.powered-by {
    color: white;
    font-size: 40px;
    margin-top: 50px;
    margin-left: 30px;
    font-family: "Shapiro";
}

.copyright {
    color: rgba(255, 255, 255, 0.619);
    font-size: 20px;
    margin-top: 10px;
    margin-left: 30px;
    font-family: "Shapiro";
}

.team-name {
    background-size: 200% auto;
    background: #00F2FF;
    background: linear-gradient(to right, #00F2FF 0%, #3437FF 50%, #FF00AE 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Shapiro";
    text-decoration: underline;
    animation: gradientAnimation 4s infinite;
    animation-direction: alternate;
    background-size: 300% 100%;
}

.citat-text {
    font-family: "EagleLake-Regular";
}

.company-name {
    background-size: 200% auto;
    background: #00F2FF;
    background: linear-gradient(to right, #04ff00 0%, #80ff00 50%, #00ff91 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    font-family: "Shapiro";
    text-decoration: underline;
    animation: gradientAnimation 2s infinite;
    animation-direction: alternate;
    background-size: 300% 100%;
}
</style>