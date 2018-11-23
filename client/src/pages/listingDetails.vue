<template>
<page>
  <willow-layout >
  <!-- CARD -->
      <willow-layout-section primary>
       <b-card class="mb-2" >
        <h6 class="heading">Unit Details</h6>
        <b-row class="mb-2">
          <b-col >
            <label for="inputLive">Unit</label>
            <b-form-input type="text" v-model="listing.unit">
            </b-form-input>
          </b-col>
        </b-row>
        <b-row class="mb-2">
          <b-col :cols="6">
            <label for="inputLive">Beds</label>
            <b-form-input type="text" v-model="listing.beds">
            </b-form-input>
          </b-col>

          <b-col :cols="6">
            <label for="inputLive">Baths</label>
            <b-form-input type="text"  v-model="listing.baths">
            </b-form-input>
          </b-col>

          <b-col :cols="6">
            <label for="inputLive">SqFt</label>
            <b-form-input type="text" v-model="listing.sqft">
            </b-form-input>
          </b-col>

        </b-row>

        <b-row class="mb-2">
          <b-col>
            <label for="inputLive">Description</label>
            <b-form-textarea id="textarea1"
                            v-model="text"
                            :rows="3"
                            :max-rows="6">
            </b-form-textarea>
          </b-col>

        </b-row>

       </b-card>

      <b-card class="mb-2" >
        <h6 class="heading">Features</h6>
        <b-row class="mb-2">
          <b-col :cols="8">
          <b-form-group>
            <b-form-checkbox id="checkbox1" v-model="status" value="accepted" unchecked-value="not_accepted">Business Center</b-form-checkbox>
            </b-form-group><b-form-group>
            <b-form-checkbox id="checkbox2" v-model="status" value="accepted" unchecked-value="not_accepted">Fitness Center</b-form-checkbox>
            </b-form-group><b-form-group>
            <b-form-checkbox id="checkbox3" v-model="status" value="accepted" unchecked-value="not_accepted">Residents" Lounge</b-form-checkbox>
            </b-form-group><b-form-group>
            <b-form-checkbox id="checkbox4" v-model="status" value="accepted" unchecked-value="not_accepted">Wheelchair Access</b-form-checkbox>
          </b-form-group><b-form-group>
            <b-form-checkbox id="checkbox16" v-model="status" value="accepted" unchecked-value="not_accepted">Swimming Pool</b-form-checkbox>
            </b-form-group>
        </b-col>
        <b-col :cols="8">
          <b-form-group>
            <b-form-checkbox id="checkbox5" v-model="status" value="accepted" unchecked-value="not_accepted">Garage Parking</b-form-checkbox>
            </b-form-group><b-form-group>
            <b-form-checkbox id="checkbox6" v-model="status" value="accepted" unchecked-value="not_accepted">Roof Deck</b-form-checkbox>
            </b-form-group><b-form-group>
            <b-form-checkbox id="checkbox7" v-model="status" value="accepted" unchecked-value="not_accepted">Door Person</b-form-checkbox>
            </b-form-group><b-form-group>
            <b-form-checkbox id="checkbox8" v-model="status" value="accepted" unchecked-value="not_accepted">Onsite Management</b-form-checkbox>
          </b-form-group><b-form-group>
            <b-form-checkbox id="checkbox13" v-model="status" value="accepted" unchecked-value="not_accepted">Elevator</b-form-checkbox>
            </b-form-group>
        </b-col>
        <b-col :cols="8">
          <b-form-group>
            <b-form-checkbox id="checkbox9" v-model="status" value="accepted" unchecked-value="not_accepted">Dry Cleaning</b-form-checkbox>
            </b-form-group><b-form-group>
            <b-form-checkbox id="checkbox10" v-model="status" value="accepted" unchecked-value="not_accepted">Outdoor Space</b-form-checkbox>
            </b-form-group><b-form-group>
            <b-form-checkbox id="checkbox11" v-model="status" value="accepted" unchecked-value="not_accepted">Storage</b-form-checkbox>
            </b-form-group><b-form-group>
            <b-form-checkbox id="checkbox12" v-model="status" value="accepted" unchecked-value="not_accepted">Package Service</b-form-checkbox>
          </b-form-group><b-form-group>
            <b-form-checkbox id="checkbox14" v-model="status" value="accepted" unchecked-value="not_accepted">Laundry</b-form-checkbox>
            </b-form-group>
          </b-col>

        </b-row>

       </b-card>

    </willow-layout-section>

    <willow-layout-section primary>

       <b-card class="mb-1" style="background-color: #f8f9fa ;">
        <h6 class="heading">Listing Settings</h6>
        <b-row>
          <b-col :cols="6">
            <label for="inputLive">Unit</label>
            <b-form-input type="text" disabled v-model="listing.unit">
            </b-form-input>
          </b-col>

        </b-row>

        <b-row>
          <b-col>
            <label for="inputLive">Property</label>
            <b-form-input type="text" disabled v-model="listing.property">
            </b-form-input>
          </b-col>

        </b-row>

        <b-row>
          <b-col :cols="6">
            <label for="inputLive">Rent</label>
            <b-form-input type="text" v-model="listing.rent">
            </b-form-input>
          </b-col>

          <b-col :cols="6">
            <label for="inputLive">Deposit</label>
            <b-form-input type="text" v-model="listing.deposit">
            </b-form-input>
          </b-col>

        </b-row>

        <b-row>
          <b-col :cols="6">
            <label for="inputLive">Lease Terms</label>
            <b-form-input type="text" v-model="listing.lease_terms">
            </b-form-input>

          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <label for="inputLive">Date Available</label>
            <b-form-input
              type="date"
              placeholder="First"
              v-model="listing.date_available"
            >
            </b-form-input>
          </b-col>
        </b-row>

        <b-row class="mt-4">
          <b-col>
            <b-form-group label="Section 8">
              <b-form-radio-group id="radios2" v-model="selected" name="radioSubComponent">
                <b-form-radio value="first">Yes</b-form-radio>
                <b-form-radio value="second">No</b-form-radio>
              </b-form-radio-group>
            </b-form-group>
          </b-col>
        </b-row>

      </b-card>
      <b-row>
        <b-card class="mb-2" >
        <h6 class="heading">Images</h6>
        <b-row class="mb-2">
          <b-col >
            <div class="nklyn-container-medium no-gutters row">
                <img style="margin-left:10px" v-for="(image,index) in listingImages " :key='index' :src="image.Url" width="300" height="300" alt="">
            </div>
          </b-col>
        </b-row>
       </b-card>
      </b-row>
    </willow-layout-section>
  </willow-layout>
</page>
</template>

<script>
import api from '@/api/api'
import {format} from 'date-fns'
import axios from 'axios'

export default {
  mounted () {
    this.fetch()
  },
  data () {
    return {
      status: false,
      propertyId: 0,
      unitId: 0,
      listing: {
        unit: '',
        beds: '',
        baths: '',
        sqft: 0,
        property: '',
        rent: '',
        deposit: '',
        lease_terms: '',
        date_available: '',
        section8: false
      },
      buildingImages: [],
      unitImages: [],
      listingImages: []
    }
  },
  methods: {
    fetch () {
      api.getListingDetails(this.$route.params.id)
        .then(res => {
          this.listing = {
            unit: res.data.Unit.UnitNumber,
            beds: res.data.Unit.Bedrooms,
            baths: res.data.Unit.Baths,
            sqft: res.data.Unit.SqFt,
            property: res.data.Unit.Property.Street,
            rent: res.data.ListedRent,
            deposit: res.data.Deposit,
            lease_terms: '',
            date_available: format(res.data.AvailableDate, 'YYYY-MM-DD'),
            section8: res.data.Section8
          }
          this.propertyId = res.data.Unit.Property.Id

          this.unitId = res.data.Unit.UnitId
          axios.all([
            api.getBuildingImages(this.propertyId),
            api.getUnitImages(this.unitId)

          ]).then(axios.spread((buildingImagesData, unitImagesData) => {
            this.buildingImages = buildingImagesData.data
            this.unitImages = unitImagesData.data
            this.listingImages = [...this.buildingImages, ...this.unitImages]
          }))
        })
    },
    getBuildingImages (images) {
      this.buildingImages = [...this.buildingImages, ...images]
    },
    getUnitImages (images) {
      this.unitImages = [...this.buildingImages, ...images]
    }
  }

}
</script>

<style scoped>
.ammenities {
  max-width: 500px;
  -webkit-column-count: 2;
  column-count: 2;
}

.listing-heading {
  font-size: 1.25rem;
  font-weight: 500;
}

.subheading {
  font-weight: 700;
  line-height: 1.6rem;
  text-transform: uppercase;
}
</style>
