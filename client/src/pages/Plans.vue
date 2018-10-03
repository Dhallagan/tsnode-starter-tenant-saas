<template>
<page>

  <page-header
    title="Pick a plan for your site"
    :breadcrumbs="pageheader.breadcrumbs"
  >

  </page-header>

  <willow-layout>
  <!-- CARD -->
    <willow-plans
      :plans="plans"
      :currentPlan="currentPlanId"
      v-on:subscribe="subscribePlan($event)"
    ></willow-plans>

    <willow-modal
      v-b-modal.modallg
      :title="'Add Payment'"
    ></willow-modal>

    <b-modal ref="stripeModal" hide-footer title="Add card">
      <form id="payment-form">
        <b-row>
            <b-col class="form-row mb-2">
                <label for="card-element">
                Credit or debit card
                </label>
                <div ref="cardElement"></div>
                <div id="card-errors" role="alert"></div>
            </b-col>
            <b-col>
                <willow-button @click.native="stripeSubmit()" primary>Submit Payment</willow-button>
            </b-col>
        </b-row>
      </form>
    </b-modal>

  </willow-layout>

<br/><br/>
</page>
</template>

<script>
import api from '@/api/api'
import axios from 'axios'

var stripe = window.Stripe('pk_test_BbiB91sCzXYnkGbYHB0ZkGG0')
var elements = stripe.elements()
var card

export default {
  mounted () {
    this.stripeIntegrate()
    return this.fetch()
  },
  data () {
    return {
      pageheader: {
        breadcrumbs: [
          {
            text: 'Settings',
            href: '/Admin/Settings'
          }
        ]
      },
      currentPlanId: -1,
      newPlan: {},
      plans: [],
      stripe,
      card,
      elements
    }
  },
  methods: {
    fetch () {
      axios.all([
        api.getUserPlan(this.$store.getters.getUser.Id),
        api.getPlans()
      ])
        .then(axios.spread((res1, res2) => {
          this.currentPlanId = res1.data.Name === 'Trial' ? -1 : res1.data.Id
          res2.data.Plans.shift()
          this.setPlans(res2.data.Plans)
        }))
    },
    setPlans (plans) {
      this.plans = plans.map(plan => {
        return {
          name: plan.Name,
          description: `Start with a ${plan.Name.toLowerCase()}`,
          price: plan.Amount,
          pricing: plan.Pricing,
          action: plan.Id === this.currentPlanId ? 'Current Plan' : 'Choose this plan',
          id: plan.Id
        }
      })
    },
    subscribePlan (plan) {
      this.newPlan = plan
      if (this.currentPlanId === -1) {
        this.$refs.stripeModal.show()
      } else {
        api.updatePlan({ plan: this.newPlan.id })
          .then(res => {
            this.currentPlanId = this.newPlan.id
            this.newPlan = null
          })
          .catch(err => {
            console.log(err)
          })
      }
    },
    stripeIntegrate () {
      var style = {
        base: {
          color: '#32325d',
          fontSize: '16px',
          '::placeholder': {
            color: '#aab7c4'
          }
        },
        invalid: {
          color: '#fa755a',
          iconColor: '#fa755a'
        }
      }
      card = elements.create('card', {style: style})
      card.mount(this.$refs.cardElement)

      card.addEventListener('change', function (event) {
        var displayError = document.getElementById('card-errors')
        if (event.error) {
          displayError.textContent = event.error.message
        } else {
          displayError.textContent = ''
        }
      })
    },
    stripeSubmit () {
      const _this = this
      this.$refs.stripeModal.hide()
      stripe.createToken(card).then(function (result) {
        if (result.error) {
          var errorElement = document.getElementById('card-errors')
          errorElement.textContent = result.error.message
        } else {
          console.log(result.token)
          const param = {
            token: result.token,
            plan: _this.newPlan.id
          }
          api.createCustomer(param)
            .then(res => {
              _this.currentPlanId = _this.newPlan.id
              _this.newPlan = null
            })
            .catch(err => {
              console.log(err)
            })
        }
      })
    }
  }
}
</script>

<style>
.StripeElement {
  background-color: white;
  height: 40px;
  padding: 10px 12px;
  border-radius: 4px;
  border: 1px solid transparent;
  box-shadow: 0 1px 3px 0 #e6ebf1;
  width: 400px;
  -webkit-transition: box-shadow 150ms ease;
  transition: box-shadow 150ms ease;
}

.StripeElement--focus {
  box-shadow: 0 1px 3px 0 #cfd7df;
}

.StripeElement--invalid {
  border-color: #fa755a;
}

.StripeElement--webkit-autofill {
  background-color: #fefde5 !important;
}
</style>
