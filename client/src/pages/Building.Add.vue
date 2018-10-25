<template>
<page>

  <page-header
    :title="'Add Building'"
    :breadcrumbs="pageHeader.breadcrumbs"
  >
    <template slot="action-right">
      <willow-button  class="float-right mt-3" size="lg" primary @click.native="saveBuilding()">Save</willow-button>
    </template>
  </page-header>

  <willow-layout>

    <!-- Primary -->
    <willow-layout-section primary >

      <b-card  card-title="Secondary" class="mb-2">
        <b-row>
          <b-col>
            <!-- <willow-button v-b-modal.modallg  plain size="sm" class="close sm" style="font-size: 0.75rem;">Edit</willow-button> -->
          </b-col>
        </b-row>
          <b-row class="mb-3">
            <b-col>
              <willow-textfield
                :value="buildingForm.street"
                :label="'Street'"
                v-model="buildingForm.street"
                heading
              ></willow-textfield>
            </b-col>
          </b-row>
          <b-row class="mb-3">
            <b-col>
              <willow-textfield
                :value="buildingForm.city"
                :label="'City'"
                v-model="buildingForm.city"
                heading
              ></willow-textfield>
            </b-col>
            <b-col>

              <willow-select
              :value="buildingForm.state"
              :options="this.$store.getters.getStateOptions"
              :label="'State'"
              :placeholder="'State'"
               v-model="buildingForm.state"
              heading
            ></willow-select>

            </b-col>
             <b-col>
              <willow-textfield
                :value="buildingForm.zipcode"
                :label="'Zipcode'"
                v-model="buildingForm.zipcode"
                heading
              ></willow-textfield>

            </b-col>
          </b-row>

          <b-row class="mb-3">
            <b-col>
              <willow-textfield
                :value="buildingForm.owner"
                :label="'Owner'"
                v-model="buildingForm.owner"
                heading
              ></willow-textfield>
            </b-col>
            <b-col>
              <willow-select
                :value="buildingForm.type"
                :options="this.$store.getters.getPropertyTypes"
                :label="'Property Type'"
                v-model="buildingForm.type"
                heading
              ></willow-select>
            </b-col>
            <b-col>
            </b-col>
          </b-row>
       </b-card>

       <b-card class="mb-2" >
        <h6 class="heading">Features</h6>
        <b-row class="mb-2">
          <b-col>
            <b-form-group>
              <b-form-checkbox-group
                id="property_features"
                name="property_features"
                v-model="buildingForm.propertyFeatures"
                :options="this.$store.getters.getPropertyFeatures">
              </b-form-checkbox-group>
            </b-form-group>
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
            text: 'Buildings',
            href: '/Admin/Buildings'
          }
        ]
      },
      buildingForm: {
        apartmentSuite: '',
        street: '',
        state: '',
        city: '',
        zipcode: '',
        type: 1,
        propertyFeatures: [],
        units: []
      },
      propertyTypes: null
    }
  },
  methods: {
    saveBuilding () {
      console.log(this.buildingForm)
      api.createBuilding(this.buildingForm)
        .then(res => {
          this.$router.push({ path: '/Admin/Buildings' })
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
