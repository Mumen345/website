<template>
<div class="private_container">
    <div class="private_left">
        <h1>Lorem ipsum dolor sit amet Lorem ipsum </h1>
        <p>Unlock your business's growth potential with a marketing agency's expertise.</p>
        <div class="button_div">
            <a class="download_btn" href="https://apps.apple.com/app/greach/id6444231549">
                <img src="../assets/images/App_Store.svg" alt="">
            </a>
            <a class="download_btn" href="https://play.google.com/store/apps/details?id=com.greach.greachapp">
                <img src="../assets/images/play.svg" alt="">
            </a>
        </div>
    </div>
    <img src="../assets/images/Right.svg" alt="">
</div>
</template>

<script>
export default {

    name:"PrivateHero"
}
</script>

<style lang="scss" scoped>
.private_container {
    display: flex;
    margin: 5rem auto;
    justify-content: center;
}
h1{
    font-family: ClashDisplay;
    font-size: 3.5rem;
    line-height: 92px;
}
.private_left{
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-self: center;
    width: 477px;
    flex-wrap: wrap;

}
.private_left img{
    width: 100% !important;
}
p{
    line-height: 36px;
}
.button_div {
    display: flex;
    flex-wrap: wrap;
    gap: 20px;
    justify-content: start;
    align-items: center;
}


@media screen and (max-width: 1177px) {
    .private_container {
    display: flex;
    flex-direction: column;
    margin: 5rem auto;
    justify-content: center;
    align-items: center;
    text-align: center;
    gap: 40px;
}

.private_left{
width: 90%;
justify-content: center;
align-items: center;
}}
</style>