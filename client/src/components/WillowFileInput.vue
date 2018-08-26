<template>
  <div>
    <input style="display: none" type="file" @change="onFileSelected" ref="fileInput">
    <willow-button @click.native="$refs.fileInput.click()">
      <slot/>
    </willow-button>
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
      selectedFile: null
    }
  },

  methods: {
    onFileSelected (event) {
      this.selectedFile = event.target.files[0]
      this.onUpload()
    },

    onUpload () {
      const formData = new FormData()
      formData.append(this.identifier, this.selectedFile, this.selectedFile.name)

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
