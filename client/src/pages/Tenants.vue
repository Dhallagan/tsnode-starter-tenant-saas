<template>
<page>
  <page-header
    :title="pageheader.title"
    :breadcrumbs="pageheader.breadcrumbs"
  >
  <!-- <template slot="action-right">
    <willow-button plain>Print Application</willow-button>
  </template> -->

  <template slot="action-right">
    <!-- <willow-button primary>Create New User</willow-button> -->
  </template>

  </page-header>

  <b-card class="w-100">

    <willow-table hover :rows="tenants" :headings="fields">

      <template slot="Id" slot-scope="data">
        {{data.item.Id}}
      </template>

      <template slot="Domain" slot-scope="data">
        {{data.item.Domain}}
      </template>

      <template slot="Active" slot-scope="data">
        <b-badge v-if="data.item.Active === true" variant="success" pill>Active</b-badge>
        <b-badge v-if="data.item.Active === false" variant="danger" pill>Deactivated</b-badge>
      </template>

      <template slot="Date Created" slot-scope="data">
        {{fns.format(data.item.CreatedAt, 'MMM DD, YYYY')}}
      </template>

      <template slot="Role" slot-scope="data">
        {{data.item.Role}}
      </template>

      <template slot="Action" slot-scope="data">
        <willow-button :url="'/admin/tenants/' + data.item.Id" >View</willow-button>
      </template>

    </willow-table>

  </b-card>

</page>
</template>

<script>
import api from '@/api/api'

export default {
  mounted () {
    this.fetch()
    // this.applications = this.$store.getters.getApplications
  },

  data () {
    return {
      pageheader: {
        title: 'Tenants',
        breadcrumbs: [
          {
            text: 'Home',
            href: '/'
          }
        ]
      },
      fields: ['Id', 'Domain', 'Active', 'Date Created', 'Action'],
      tenants: {}
    }
  },

  methods: {
    fetch () {
      api.getTenants()
        .then(res => {
          console.log(res.data)
          this.tenants = res.data.Tenants
        })
    }
  }
}
</script>

<style>

</style>
