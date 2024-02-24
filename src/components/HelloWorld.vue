<template>
<div class="hello">
    <div class="left_container">
        <h1 class="header">A Smarter and Sustainable
            <span class="box_text">
                Commute Solution
            </span> 
             for Your Organization</h1>
        <h5>
            Join Africa’s
            <span class="bold">fastest</span>
            growing network of
            <span class="bold">verified car owners</span>
            offering seats to verified riders
            <span class="bold">commuting same direction</span>
        </h5>
        <div class="button_div">
          <a href="#">
            <img src="../assets/images/App_Store.svg" alt="">
          </a>
          <a href="#">
            <img src="../assets/images/play.svg" alt="">
          </a>
        </div>
    </div>
    <div class="right_container">
      <img src="../assets/images/mockup.svg" alt="">
      <img src="../assets/images/bottom.svg" alt="">
    </div>
</div>
</template>

<script>
export default {
    name: 'HelloWorld',
    props: {
        msg: String
    }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->

<style lang="scss" scoped>
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
  gap: 30px;
  justify-content: center;
  align-items: center;
}





@media only screen and (max-width: 1299px) {
  .left_container {
    width: auto;
  }
  h1 {
    font-family: ClashDisplay;
    line-height: 72.6px;
    font-size: 40px;
  }
  .hello {
    padding: 30px 60px;
    height: auto;
  margin-top: 60px;
  }
}
@media only screen and (max-width: 1107px) {
  .hello {
    background-image: none;
    background-color: #F5F5F5;
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
 
 
}

</style>
