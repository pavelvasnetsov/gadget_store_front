<template>
  <v-app>
    <div class="body">
      <v-app-bar color="blue" elevatin="2">
        <v-toolbar-title>
          <span @click="$router.push('/')" style="cursor: pointer"
            >Gadget Store</span
          >
        </v-toolbar-title>
        <v-spacer></v-spacer>
        <v-btn v-show="isAuth" @click="$router.push('/admin')">
          Админ панель
        </v-btn>
        <v-btn
          v-show="isAuth"
          @click="
            () => {
              $router.push('/');
              setIsAuth(false);
            }
          "
          style="margin-left: 10px"
        >
          Выйти
        </v-btn>
        <v-btn v-show="isAuth" icon @click="$router.push('/cart')">
          <v-icon>mdi-heart</v-icon>
        </v-btn>
        <v-btn
          v-show="!isAuth"
          @click="
            () => {
              $router.push('/auth');
              setIsAuth(true);
            }
          "
        >
          Авторизация
        </v-btn>
      </v-app-bar>
      <router-view></router-view>
    </div>
  </v-app>
</template>

<script>
import { mapGetters, mapMutations } from "vuex";

export default {
  name: "App",

  data: () => ({
    //
  }),

  computed: {
    ...mapGetters({
      isAuth: "user/GET_ISAUTH",
    }),
  },

  methods: {
    ...mapMutations({
      setIsAuth: "user/SET_ISAUTH",
    }),
  },
};
</script>

<style>
body {
  background-color: #edeef0;
}

.body {
  background-color: #edeef0;
  min-height: 100%;
  min-width: 100%;
}
.container1 {
  max-width: 1200px;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  padding: 0;
}
</style>
