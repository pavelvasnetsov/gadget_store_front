export const userModule = {
    namespaced: true,
    state: () => ({
      isAuth: true,
      user: {}
    }),

    getters: {
        GET_ISAUTH(state) {
            return state.isAuth;
        },

        GET_USER(state) {
            return state.user;
        }
    },
  
    mutations: {
        SET_ISAUTH(state, newValue) {
            state.isAuth = newValue;
        },

        SET_USER(state, newUser) {
            state.user = newUser;
        }      
    },

    actions: {
      
    },
};