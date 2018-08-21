<template>
  <div>
    <input style="display: none" type="file" @change="onFileSelected" ref="fileInput">
    <willow-button @click.native="$refs.fileInput.click()" @click="onUpload">Choose Avatar</willow-button>
    <willow-button @click="onUpload" primary>Update Avatar</willow-button>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  data () {
    return {
      selectedFile: null
    }
  },

  methods: {
    onFileSelected (event) {
      this.selectedFile = event.target.files[0]
      console.log(this.selectedFile)
    },

    onUpload () {
      const formData = new FormData()
      formData.append('avatar', this.selectedFile, this.selectedFile.name)
      axios.post('http://localhost:3000/api/users/1/avatar', formData)
    }
  }
}
</script>

<style>

</style>
