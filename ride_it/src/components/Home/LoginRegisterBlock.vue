<template>
  <div id="block" class="row w-100 mt-5 m-0">
    <div class="col h-100">
      <div class="row h-100 align-items-center">
        <div id="text" class="row w-100 justify-content-center">
          <div id="lrPanel" class="w-65 h-75">
            <div class="row h-100 align-items-center">
              <div id="text" class="row w-100 justify-content-center">
                <span><router-link to="/Login">Log in</router-link></span> or
                <span><router-link to="/Register">Register</router-link></span>
                and instantly get acces to thousands of ride or to add new
                advertisements
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
    <div class="col h-100"></div>
  </div>
</template>

<style lang="scss" scoped>
@import '@/scss/variables.scss';

#lrPanel {
  background-color: rgba(213, 213, 213, 0.7);
  backdrop-filter: blur(50px);
  align-items: center;
  border-radius: 45px;
  cursor: context-menu;
}

#text {
  align-items: center;
  text-align: center;
  color: #f9f9f9;
  text-shadow: 4px 4px 5px rgba(0, 0, 0, 0.5);
  font-size: 1.4em;
  margin: 35px;
  white-space: pre;
}

#block {
  height: 956px;
  background-image: url('../../assets/driver.jpg');
  background-position: center;
  background-repeat: no-repeat;
  background-size: cover;
}

span {
  color: $highlightColor !important;
  cursor: auto;
}

a {
  color: $highlightColor !important;
}
</style>
