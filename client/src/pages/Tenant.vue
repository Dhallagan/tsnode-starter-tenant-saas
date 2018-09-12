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

  <willow-layout>
    <willow-layout-section primary >
      <b-card class="w-100">

      <willow-table hover :rows="users" :headings="headings">

        <template slot="Email" slot-scope="data">
          {{data.item.Email}}
        </template>

        <template slot="Verified" slot-scope="data">
          <b-badge v-if="data.item.EmailVerified === true" variant="success" pill>Verified</b-badge>
          <b-badge v-if="data.item.EmailVerified === false" variant="danger" pill>Unverified</b-badge>
        </template>

        <template slot="Created" slot-scope="data">
          {{fns.format(data.item.DateCreated, 'MMM DD, YYYY')}}
        </template>

        <template slot="Role" slot-scope="data">
          {{data.item.Role}}
        </template>

        <template slot="Action" slot-scope="data">
          <willow-button :url="'/admin/tenants/' + $route.params.tenantId + '/users/' + data.item.Id" >Edit</willow-button>
        </template>

      </willow-table>

      </b-card>
    </willow-layout-section>

    <willow-layout-section secondary v-if="tenant">

        <b-card  card-title="Secondary- Subdued" class="mb-2" style="background-color: #f8f9fa ;">
          <b-form-group>
          <willow-select
            :value="tenant.Active"
            :options="[{ value: true, text: 'Active' },{ value: false, text: 'Deactivated' }]"
            :label="'Account Status'"
            @change="saveTenantStatus($event, 'active')"
            subdued
          ></willow-select>
        </b-form-group>

        <br>

        <b-form-group>
           <willow-select
            :value="tenant.Plan.Id"
            :options="plans"
            :label="'Plan'"
            @change="saveTenantStatus($event, 'plan')"
            subdued
          ></willow-select>
        </b-form-group>

      </b-card>
    </willow-layout-section>
  </willow-layout>

</page>
</template>

<script>
import axios from 'axios'
import api from '@/api/api'

export default {
  mounted () {
    this.fetch()
  },
  data () {
    return {
      pageheader: {
        title: '',
        breadcrumbs: [
          {
            text: 'Tenants',
            href: '/admin/tenants'
          }
        ]
      },
      headings: ['Email', 'Verified', 'Created', 'Role', 'Action'],
      users: {},
      tenant: null,
      plans: []
    }
  },
  methods: {
    fetch () {
      axios.all([
        api.getPlans(),
        api.getTenantUsers(this.$route.params.tenantId),
        api.getTenantById(this.$route.params.tenantId)
      ])
        .then(axios.spread((plans, tenantUsers, tenant) => {
          this.plans = plans.data.Plans.map(plan => {
            return {
              value: plan.Id,
              text: plan.Name
            }
          })
          this.users = tenantUsers.data.Users
          this.tenant = tenant.data.Tenant
          this.pageheader.title = this.tenant.Domain

          console.log(plans, tenantUsers, tenant)
        }))
    },

    saveTenantStatus (event, te) {
      console.log(this.tenant)
      if (te === 'active') {
        this.tenant.Active = event
      } else {
        this.tenant.Plan.Id = event
      }
      api.updateTenant(this.tenant.Id, this.tenant)
        .then(res => {
          // this.fetch()
        })
    }
  }
}
</script>

<style>
</style>
