<template>
<div :class="[inline ? 'form-inline' : 'form-group']">
  <label for="name" class="control-label" v-if="label != null">{{label}}</label>
  <p v-if="error" class="has-error has-feedback">Required<span class="glyphicon glyphicon-warning-sign form-control-feedback"></span></p>
    <datepicker
      :value="value"
      :format="format"
      :input-class="classes"
      :bootstrapStyling="true"
      :calendarButton="showCalendar"
      :calendar-button-icon="'fa fa-calendar'"
      :disabled="disabled"
      @selected="handleChange"
    >
    </datepicker>
  </div>
</template>

<script>
import Datepicker from 'vuejs-datepicker'
export default {
  components: { Datepicker },
  model: {
    prop: 'value',
    event: 'change'
  },
  props: {
    value: {
      type: [Date, String, Number],
      default: new Date()
    },
    error: {
      type: String
    },
    format: {
      type: String,
      default: 'MM/dd/yyyy'
    },
    showCalendar: {
      type: Boolean,
      default: false
    },
    label: String,
    inline: {
      type: Boolean,
      default: false
    },
    disabled: {
      type: Boolean,
      default: false
    }
  },
  methods: {
    handleChange (e) {
      console.log(e)
      this.$emit('change', e)
    }
  },
  computed: {
    classes () {
      if (this.disabled) {
        return 'bg-gray'
      } else {
        return 'bg-white'
      }
    }
  }
}
</script>
