<template>
    <div>
        <div class="navBar">
            <div class="nav_container">
    
                <router-link v-scroll-to="{ el: '#home', onDone: onDone, onCancel: onCancel }" to="#">
                    <img src="./assets/images/logo_mobile.svg" alt="">
    
                </router-link>
                <div class="links">
                    <router-link 
                        to="/#">About Us</router-link> |
                    <router-link 
                        to="/#">Contact us</router-link>
                    |
                    <router-link to="/#">FAQ
                    </router-link>
                    |
                    <router-link to="/#">Greach Private
                    </router-link>
                    |
                    <router-link to="/#">Greach Public
                    </router-link>
                </div>
                <a href="#" target="_blank" class="black_button elongate_btn">Login</a>
            </div>
            <div class="topnav">
                <router-link to="#">
                    <img src="./assets/images/logo_mobile.svg" alt="">
    
                </router-link>
                <div id="myLinks">
                    <router-link 
                        to="/#">About Us</router-link>
                    <router-link 
                        to="/#">Contact us</router-link>
                    <router-link to="/#">FAQ
                    </router-link>
                    <router-link to="/#">Greach Private
                    </router-link>
                    <router-link to="/#">Greach Public
                    </router-link>
    
                    <a href="#" class="black_button">Login</a>
    
                </div>
                <a target="_blank" class="icon" @click="myFunctiion">
                    <i class="fa fa-bars"></i>
                </a>
            </div>
        </div>
        <router-view />
    </div>
</template>
<script>
export default {
    name: 'App',
    methods: {
        myFunctiion() {
            var x = document.getElementById("myLinks");
            if (x.style.display === "block") {
                x.style.display = "none";
            } else {
                x.style.display = "block";
            }

        }
    }


}
</script>

<style lang="scss">
@font-face {
  font-family: ClashDisplay;
  src: url("./assets/fonts/ClashDisplay-Semibold.otf");
}
@font-face {
  font-family: ExoBold;
  src: url("./assets/fonts//Exo-Bold.ttf");
}
@font-face {
  font-family: ExoMedium;
  src: url("./assets/fonts/Exo-Medium.ttf");
}
@font-face {
  font-family: ExoRegular;
  src: url("./assets/fonts/Exo-Regular.ttf");
}
#app {
  font-family: ExoRegular;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #111111;
  max-width: 1440px;
  margin: 0 auto;
}

  a {
    font-weight: bold;
    color: #111111 !important;
    text-decoration: none;
    font-size: 14px;


    &.router-link-exact-active {
      color: #2AAA0B;
    }
  }
.navBar {
    background-color: #ffffff;
    position: -webkit-sticky !important;
    position: fixed !important;
    top: 0;
    z-index: 200;
    width: 100%;
    max-width: 1440px;
    margin: 0 auto;

}

.nav_container {
    background-color: #ffffff;
    display: flex;
    width: 100%;
    height: 80px;
    justify-content: space-between;
    align-items: center;
    flex-shrink: 0;
    margin: 0 auto;

}

.links {
    display: flex;
    gap: 30px;
}

.topnav {
    display: none;
}

.elongate_btn {
    width: 200px;
}

@media only screen and (max-width: 1469px) {
    .nav_container {
        width: 100%;
    }

}

@media only screen and (max-width: 1000px) {

    .nav_container {
        display: none;
    }

    .topnav {
        overflow: hidden;
        background-color: #ffffff !important;
        position: relative;
        display: block;
        width: 100%;
        box-sizing: border-box;
        transition: height 4s;

    }

    .topnav #myLinks {
        display: none;
        background: #ffffff;
        transition: max-height 650ms;
        padding-bottom: 10px;
        box-sizing: border-box;

    }

    .topnav a {
        color: #2A2929 !important;
        padding: 14px 16px;
        text-decoration: none;
        font-size: 14px;
        display: block;
    }

    .topnav a.icon {
        background: #ffffff;
        display: block;
        position: absolute;
        right: 0;
        top: 0;
    }

    .topnav a:hover {
        background-color: #eff2f5;
        color: black;
    }

    .active {
        background-color: #eff2f5;
        color: white;
    }

    .container {
        display: flex;
        background-color: #eff2f5;
        width: 100%;
        justify-content: end;
        height: auto;
        border-bottom: 1px solid #C2C2C2;
        z-index: 0;
        transition: height 4s;
    }
}
</style>