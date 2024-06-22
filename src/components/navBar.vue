<template>
  <div class="navBar z-depth-1">
    <div class="navLogo">
      <i class="medium material-icons">content_paste</i>
    </div>
    <nav class="z-depth-0">
      <div class="nav-wrapper white">
        <ul id="nav-mobile" class="right">
          <li>
            <router-link
              class="black-text"
              to="/"
              :class="{ activedRout: this.$route.name === 'home' }"
              >Cоздать</router-link
            >
          </li>
          <li>
            <router-link
              class="black-text"
              :class="{ activedRout: this.$route.name === 'save' }"
              to="/saved"
              >Сохраненные</router-link
            >
          </li>
        </ul>
      </div>
    </nav>
  </div>
</template>

<style lang="css" scoped>
.nav-wrapper,
nav {
  border-radius: 10px;
}
.navBar {
  display: flex;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  border-radius: 10px;
  padding: 10px;
}
i {
  color: #2bbbad;
}
a {
  font-weight: 500;
  transition: 200ms linear;
}
a:hover {
  color: #fff !important;
  opacity: 70%;
  background-color: #2bbbad;
}
.activedRout {
  color: #fff !important;
  background-color: #2bbbad;
}
</style>
