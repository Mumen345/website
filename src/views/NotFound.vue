<template>
    <div class="not_container">
        <img src="../assets/images/404.svg" alt="">
        <router-link class="secondary_button" to="/">Back to Home</router-link>
    </div>
</template>
<style lang="scss" scoped>
.not_container {
    background-color: #2aaa0b;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    text-align: center;
    width: 100%;
}
img {
    width: 500px !important;
}
@media only screen and (max-width: 1120px) {
    img {
    width: 100% !important;
}
}
</style>