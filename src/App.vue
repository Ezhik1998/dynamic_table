<template>
  <div id="app">
    <div class="file-uploader">
      <Upload/>
    </div>
    <div class="app-header"> 
      <ShowItems />
      <SearchItems />
    </div>

    <TableData />

    <div class="app-footer">
      <Info />
      <Pagination />
    </div>
  </div>
</template>


<script>
import TableData from '@/components/Table.vue';
import ShowItems from '@/components/ShowItems.vue';
import SearchItems from '@/components/SearchItems.vue';
import Pagination from '@/components/Pagination.vue';
import Info from '@/components/Info.vue';
import Upload from '@/components/Upload.vue';
export default {
  name: 'App',
  components: {
    TableData,
    ShowItems,
    SearchItems,
    Pagination,
    Info,
    Upload,
  },
}
</script>


<style>
* {
  box-sizing: border-box;
  color: #73879c;
  font-size: 14px;
}

.app-header,
.app-footer {
  display: flex;
  justify-content: space-between;
  padding: 8px 2px;
}

.file-uploader {
  padding: 10px 0 0 2px;
  width: 300px;
  /* height: 80px; */
}
</style>


