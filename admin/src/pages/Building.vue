<template>
<page>

  <page-header
    :title="building.street"
    :breadcrumbs="pageheader.breadcrumbs"
  >
    <template slot="action-right">
      <willow-button  class="float-right mt-3" size="lg" primary @click.native="addUnit()">Add Unit</willow-button>
    </template>

  </page-header>

  <willow-layout>

    <!-- Primary -->
    <willow-layout-section primary >

      <b-card  card-title="Secondary" class="mb-2">
        <h6 class="heading">Details</h6>
        <b-row>
          <b-col>
            <!-- <willow-button v-b-modal.modallg  plain size="sm" class="close sm" style="font-size: 0.75rem;">Edit</willow-button> -->
          </b-col>
        </b-row>
          <b-row class="mb-3">
            <b-col>
              <willow-textfield
                :value="building.street"
                :label="'Street'"
                v-model="building.street"
                heading
              ></willow-textfield>
            </b-col>
          </b-row>
          <b-row class="mb-3">
            <b-col>
              <willow-textfield
                :value="building.city"
                :label="'City'"
                v-model="building.city"
                heading
              ></willow-textfield>
            </b-col>
            <b-col>

              <willow-select
              :value="building.state"
              :options="this.$store.getters.getStateOptions"
              :label="'State'"
              :placeholder="'State'"
               v-model="building.state"
              heading
            ></willow-select>

            </b-col>
             <b-col>
              <willow-textfield
                :value="building.zipcode"
                :label="'Zipcode'"
                v-model="building.zipcode"
                heading
              ></willow-textfield>

            </b-col>
          </b-row>

          <b-row class="mb-3">
            <b-col>
              <willow-textfield
                :value="building.owner"
                :label="'Owner'"
                v-model="building.owner"
                heading
              ></willow-textfield>
            </b-col>
            <b-col>
              <willow-select
                :value="building.type"
                :options="this.$store.getters.getPropertyTypes"
                :label="'Property Type'"
                v-model="building.type"
                heading
              ></willow-select>
            </b-col>
            <b-col>
            </b-col>
          </b-row>
       </b-card>

      <!-- <b-card  card-title="Primary" class="mb-2">
        <h5>Units</h5>

        <willow-table hover :rows="items" :headings="fields">

          <template slot="Number" slot-scope="data">
            {{data.item.number}}
          </template>

          <template slot="Tenant" slot-scope="data">
            {{data.item.tenant}}
          </template>

          <template slot="Beds" slot-scope="data">
            {{data.item.beds}}
          </template>

          <template slot="Rent" slot-scope="data">
            {{data.item.rent}}
          </template>

          <template slot="Action" slot-scope="data">
            <willow-button :url="'/Admin/buildings/' + data.item.id" >View</willow-button>
          </template>

        </willow-table>
      </b-card> -->

      <b-card class="mb-2" >
        <h6 class="heading">Features</h6>
        <b-row class="mb-2">
          <b-col>
            <b-form-group>
              <b-form-checkbox-group
                id="property_features"
                name="property_features"
                v-model="building.propertyFeatures"
                >
                  <b-form-checkbox class="col-sm-5" :value="feature.value" v-for="(feature, i) in  this.$store.getters.getPropertyFeatures" :key="i"
                    >
                    {{feature.text}}
                  </b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>
          </b-col>
        </b-row>
      </b-card>

      <b-card>
        <h6 class="heading">Images</h6>
        <b-row class="mb-2">
        <b-col :cols="24">
          <div class="float-right p-1">
            <willow-file-input-multiple @uploadedFiles="getImages" :url="`/propertys/${this.$route.params.building_id}/upload`" identifier="image">
                Add images
              </willow-file-input-multiple>
          </div>
        </b-col>
        <b-col :cols="24">
            <willow-product-images
              :images="images"
            @remove-img="deleteImage($event)"
            >
            </willow-product-images>
        </b-col>
      </b-row>

      </b-card>

    </willow-layout-section>

        <!-- Secondary -->
    <willow-layout-section secondary>

      <b-card  card-title="Secondary- Subdued" class="mb-2" style="background-color: #f8f9fa ;">
        <b-form-group>
          <willow-select
            :value="'on'"
            :options="[{ value: true, text: 'Active' },{ value: false, text: 'Deactivated' }]"
            :label="'Status'"
            subdued
          ></willow-select>
        </b-form-group>
      </b-card>

            <b-card  card-title="Primary" class="mb-2">
        <h5>Units</h5>

        <willow-table hover :rows="this.building.units" :headings="fields">

          <template slot="Number" slot-scope="data">
            {{data.item.unitNumber}}
          </template>

          <template slot="Tenant" slot-scope="data">
            {{data.item.tenant}}
          </template>

          <template slot="Action" slot-scope="data">
            <willow-button :url="`/admin/buildings/${building.id}/units/${data.item.id}`" >View</willow-button>
          </template>

        </willow-table>
      </b-card>

    </willow-layout-section>

  </willow-layout>

  <page-actions>
    <template slot="action-left">
      <willow-button :size="'lg'" destructive  @click.native="deleteBuilding()">Delete this building</willow-button>
    </template>

    <template slot="action-right">
      <willow-button size="lg" primary @click.native="saveBuilding()">Save</willow-button>
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
      pageheader: {
        breadcrumbs: [
          {
            text: 'Buildings',
            href: '/Admin/Buildings'
          }
        ]
      },
      fields: ['Number', 'Tenant', 'Action'],
      building: {
        id: null,
        street: null,
        apartmentSuite: null,
        city: null,
        state: null,
        zipcode: null,
        type: 1,
        propertyFeatures: [],
        units: []
      },
      images: []
    }
  },
  methods: {
    fetch () {
      axios.all([
        api.getBuilding(this.$route.params.building_id),
        api.getBuildingUnits(this.$route.params.building_id),
        api.getBuildingImages(this.$route.params.building_id)

      ])
        .then(axios.spread((building, units, images) => {
          this.building.id = building.data.Id
          this.building.street = building.data.Street
          this.building.apartmentSuite = building.data.ApartmentSuite
          this.building.city = building.data.City
          this.building.state = building.data.State
          this.building.zipcode = building.data.Zipcode
          this.building.type = building.data.Type
          this.building.propertyFeatures = building.data.PropertyFeatures.map(p => p.Id)

          this.building.units = units.data.Units.map(unit => {
            return {
              id: unit.UnitId,
              unitNumber: unit.UnitNumber,
              tenant: 'None'
            }
          })
          console.log('images', images)
          this.images = images.data
        }))
    },
    getImages (images) {
      images.forEach(image => {
        this.images.push(image)
      })
    },
    deleteImage (data) {
      if (data.image.Key) {
        api.deleteBuildingImage(data.image.Key).then(res => {
          this.images.splice(data.i, 1)
        })
      }
    },
    deleteBuilding () {
      api.deleteBuilding(this.$route.params.building_id)
        .then(res => {
          this.$router.push({ path: '/Admin/Buildings' })
        })
        .catch(err => {
          console.log(err)
        })
    },
    saveBuilding () {
      api.updateBuilding(this.$route.params.building_id, this.building)
        .then(res => {
          this.$router.push({ path: '/Admin/Buildings' })
        })
        .catch(err => {
          console.log(err)
        })
    },
    addUnit () {
      this.$router.push({ path: '/Admin/Buildings/' + this.$route.params.building_id + '/unit/add' })
    }
  }
}
</script>

<style>
</style>
