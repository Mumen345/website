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
