<template>
  <div>
    <input style="display: none" type="file" @change="onFileSelected" ref="filesInput" multiple>
    <willow-button @click.native="$refs.filesInput.click()">
      <slot/>
    </willow-button>
    <p v-for="file in selectedFiles" :key="file">{{file.name}}</p>
  </div>
</template>

<script>
import axios from 'axios'
export default {
  props: {
    url: {
      type: String
    },
    identifier: {
      type: String
    }
  },

  data () {
    return {
      selectedFiles: []
    }
  },

  methods: {
    onFileSelected (event) {
      const files = event.target.files
      this.selectedFiles = [...this.selectedFiles, ...files]
      // this.selectedFiles
      // this.onUpload()
    },

    onUpload () {
      const formData = new FormData()
      this.selectedFiles.forEach(file => {
        formData.append(this.identifier, this.selectedFile, this.selectedFile.name)
      })

      axios.post(this.url, formData, {onUploadProgress: uploadEvent => {
        // console.log('Upload Progress: ' + Math.round(uploadEvent.loaded / uploadEvent.total) * 100 + '%')
      }})
        .then(res => {
          this.$emit('uploadComplete', res.data)
        })
    },

    fileSizeInMB (fileSize) {
      return (fileSize / (1024 * 1024)).toFixed(2)
    },

    hasExtension (filename, exts) {
      return (new RegExp('(' + exts.join('|').replace(/\./g, '\\.') + ')$', 'i')).test(filename)
    }
  }
}
</script>
