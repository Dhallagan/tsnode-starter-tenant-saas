<template>
<page>

  <page-header
    :title="building.property"
    :breadcrumbs="pageheader.breadcrumbs"
  >
    <template slot="action-right">
      <willow-button primary>Edit</willow-button>
    </template>
  </page-header>

  <willow-layout>

    <!-- Primary -->
    <willow-layout-section primary >
       <b-card  card-title="Primary" class="mb-2">
        <h5>Units</h5>
        <b-table hover :items="items"></b-table>
       </b-card>

       <b-card  card-title="Primary" class="mb-2">
        <h5>Rent Roll</h5>
       </b-card>

      <b-card  card-title="Primary" class="mb-2">
       <h5>Events</h5>
       </b-card>

    </willow-layout-section>

        <!-- Secondary -->
    <willow-layout-section secondary>
       <b-card  card-title="Secondary" class="mb-2">
        <h6>Property Details</h6>
              <b-row>
        <b-col>
          <b-img thumbnail fluid src="https://dylanhallagan1.managebuilding.com/Manager/Upload/StreamFile.ashx?fileName=47a021aa94544561ac024fb469a7a407_210x158.jpg&isPreview=true" alt="Thumbnail" />
        </b-col>
        <b-col>
          <p><strong>Address:</strong> <br>{{building.property}}<br>{{building.location}}</p>
          <p><strong>Type:</strong> <br>{{building.type}}</p>
          <p><strong>Owner:</strong> <br>{{building.owner}}</p>
        </b-col>

      </b-row>
       </b-card>

       <b-card  card-title="Secondary- Subdued" class="mb-2" style="background-color: #f8f9fa ;">
        <b-form-group id="fieldsetHorizontal"
                  description="Turn on listing."
                  label="Visibility"
                  label-for="inputHorizontal">
        <b-select :options="[{ value: null, text: 'Active' },{ value: 'a', text: 'Inactive' }]"></b-select>
       </b-form-group>
        <p class="card-text">
          Some quick example text to build on the card title and make up the bulk of the card"s content.
        </p>
       </b-card>

             <b-card  card-title="Primary" class="mb-2">
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
          <b-form-group>
            <b-form-checkbox id="checkbox5" v-model="status" value="accepted" unchecked-value="not_accepted">Garage Parking</b-form-checkbox>
            </b-form-group><b-form-group>
            <b-form-checkbox id="checkbox6" v-model="status" value="accepted" unchecked-value="not_accepted">Roof Deck</b-form-checkbox>
            </b-form-group><b-form-group>
            <b-form-checkbox id="checkbox7" v-model="status" value="accepted" unchecked-value="not_accepted">Door Person</b-form-checkbox>
            </b-form-group><b-form-group>
            <b-form-checkbox id="checkbox8" v-model="status" value="accepted" unchecked-value="not_accepted">Onsite Management</b-form-checkbox>
          </b-form-group>
          <b-form-group>
            <b-form-checkbox id="checkbox9" v-model="status" value="accepted" unchecked-value="not_accepted">Dry Cleaning</b-form-checkbox>
            </b-form-group><b-form-group>
            <b-form-checkbox id="checkbox10" v-model="status" value="accepted" unchecked-value="not_accepted">Outdoor Space</b-form-checkbox>
            </b-form-group><b-form-group>
            <b-form-checkbox id="checkbox11" v-model="status" value="accepted" unchecked-value="not_accepted">Storage</b-form-checkbox>
            </b-form-group><b-form-group>
            <b-form-checkbox id="checkbox12" v-model="status" value="accepted" unchecked-value="not_accepted">Package Service</b-form-checkbox>
          </b-form-group>
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
       </b-card>

    </willow-layout-section>

  </willow-layout>

  <page-actions>
      <template slot="action-left">
      <willow-button destructive>Delete this building</willow-button>
    </template>
    <template slot="action-right">
      <willow-button primary>Save</willow-button>
    </template>
  </page-actions>

</page>
</template>

<script>
const items = [
  {
    number: '1',
    tenant: 'None',
    beds: 'Studio',
    rent: '$500'
  },
  {
    number: '1',
    tenant: 'None',
    beds: '2',
    rent: '$500'
  },
  {
    number: '3',
    tenant: 'Ran Swanson',
    beds: '1',
    rent: '$500'
  },
  {
    number: '4',
    tenant: 'None',
    beds: '3',
    rent: '$500'
  }
]
export default {
  // mounted () {
  //   var building = this.$store.getters.getBuildingById(
  //     this.$route.params.building_id
  //   )
  //   console.log('Building:' + building)
  //   this.building = building
  // },
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
      items: items,
      building: {
        id: 1,
        property: '74 Grove Street',
        location: 'Boston, MA',
        owner: 'Larsen',
        type: 'Residential, Single-Family',
        units: [
          { unit: '1A', beds: 'Studio' },
          { unit: '1B', beds: '1' },
          { unit: '2A', beds: '2' },
          { unit: '2B', beds: '3' }
        ]
      }
    }
  }
}
</script>

<style>

</style>
