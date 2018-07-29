<template>
  <b-card class="mb-2" no-body>
<b-row>
    <router-link class="col-xl col-md-12 pb-3 mx-2" to="/settings/accounts">
      <div class="h-100">
          <div class="row h-100 no-gutters">
              <div class="col text-primary d-flex">
                  <h1 class="mx-auto align-self-center">
                      <icon name="users" scale="5"></icon>
                  </h1>
              </div>
              <div class="col-18 p-3">
                  <h5>{{title}}</h5>
                  <p><slot/></p>
              </div>
              <div class="col my-4 mx-2">
                <willow-button class="float-right" :url="primaryAction.url" variant="primary">
                  <slot name="footer-action"/>{{primaryAction.content}}
                </willow-button>
              </div>
          </div>
      </div>
  </router-link>
</b-row>
<!--
  <h6>{{title}}
    <slot name="heading"/>
  </h6>

  <p class="card-text">
    <p class="float-left">
      <icon :name="icon" scale="3"></icon>
      <slot/>
    </p>
  </p>
    <willow-button class="float-right" :url="primaryAction.url">
      <slot name="footer-action"/>{{primaryAction}}
    </willow-button>-->
  </b-card>
</template>

<script>
export default {
  props: {
    title: String,
    primaryAction: {
      type: Object
    },
    secondaryAction: { type: Object },
    icon: String
  }
}
</script>

<style>

</style>
