<template>
<footer class="footer_section">
    <div class="footer_container">
        <div class="left_div">
            <div class="logo_div">
                <img alt="Hero Img" class="logo_img" src="../assets/images/greach_logo.png" />
            </div>
            <p class="company_description">
                Greach is a secure peer-to-peer carpooling platform for working professionals in Africa.
            </p>
            <p class="company_description">
                We have created a technology-driven platform to enable verified car owners fill their empty car seats with verified passengers going their direction.
            </p>
            <p class="company_description">
                Car owners and Riders are able to reduce commuting cost and their carbon footprints.
            </p>

            <!-- <div class="download_link">
                      <a href="#"><img alt="apple logo" src="../assets/appstore.svg"/></a>
                      <a href="#"><img alt="play store logo" src="../assets/googleplay.svg"/></a>
                  </div> -->
        </div>
        <div class="footer_contact">
            <br />
            <h3 class="contact_div_text">Contact</h3>
            <div class="contact_info">
                <img alt="apple logo" src="../assets/images/email.svg" />
                <a href="mailto:hello@greach.co"> hello@greach.co</a>
            </div>
            <div class="contact_info">
                <img alt="apple logo" src="../assets/images/Frame3.svg" />
                <a href="#">Ikoyi, Lagos</a>
            </div>
            <div class="">
                <a href="https://m.facebook.com/story.php?story_fbid=110835595016172&substory_index=0&id=100082691964533" target="_blank">
                    <img alt="apple logo" src="../assets/images/facebook.svg" />
                </a>
                <a href="https://twitter.com/GreachRides" target="_blank">
                    <img alt="apple logo" src="../assets/images/twitter.svg" />
                </a>
                <a href="https://www.linkedin.com/company/greach-inc/" target="_blank">
                    <img alt="apple logo" src="../assets/images/linkedin.svg" />
                </a>
                <a href="https://www.instagram.com/greachrides/" target="_blank">
                    <img alt="apple logo" src="../assets/images/instagram.svg" />
                </a>
            </div>
        </div>
    </div>
    <hr class="line" />
    <div class="last_section">
        <h6 class="text-white">Greach 2024</h6>
        <!-- <img alt="apple logo" class="textc" src="../assets/images/one.svg" /> -->
    </div>
</footer>
</template>

  
<script></script>
  
<style scoped>
.textc {
    display: flex;
    flex-direction: row;
}

.logo_img {
    width: 120px;
}

.line {
    width: 90%;
    height: 1px;
    background-color: #262626;
    border: 1px solid #262626;
    margin: 20px auto;
}

.last_section {
    display: flex;
    justify-content: space-around;
    /* width: 50%; */
    margin: 30px auto 0;
}

.footer_section {
    background-color: #000000;
    display: block;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    padding: 50px 30px;
    /* margin-top: 80px; */
    width: 100%;
    box-sizing: border-box;
}

.footer_container a {

    color: #ffffff !important;
}
.footer_container {
    color: #ffffff !important;
    display: flex;
    flex-direction: row;
    justify-content: space-around;
    align-items: center;
    /* background-color: red; */
}

.footer_contact {
    display: flex;
    flex-direction: column;
    justify-content: stretch;
    align-items: flex-start;
    gap: 23px;
}

.logo_div_text {
    font-weight: 700;
    font-size: 32px;
    margin: 10px;
}

.logo_div {
    display: flex;
    justify-content: center;
    align-items: center;
}

.footer_container p {
    font: 12px;
    font-weight: 300;
    font-size: 14px;
    line-height: 24px;
}

.left_div {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 23px;
}

.contact_info {
    display: flex;
    flex-direction: row;
    justify-content: none;
    align-items: center;
}

.contact_info img {
    margin: 5px;
}

a {
    color: #cecece;
    font: 12px;
    font-weight: 300;
    font-size: 14px;
    line-height: 24px;
}

.company_description {
    width: 371px;
}

.download_link {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    gap: 20px;
}

@media screen and (max-width: 1080px) {
    .footer_container {
        color: #cecece;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }

    .footer_contact {
        display: flex;
        flex-direction: column;
        justify-content: start;
        align-items: flex-start;
        gap: 10px;
    }
}

@media screen and (max-width: 700px) {
    .footer_container {
        color: #cecece;
        display: flex;
        flex-direction: column;
        justify-content: center;
        align-items: center;
        text-align: left;
        margin: 0 auto;
        box-sizing: border-box;
        gap: 40px;
    }

    .logo_img {
        width: 120px;
        margin: 0 auto;
        display: flex;
        justify-content: center;
        align-items: left;
    }

    .company_description {
        width: 100%;
    }
}
</style>
