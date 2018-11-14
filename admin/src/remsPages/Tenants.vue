<template>
<page>

  <page-header
    title="Tenants"
  >
  <template slot="action-right">
    <willow-button primary>Add Lease</willow-button>
  </template>

  </page-header>

  <b-card class="w-100">
    <willow-button v-b-toggle.collapse1 outline>Filters +</willow-button>

    <b-collapse id="collapse1" class="mt-2">
      <b-card>
        <p class="card-text">Advanced Options:</p>
        <b-row>
          <b-col cols="6">
          <b-form-group id="fieldsetHorizontal"
                        description="Building tenant of"
                        label="Property"
                        label-for="inputHorizontal">
              <b-select :options="[{ value: null, text: '150 Main St' },{ value: 'a', text: '3 Industrial Road' }]"></b-select>
            </b-form-group>
          </b-col>
          <b-col cols="6">
                <b-form-group label="Lease Status">
                  <b-form-checkbox-group stacked v-model="selected" name="flavour2" :options="[{text: 'Past', value: 'past'},{text: 'Present', value: 'present'},{text: 'Future', value: 'Future'}]">
                  </b-form-checkbox-group>
                </b-form-group>
          </b-col>
        </b-row>
      </b-card>
    </b-collapse>
    <br><br>
      <b-form-input
        placeholder="Search..."
      >
      </b-form-input>

    <br>

    <b-table hover :items="items"></b-table>

  </b-card>

</page>
</template>

<script>
const items = [
  {
    name: 'Ran Swansen',
    unit: '3 Industrial Road',
    tenure: '5yrs',
    phone: '(555) 555-5555'
  },
  {
    name: 'Jeff Reynolds',
    unit: '34 Frank St',
    tenure: '4yrs',
    phone: '(555) 555-5555'
  },
  {
    name: 'John Heilp',
    unit: '130 Gast Road',
    tenure: '0.5yrs',
    phone: '(555) 555-5555'
  },
  {
    name: 'Jane Bagby',
    unit: '150 Main St',
    tenure: '2yrs',
    phone: '(555) 555-5555'
  }
]
export default {
  data () {
    return {
      items: items
    }
  }
}
</script>

<style>

</style>
