<template>
<div class="col-sm-24">
  <div class="pricing-header px-3 py-3 pt-md-10 pb-md-8 mx-auto text-center ">
    <h1 class="display-4">{{title}}</h1>
    <p class="lead">{{lead}}</p>
  </div>

  <div class="container">
    <div class="card-deck mb-3 text-center">
      <div class="card mb-4 shadow-sm" v-for="(plan, i) in plans" :key="i">
        <div class="card-header">
          <h4 class="my-0 font-weight-normal">{{plan.name}}</h4>
        </div>
        <div class="card-body">
          <h1 class="card-title pricing-card-title">${{plan.price}} <small class="text-muted">/ mo</small></h1>
          <p v-if="plan.description">{{plan.description}}</p>
          <ul class="list-unstyled mt-3 mb-4">
            <li v-for="feature in plan.pricing" :key="feature">{{feature}}</li>
          </ul>
          <button type="button" class="btn btn-lg btn-block btn-primary">{{plan.action}}</button>
        </div>
      </div>
    </div>
  </div>
</div>
</template>

<script>
export default {
  props: {
    title: { type: String, default: 'Pricing' },
    lead: { type: String, default: 'Pick a plan to use when your free trial ends' },
    plans: {
      type: Array
    }
  }
}
</script>

<style>

</style>
