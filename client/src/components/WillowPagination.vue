<template>
  <div class="row">
    <div class="col-md-14">
      <div class="dataTables_length bs-select" id="dtBasicExample_length">
        <label> Show
          <select class="form-control-sm" v-if="itemsPerPageOptions.length" @change="$emit('update:itemsPerPage', numItems)" v-model="numItems">
            <option :value="item"  v-for="(item, i) in itemsPerPageOptions" :key="i">{{item}}</option>
          </select> entries
        </label>
      </div>
      <!-- <div class="dataTables_info" id="dtBasicExample_info" role="status" aria-live="polite">Showing 1 to 10 of 57 entries</div> -->
    </div>
    <div class="col-sm-10">
      <nav class="pagination">
        <ul class="pagination justify-content-end">
          <li class="page-item" :class="{disabled: page == 1}">
            <a class="page-link" href="#" tabindex="-1" @click="setPage(1)">First</a>
          </li>
          <li class="page-item" :class="{disabled: page <= 1}">
            <a class="page-link" href="javascript:void(0)" @click="setPage(page - 1)">Previous</a>
          </li>
          <li class="page-item active">
            <a class="page-link" href="javascript:void(0)" >{{page}}</a>
          </li>
          <li class="page-item" :class="{disabled: page >= pages}">
            <a class="page-link" href="javascript:void(0)" @click="setPage(page + 1)">Next</a>
          </li>
          <li class="page-item" :class="{disabled: page >= pages}">
            <a class="page-link" href="javascript:void(0)" @click="setPage(pages)">Last</a>
          </li>
        </ul>
      </nav>
    </div>
  </div>
</template>

<script>
export default {
  mounted () {
    this.numItems = this.itemsPerPageOptions[0]
    this.$emit('update:itemsPerPage', this.itemsPerPageOptions[0])
  },

  data () {
    return {
      numItems: null
    }
  },

  props: {
    page: {
      type: Number,
      default: 1
    },
    type: {
      type: String,
      default: 'list',
      validator: type => ['list', 'card', 'table'].indexOf(type) >= 0
    },
    totalItems: {
      type: Number,
      default: 0
    },
    itemsPerPage: {
      type: Number,
      default: 25
    },
    itemsPerPageOptions: {
      type: Array,
      default () {
        return [10, 25, 50, 100, 500]
      }
    }
  },

  computed: {
    pages () {
      return Math.ceil(this.totalItems / this.itemsPerPage)
    },
    firstItem () {
      return (this.page - 1) * this.itemsPerPage + 1
    },
    lastItem () {
      return Math.min(this.page * this.itemsPerPage, this.totalItems)
    }
  },

  methods: {
    setPage (page) {
      this.page = Math.max(Math.min(page, this.pages), 1)
      this.$emit('update:page', page)
    }
  }
}
</script>

<style>

</style>
