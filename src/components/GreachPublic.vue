<template>
      <div class="writeup_container">
        <div class="right_div">
            <h1>Greach Public</h1>
            <p class="sub_header">Stay informed with our blog section dedicated to future technology.</p>
            <div class="small_div_container">
                <div class="small_div">
                    <h4>Lorem Ipsum</h4>
                    <p>Over 1,000 articles on emerging tech trends and breakthroughs.</p>
                </div>
                <div class="small_div">
                    <h4>Lorem Ipsum</h4>
                    <p>Over 1,000 articles on emerging tech trends and breakthroughs.</p>
                </div>
                <div class="small_div">
                    <h4>Lorem Ipsum</h4>
                    <p>Over 1,000 articles on emerging tech trends and breakthroughs.</p>
                </div>
                <div class="small_div">
                    <h4>Lorem Ipsum</h4>
                    <p>Over 1,000 articles on emerging tech trends and breakthroughs.</p>
                </div>

            </div>
        </div>
        <div class="left_div">
            <img src="../assets/images/private_mockup.svg" alt="">
            <div class="button_div">
                <a href="#">
                    <img src="../assets/images/App_Store.svg" alt="">
                </a>
                <a href="#">
                    <img src="../assets/images/play.svg" alt="">
                </a>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    
}
</script>
<style scoped lang="scss">
    .writeup_container {
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    padding: 80px;
    background-color: #f5f5f5;
}

.right_div {
    width: 658px;
}

.small_div {
    width: 319px;
    background-color: #2AAA0B;
    padding: 30px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: start;
    border-radius: 10px;
}

.small_div h4 {
    font-size: 20px;
    font-family: ExoBold;
}

.small_div p {
    font-size: 15px;
    font-family: ExoMedium;
}

.small_div_container {
    width: 658px;
    display: flex;
    gap: 20px;
    flex-wrap: wrap;
}

.left_div {
    display: flex;
    flex-direction: column;
    gap: 30px;
}

.private_container {
    background: #f5f5f5;
    width: 100%;
    padding: 80px;
}

.block_header {
    background: #111111;
    padding: 4px 8px;
    color: #ffffff;
    width: 200px;
    border-radius: 4px;
    text-align: center;
}

h1 {
    font-family: ClashDisplay;
    font-size: 44px;
    font-weight: 400;
    line-height: 57px;
    letter-spacing: 0em;
    text-align: left;
    width: 100%;

}

.button_div {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    align-items: center;
}

@media only screen and (max-width: 1260px) {
    .writeup_container {
        display: flex;
        // flex-direction: column;
        justify-content: space-around;
        align-items: center;
        padding: 50px 30px;
        gap: 40px;
    }

    .small_div {
        width: 100% !important;
        background-color: #2AAA0B;
        padding: 30px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        border-radius: 10px;
        box-sizing: border-box;
    }

    .small_div_container {
        width: 100% !important;
        display: flex;
        gap: 20px;
        flex-wrap: wrap;
    }

    .private_container {
        background: #f5f5f5;
        width: 100%;
        padding: 30px 15px;
        text-align: center;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

}

@media only screen and (max-width: 974px) {
    .writeup_container {
        display: flex;
        flex-direction: column-reverse;
        justify-content: center;
        align-items: center;
        width: 100%;
        padding: 50px 0px !important;
        box-sizing: border-box;
    }

    .small_div {
        width: 100% !important;
        background-color: #2AAA0B;
        padding: 30px;
        display: flex;
        flex-wrap: wrap;
        flex-direction: column;
        justify-content: center;
        align-items: start;
        border-radius: 10px;
        box-sizing: border-box;
    }

    .small_div_container {
        display: flex;
        flex-direction: row;
        justify-content: center;
        align-items: center;
        gap: 20px;
        box-sizing: border-box;
    }

    .right_div {
        width: 100%;
        padding: 20px;
    }

    .left_div img {
        width: 100%;
        padding: 20px;
    }

    h1 {
        font-family: ClashDisplay;
        font-size: 44px;
        font-weight: 400;
        line-height: 57px;
        letter-spacing: 0em;
        text-align: center;
        width: 100%;

    }

    .button_div {
        display: flex;
        flex-wrap: nowrap;
        justify-content: center;
        align-items: center;
        gap: 0 !important;
    }

    .sub_header {
        text-align: center;
    }
    .left_div {
    display: flex;
    flex-direction: column;
    gap: 0px;
}
}
</style>