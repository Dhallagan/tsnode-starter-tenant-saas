<template>
<page>

  <page-header
    title="Settings"
  >
  </page-header>

  <willow-layout>

    <!-- DEFAULT -->
    <willow-layout-section>
       <b-card card-title="Default" class="mb-2">
        <b-row>
        <router-link class="col-xl col-md-24 pb-3" to="/settings/general">
              <div class="card h-100">
                  <div class="row h-100 no-gutters">
                      <div class="col bg-light text-primary d-flex">
                          <h1 class="mx-auto align-self-center">
                              <icon name="users" scale="5"></icon>
                          </h1>
                      </div>
                      <div class="col-18 p-3">
                          <h5>General</h5>
                          <p>View and update your company details.</p>
                      </div>
                  </div>
              </div>
          </router-link>
          <router-link class="col-xl col-md-24 pb-3" to="/settings/accounts">
              <div class="card h-100">
                  <div class="row h-100 no-gutters">
                      <div class="col bg-light text-primary d-flex">
                          <h1 class="mx-auto align-self-center">
                              <icon name="users" scale="5"></icon>
                          </h1>
                      </div>
                      <div class="col-18 p-3">
                          <h5>Accounts</h5>
                          <p>Manage accounts and permissions</p>
                      </div>
                  </div>
              </div>
          </router-link>
          <router-link class="col-xl col-md-24 pb-3" to="/settings/plans">
              <div class="card h-100">
                  <div class="row h-100 no-gutters">
                      <div class="col bg-light text-primary d-flex">
                          <h1 class="mx-auto align-self-center">
                              <icon name="users" scale="5"></icon>
                          </h1>
                      </div>
                      <div class="col-18 p-3">
                          <h5>Plans</h5>
                          <p>Manage Plans</p>
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
