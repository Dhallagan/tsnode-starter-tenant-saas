<template>
<div>
  <b-form-input
    placeholder="Search..."
    v-model="search"
  ></b-form-input>

  <br>

  <table aria-busy="false" aria-colcount="5" aria-rowcount="3" class="table table-hover">

    <thead>
      <tr>
        <th v-for="(heading, i) in headings" aria-colindex="1" class="" :key="i" @click="setSortBy(heading, heading != sortBy || sortDirection == 'desc' ? 'asc' : 'desc')">{{heading}}</th>
      </tr>
    </thead>

    <tbody>
      <tr v-for="(item, i) in orderedRows" :key="i">
        <td v-for="heading in headings" :key="heading">
          <slot :name="heading" :item="item"/>
        </td>
      </tr>
    </tbody>
  </table>

  <willow-pagination
    :totalItems="rows.length"
    :itemsPerPage="itemsPerPage"
    :itemsPerPageOptions="itemsPerPageOptions"
    :page.sync="page"
    @update:itemsPerPage="setItemsPerPage"
  ></willow-pagination>

</div>
</template>

<script>
import * as Fuse from 'fuse.js'
export default {
  name: 'willow-table',
  props: {
    headings: {
      type: Array
    },
    rows: {
      type: Array,
      default: () => []
    },
    itemsPerPageOptions: {
      type: Array,
      default: () => [10, 25, 50, 100, 500]
    },
    sortable: Boolean
  },

  data () {
    return {
      sortBy: 'Id',
      sortDirection: 'asc',
      page: 1,
      itemsPerPage: null,
      search: ''
    }
  },

  computed: {
    orderedRows: function () {
      var keys2 = Object.keys(this.rows[0])
      // console.log(this.itemsPerPage)
      var options = {
        shouldSort: true,
        threshold: 0.0,
        location: 0,
        distance: 100,
        maxPatternLength: 32,
        minMatchCharLength: 1,
        keys: keys2
      }
      var fuse = new Fuse(this.rows, options)
      var SearchedItems
      if (this.search !== '') {
        SearchedItems = fuse.search(this.search)
      } else {
        SearchedItems = this.rows
      }

      var OrderItems = this._.orderBy(SearchedItems, [this.sortBy, 'Id'], this.sortDirection)
      var offset = (this.page - 1) * this.itemsPerPage

      return this._.drop(OrderItems, offset).slice(0, this.itemsPerPage)
    }
  },

  methods: {
    setSortBy (heading, direction) {
      this.sortDirection = direction
      this.sortBy = heading
    },
    setItemsPerPage (itemsPerPage) {
      // console.log(itemsPerPage)
      this.itemsPerPage = itemsPerPage
    }
  }
}
</script>

<style>
.pagination {
  display: flex;
  justify-content: center;
}

.pagination li {
  display: block;
 }
</style>
