<template>
  <!-- Start Enclosing Div -->
  <div id="app" class="demo-layout mdl-layout mdl-js-layout mdl-layout--drawer mdl-layout--fixed-header">
    <!-- Start Header -->
      <header class="demo-header mdl-layout__header mdl-color--white mdl-color-text--black">
        <div class="mdl-layout__header-row">
          <span class="mdl-layout-title">StyleKast</span>
          <div class="mdl-layout-spacer"></div>

          <button class="mdl-button mdl-js-button mdl-js-ripple-effect mdl-button--icon" id="hdrbtn">
            <i class="material-icons">more_vert</i>
          </button>
          <ul class="mdl-menu mdl-js-menu mdl-js-ripple-effect mdl-menu--bottom-right" for="hdrbtn">
            <li class="mdl-menu__item header_menu">Log In</li>
            <li class="mdl-menu__item header_menu">About</li>
          </ul>
        </div>
      </header>
      <!-- End Header -->

      <!-- Start Drawer -->
      <div class="demo-drawer mdl-layout__drawer mdl-color--white mdl-color-text--pink-A400">
        <header class="demo-drawer-header">
          <div class="avatar-container">
            <div class="image"></div>
          </div>
          <div class="mdl-layout-spacer"></div>

          <div class="contact-info">
            <div class="name">Style Sprinter</div>
          </div>
        </header>

        <nav class="demo-navigation mdl-navigation mdl-color--white mdl-color-text--black">
          <router-link to="/" class="mdl-navigation__link"><i class="material-icons" role="presentation">home</i>Home</router-link>
          <router-link to="/favs" class="mdl-navigation__link"><i class="material-icons" role="presentation">loyalty</i>Favorites</router-link>
          <router-link to="/kast" class="mdl-navigation__link"><i class="material-icons" role="presentation">record_voice_over</i>Kast</router-link>
          <router-link to="/search" class="mdl-navigation__link"><i class="material-icons" role="presentation">search</i>Search</router-link>
          <router-link to="/profile" class="mdl-navigation__link"><i class="material-icons" role="presentation">person</i>Profile</router-link>
        </nav>

      </div>
      <!-- End Drawer -->

      <!-- Start Main -->
      <main class="mdl-layout__content mdl-color--white">
        <!-- <div class="mdl-grid demo-content"> -->
          <router-view></router-view>
        <!-- </div> -->
      </main>
      <footer class="mdl-mini-footer">
        <div class="social-icons">
          <router-link to="/" class="mobnav" tag="div"><a><i class="material-icons mdl-color-text--black">home</i></a></router-link>
          <router-link to="/favs" class="mobnav" tag="div"><a><i class="material-icons mdl-color-text--black">loyalty</i></a></router-link>
          <router-link to="/kast" class="mobnav" tag="div"><a><i class="material-icons mdl-color-text--black">record_voice_over</i></a></router-link>
          <router-link to="/search" class="mobnav" tag="div"><a><i class="material-icons mdl-color-text--black">search</i></a></router-link>
          <router-link to="/profile" class="mobnav" tag="div"><a><i class="material-icons mdl-color-text--black">person</i></a></router-link>
        </div>  
      </footer>
      <!-- End Main -->
  </div>
  <!-- End Enclosing Div -->

</template>

<script>
require('material-design-lite')

function close () {
  var d = document.querySelector('.mdl-layout')
  d.MaterialLayout.toggleDrawer()
}

window.onload = function () {
  document.querySelector('.mdl-layout__drawer').addEventListener('click', close)
}

export default {
  name: 'App'
}
</script>

<style>
@import url('https://fonts.googleapis.com/icon?family=Material+Icons');
@import url('https://code.getmdl.io/1.3.0/material.pink-blue.min.css');
/* @import url('https://fonts.googleapis.com/css?family=Lato'); */

#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}
.avatar-container {
  position: relative;
  border: 2px solid black;
  border-radius: 50%;
  height: 90px;
  padding: 2px;
  width: 90px;
  margin: 20px auto;
}
.avatar-container .image {
  background-image: url('http://cdn2.stylecraze.com/wp-content/uploads/2017/06/Chest-Covering-Hijab-Style.jpg');
  background-size: contain;
  border-radius: 50%;
  height: 100%;
  width: 100%;
}
.contact-info {
     margin: 0 20px;
     padding-bottom: 20px;
     border-bottom: 1.5px solid #F9F9F9;
     text-align: center;
   }
 .contact-info .name {
     font-weight: 500;
 }

.demo-layout .mdl-layout__header .mdl-layout__drawer-button {
  /* color: rgba(0, 0, 0, 0.54); */
  /* Changed the above so that the memu bar shows in white again */
  /* color: rgba(0, 0, 0.54, 0.54); This was not working with Firefox so changed it to white*/
  color: black;
}

.header_menu {
  color: #f50057;
}

.mdl-layout__drawer .avatar {
  margin-bottom: 16px;
}
.demo-drawer {
  border: none;
}
/* iOS Safari specific workaround */
.demo-drawer .mdl-menu__container {
  z-index: -1;
}
.demo-drawer .demo-navigation {
  z-index: -2;
}
/* END iOS Safari specific workaround */
.demo-drawer .mdl-menu .mdl-menu__item {
  display: flex;
  align-items: center;
}

.demo-navigation {
  flex-grow: 1;
}
.demo-layout .demo-navigation .mdl-navigation__link {
  display: flex !important;
  flex-direction: row;
  align-items: center;
  /* color: rgba(255, 255, 255, 0.56); */
  /*color: rgba(255, 255, 255, 1);*/
  color: black;
  font-weight: 500;
}
.demo-layout .demo-navigation .mdl-navigation__link:hover {
  background-color: #f50057;
  color: #FFFFFF;
}

.demo-navigation .mdl-navigation__link .material-icons {
  font-size: 24px;
  /* color: rgba(255, 255, 255, 0.56); */
  /*color: rgba(255, 255, 255, 1);*/
  color: black;
  margin-right: 32px;
}

/* .demo-content {
  max-width: 920px;
} */

.social-icons {
  background-color: white;
  position: fixed;
  bottom: 0%;
  width: 100%;
  display: none;
}

.mobnav {
      position: relative;  /* 1 */
      width: 18.5%;
      height: 35px;
      display: inline-block;
      text-align: center;
    }

div.mobnav i {
      margin: 0;
      position: absolute;  /* 2 */
      top: 50%;            /* 3 */
      transform: translate(0, -50%); /* 4 */
    }

div.mobnav a:hover i {
      color: #f50057 !important;
    }

@media (max-width: 580px) {
      /* make title smaller to fit on screen */
      .mdl-layout-title {
          font-size: 18px;
        }

      .social-icons {
        display: block;
      }

      .mdl-layout .mdl-layout__drawer-button {
        display: none;
      }

      .mdl-layout__header-row {
        padding: 15px;
      }
  }
/* .mdl-layout .mdl-layout__drawer-button {
  display: none;
}

.mdl-layout__header-row {
  padding: 10px;
} */
/* not working */
div.mobnav a:active i {
      color: #f50057 !important;
    }
</style>
