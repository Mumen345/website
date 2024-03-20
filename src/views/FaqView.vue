<template>
<div class="faq_container">
    <div class="right_container">
        <h2>Frequently Asked Questions</h2>
        <p>If the question is not available on our FAQ section, Feel free to contact us personally, we will resolve your respective doubts. </p>
        <router-link class="" to="/contact">Contact Us
        </router-link>
    </div>
    <FaqQuestions />

</div>
</template>

<script>
import FaqQuestions from '../components/FaqQuestions.vue';

export default {
    name: "FaqView",
    components: {
        FaqQuestions,
    },
}
</script>

<style lang="scss" scoped>
h2 {
    font-family: ClashDisplay;
    font-size: 28px;
}

p {
    line-height: 150%;
}

.right_container {
    width: 500px !important;
    display: flex;
    flex-direction: column;
    gap: 10px;
}

.faq_container {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 30px;
    width: 100%;
    padding-right: 3rem;
    padding-left: 3rem;
}

@media screen and (max-width: 1020px) {
    .faq_container {
        display: flex;
        flex-direction: column;
        gap: 0;
        width: 100%;
        text-align: center;
        padding-right: 1.5rem;
        padding-left: 1.5rem;
    }

    .right_container {
        width: 100% !important;
        margin-top: 70px;
    }
}
</style>
