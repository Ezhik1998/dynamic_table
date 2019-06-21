<template>
<div class="custom-file">
  <input type="file"  name="uploadedFile" class="custom-file-input uploadedFile"  @change="loadDataFromFile">
  <label class="custom-file-label noFile" for="customFileLang">Select file...</label>
</div>     
</template>


<script>
  export default {    
    methods: {      
      loadDataFromFile(event){       
        // доступ к файлу 
        // event.target.files - FileList 
        const file = event.target.files[0]
        // console.log(file);
        
        const reader = new FileReader()

        // Загрузка данных с json 
        // FileReader API - asynchronous
        // e.target.result - данные с файла (текст)
        reader.onload = e => this.$store.dispatch('uploadData', e.target.result)
        reader.readAsText(file)

        // const uploadedFile = document.getElementsByClassName('uploadedFile')
        // console.log("uploaded file ");
        // console.log(uploadedFile);

        let filename = document.getElementsByClassName('uploadedFile')[0].value

        // замена Select files... на название файла
        document.getElementsByClassName('noFile')[0].innerHTML = filename.replace('C:\\fakepath\\', '')        
        console.log('File name ' + filename);        
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
