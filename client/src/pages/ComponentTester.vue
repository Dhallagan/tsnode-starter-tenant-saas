<template>
  <b-card>
   <willow-file-input-multiple
   >Add files
   </willow-file-input-multiple>
  </b-card>
</template>

<script>
export default {
  data () {
    return {
      data: [
        { id: 1, company: 'Legal Entity, LLC', status: 1, created: '2018-08-24T21:19:53.610Z', emailVerified: 1 },
        { id: 2, company: 'Legal Name', status: 0, created: '2018-08-24T21:19:53.610Z', emailVerified: 0 }
      ]
    }
  }
}
</script>
