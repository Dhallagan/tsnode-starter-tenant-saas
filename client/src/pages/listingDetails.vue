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
            <b-form-input type="text" disabled :value="listing.unit" >
            </b-form-input>
          </b-col>

        </b-row>

        <b-row class="mb-2">
          <b-col :cols="6">
            <label for="inputLive">Beds</label>
            <b-form-input type="text" disabled :value="listing.beds">
            </b-form-input>
          </b-col>

          <b-col :cols="6">
            <label for="inputLive">Baths</label>
            <b-form-input type="text" disabled  :value="listing.baths">
            </b-form-input>
          </b-col>

          <b-col :cols="6">
            <label for="inputLive">SqFt</label>
            <b-form-input type="text" disabled :value="listing.sqft">
            </b-form-input>
          </b-col>

        </b-row>

        <b-row class="mb-2">
          <b-col>
            <label for="inputLive">Description</label>
            <b-form-textarea disabled id="textarea1"
                            :value="text"
                            :rows="3"
                            :max-rows="6">
            </b-form-textarea>
          </b-col>
        </b-row>

       </b-card>
       <b-card  class="mb-2">
        <h6 class="heading">Building Details</h6>
        <b-row>
          <b-col>
            <!-- <willow-button v-b-modal.modallg  plain size="sm" class="close sm" style="font-size: 0.75rem;">Edit</willow-button> -->
          </b-col>
        </b-row>
          <b-row class="mb-3">
            <b-col>
               <label >Street</label>
            <b-form-input type="text" disabled :value="building.Street">
            </b-form-input>
            </b-col>
          </b-row>
          <b-row class="mb-3">
            <b-col>
              <label >City</label>
            <b-form-input type="text" disabled :value="building.City">
            </b-form-input>
            </b-col>
            <b-col>

              <label >State</label>
            <b-form-input type="text" disabled :value="building.State">
            </b-form-input>

            </b-col>
             <b-col>
              <label >zipcode</label>
              <b-form-input type="text" disabled :value="building.Zipcode"></b-form-input>

            </b-col>
          </b-row>

          <b-row class="mb-3">
            <b-col>
               <label >Property Type</label>
              <b-form-input type="text" disabled :value="building.Type"></b-form-input>
            </b-col>
            <b-col>
            </b-col>
          </b-row>
       </b-card>
      <b-card class="mb-2" style="background-color: #f8f9fa ;">
        <h6 class="heading">Listing Settings</h6>
        <b-row>
          <b-col :cols="6">
            <label for="inputLive">Unit</label>
            <b-form-input type="text" disabled :value="listing.unit">
            </b-form-input>
          </b-col>

        </b-row>

        <b-row>
          <b-col>
            <label for="inputLive">Property</label>
            <b-form-input type="text" disabled :value="listing.property">
            </b-form-input>
          </b-col>

        </b-row>

        <b-row>
          <b-col :cols="6">
            <label for="inputLive">Rent</label>
            <b-form-input type="text" disabled :value="listing.rent">
            </b-form-input>
          </b-col>

          <b-col :cols="6">
            <label for="inputLive">Deposit</label>
            <b-form-input type="text" disabled :value="listing.deposit">
            </b-form-input>
          </b-col>

        </b-row>

        <b-row>
          <b-col :cols="6">
            <label for="inputLive">Lease Terms</label>
            <b-form-input type="text" disabled :value="listing.lease_terms">
            </b-form-input>

          </b-col>
        </b-row>

        <b-row>
          <b-col>
            <willow-datepicker
              :label="'Date Available'"
              v-model="listing.date_available"
              :showCalendar="true"
            >
            </willow-datepicker>
          </b-col>
        </b-row>

        <b-row class="mt-4">
          <b-col>
            <b-form-group label="Section 8">
              <b-form-radio-group id="radios2" :value="selected" disabled name="radioSubComponent">
                <b-form-radio value="first">Yes</b-form-radio>
                <b-form-radio value="second">No</b-form-radio>
              </b-form-radio-group>
            </b-form-group>
          </b-col>
        </b-row>
      </b-card>
      <b-card class="mb-2" >
        <h6 class="heading">Building Features</h6>
        <b-row class="mb-2">
          <b-col>
            <b-form-group  >
              <b-form-checkbox-group disabled :checked="true"
                >
                  <b-form-checkbox :name="feature.Name" class="col-sm-5"   v-for="(feature, i) in  this.propertyFeatures" :key="i"
                    >
                    {{feature.Name}}
                  </b-form-checkbox>
              </b-form-checkbox-group>
            </b-form-group>
          </b-col>
        </b-row>

        <h6 class="heading">Unit Features</h6>
        <b-row class="mb-2">
          <b-col>
            <b-form-group>
              <b-form-checkbox-group disabled :checked="true"
                >
                  <b-form-checkbox class="col-sm-5" v-for="(feature, i) in  this.unitFeatures" :key="i"
                  >
                  {{feature.Name}}
                </b-form-checkbox>
              </b-form-checkbox-group>
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
                <img style="margin-left:10px" v-for="(image,index) in listingImages " :key='index' :src="image.Url" width="300" height="300" :alt="image.url">
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
      building: {},
      propertyFeatures: {},
      unitFeatures: {},
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
            unit: res.data.listing.Unit.UnitNumber,
            beds: res.data.listing.Unit.Bedrooms,
            baths: res.data.listing.Unit.Baths,
            sqft: res.data.listing.Unit.SqFt,
            property: res.data.listing.Unit.Property.Street,
            rent: res.data.listing.ListedRent,
            deposit: res.data.listing.Deposit,
            lease_terms: '',
            date_available: format(res.data.listing.AvailableDate, 'YYYY-MM-DD'),
            section8: res.data.listing.Section8
          }
          this.building = res.data.listing.Unit.Property
          this.propertyFeatures = res.data.buldingFeatures
          this.unitFeatures = res.data.unitFeatures
          this.listingImages = [...res.data.buildingImages, ...res.data.unitImages]
        })
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
