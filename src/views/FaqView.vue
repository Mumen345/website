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
.faq_container{
        display: flex;
        justify-content: center;
        align-items: center;
        gap: 30px;
        width: 100%;
}
</style>
