<template>
<div class="custom-file">
  <input type="file"  name="chosenFile" class="custom-file-input chosenFile"  @change="loadDataFromFile">
  <label class="custom-file-label noFile" for="customFileLang">Select file...</label>
</div> 
    
</template>


<script>
  export default {
    
    methods: {      
      loadDataFromFile(event){        
        const file = event.target.files[0]
        console.log(file);
        const reader = new FileReader()

        // Загрузка данных с json 
        reader.onload = e => this.$store.dispatch('uploadData', e.target.result)
        reader.readAsText(file)

        const chosenFiles = document.getElementsByClassName('chosenFile')
        let filenames = chosenFiles[0].value
        document.getElementsByClassName('noFile')[0].innerHTML = filenames.replace('C:\\fakepath\\', '')        
        console.log(filenames);        
      }
    }
  }
</script>



<style>
/* to change default Browse label */
.custom-file-input:lang(en) ~ .custom-file-label::after {
  content: 'Upload';
}
</style>
