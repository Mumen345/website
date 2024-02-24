<template>
    <div class="second_section">
        <marquee direction="left" behavior="">
            <p>Safety Guaranteed.    Save Cost. Grow  Your Network. <span class="move_right"> Safety Guaranteed.    Save Cost. Grow  Your Network. 
</span><span class="move_right"> Safety Guaranteed.    Save Cost. Grow  Your Network. 
</span> </p>
            
        </marquee>
    </div>
</template>

<script>

export default {
}
</script>

<style scoped>
.second_section {
    background: #CCFE69;
    height: 80px;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 100%;
    padding-top: 20px;

}

.second_section p {
    font-family: ClashDisplay;
    font-size: 32px;
    font-weight: 400;
    line-height: 57px;
    letter-spacing: 0em;
    text-align: left;
    width: 100%;

}
.move_right {
    margin-left: 40px;
}
@media only screen and (max-width: 700px) {
    .second_section {
        flex-wrap: wrap;
        padding-bottom: 30px;
    }

}
</style>