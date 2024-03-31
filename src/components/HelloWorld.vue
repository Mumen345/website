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
            <a class="download_btn" href="https://apps.apple.com/app/greach/id6444231549">
                <img src="../assets/images/App_Store.svg" alt="">
            </a>
            <a class="download_btn" href="https://play.google.com/store/apps/details?id=com.greach.greachapp">
                <img src="../assets/images/play.svg" alt="">
            </a>
        </div>
        <a class="button1" @click.prevent="on" id="myBtn" href="#">
            Book a Demo
        </a>
    </div>
    <div class="right_container">
        <img src="../assets/images/mockup.svg" alt="">
        <img src="../assets/images/bottom.svg" alt="">
    </div>
    <div id="myModal" class="modal">

        <!-- Modal content -->
        <div class="modal-content">
            <div class="modal-header">
                <h4>Modal Header</h4>
                <span @click.prevent="off" class="close">&times;</span>
            </div>
            <div class="modal-body">
                <div class="form_container">
                    <form @submit.prevent="submit">

                        <div class=" mt-3 mb-4 custom">
                            <div class="col">
                                <div data-mdb-input-init class="input_div">
                                    <input v-model="request.fullName" type="text" id="name" placeholder="FullName" class="" />
                                </div>
                            </div>
                            <br>
                            <div class="col">
                                <div data-mdb-input-init class="input_div">
                                    <input v-model="request.email" type="email" id="email" placeholder="Your email address" class="" />
                                </div>
                            </div>
                            <br>
                            <div data-mdb-input-init class="input_div mb-4">
                                <label class="form-label" for="form4Example3">Message</label>
                                <textarea v-model="request.message" class="" id="form4Example3" rows="4"></textarea>
                            </div>
                        </div>
                        <button type="submit" class="button mb-4">Send Message</button>
                    </form>
                </div>
            </div>

        </div>
    </div>
</div>
</template>

<script>
export default {
    name: 'HelloWorld',
    data() {
        return {
            request: {
                fullName: "",
                email: "",
                message: "I need to inquire about how [Your Product/Service Name] can elevate my [industry/business]. Ready to witness firsthand the possibilities? Let's set up a personalized demo session to explore the tailored solutions we offer for your specific needs.",
            }
        }
    },
    methods: {
        on() {
            document.getElementById("myModal").style.display = "block";
        },

        off() {
            document.getElementById("myModal").style.display = "none";
        }
    },

}
</script>

<style lang="scss" scoped>
//Modal Styles

/* The Modal (background) */
.modal {
    display: none;
    position: fixed;
    z-index: 1;
    padding-top: 100px;
    left: 0;
    top: 0;
    width: 100%;
    height: 100%;
    overflow: auto;
    background-color: #000000d2;
}

/* Modal Content */
.modal-content {
    position: relative;
    background-color: #fefefe;
    margin: 0 auto;
    padding: 0;
    border: 1px solid #888;
    width: 50%;
    box-shadow: 0 4px 8px 0 rgba(0, 0, 0, 0.2), 0 6px 20px 0 rgba(0, 0, 0, 0.19);
    -webkit-animation-name: animatetop;
    -webkit-animation-duration: 0.4s;
    animation-name: animatetop;
    animation-duration: 0.4s
}

input {
    border: 1px solid #EAECEF !important;
    padding: 10px;
    background: #F5F5F5;
    border-radius: 4px;
}

textarea {
    border: 1px solid #EAECEF !important;
    outline: #EAECEF !important;
    background: #F5F5F5;
    border-radius: 4px;
    padding: 10px;
}

.input_div {
    display: flex;
    flex-direction: column;
    outline: #EAECEF !important;
}

.button1 {
    border: none;
    padding: 15px 70px;
    background-color: #2aaa0b;
    border-radius: 4px;
    color: #000000 !important;
    width: 60%;
    text-align: center;

}

/* Add Animation */
@-webkit-keyframes animatetop {
    from {
        top: -300px;
        opacity: 0
    }

    to {
        top: 0;
        opacity: 1
    }
}

@keyframes animatetop {
    from {
        top: -300px;
        opacity: 0
    }

    to {
        top: 0;
        opacity: 1
    }
}

/* The Close Button */
.close {
    color: rgb(0, 0, 0);
    float: right;
    font-size: 40px;
    font-weight: bold;
}

.close:hover,
.close:focus {
    color: #484848;
    text-decoration: none;
    cursor: pointer;
}

.modal-header {
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    width: 100&;
    background-color: #f5f5f5;
    color: rgb(0, 0, 0);
}

.modal-body {
    padding: 2px 16px;
}

.modal-footer {
    padding: 2px 16px;
    background-color: #2aaa0b;
    color: white;
}

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
    padding: 12px;
    background-color: #000000;
    border-radius: 10px;
    width: 100%;
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
    gap: 20px;
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
    .modal-content {
        width: 90%;
    }

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
        line-height: 45px;
        font-size: 30px;
        width: 100% !important;
        text-align: center;
        width: 100%;
    }

    .hello {
        background-image: none;
        background: #F5F5F5;
        padding: 20px;
        height: auto;
        margin-top: 60px;
    }

    .button1 {
        border: none;
        padding: 15px 120px;
        background-color: #2aaa0b;
        border-radius: 4px;
        color: #ffffff !important;
        width: 88%;
        text-align: center;

    }

    h5 {
        width: 100%;
        text-align: center;
    }

    .download_btn img {
        width: 50%;
    }

    .download_btn {
        width: 100% !important;
        background: #000000;
        border-radius: 6px;
    }

}

@media only screen and (max-width: 450px) {
    .button1 {
        border: none;
        padding: 15px 120px;
        background-color: #2aaa0b;
        border-radius: 6px;
        color: #ffffff !important;
        width: 100%;
        text-align: center;

    }
}
</style>
