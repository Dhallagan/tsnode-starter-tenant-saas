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
  <!-- <willow-button outline v-b-toggle.collapse1>Filters +</willow-button> -->

  <!-- <b-collapse id="collapse1" class="mt-2">
    <b-card>
      <p class="card-text">Options:</p>
      <b-row>
        <b-col cols="6">
        <b-form-group id="fieldsetHorizontal"
                      description="Building applied to"
                      label="Property"
                      label-for="inputHorizontal">
            <b-select :options="[{ value: null, text: '150 Main St' },{ value: 'a', text: '3 Industrial Road' }]"></b-select>
          </b-form-group>
        </b-col>
        <b-col cols="6">
              <b-form-group label="Application Status">
                <b-form-checkbox-group stacked v-model="selected" name="flavour2" :options="[{text: 'New', value: 'past'},{text: 'In Review', value: 'present'},{text: 'Accepted', value: 'Future'}, {text: 'Rejected', value: 'Future'}, {text: 'Archived', value: 'Future'}]">
                </b-form-checkbox-group>
              </b-form-group>
        </b-col>
      </b-row>
    </b-card>
  </b-collapse>
  <br><br> -->

    <b-form-input
      placeholder="Search..."
    ></b-form-input>

  <br>

  <b-table hover :items="tenants" :fields="fields"
  >
      <template slot="Company" slot-scope="data">
       {{data.item.Company.Name}}
    </template>

    <template slot="Active" slot-scope="data">
       <b-badge v-if="data.item.Active === true" variant="success" pill>Active</b-badge>
       <b-badge v-if="data.item.Active === false" variant="danger" pill>Deactivated</b-badge>
    </template>

    <template slot="DateCreated" slot-scope="data">
       {{data.item.CreatedAt}}
    </template>

    <template slot="Role" slot-scope="data">
       {{data.item.Role}}
    </template>

        <template slot="Action" slot-scope="data">
       <willow-button :url="'/admin/tenants/' + data.item.Id + '/users'" >View</willow-button>
    </template>

  </b-table>

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
      fields: ['Id', 'Company.Name', 'Active', 'DateCreated', 'Action'],
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
