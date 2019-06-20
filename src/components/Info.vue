<template>
  <div class="info">     
    Info: {{filteredData.length > 0 ? ((curPage * perPage - perPage) + 1) : 0}} - {{(curPage * perPage) > filteredData.length ? filteredData.length : (curPage * perPage)}} / {{filteredData.length}}    
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState(['data', 'curPage', 'perPage']),    
    ...mapGetters(['filteredData'])
  }
}
</script>

<style lang="scss" scoped>
</style>

