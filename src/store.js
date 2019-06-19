import Vue from 'vue'
import Vuex from 'vuex'

Vue.use(Vuex)

import data from './files/albums';
export default new Vuex.Store({
  state: {
    data,
    curPage: 1,
    perPage: 5,
    searchText: '',
  },
  getters: {
    // массив ключей
    fields: state => Object.keys(state.data[0]),

    numPages: (state, getters) =>
      Math.ceil(getters.filteredData.length / state.perPage),

    filteredData: state => {
      return state.data.filter(
        e =>
        // массив всех значений
          Object.values(e)
            // .slice(1)
            .join('~')
            .toLowerCase()
            .indexOf(state.searchText.toLowerCase()) > -1,
      );
    },

    rows: (state, getters) => {
      return getters.filteredData.slice((state.curPage - 1) * state.perPage, state.curPage * state.perPage);
    },
  },

  mutations: {
    set: (state, { key, value }) => (state[key] = value),
  },
  actions: {

  }
})
