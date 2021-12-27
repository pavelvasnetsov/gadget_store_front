export const gadgetsModule = {
    namespaced: true,
    state: () => ({
        categories: [
            {id: 1, name: 'Смартфоны'},
            {id: 2, name: 'Ноутбуки'},
        ],
        brands: [
            {id: 1, name: 'Apple'},
            {id: 2, name: 'Lenovo'},
        ],
        gadgets: [
            {id: 1, name: 'Iphone 12 pro', price: 120000, img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
            {id: 2, name: 'Iphone 12 pro', price: 120000, img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
            {id: 3, name: 'Iphone 12 pro', price: 120000, img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
            {id: 4, name: 'Iphone 12 pro', price: 120000, img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
            {id: 5, name: 'Iphone 12 pro', price: 120000, img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
            {id: 6, name: 'Iphone 12 pro', price: 120000, img: 'https://www.purposechurch.com/wp-content/uploads/2017/10/fpo400x300.png'},
        ]
    }),

    getters: {
        GET_CATEGORIES(state) {
            return state.categories;
        },
        GET_BRANDS(state) {
            return state.brands;
        },
        GET_GADGETS(state) {
            return state.gadgets;
        }
    },
  
    mutations: {
        SET_CATEGORIES(state, newValue) {
            state.categories = newValue;
        },
        SET_BRANDS(state, newValue) {
            state.brands = newValue;
        },
        SET_GADGETS(state, newValue) {
            state.gadgets = newValue;
        }
    },
    
    actions: {
      
    },
};