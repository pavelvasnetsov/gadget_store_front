<template>
  <div class="main-page">
    <div class="sidebar">
      <div class="sidebar__list">
        <v-menu offset-y min-width="200px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
              min-width="200px"
            >
              {{ choosedCategory }}
            </v-btn>
          </template>
          <v-list>
            <v-list-item link v-for="category in categories" :key="category.id">
              <v-list-item-title @click="changeCategory(category.name)"
                ><span class="subitem">{{
                  category.name
                }}</span></v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <div class="sidebar__list">
        <v-menu offset-y class="sidebar__list" min-width="200px">
          <template v-slot:activator="{ on, attrs }">
            <v-btn
              color="primary"
              dark
              v-bind="attrs"
              v-on="on"
              min-width="200px"
            >
              {{ choosedBrand }}
            </v-btn>
          </template>
          <v-list>
            <v-list-item link v-for="brand in brands" :key="brand.id">
              <v-list-item-title @click="changeBrand(brand.name)"
                ><span class="subitem" @click="chooseBrand = brand.name">{{
                  brand.name
                }}</span></v-list-item-title
              >
            </v-list-item>
          </v-list>
        </v-menu>
      </div>
      <v-btn @click="clearFilter" min-width="200px"> Отчистить фильтр </v-btn>
    </div>
    <div class="list-gadgets">
      <div
        class="list-gadgets__item"
        v-for="gadget in gadgets"
        :key="gadget.id"
      >
        <v-card
          @click="$router.push(`/gadgets/${gadget.id}`)"
          min-width="300px"
        >
          <v-img class="white--text align-end" height="200px" :src="gadget.img">
            <v-card-title>{{ gadget.name }}</v-card-title>
          </v-img>
          <v-card-subtitle class="pb-0">
            {{ gadget.price }}
          </v-card-subtitle>
          <v-card-text class="text--primary">
            <div>{{ gadget.name }}</div>
            <div>{{ gadget.name }}</div>
          </v-card-text>
        </v-card>
      </div>
    </div>
  </div>
</template>

<script>
import { mapGetters } from "vuex";

export default {
  data: () => {
    return {
      choosedCategory: "Категории",
      choosedBrand: "Бренды",
    };
  },

  methods: {
    changeCategory(newCategory) {
      this.choosedCategory = newCategory;
    },
    changeBrand(newBrand) {
      this.choosedBrand = newBrand;
    },
    clearFilter() {
      this.choosedCategory = "Категории";
      this.choosedBrand = "Бренды";
    },
  },

  computed: {
    ...mapGetters({
      categories: "gadgets/GET_CATEGORIES",
      brands: "gadgets/GET_BRANDS",
      gadgets: "gadgets/GET_GADGETS",
    }),
  },
};
</script>

<style lang="scss" scoped>
.main-page {
  display: flex;
  flex-direction: row;
}

.sidebar {
  margin: 20px;
  margin-right: 90px;
  display: flex;
  flex-direction: column;

  &__list {
    margin-bottom: 10px;
  }
}

.subitem {
  cursor: pointer;
}

.list-gadgets {
  display: flex;
  flex-wrap: wrap;
  margin: 0 -20px;

  &__item {
    flex: 0 1 22%;
    margin: 10px 10px;
    min-width: 22%;
    max-width: 22%;
    cursor: pointer;
  }
}
</style>