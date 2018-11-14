<template>
<page>

  <page-header
    title="Willow Components"
  >

  </page-header>

  <willow-layout>
    <willow-layout-section>
        <willow-messages
          type="danger"
          icon="exclamation"
          dismissable
        >
          Invalid password
        </willow-messages>
      <b-card title="Filters">
        <willow-filters
          :filters="filters"
        ></willow-filters>
      </b-card>
    </willow-layout-section>

    <willow-layout-section>
       <h4>Description List</h4>
        <!-- DESCRIPTION LIST GROUP -->
        <willow-description-list
          :items="dlitems"
        ></willow-description-list>
    </willow-layout-section>

    <willow-layout-section>
      <h4>Resource List</h4>
      <!-- RESOURCE LIST GROUP -->
      <willow-resource-list
        :items="items"
      ></willow-resource-list>
    </willow-layout-section>

    <willow-layout-section>
      <h4>Resource Grid</h4>
      <!-- RESOURCE LIST GROUP -->
      <willow-resource-grid :items="items">
      </willow-resource-grid>
    </willow-layout-section>

      <willow-annotated-section
      title="Annotated Section"
      >
        <!-- CARD -->
        <b-card class="mb-2">
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card"s content.
          </p>
        </b-card>
      </willow-annotated-section>

      <!-- DEFAULT -->
      <willow-layout-section>
        <b-card card-title="Default" class="mb-2">
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card"s content.
          </p>
        </b-card>
      </willow-layout-section>

      <!-- Primary -->
      <willow-layout-section primary >
        <b-card  card-title="Primary" class="mb-2">
          <p class="card-text">
            PRIMARY Some quick example text to build on the card title and make up the bulk of the card"s content.
          </p>
        </b-card>
      </willow-layout-section>

          <!-- Secondary -->
      <willow-layout-section secondary>

        <b-card  card-title="Secondary" class="mb-2">
          <p class="card-text">
            Secondary Some quick example text to build on the card title and make up the bulk of the card"s content.
          </p>
        </b-card>

        <b-card  card-title="Secondary- Subdued" class="mb-2" style="background-color: #f8f9fa ;">
          <b-form-group id="fieldsetHorizontal"
                    description="Turn on listing."
                    label="Visibility"
                    label-for="inputHorizontal">
          <b-select :options="[{ value: null, text: 'Active' },{ value: 'a', text: 'Inactive' }]"></b-select>
        </b-form-group>
          <p class="card-text">
            Some quick example text to build on the card title and make up the bulk of the card"s content.
          </p>
        </b-card>

      </willow-layout-section>

  </willow-layout>

</page>
</template>

<script>
export default {
  data () {
    return {
      items: [
        {
          media: 'GJ',
          title: 'Gian Jenquea',
          location: 'Souel, Korea'
        },
        {
          media: 'DH',
          title: 'Dylan Hallagan',
          location: 'New York, New York',
          shortcutActions: { content: 'View Latest Order', href: '/home' }
        },
        {
          media: 'FD',
          title: 'Frank Dispato',
          location: 'Boston, Massachuesetts',
          shortcutActions: { content: 'View Latest Order', href: '/home' }
        },
        {
          media: 'GJ',
          title: 'Gian Jenquea',
          location: 'Souel, Korea',
          shortcutActions: { content: 'View Latest Order', href: '/home' }
        },
        {
          media: 'FD',
          title: 'Frank Dispato',
          location: 'Boston, Massachuesetts',
          shortcutActions: { content: 'View Latest Order', href: '/home' }
        },
        {
          media: 'GJ',
          title: 'Gian Jenquea',
          location: 'Souel, Korea',
          shortcutActions: { content: 'View Latest Order', href: '/home' }
        },
        {
          media: 'FD',
          title: 'Frank Dispato',
          location: 'Boston, Massachuesetts',
          shortcutActions: { content: 'View Latest Order', href: '/home' }
        },
        {
          media: 'GJ',
          title: 'Gian Jenquea',
          location: 'Souel, Korea',
          shortcutActions: { content: 'View Latest Order', href: '/home' }
        },
        {
          media: 'FD',
          title: 'Frank Dispato',
          location: 'Boston, Massachuesetts',
          shortcutActions: { content: 'View Latest Order', href: '/home' }
        },
        {
          media: 'GJ',
          title: 'Gian Jenquea',
          location: 'Souel, Korea',
          shortcutActions: { content: 'View Latest Order', href: '/home' }
        }
      ],
      dlitems: [
        {
          term: 'Matter',
          description: 'the subject or substance of a discourse or writing'
        },
        {
          term: 'Client',
          description:
            'a person who engages the professional advice or services of another'
        },
        {
          term: 'Compliance',
          description:
            'eos et accusamus et iusto odio dignissimos ducimus qui blanditiis praesentium voluptatum deleniti atque corrupti quos dolores et quas molestias excepturi sint occaecati cupiditate non provident, similique sunt in culpa qui officia deserunt mollitia animi, id est laborum et dolorum fuga. Et harum quidem rerum facilis est et expedita distinctio. Nam libero tempore, cum soluta nobis est eligendi optio cumque nihil impedit quo minus id quod maxime placeat facere possimus, omnis voluptas assumenda est, omnis dolor repellendus. Temporibus autem quibusdam et aut officiis debitis aut rerum necessitatibus saepe eveniet ut et voluptates repudiandae sint et molestiae non recusandae. Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus maiores alias consequatur aut perferendis doloribus asperiores repellat.'
        }
      ],
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
        }
      ],
      filters1: [
        {
          key: 'orderCountFilter',
          label: 'Number of orders',
          value: '2',
          operatorText: 'is greater than'
          // type: FilterType.TextField
        },
        {
          key: 'accountStatusFilter',
          label: 'Account status',
          operatorText: 'is',
          // type: FilterType.Select,
          value: 'Enabled',
          options: ['Enabled', 'Invited', 'Not invited', 'Declined']
        }
      ]
    }
  }
}
</script>

<style>

</style>
