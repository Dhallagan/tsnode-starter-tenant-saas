<template>
  <div>
    <input style="display: none" type="file" @change="onFileSelected" ref="filesInput" multiple>
    <willow-button @click.native="$refs.filesInput.click()">
      <slot/>
    </willow-button>
  </div>
</template>

<script>
import api from '@/api/api'
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
      this.selectedFiles = [...event.target.files]
      this.upload()
    },
    upload () {
      console.log(this.selectedFiles)
      const formData = new FormData()
      this.selectedFiles.forEach(file => {
        formData.append(this.identifier, file)
      })
      api.uploadMultipleFiles(this.url, formData).then(res => {
        this.$emit('uploadedFiles', res.data)
      }).catch(err => {
        console.log('err', err)
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
