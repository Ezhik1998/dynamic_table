<template>
  <div class="info">     
    Info: {{(curPage * perPage - perPage) + 1}} - {{curPage * perPage}} / {{data.length}}    
  </div>
</template>

<script>
import { mapState, mapGetters } from 'vuex'

export default {
  computed: {
    ...mapState(['data', 'curPage', 'perPage'])    
  }
}
</script>

<style lang="scss" scoped>
</style>

