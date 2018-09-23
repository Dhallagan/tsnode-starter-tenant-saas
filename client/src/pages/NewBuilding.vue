<template>
<page>

  <page-header
    :title="'New Building'"
    :breadcrumbs="pageHeader.breadcrumbs"
  >
  </page-header>

  <willow-layout>

    <willow-annotated-section
      title="Create a new building"
    >
        <b-card class="mb-2">
            <b-row class="mb-4">
                <b-col>
                    <willow-textfield
                    :value="buildingForm.type"
                    :label="'Type'"
                    v-model="buildingForm.type"
                    heading
                    ></willow-textfield>
                </b-col>
            </b-row>

            <b-row class="mb-4">
                <b-col>
                    <willow-textfield
                    :value="buildingForm.apartmentSuite"
                    :label="'ApartmentSuite'"
                    v-model="buildingForm.apartmentSuite"
                    heading
                    ></willow-textfield>
                </b-col>
            </b-row>

            <b-row class="mb-4">
                <b-col>
                    <willow-textfield
                    :value="buildingForm.street"
                    :label="'Street'"
                    v-model="buildingForm.street"
                    heading
                    ></willow-textfield>
                </b-col>
            </b-row>

            <b-row class="mb-4">
                <b-col>
                    <willow-textfield
                    :value="buildingForm.state"
                    :label="'State'"
                    v-model="buildingForm.state"
                    heading
                    ></willow-textfield>
                </b-col>
            </b-row>

            <b-row class="mb-4">
                <b-col>
                    <willow-textfield
                    :value="buildingForm.city"
                    :label="'City'"
                    v-model="buildingForm.city"
                    heading
                    ></willow-textfield>
                </b-col>
            </b-row>

            <b-row class="mb-4">
                <b-col>
                    <willow-textfield
                    :value="buildingForm.zipcode"
                    :label="'Zipcode'"
                    v-model="buildingForm.zipcode"
                    heading
                    ></willow-textfield>
                </b-col>
            </b-row>

        </b-card>

    </willow-annotated-section>

    <willow-button size="lg" primary @click.native="saveBuilding()">Save</willow-button>

  </willow-layout>

</page>
</template>

<script>
import api from '@/api/api'

export default {
  data () {
    return {
      pageHeader: {
        breadcrumbs: [
          {
            text: 'Buildings',
            href: '/Buildings'
          }
        ]
      },
      buildingForm: {
        type: '',
        apartmentSuite: '',
        street: '',
        state: '',
        city: '',
        zipcode: '',
        units: []
      }
    }
  },
  methods: {
    saveBuilding () {
      api.createBuilding(this.buildingForm)
        .then(res => {
          this.$router.push({ path: '/Buildings' })
        })
    }
  }
}
</script>

<style>

</style>
