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
            <willow-button :url="'/buildings/' + data.item.id" >View</willow-button>
          </template>

        </willow-table>
      </b-card> -->

      <!-- <b-card  card-title="Primary" class="mb-2">
        <willow-button v-b-modal.modallg  plain size="sm" class="close sm" style="font-size: 0.75rem;">Edit</willow-button>
        <h5>Amenities</h5>
          <b-row>
            <b-col>
            <b-form-group>
              <b-form-checkbox id="checkbox1" v-model="status" value="accepted" unchecked-value="not_accepted">Business Center</b-form-checkbox>
              </b-form-group><b-form-group>
              <b-form-checkbox id="checkbox2" v-model="status" value="accepted" unchecked-value="not_accepted">Fitness Center</b-form-checkbox>
              </b-form-group><b-form-group>
              <b-form-checkbox id="checkbox3" v-model="status" value="accepted" unchecked-value="not_accepted">Residents" Lounge</b-form-checkbox>
              </b-form-group><b-form-group>
              <b-form-checkbox id="checkbox4" v-model="status" value="accepted" unchecked-value="not_accepted">Wheelchair Access</b-form-checkbox>
            </b-form-group>
            </b-col>
            <b-col>
            <b-form-group>
              <b-form-checkbox id="checkbox5" v-model="status" value="accepted" unchecked-value="not_accepted">Garage Parking</b-form-checkbox>
              </b-form-group><b-form-group>
              <b-form-checkbox id="checkbox6" v-model="status" value="accepted" unchecked-value="not_accepted">Roof Deck</b-form-checkbox>
              </b-form-group><b-form-group>
              <b-form-checkbox id="checkbox7" v-model="status" value="accepted" unchecked-value="not_accepted">Door Person</b-form-checkbox>
              </b-form-group><b-form-group>
              <b-form-checkbox id="checkbox8" v-model="status" value="accepted" unchecked-value="not_accepted">Onsite Management</b-form-checkbox>
            </b-form-group>
                      </b-col>
            <b-col>
            <b-form-group>
              <b-form-checkbox id="checkbox9" v-model="status" value="accepted" unchecked-value="not_accepted">Dry Cleaning</b-form-checkbox>
              </b-form-group><b-form-group>
              <b-form-checkbox id="checkbox10" v-model="status" value="accepted" unchecked-value="not_accepted">Outdoor Space</b-form-checkbox>
              </b-form-group><b-form-group>
              <b-form-checkbox id="checkbox11" v-model="status" value="accepted" unchecked-value="not_accepted">Storage</b-form-checkbox>
              </b-form-group><b-form-group>
              <b-form-checkbox id="checkbox12" v-model="status" value="accepted" unchecked-value="not_accepted">Package Service</b-form-checkbox>
            </b-form-group>
                      </b-col>
            <b-col>
            <b-form-group>
              <b-form-checkbox id="checkbox16" v-model="status" value="accepted" unchecked-value="not_accepted">Swimming Pool</b-form-checkbox>
              </b-form-group><b-form-group>
              <b-form-checkbox id="checkbox13" v-model="status" value="accepted" unchecked-value="not_accepted">Elevator</b-form-checkbox>
              </b-form-group><b-form-group>
              <b-form-checkbox id="checkbox14" v-model="status" value="accepted" unchecked-value="not_accepted">Laundry</b-form-checkbox>
              </b-form-group><b-form-group>
              <b-form-checkbox id="checkbox15" v-model="status" value="accepted" unchecked-value="not_accepted">Concierge Service</b-form-checkbox>
            </b-form-group>
            </b-col>
          </b-row>
        </b-card> -->

        <!-- <b-card>
          <h5>Images</h5>
          <willow-product-images
            :images="['http://www.ryukyu.ac.jp/wp-content/uploads/2012/09/Koala-400x300.jpg','https://cdn.dribbble.com/users/141074/screenshots/1101614/blackbird-400x300.png','http://xinature.com/wp-content/uploads/2016/10/flowers-love-rose-flower-delicte-blue-wallpapers-big-size.jpg','https://upload.wikimedia.org/wikipedia/commons/thumb/c/c7/Blue_rose-artificially_coloured.jpg/220px-Blue_rose-artificially_coloured.jpg','http://placehold.it/400x300','http://placehold.it/400x300']"
          ></willow-product-images>
        </b-card> -->

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
            <willow-button :url="`/buildings/${building.id}/units/${data.item.id}`" >View</willow-button>
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
            href: '/Buildings'
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
        units: []
      }
    }
  },
  methods: {
    fetch () {
      axios.all([
        api.getBuilding(this.$route.params.building_id),
        api.getBuildingUnits(this.$route.params.building_id)
      ])
        .then(axios.spread((building, units) => {
          this.building.id = building.data.Id
          this.building.street = building.data.Street
          this.building.apartmentSuite = building.data.ApartmentSuite
          this.building.city = building.data.City
          this.building.state = building.data.State
          this.building.zipcode = building.data.Zipcode
          this.building.type = building.data.Type

          this.building.units = units.data.Units.map(unit => {
            return {
              id: unit.UnitId,
              unitNumber: unit.UnitNumber,
              tenant: 'None'
            }
          })
        }))
      console.log(this.building.units)
    },
    deleteBuilding () {
      api.deleteBuilding(this.$route.params.building_id)
        .then(res => {
          this.$router.push({ path: '/Buildings' })
        })
        .catch(err => {
          console.log(err)
        })
    },
    saveBuilding () {
      api.updateBuilding(this.$route.params.building_id, this.building)
        .then(res => {
          this.$router.push({ path: '/Buildings' })
        })
        .catch(err => {
          console.log(err)
        })
    },
    addUnit () {
      this.$router.push({ path: '/Buildings/' + this.$route.params.building_id + '/unit/add' })
    }
  }
}
</script>

<style>
</style>
