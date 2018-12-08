<template>
<page>
  <page-header
    title="Applicants"
  >
  <!-- <template slot="action-right">
    <willow-button plain>Print Application</willow-button>
  </template>

  <template slot="action-right">
    <willow-button primary>Create New Application</willow-button>
  </template> -->

  </page-header>

  <b-card class="w-100">
  <willow-button outline v-b-toggle.collapse1>Filters +</willow-button>

  <b-collapse id="collapse1" class="mt-2">
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
  <br><br>

    <b-form-input
      placeholder="Search..."
    ></b-form-input>

  <br>

  <b-table hover :items="applications" :fields="fields"
    @row-clicked="goTo"
  >
    <template slot="applicant" slot-scope="data">
       {{data.item.FirstName}} {{data.item.LastName}}
    </template>

    <template slot="property" slot-scope="data">
       {{data.item.ListingApplyTo}}
    </template>

    <template slot="phone" slot-scope="data">
       {{data.item.Phone}}
    </template>

    <template slot="status" slot-scope="data">
      <b-badge
        :variant="data.item.status=='None' ? 'secondary'
                : data.item.status=='Approved' ? 'success'
                : data.item.status=='Rejected' ? 'danger'
                : 'info'"
      >
      {{data.item.status }}
      </b-badge>
    </template>

    <template slot="last_updated" slot-scope="data">
       {{data.item.CreatedAt}}
    </template>

  </b-table>

  </b-card>
</page>
</template>

<script>
import api from '@/api/api'
import axios from 'axios'
export default {
  mounted () {
    this.fetch()
  },

  data () {
    return {
      fields: ['applicant', 'property', 'phone', 'status', 'last_updated'],
      applications: [],
      applicationsStatus: []
    }
  },

  methods: {
    fetch () {
      axios.all([
        api.getApplicants(),
        api.getApplicantStatusTypes()
      ]).then(axios.spread((applicationsData, applicationsStatusData) => {
        this.applications = applicationsData.data
        applicationsStatusData.data.map((obj) => {
          let applicants = obj.Applicants.map((el) => {
            return el.Id
          })
          this.applicationsStatus[obj.Name] = applicants
        })
        this.applications.map(el => {
          el.status = this.applicationsStatus['None'].includes(el.Id) ? 'None' : (this.applicationsStatus['Approved'].includes(el.Id) ? 'Approved' : (this.applicationsStatus['Pending'].includes(el.Id) ? 'Pending' : 'Rejected'))
          return el
        })
      }))
    },

    goTo ($event) {
      var obj = $event
      this.$router.push({ path: '/Admin/Applicants/' + obj.Id })
    }
  }
}
</script>

<style>

</style>
