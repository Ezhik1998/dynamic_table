<template>
  <div class="search-items">
    Search: <input type="search" v-model="searchText" />
  </div>
</template>

<script>
export default {
  computed: {
    searchText: {
      get: function() {
        return this.$store.state.searchText;
      },
      set: function(text) {
        this.$store.commit('set', { key: 'curPage', value: 1 });
        this.$store.commit('set', { key: 'searchText', value: text });
      },
    },
  },
};
</script>

<style>
.search-items input {
  padding: 5px;
  outline: none;
  border: 1px solid #ddd;
}
</style>