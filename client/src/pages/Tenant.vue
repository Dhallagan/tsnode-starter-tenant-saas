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

      <b-table hover :items="users" :fields="fields"
      >
      <template slot="Email" slot-scope="data">
        {{data.item.Email}}
      </template>

      <template slot="Verified" slot-scope="data">
        <b-badge v-if="data.item.EmailVerified === 1" variant="success" pill>Verified</b-badge>
        <b-badge v-if="data.item.EmailVerified === 0" variant="danger" pill>Unverified</b-badge>
      </template>

      <template slot="Created" slot-scope="data">
        {{data.item.DateCreated}}
      </template>

      <template slot="Role" slot-scope="data">
        {{data.item.Role}}
      </template>

      <template slot="Action" slot-scope="data">
        <willow-button primary :url="'/admin/tenants/' + $route.params.tenantId + '/users/' + data.item.Id" >Edit</willow-button>
      </template>

      </b-table>

      </b-card>
    </willow-layout-section>

    <willow-layout-section secondary v-if="tenant">

        <b-card  card-title="Secondary- Subdued" class="mb-2" style="background-color: #f8f9fa ;">
          <b-form-group id="fieldsetHorizontal"
                    description=""
                    label="Account Status"
                    label-for="inputHorizontal">
          <b-select v-model="tenant.Active" @change="saveTenantStatus($event, 'active')" :options="[{ value: true, text: 'Active' },{ value: false, text: 'Deactivated' }]"></b-select>
        </b-form-group>
        <br>
        <b-form-group id="fieldsetHorizontal"
          description="Subscription level."
          label="Plan"
          label-for="inputHorizontal">
            <b-select v-model="tenant.Plan.Id" :options="plans" @change="saveTenantStatus($event, 'plan')"></b-select>
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
      fields: ['Email', 'Verified', 'Created', 'Role', 'Action'],
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
