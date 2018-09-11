<template>
  <b-card>
    <willow-table :headings="['Id', 'Company', 'Verified', 'Created', 'Status', 'Action']" :rows="data">

      <template slot="Id" slot-scope="data">
        {{data.item.id}}
      </template>

      <template slot="Company" slot-scope="data">
        {{data.item.company}}
      </template>

      <template slot="Verified" slot-scope="data">
        <b-badge v-if="data.item.emailVerified === 1" variant="success" pill>Verified</b-badge>
        <b-badge v-if="data.item.emailVerified === 0" variant="danger" pill>Unverified</b-badge>
      </template>

      <template slot="Created" slot-scope="data">
        {{format(data.item.DateCreated, 'MMMM D, YYYY')}}
        <!-- {{data.item.created}} -->
      </template>

      <template slot="Status" slot-scope="data">
        <b-badge v-if="data.item.status === 1" variant="success" pill>Active</b-badge>
        <b-badge v-if="data.item.status === 0" variant="danger" pill>Inactive</b-badge>
      </template>

      <template slot="Action" slot-scope="data">
        <willow-button primary :url="'/admin/tenants/' + $route.params.tenantId + '/users/' + data.item.Id" >Edit</willow-button>
      </template>

    </willow-table>
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
