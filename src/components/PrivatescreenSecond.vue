<template>
<div class="secondcontainer">
    <h1>More informations about Greach Private</h1>
    <p>Risk management and compliance, when approached strategically, have the potential to go beyond mitigating threats and protecting a company’s operations and reputation.They can actually generate value and create opportunities.

    </p>
    <p>
        Our dedicated risk and compliance consulting team assists clients in transforming uncertainty into advantageous prospects. We work collaboratively with organizations to identify and leverage the potential within their risk and compliance functions, enabling them to thrive in an ever-changing business landscape.
    </p>
    <img src="../assets/images/people_laughing.png" alt="">
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
h1 {
    font-family: ClashDisplay;
    font-size: 3rem;
    line-height: 92px;

}

p {
    font-size: 1.1rem;
    color: #404040;
    line-height: 37px;
}

img {
    width: 100%;
    margin-top: 30px;
}

.secondcontainer {
    background: #f1f1f1;
    width: 90%;
    margin: 0 auto;
    padding: 4rem;
    border-radius: 30px;
    box-sizing: border-box;
}

@media screen and (max-width: 1200px) {
    .secondcontainer {
        padding: 3rem;
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: flex-start;

    }

    h1 {
        width: 100%;
        padding: 1.5rem !important;
        font-size: 2.7rem;
        line-height: 3rem;

    }

}

@media screen and (max-width: 1200px) {
    .secondcontainer {
        width: 100%;
        border-radius: 0;
        padding: 15px;
        text-align: center;
    }
}
@media screen and (max-width: 500px) {
    h1 {
    font-size: 2rem;
    line-height: 3rem;
}}
</style>
