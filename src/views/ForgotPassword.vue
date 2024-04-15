<template>
    <div>
        <div class="container1 mt-5">
            <div class="login_card">
                <div class="space">
                    <h1>Reset <span>Password</span></h1>
                    <small>Please enter your new password below. 
                        Once you have changed your password, login into the mobile app with your new password</small>
                </div>
                <div class="form_group">
                    <input v-model="password" :type="type" class="form-control" placeholder="Your new password">
                    <input v-model="confirmPassword" :type="type" class="form-control" placeholder="Confirm new password">
                    <button @click.prevent='showPassword' class="see_button">{{btnText}}</button>
                    <br>
                    <div class="btn_container">
                        <button @click.prevent=""  class="greach_button" >Reset</button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
<script>
// import axios from "axios";
export default {
    name: "ForgotPassword",
    data() {
        return {
            password: "",
            confirmPassword: "",
            type: "password",
            btnText: "show password"
        };
    },
    methods: {
        submitForm() {
            if (this.password == "") {
                this.$toasted.error("Fill the password please");
                return false;
            }
            if (this.password.length < 8) {
                this.$toasted.error("Password should be at least 8 characters");
                return false;
            }
            if (this.confirmPassword == "") {
                this.$toasted.error("Please input your Confirm password");
                return false;
            }
            if (this.password != this.confirmPassword) {
                this.$toasted.error("Password doesn't match");
                return false;
            }

            var url_str = window.location;
            var url = new URL(url_str);
            var token = url.searchParams.get("token");

            if (!token) {
                this.$toasted.error("Use the reset password link sent to your email");
                return false;
            }
            const requestBody = {
                token: token,
                new_password: this.password,
            };
            
            axios.post("https://prod.greach.co/api/v1/users/reset-password", requestBody)
            .then((response) => {
            if (response.status === 200) {
                this.$toasted.success("Password changed succesfully");
                (this.password = ""),
                (this.confirmPassword = "")
                window.history.pushState({}, document.title, "/changepassword");
            }
            })
            .catch((error) => {
            if (error.response.status === 400 || error.response.status === 404) {
                this.$toasted.error(error.response.data.detail);
                window.history.pushState({}, document.title, "/changepassword");
            } else {
                this.$toasted.error("An error occured. Please make sure you are using the link sent to your email.");
                window.history.pushState({}, document.title, "/changepassword");
            }
            });
        },
        showPassword() {
            if(this.type === "password") {
                this.type = 'text'
                this.btnText = "hide password"
            } else {
                this.type = 'password'
                this.btnText = "show password"
            }
        }
    },
}
</script>
<style scoped>
.container1 {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #ffffff;
    margin:20px auto;
    max-width: 1440px;
}
.btn_container {
    width: 100%;
}
.login_card {
    justify-content: center;
    align-items: flex-start;
    flex-direction: column;
    gap: 40px;
    background: #f9f9f9;
    width: 50%;
    padding: 5em;
}

.form_group {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    width: 100%;
    gap: 20px;
}

.see_button {
    background: #f9f9f9;
    color: #2AAA0B;
    border: none;
    padding: 5px;
    font-size: 12px;
    cursor: pointer;
    display: flex;
}

.form-control {
    border: none;
    background: #ffffff;
    margin: 0;
    padding: 7px 8px;
    font-size: 14px;
    color: inherit;
    border: none;
    border-radius: 3px;
    outline: none;
    height: 50px;
    padding: 0 0 0 15px;
    width: 100%;
}

.greach_button {
    border: none;
    outline: none;
    cursor: pointer;
    width: 70%;
    height: 50px;
    text-align: center;
    background: #2AAA0B;
    border-radius: 3px;
    font-weight: 700;
}

a {
    color: #2AAA0B;
    text-decoration: none;
    font-size: 14px;
    font-weight: 500;
}

span {
    color: #2AAA0B;
}

.space {
    display: flex;
    flex-direction: column;
    gap: 10px;
}
small {
    margin-top: 10px;
    line-height: 30px;
}
@media screen and (max-width: 900px) {
    .container1 {
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    background-color: #ffffff;
    margin:20px auto;
}
.login_card {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    gap: 40px;
    background: #f9f9f9;
    width: 100%;
    padding: 30px;
    box-shadow: none;
}
.greach_button {
    border: none;
    outline: none;
    cursor: pointer;
    width: 100%;
    height: 50px;
    text-align: center;
    color: #ffffff;
    background: #2AAA0B;
    border-radius: 3px;
    font-weight: 700;
}
}
</style>