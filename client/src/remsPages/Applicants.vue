<template>
<page>
  <page-header
    title="Applicants"
  >
  <template slot="action-right">
    <willow-button plain>Print Application</willow-button>
  </template>

  <template slot="action-right">
    <willow-button primary>Create New Application</willow-button>
  </template>

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
       {{data.item.applicant}}
    </template>
    <template slot="status" slot-scope="data">
       <b-badge v-if="data.item.status === 'In Review'" variant="secondary" pill>{{data.item.status}}</b-badge>
       <b-badge v-if="data.item.status === 'Accepted'" variant="success" pill>Approved</b-badge>
       <b-badge v-if="data.item.status === 'Rejected'" variant="danger" pill>Declined</b-badge>

    </template>
  </b-table>

  </b-card>

</page>
</template>

<script>
export default {
  mounted () {
    this.applications = this.$store.getters.getApplications
  },

  data () {
    return {
      fields: ['applicant', 'property', 'phone', 'status', 'last_updated'],
      applications: [
        { applicant: 'Marky Marky', property: '1234 AOk Drive', phone: '(555) 555-5555', status: 'Accepted', last_updated: '10/10/2010' },
        { applicant: 'Marky Marky', property: '1234 AOk Drive', phone: '(555) 555-5555', status: 'Accepted', last_updated: '10/10/2010' },
        { applicant: 'Marky Marky', property: '1234 AOk Drive', phone: '(555) 555-5555', status: 'Accepted', last_updated: '10/10/2010' },
        { applicant: 'Marky Marky', property: '1234 AOk Drive', phone: '(555) 555-5555', status: 'Rejected', last_updated: '10/10/2010' },
        { applicant: 'Marky Marky', property: '1234 AOk Drive', phone: '(555) 555-5555', status: 'Accepted', last_updated: '10/10/2010' },
        { applicant: 'Marky Marky', property: '1234 AOk Drive', phone: '(555) 555-5555', status: 'Rejected', last_updated: '10/10/2010' }
      ]
    }
  },

  methods: {
    goTo (record, index) {
      console.log(record)
      this.$router.push({ path: '/Admin/Applicants/' + record.id })
    }
  }
}
</script>

<style>

</style>
