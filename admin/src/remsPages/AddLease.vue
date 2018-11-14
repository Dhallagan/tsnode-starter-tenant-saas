<template>
<page>

  <page-header
    title="Add Lease"
  >
  </page-header>

  <willow-layout>
  <!-- CARD -->

    <willow-annotated-section
      title="Add Lease"
      description="Create a lease for a new tenant"
    >
       <b-card class="mb-2">
        <b-row>
          <b-col>
            <label for="inputLive">Property</label>
            <b-form-input
                  type="text"
                  placeholder="First">
            </b-form-input>
          </b-col>
          <b-col>
            <b-form-group
              label="Unit"
              label-for="inputHorizontal"
            >
              <b-form-input
                type="text"
                placeholder="Number">
              </b-form-input>
            </b-form-group>
          </b-col>
        </b-row>
        <b-row class="mt-4">
          <b-col>
            <label for="inputLive">Start Date</label>
            <b-form-input
                  type="date"
                  placeholder="First">
            </b-form-input>
          </b-col>
          <b-col>
            <label for="inputLive">End Date</label>
            <b-form-input
                  type="date"
                  placeholder="First">
            </b-form-input>
          </b-col>
        </b-row>
        <b-row class="mt-4">
          <b-col>
            <b-form-group label="Lease Type">
              <b-form-radio-group id="radios2" v-model="selected" name="radioSubComponent" stacked>
                <b-form-radio value="first">Fixed</b-form-radio>
                <b-form-radio value="second">Fixed - Rollover</b-form-radio>
                <b-form-radio value="thire">Month to Month</b-form-radio>
              </b-form-radio-group>
            </b-form-group>
          </b-col>
        </b-row>
          <willow-button class="mt-4 " variant="default">Cancel</willow-button>
          <willow-button class="mt-4 float-right" variant="primary">Start Lease</willow-button>
       </b-card>

    </willow-annotated-section>

  </willow-layout>

</page>
</template>

<script>
export default {}
</script>

<style>

</style>
