<template>
  <div class="welcome">
    <loader
      v-if="loading"
      object="#489EE2"
      color1="#ffffff"
      color2="#423189"
      size="5"
      speed="2"
      bg="#343a40"
      objectbg="#999793"
      opacity="80"
      name="circular"
    ></loader>
    <h2 class="welcome__header">Регистрация</h2>
    <div class="welcome__description">
      Пожалуйста, заполните данные и идентифицируйте себя.
    </div>
    <form class="welcome__form">
      <v-text-field
        class="welcome__field"
        v-model="form.login"
        label="Логин"
        required
        :rules="rules.login"
      ></v-text-field>
      <v-text-field
        class="welcome__field"
        v-model="form.password"
        type="password"
        label="Пароль"
        required
        :rules="rules.password"
      ></v-text-field>
      <v-text-field
        class="welcome__field"
        v-model="form.passwordRepeat"
        type="password"
        label="Повторите пароль"
        required
        :rules="rules.passwordRepeat"
      ></v-text-field>
      <div class="welcome__btns">
        <a
          :class="{ disabled: !formIsValid }"
          class="welcome__link"
          href=""
          @click.prevent="inputRegistartion"
          >Зарегистрироваться</a
        >
        <a href="" class="welcome__link" @click.prevent="$router.push('/auth')"
          >К авторизации</a
        >
      </div>
    </form>
  </div>
</template>

<script>
export default {
  data() {
    const defaultForm = Object.freeze({
      login: "",
      password: "",
    });

    return {
      form: Object.assign({}, defaultForm),
      rules: {
        login: [(val) => (val || "").length > 0 || "Введите логин"],
        password: [(val) => (val || "").length > 0 || "Введите пароль"],
        passwordRepeat: [
          (val) => (val || "") === this.form.password || "Пароли не совпадают",
        ],
      },
      defaultForm,
    };
  },

  computed: {
    formIsValid() {
      return (
        this.form.login &&
        this.form.password &&
        this.form.password === this.form.passwordRepeat
      );
    },
  },

  methods: {
    async inputRegistartion() {
      this.form.login = "";
      this.form.password = "";
      this.form.passwordRepeat = "";
    },
  },
};
</script>

<style scoped>
.welcome {
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 10px;
  padding: 30px 30px 60px;
  max-width: 370px;
}

.welcome__header {
  color: #2196f3;
}

.welcome__description {
  text-align: center;
}

.welcome__btns {
  width: 300px;
  display: flex;
  justify-content: space-between;
}

.welcome__link {
  text-decoration: none;
  color: #2196f3;
  font-weight: 500;
}

.disabled {
  pointer-events: none; /* делаем ссылку некликабельной */
  cursor: default; /* устанавливаем курсор в виде стрелки */
  color: #999; /* цвет текста для нективной ссылки */
}
</style>