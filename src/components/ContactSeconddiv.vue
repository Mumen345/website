<template>
<div class="seconddiv_container">
    <h1>Get in Touch with Greach</h1>
    <div class="form_container">
        <form>
            <!-- 2 column grid layout with text inputs for the first and last names -->
            <div class=" mb-4 custom">
                <div class="col">
                    <div data-mdb-input-init class="input_div">
                        <label class="form-label" for="form3Example1">Full Name</label>
                        <input type="text" id="form3Example1" class="" />
                    </div>
                </div>
                <div class="col">
                    <div data-mdb-input-init class="input_div">
                        <label class="form-label" for="form3Example3">Email address</label>
                        <input type="email" id="form3Example3" class="" />
                    </div>
                </div>
            </div>
            <!-- Email input -->
            <div data-mdb-input-init class="input_div mb-4">
                <label class="form-label" for="form3Example3">Phone Number</label>
                <input type="tel" id="phonenumber" class="" />
            </div>

            <div data-mdb-input-init class="input_div mb-4">
                <label class="form-label" for="form4Example3" >Message</label>
                <textarea class="" id="form4Example3" rows="4"></textarea>
            </div>
            <!-- Submit button -->
            <button class="button mb-4">Sign up</button>
        </form>
    </div>
</div>
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
.seconddiv_container {
    background: #ffffff;
    padding: 50px 0;

}

.custom {
    display:flex !important;
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
    padding: 10px 0;
    background: #F5F5F5;
    border-radius: 4px;
}
textarea {
    border: 1px solid #EAECEF !important;
    outline: #EAECEF !important;
    background: #F5F5F5;
    border-radius: 4px;
}
.input_div {
    display:flex;
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
    display:flex !important;
    flex-direction: column;
}
}
</style>
