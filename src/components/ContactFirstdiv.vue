<template>
<div class="contact_container">
    <div class="column">
        <h5>General Inquires</h5>
        <div class="contact_div">
            <a href="http://" target="_blank" rel="noopener noreferrer">
                <div class="action_div">
                    <p>contact@ai-podcasts.com</p>
                </div>
            </a>
            <a href="tel:+1(123)456-7890">
                <div class="action_div">
                    <p>+1 (123) 456-7890</p>
                </div>

            </a>
        </div>
    </div>
    <div class="column">
        <h5>Technical Support</h5>
        <div class="contact_div">
            <a href="http://" target="_blank" rel="noopener noreferrer">
                <div class="action_div">
                    <p>contact@ai-podcasts.com</p>
                </div>
            </a>
            <a href="tel:+1(123)456-7890">
                <div class="action_div">
                    <p>+1 (123) 456-7890</p>
                </div>

            </a>
        </div>
    </div>
    <div class="column">
        <h5>Our Office</h5>
        <div class="contact_div">
            <a href="http://" target="_blank" rel="noopener noreferrer">
                <div class="">
                    <p>
                        Address: 123 AI Tech Avenue, Techville, 54321
                    </p>
                </div>
            </a>
            <a href="tel:+1(123)456-7890">
                <div class="action_div">
                    <p>Get Directions</p>
                </div>
            </a>

        </div>
    </div>
    <div class="column">
        <h5>Connect with Us</h5>
        <div class="sm_container">
            <a class="sm_icon" href="http://">
                <img src="../assets/images/contact_twitter.svg" alt="">
            </a>
            <a class="sm_icon" href="http://">
                <img src="../assets/images/contact_medium.svg" alt="">
            </a>
            <a class="sm_icon" href="http://">
                <img src="../assets/images/contact_linkedin.svg" alt="">
            </a>
        </div>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.contact_container {
    background: #f5f5f5;
    margin-top: 100px;
    width: 100% !important;
    display: flex;
    flex-wrap: wrap;
    gap: 30px;
    justify-content: space-around;
    padding: 30px 0;
}

.action_div {
    background: #ffffff;
    display: flex;
    justify-content: center !important;
    align-items: center;
    border-radius: 6px;
    padding-top: 15px;
    width: 221px;
    height: 49px;
}


h5 {
    font-weight: 800;
    margin-bottom: 30px;
}

.contact_div {
    display: flex;
    flex-direction: column;
    gap: 10px;
    width: 100%;
}

.sm_container {
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    gap: 10px;
}

.sm_icon {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 50px;
    height: 50px;
    background: #ffffff;
    border-radius: 6px;
}
</style>
