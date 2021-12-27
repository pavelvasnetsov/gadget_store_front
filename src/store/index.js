import Vue from "vue";
import Vuex from "vuex";
import { userModule } from "@/store/userModule";
import { cartModule } from "@/store/cartModule";
import { gadgetsModule } from "@/store/gadgetsModule";

Vue.use(Vuex);
export default new Vuex.Store({
    namespaced: true,
    modules: {
        user: userModule,
        cart: cartModule,
        gadgets: gadgetsModule,
    },
});