<template>
<page>

  <page-header
    title="Reports"
  >
  </page-header>

  <willow-layout>

    <!-- DEFAULT -->
    <willow-layout-section>
       <b-card card-title="Default" class="mb-2">
        <b-row>
          <router-link class="col-xl col-md-24 pb-3" to="/utilization">
              <div class="card h-100">
                  <div class="row h-100 no-gutters">
                      <div class="col bg-light text-primary d-flex">
                          <h1 class="mx-auto align-self-center">
                              <icon name="users" scale="5"></icon>
                          </h1>
                      </div>
                      <div class="col-18 p-3">
                          <h5>Attorney Utilization</h5>
                          <p>Analyze Attorney Hours and Productivity</p>
                      </div>
                  </div>
              </div>
          </router-link>

        </b-row>
       </b-card>
    </willow-layout-section>

  </willow-layout>

</page>
</template>

<script>
export default {}
</script>

<style>

</style>
