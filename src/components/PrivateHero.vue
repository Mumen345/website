<template>
<div class="private_container">
    <div class="private_left">
        <h1>Greach for Groups and Businesses</h1>
        <p>(Your members need company on their way to your company)</p>
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

    name: "PrivateHero"
}
</script>

<style lang="scss" scoped>
.private_container {
    display: flex;
    margin: 5.5rem auto 2rem;
    justify-content: space-around;
    align-items: center;
}

h1 {
    font-family: ClashDisplay;
    font-size: 3.5rem;
    line-height: 4.5rem;
}

.private_left {
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-self: center;
    width: 477px;
    flex-wrap: wrap;

}

.private_left img {
    width: 100% !important;
}

p {
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

    .private_left {
        width: 90%;
        justify-content: center;
        align-items: center;

    }

    img {
        width: 100%;
    }
    h1 {
    font-size: 2.7rem;
    line-height: 3rem;
}
}

@media screen and (max-width: 500px) {
    h1 {
    font-size: 2rem;
    line-height: 3rem;
}
.download_btn img {
        width: 50% !important;
    }

    .download_btn {
        width: 100% !important;
        background: #000000;
        border-radius: 6px;
    }
}
</style>
