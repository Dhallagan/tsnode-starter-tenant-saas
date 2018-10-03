<template>
<page>

  <page-header
    :title="`${unitForm.unitNumber}, ${building.street}`"
    :breadcrumbs="pageHeader.breadcrumbs"
  >
    <template slot="action-right">
      <willow-button  class="float-right mt-3" size="lg" primary @click.native="updateUnit()">Save</willow-button>
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
                :value="unitForm.bedrooms"
                :options="[{value: '0', text: 'Studio'},{value: '1', text: '1'},{value: '2', text: '2'},{value: '3', text: '3'},{value: '4', text: '4'},{value: '5', text: '5+'}]"
                :label="'Beds'"
                v-model="unitForm.bedrooms"
                heading
              ></willow-select>
            </b-col>

            <b-col xs="24" sm="8" md="6" lg="4">
              <willow-select
                :value="unitForm.baths"
                :options="[{value: 1, text: '1'},{value: '1.5', text: '1.5'},{value: '2', text: '2'},{value: '2.5', text: '2.5'},{value: '3', text: '3'},{value: '3.5', text: '3.5'},{value: '4', text: '4+'}]"
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
      <template slot="action-left">
        <willow-button :size="'lg'" destructive  @click.native="deleteBuildingUnit()">Delete this building</willow-button>
      </template>

      <template slot="action-right">
        <willow-button  class="float-right mt-3" size="lg" primary @click.native="updateUnit()">Save</willow-button>
      </template>
    </page-actions>

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
      pageHeader: {
        breadcrumbs: [
          {
            text: null,
            href: null
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
      building: {
        id: null,
        street: null
      }
    }
  },
  methods: {
    fetch () {
      axios.all([
        api.getBuilding(this.$route.params.building_id),
        api.getBuildingUnit(this.$route.params.building_id, this.$route.params.unit_id)
      ])
        .then(axios.spread((building, unit) => {
          console.log(unit)
          this.building.id = building.data.Id
          this.building.street = building.data.Street
          this.pageHeader.breadcrumbs[0].text = building.data.Street
          this.pageHeader.breadcrumbs[0].href = '/admin/buildings/' + building.data.Id
          this.unitForm.unitId = unit.data.Unit.UnitId
          this.unitForm.unitNumber = unit.data.Unit.UnitNumber
          this.unitForm.bedrooms = unit.data.Unit.Bedrooms
          this.unitForm.baths = unit.data.Unit.Baths
          this.unitForm.marketRent = ''
        }))
    },
    updateUnit () {
      api.updateBuildingUnit(this.building.id, this.unitForm.unitId, this.unitForm)
        .then(res => {
          console.log(res)
          this.$router.push({ path: this.pageHeader.breadcrumbs[0].href })
        })
        .catch(err => {
          console.log(err)
        })
    },
    deleteBuildingUnit () {
      api.deleteBuildingUnit(this.building.id, this.unitForm.unitId)
        .then(res => {
          console.log(res)
          this.$router.push({ path: this.pageHeader.breadcrumbs[0].href })
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
