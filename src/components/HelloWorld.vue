<template>
<div class="hello">
    <div class="left_container">
        <h1 class="header">Smart and Sustainable
            <span class="box_text">
                Commute Solution
            </span>
            for your organization</h1>
        <h5>
            Easily create a
            <span class="bold">carpooling network</span>

            for members of your

            <span class="bold">company or group.</span>
        </h5>
        <div class="button_div">
            <a class="button" href="#">
                Book a Demo
            </a>
            <a class="button_sec" href="#">
                Get Started
            </a>
        </div>
    </div>
    <div class="right_container">
        <img src="../assets/images/mockup.svg" alt="">
        <img src="../assets/images/bottom.svg" alt="">
    </div>
</div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
.button_sec {
    border: none;
    padding: 20px 70px;
    border-radius: 10px;
    border: 1px solid #2aaa0b;
    color: #2aaa0b !important;
    background-color: #F2FAF1;
}

.button {
    border: none;
    padding: 20px 70px;
    background-color: #2aaa0b;
    border-radius: 10px;
    color: #ffffff !important;

}

.hello {
    background-image: url("../assets/images/hero_bg.svg");
    height: 720px;
    background-size: cover;
    margin-top: 20px;
    display: flex;
    flex-direction: row !important;
    justify-content: center;
    align-items: center;
}

.left_container {
    display: flex;
    flex-direction: column;
    justify-content: left;
    align-items: start;
    width: 780px;
    gap: 20px;
}

.box_text {
    background-image: url("../assets/images/text_bg.svg");
    height: 100px;
    background-size: cover;
    padding: 20px 10px;
}

h1 {
    font-family: ClashDisplay;
    line-height: 92.6px;
    font-size: 50px;
}

h5 {
    line-height: 190%;
    width: 550px;
}

.bold {
    font-family: ExoBold;
}

.right_container {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
}

.button_div {
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: center;
    align-items: center;
}

@media only screen and (max-width: 1299px) {
    .left_container {
        width: 100%;
    }

    h1 {
        font-family: ClashDisplay;
        line-height: 62.6px;
        font-size: 35px;
    }

    h5 {
        width: 100%;
    }

    .hello {
        padding: 30px 60px;
        height: auto;
        margin-top: 60px;
    }

    .box_text {
        background-image: none;
        background-color: #F5F5F5;
        height: 100px;
        background-size: cover;
        padding: 10px 5px;
    }

}

@media only screen and (max-width: 1107px) {
    .hello {
        flex-direction: column !important;
        justify-content: center;
        align-items: center;
        text-align: center !important;
        gap: 60px;
    }

    .left_container {
        width: 100%;
        display: flex !important;
        align-items: center;
        justify-content: center;
    }

    h1 {
        text-align: center;
    }
}

@media only screen and (max-width: 769px) {
    .right_container img {
        width: 100%;
    }

    h1 {
        font-family: ClashDisplay;
        line-height: 50px;
        font-size: 40px;
        width: 100%;
    }

    .hello {
        background-image: none;
        background: #F5F5F5;
        padding: 20px;
        height: auto;
        margin-top: 60px;
    }
}
</style>
