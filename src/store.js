import Vue from 'vue'
import Vuex from 'vuex'

import _ from 'lodash'

Vue.use(Vuex)

import data from './files/data';
export default new Vuex.Store({
  state: {
    data,
    curPage: 1,
    perPage: 5,
    searchText: '',
    order: false,
    sortParam: ''
  },
  getters: {
    // массив ключей
    fields: state => Object.keys(state.data[0]),

    numPages: (state, getters) =>
      Math.ceil(getters.filteredData.length / state.perPage),

    sortedData: state => {
      return _.orderBy(
        state.data,
        [entry => entry[state.sortParam]],
        state.order ? 'asc' : 'desc'
      )
    },

    filteredData: (state, getters) => {
      return getters.sortedData.filter(
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

    setColumnOrder: (state, col) => {
      if(state.sortParam === col) {
          state.order = !state.order
      }
      else {
          state.order = true
          state.sortParam = col
      }
    }
  },
  actions: {
    setOrder({commit}, col) {
      console.log("Sort by " + col);
      commit('setColumnOrder', col)
    }

  }
})
