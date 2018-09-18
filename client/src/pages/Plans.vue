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
      :plans="[
        { name: 'Basic', price: '5', description:'Start with a basic', pricing: ['1 users included', '2 GB of storage', 'Email support', 'Help center access'], action:'Choose this plan'},
        { name: 'Standard', price: '15', description:'Start with a standard', pricing: ['5 users included', '15 GB of storage', 'Priority email support', 'Help center access'], action:'Choose this plan'},
        { name: 'Premium', price: '29', description:'Start with a premium', pricing: ['30 users included', '30 GB of storage', 'Phone and email support', 'Help center access'], action:'Choose this plan'}]"
    ></willow-plans>
    <willow-annotated-section
      v-for="plan in plans"
      v-bind:key="plan.Id"
      v-bind:plan="plan"
      v-if="plan.Amount != 0"
      :title="plan.Name"
    >
       <b-card class="mb-2">
        <b-row>
          <b-col>
            <h6 class="heading">Interval</h6>
            <p class="card-text">
              {{plan.Interval}}
            </p>
          </b-col>
          <b-col>
            <h6 class="heading">Amount</h6>
            <p class="card-text">
              ${{plan.Amount}}
            </p>
          </b-col>
          <b-col>
            <willow-button v-if="currentPlan.Id != plan.Id" @click.native="subscribePlan(plan)" primary>Subscribe</willow-button>
            <h6 v-if="currentPlan.Id == plan.Id">Current Plan</h6>
          </b-col>
        </b-row>
       </b-card>
    </willow-annotated-section>

    <b-modal ref="stripeModal" hide-footer title="Add card">
      <form id="payment-form">
        <b-row>
            <b-col class="form-row mb-2">
                <label for="card-element">
                Credit or debit card
                </label>
                <div ref="cardElement">
                <!-- A Stripe Element will be inserted here. -->
                </div>

                <!-- Used to display form errors. -->
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

var stripe = window.Stripe('pk_test_SEMCPOlbdQXNeVOGjJWLIT7D')
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
            text: 'Plans',
            href: '/Plans'
          }
        ]
      },
      currentPlan: {},
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
          this.currentPlan = res1.data
          this.plans = res2.data.Plans
          console.log(this.currentPlan, this.plans)
        }))
    },
    subscribePlan (plan) {
      this.newPlan = plan
      if (this.currentPlan.Name === 'Trial') {
        this.$refs.stripeModal.show()
      } else {
        api.updatePlan(this.newPlan)
          .then(res => {
            this.currentPlan = this.newPlan
            this.newPlan = null
            console.log(res.data)
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
      const user = this.$store.getters.getUser
      console.log(user)
      const _this = this
      this.$refs.stripeModal.hide()
      stripe.createToken(card).then(function (result) {
        if (result.error) {
          // Inform the user if there was an error.
          var errorElement = document.getElementById('card-errors')
          errorElement.textContent = result.error.message
        } else {
          // Send the token to your server.
          console.log(result.token)
          const param = {
            token: result.token,
            plan: _this.newPlan
          }
          api.createCustomer(param)
            .then(res => {
              console.log(res.data)
              _this.currentPlan = _this.newPlan
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
