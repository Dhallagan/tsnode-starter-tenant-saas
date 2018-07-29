<template>
<page fullWidth>

<willow-modal>
testyyyy
</willow-modal>
  <page-header
    title="Utilization"
    :breadcrumbs="pageheader.breadcrumbs"
  >
  </page-header>
<b-card>
<div class="col-sm-24 p-0">
    <h3>People</h3>
    <willow-filters-fields
      :filters="filters"
    ></willow-filters-fields>
<!--Table-->
<table class="table table-bordered">

    <!--Table head-->
    <thead>
        <tr>
            <th>#</th>
            <th>First Name</th>
            <th>Last Name</th>
            <th>Username</th>
        </tr>
    </thead>
    <!--Table head-->

    <!--Table body-->
    <tbody>
        <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@TwBootstrap</td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
        </tr>
        <tr>
            <th scope="row">4</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
        </tr>
                <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@TwBootstrap</td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
        </tr>
        <tr>
            <th scope="row">4</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
        </tr>
                <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@TwBootstrap</td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
        </tr>
        <tr>
            <th scope="row">4</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
        </tr>
                <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@TwBootstrap</td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
        </tr>
        <tr>
            <th scope="row">4</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
        </tr>
                <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@TwBootstrap</td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
        </tr>
        <tr>
            <th scope="row">4</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
        </tr>
                <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@TwBootstrap</td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
        </tr>
        <tr>
            <th scope="row">4</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
        </tr>
                <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@TwBootstrap</td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
        </tr>
        <tr>
            <th scope="row">4</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
        </tr>
                <tr>
            <th scope="row">1</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@mdo</td>
        </tr>
        <tr>
            <th scope="row">2</th>
            <td>Mark</td>
            <td>Otto</td>
            <td>@TwBootstrap</td>
        </tr>
        <tr>
            <th scope="row">3</th>
            <td>Jacob</td>
            <td>Thornton</td>
            <td>@fat</td>
        </tr>
        <tr>
            <th scope="row">4</th>
            <td colspan="2">Larry the Bird</td>
            <td>@twitter</td>
        </tr>
    </tbody>
    <!--Table body-->

</table>
<!--Table-->
</div>
</b-card>
</page>
</template>

<script>
export default {
  data () {
    return {
      pageheader: {
        breadcrumbs: [
          {
            text: 'Reports',
            href: '/Reports'
          }
        ]
      },
      filters: [
        {
          key: 'orderCountFilter',
          label: 'Number of orders',
          operatorText: 'is greater than',
          type: 'FilterType.TextField'
        },
        {
          key: 'accountStatusFilter',
          label: 'Account status',
          operatorText: 'is',
          type: 'FilterType.Select',
          options: ['Enabled', 'Invited', 'Not invited', 'Declined']
        },
        {
          key: 'applicationStatus',
          label: 'Stage',
          operatorText: 'is',
          type: 'FilterType.Checkbox',
          options: [
            { text: 'New', value: 'new' },
            { text: 'In Review', value: 'inreview' },
            { text: 'Accepted', value: 'accepted' },
            { text: 'Rejected', value: 'rejected' },
            { text: 'Archived', value: 'archived' }
          ]
        }
      ]
    }
  }
}
</script>

<style>
.w-table-packed_head {
  font-size: 11px;
}
.w-table-packed_body {
  font-size: 0.6rem;
}
.left-panel {
  float: left;
  width: 65%;
}
.right-panel {
  width: 35%;
  padding-left: 20px;
  float: right;
}
.ttm {
  border-left: 1px solid #000;
  border-right: 1px solid #000;
}
.ytd {
  border-left: 1px solid #000;
}

.highlight {
  background-color: #ffa;
  border-bottom-color: #ffa;
}

.increase {
  background-color: #30be56;
  font-weight: bolder;
}

.decrease {
  background-color: #f63538;
  font-weight: bolder;
}
.control-section {
  border-left: solid 1px lightgray;
  margin-left: 20px;
  padding: 6px 0px 6px 20px;
}

.checkbox {
  position: relative;
  display: inline-block;
  margin-top: 10px;
  margin-bottom: 10px;
}

.toolbar-pf-results {
  border-top: none;
  margin-top: none;
}

.detailtable-header {
  font-size: 16px;
}

.toolbar-search {
  width: 200px;
}

.table > tbody > tr:hover > td {
  background-color: #ffa;
  border-bottom-color: #ffa;
}
</style>
