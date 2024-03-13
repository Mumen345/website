<template>
<div class="seconddiv_container">
    <h1>Get in Touch with Greach</h1>
    <div class="form_container">
        <form @submit.prevent="submit">

            <div class=" mb-4 custom">
                <div class="col">
                    <div data-mdb-input-init class="input_div">
                        <label class="form-label" for="form3Example1">Full Name</label>
                        <input v-model="request.fullName" type="text" id="form3Example1" class="" />
                    </div>
                </div>
                <div class="col">
                    <div data-mdb-input-init class="input_div">
                        <label class="form-label" for="form3Example3">Email address</label>
                        <input v-model="request.email" type="email" id="form3Example3" class="" />
                    </div>
                </div>
            </div>
            <div data-mdb-input-init class="input_div mb-4">
                <label class="form-label" for="form4Example3">Message</label>
                <textarea v-model="request.message" class="" id="form4Example3" rows="4"></textarea>
            </div>
            <button type="submit" class="button mb-4">Send Message</button>
        </form>
    </div>
</div>
</template>

<script>
import axios from "axios";
export default {
    name: "LetsTalk",
    data() {
        return {
            request: {
                fullName: "",
                message: "",
                email: "",

            }
        }
    },
    methods: {
        validateEmail(email) {
            const re =
                /^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))*$/;
            return re.test(email);
        },
        async submit() {    
            this.$emit('submit', this.request)
            if (this.request.fullName === "") {
                alert("Please tell us your name");
                return false;
            }
        },
        // submit() {
        //     if (this.request.fullName === "") {
        //         this.$toasted.error("Please tell us your name", {
        //             position: "top-right",
        //             duration: 5000
        //         });
        //         return false;
        //     }
        //     if (this.request.message === "") {
        //         this.$toasted.error("Please type your message", {
        //             position: "top-right",
        //             duration: 5000
        //         });
        //         return false;
        //     }
        //     if (this.request.email === "") {
        //         this.$toasted.error("Please fill your email", {
        //             position: "top-right",
        //             duration: 5000
        //         });
        //         return false;
        //     }
        //     if (this.request.email === "") {
        //         this.$toasted.error("Please fill your email", {
        //             position: "top-right",
        //             duration: 5000
        //         });
        //         return false;
        //     }
        //     if (!this.validateEmail(this.request.email)) {
        //         this.$toasted.error("Invalid email address", {
        //             position: "top-right",
        //             duration: 5000
        //         });
        //         return false;
        //     }
        //     // const params = "email=" + this.request;
        //     // console.log(params);
        //     // axios
        //     //     // .post("https://jsonplaceholder.typicode.com/" + params)
        //     //     .post("https://jsonplaceholder.typicode.com/", this.request)

        //     //     .then((response) => {
        //     //         // console.log(response.status);
        //     //         if (response.status === 200 && response.data.status === "ok") {
        //     //             this.$toasted.success("Success! Thank you for your Response", {
        //     //                 position: "top-right",
        //     //                 duration: 5000
        //     //             });
        //     //             this.email = "";
        //     //         } else {
        //     //             this.$toasted.error("oops an error occurred", {
        //     //                 position: "top-right",
        //     //                 duration: 5000
        //     //             });
        //     //             return false;
        //     //         }
        //     //     })
        //     //     .catch((error) => {
        //     //         console.log(error);
        //     //         this.$toasted.error("Try rest, we don't have a backend yet", {
        //     //             position: "top-right",
        //     //             duration: 5000
        //     //         });
        //     //     });
        // },
    },
    updated: function () {
        axios.post('http://localhost:81/lnt/public/member/car_result', {
                data: this.$data
            })
            .then(function (response) {
                //do something
            });
    }

}
</script>

<style lang="scss" scoped>
.seconddiv_container {
    background: #ffffff;
    padding: 50px 0;

}

.custom {
    display: flex !important;
    flex-direction: row !important;
    flex-wrap: wrap !important;
    gap: 30px;
}

h1 {
    font-family: ClashDisplay;
    line-height: 92.6px;
    text-align: center;
}

.form_container {
    width: 50%;
    margin: 50px auto;
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

.button {
    border: none;
    padding: 15px 70px;
    background-color: #2aaa0b;
    border-radius: 10px;
    color: #ffffff !important;
    width: 100%;

}

@media only screen and (max-width: 1107px) {
    .form_container {
        width: 90%;
        margin: 50px auto;
    }

    .custom {
        display: flex !important;
        flex-direction: column;
    }
}
</style>
