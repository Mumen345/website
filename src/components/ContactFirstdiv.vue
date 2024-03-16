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
            <a href="">
                <div class="action_div">
                    <p>Get Directions</p>
                </div>
            </a>

        </div>
    </div>
    <div class="column">
        <h5>Connect with Us</h5>
        <div class="sm_container">
            <a class="sm_icon" href="https://www.linkedin.com/company/greach-inc/">
                <img src="../assets/images/contact_linkedin.svg" alt="">
            </a>
            <a class="sm_icon" href="https://m.facebook.com/story.php?story_fbid=110835595016172&substory_index=0&id=100082691964533" target="_blank">
                <img alt="apple logo" src="../assets/images/facebook_black.svg" />
            </a>
            <a class="sm_icon" href="https://twitter.com/GreachRides" target="_blank">
                <img src="../assets/images/contact_twitter.svg" alt="">
                </a>
                <a class="sm_icon" href="https://www.instagram.com/greachrides/" target="_blank">
                    <img alt="apple logo" src="../assets/images/instagram_black.svg" />
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
@media only screen and (max-width: 1107px) {
    .contact_container {
    background: #f5f5f5;
    margin-top: 50px;
    width: 100% !important;
    display: flex;
    flex-wrap: wrap;
    align-items: flex-start !important;
    justify-content: flex-start !important;
    gap: 30px;
    justify-content: space-around;
    padding: 30px;
}
.action_div {
  
}
} 
</style>
