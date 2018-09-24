<template>
<page>

  <page-header
    :title="'Add Unit to '"
    :breadcrumbs="pageHeader.breadcrumbs"
  >
    <template slot="action-right">
      <willow-button  class="float-right mt-3" size="lg" primary @click.native="saveBuilding()">Save</willow-button>
    </template>
  </page-header>

  <willow-layout>

    <!-- Primary -->
    <willow-layout-section >

      <b-card  card-title="Secondary" class="mb-2">
        <b-row>
          <b-col>
            <!-- <willow-button v-b-modal.modallg  plain size="sm" class="close sm" style="font-size: 0.75rem;">Edit</willow-button> -->
          </b-col>
        </b-row>
          <b-row class="mb-3">
            <b-col xs="24" sm="8" md="6" lg="4">
              <willow-textfield
                :value="unitForm.unitNumber"
                :label="'Unit Number'"
                v-model="unitForm.unitNumber"
                heading
              ></willow-textfield>
            </b-col>
          </b-row>

          <b-row class="mb-3">
            <b-col xs="24" sm="8" md="6" lg="4">
              <willow-select
                :value="unitForm.beds"
                :options="[{value: '0', text: 'Studio'},{value: '1', text: '1'},{value: '2', text: '2'},{value: '3', text: '3'},{value: '4', text: '4'},{value: '5', text: '5+'}]"
                :label="'Beds'"
                v-model="unitForm.beds"
                heading
              ></willow-select>
            </b-col>

            <b-col xs="24" sm="8" md="6" lg="4">
              <willow-select
                :value="unitForm.baths"
                :options="[{value: '1', text: '1'},{value: '1.5', text: '1.5'},{value: '2', text: '2'},{value: '2.5', text: '2.5'},{value: '3', text: '3'},{value: '3.5', text: '3.5'},{value: '4', text: '4+'}]"
                :label="'Baths'"
                v-model="unitForm.baths"
                heading
              ></willow-select>
            </b-col>
            <b-col xs="24" sm="8" md="6" lg="4">
              <willow-textfield
                :value="unitForm.marketRent"
                :label="'Market Rent'"
                v-model="unitForm.marketRent"
                heading
              ></willow-textfield>
            </b-col>
            <!-- <b-col>
              <willow-select
                :value="unitForm.marketRent"
                :options="this.$store.getters.getPropertyTypes"
                :label="'Market Rent'"
                v-model="unitForm.marketRent"
                heading
              ></willow-select>
            </b-col> -->
            <b-col>
            </b-col>
          </b-row>
       </b-card>

    </willow-layout-section>

        <!-- Secondary -->
    <willow-layout-section secondary>

      <!-- <b-card  card-title="Secondary- Subdued" class="mb-2" style="background-color: #f8f9fa ;">
        <b-form-group>
          <willow-select

            :value="'on'"
            :options="[{ value: true, text: 'Active' },{ value: false, text: 'Deactivated' }]"
            :label="'Status'"
            subdued
          ></willow-select>
        </b-form-group>
      </b-card> -->
    </willow-layout-section>

  </willow-layout>

    <page-actions>
    <template slot="action-right">
      <willow-button  class="float-right mt-3" size="lg" primary @click.native="saveBuilding()">Save</willow-button>
    </template>
  </page-actions>

</page>
</template>

<script>
import api from '@/api/api'

export default {
  mounted () {
    this.fetch()
  },
  data () {
    return {
      pageHeader: {
        breadcrumbs: [
          {
            text: '34 Main St',
            href: '/Buildings'
          }
        ]
      },
      unitForm: {
        unitId: '',
        propertyId: '',
        unitNumber: '',
        bedrooms: '',
        baths: '',
        sqFt: '',
        smoking: '',
        description: '',
        marketRent: ''
      },
      propertyTypes: null
    }
  },
  methods: {
    saveBuilding () {
      console.log(this.buildingForm)
      api.createBuilding(this.buildingForm)
        .then(res => {
          this.$router.push({ path: '/Buildings' })
        })
        .catch(err => {
          console.log(err)
        })
    }
  }
}
</script>

<style>

</style>
